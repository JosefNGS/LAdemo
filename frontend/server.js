#!/usr/bin/env node
/**
 * Simple dev server that transpiles TypeScript files on the fly using esbuild
 * Uses npx to run esbuild without requiring installation
 * This version runs from the frontend/ directory
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

// Cache for transpiled files
const cache = new Map();

// Get the frontend directory (where this script is located)
const frontendRoot = path.resolve(__dirname);
const projectRoot = path.resolve(__dirname, '..');

function transpileTypeScript(filePath, content) {
  return new Promise((resolve, reject) => {
    // Check cache first
    const cacheKey = filePath + content.length;
    if (cache.has(cacheKey)) {
      return resolve(cache.get(cacheKey));
    }

    const extname = path.extname(filePath);
    // filePath is already absolute from the server handler
    const absoluteFilePath = path.isAbsolute(filePath) ? filePath : path.resolve(frontendRoot, filePath);
    
    // Create output file in temp directory
    const outputFile = path.join(os.tmpdir(), `esbuild-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.js`);
    
    try {
      // Bundle the file using the actual file path so esbuild can resolve imports
      // esbuild will auto-detect loader from file extension (.tsx or .ts)
      // Mark CDN dependencies as external
      const esbuildCmd = `npx --yes esbuild "${absoluteFilePath}" --bundle --format=esm --jsx=automatic --target=es2020 --outfile="${outputFile}" --platform=browser --external:react --external:react-dom --external:react/* --external:react-dom/* --external:recharts --external:@google/genai`;
      
      try {
        execSync(
          esbuildCmd,
          { 
            encoding: 'utf8', 
            stdio: ['ignore', 'pipe', 'pipe'], 
            maxBuffer: 10 * 1024 * 1024,
            cwd: frontendRoot,
            shell: true
          }
        );
      } catch (execError) {
        const stderr = execError.stderr ? execError.stderr.toString() : '';
        const stdout = execError.stdout ? execError.stdout.toString() : '';
        const errorMsg = stderr || stdout || execError.message;
        console.error('esbuild error for', filePath);
        console.error('Command:', esbuildCmd);
        console.error('Error:', errorMsg);
        throw new Error(`esbuild failed: ${errorMsg.substring(0, 500)}`);
      }
      
      if (!fs.existsSync(outputFile)) {
        throw new Error('esbuild did not generate output file');
      }
      
      const result = fs.readFileSync(outputFile, 'utf8');
      
      // Clean up temp file
      try {
        if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
      } catch (e) {
        // Ignore cleanup errors
      }
      
      cache.set(cacheKey, result);
      resolve(result);
    } catch (error) {
      // Clean up temp file on error
      try {
        if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
      } catch (e) {
        // Ignore cleanup errors
      }
      reject(error);
    }
  });
}

const server = http.createServer(async (req, res) => {
  let filePath = req.url.split('?')[0]; // Remove query params
  if (filePath === '/') filePath = '/index.html';
  
  // Remove leading slash for path resolution
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  try {
    // Handle TypeScript files - source is now always in frontend/src
    if (extname === '.ts' || extname === '.tsx') {
      const absolutePath = path.resolve(frontendRoot, cleanPath);
      
      if (!fs.existsSync(absolutePath)) {
        console.error('File not found:', absolutePath);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
        return;
      }

      try {
        const content = fs.readFileSync(absolutePath, 'utf8');
        // Use the actual file path for transpilation (esbuild needs absolute path)
        const transpiled = await transpileTypeScript(absolutePath, content);
        
        res.writeHead(200, {
          'Content-Type': 'application/javascript; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(transpiled);
        return;
      } catch (transpileError) {
        console.error('Transpilation error for', filePath, ':', transpileError.message);
        throw transpileError;
      }
    }

    // Handle regular files (HTML, CSS, JS, etc.) - all files are now in frontend directory
    const absolutePath = path.resolve(frontendRoot, cleanPath);
    
    if (!fs.existsSync(absolutePath)) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }

    const content = fs.readFileSync(absolutePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    });
    res.end(content);
  } catch (error) {
    console.error('Error serving', req.url, ':', error.message);
    if (error.stack) {
      console.error('Stack:', error.stack);
    }
    res.writeHead(500, { 
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(`<h1>500 - Server Error</h1><p>${error.message}</p><pre>${error.stack || ''}</pre>`);
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  
  console.log(`========================================`);
  console.log(`  BitNexus Landing Page - Dev Server`);
  console.log(`========================================`);
  console.log(`[*] Server running at: http://localhost:${PORT}`);
  console.log(`[*] TypeScript files will be transpiled on the fly`);
  console.log(`[*] Press Ctrl+C to stop the server`);
  console.log(``);
  
  // Open browser
  const { exec } = require('child_process');
  const startCommand = process.platform === 'win32' ? 'start' : 
                       process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${startCommand} http://localhost:${PORT}`, (error) => {
    if (error) console.log(`[*] Please open http://localhost:${PORT} in your browser`);
  });
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`[ERROR] Port ${PORT} is already in use.`);
    console.error(`Please close the application using port ${PORT} or use a different port.`);
  } else {
    console.error('[ERROR] Server error:', err.message);
  }
  process.exit(1);
});

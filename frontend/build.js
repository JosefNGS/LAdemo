#!/usr/bin/env node
/**
 * Build script for Netlify deployment
 * Transpiles TypeScript files to JavaScript for production
 * This script runs from the frontend/ directory
 * Source files are located in frontend/src/
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const util = require('util');

const distDir = path.join(__dirname, 'dist');
// Source directory is now always in frontend/src
const srcDir = path.join(__dirname, 'src');

function writeBuildFailureLog(message, error) {
  try {
    const logPath = path.join(__dirname, '..', 'netlify-build-failure.log');
    const payload = [
      `Time: ${new Date().toISOString()}`,
      `Message: ${message}`,
      '',
      `__dirname: ${__dirname}`,
      `cwd: ${process.cwd()}`,
      `distDir: ${distDir}`,
      `srcDir: ${srcDir}`,
      `srcDir exists: ${fs.existsSync(srcDir)}`,
      '',
      'Error:',
      error?.stack || String(error || ''),
      '',
    ].join('\n');
    fs.writeFileSync(logPath, payload, 'utf8');
  } catch (_) {
    // ignore
  }
}

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML and static files
function copyStaticFiles() {
  console.log('📦 Copying static files...');
  
  // Copy HTML files from frontend directory
  const htmlFiles = ['index.html', 'docs.html', 'manifesto.html'];
  htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(distDir, file));
      console.log(`✅ Copied: ${file}`);
    }
  });
  
  // Copy _redirects file for Netlify SPA routing from frontend/public
  const redirectsFile = 'public/_redirects';
  if (redirectsFile) {
    fs.copyFileSync(redirectsFile, path.join(distDir, '_redirects'));
    console.log(`✅ Copied: ${redirectsFile}`);
  } else {
    // Create _redirects if it doesn't exist
    fs.writeFileSync(path.join(distDir, '_redirects'), '/*    /index.html   200\n');
    console.log('✅ Created: _redirects');
  }
  
  // Copy any other static files (images, etc.)
  const staticFiles = ['favicon.ico', 'robots.txt', '.well-known'];
  staticFiles.forEach(file => {
    const filePath = fs.existsSync(file) ? file : 
                     fs.existsSync(`../${file}`) ? `../${file}` : null;
    if (filePath) {
      const dest = path.join(distDir, file);
      if (fs.statSync(filePath).isDirectory()) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        copyRecursiveSync(filePath, dest);
      } else {
        fs.copyFileSync(filePath, dest);
      }
    }
  });
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Build TypeScript files
async function buildTypeScript() {
  console.log('🔨 Building TypeScript files...');
  console.log(`📁 Using source directory: ${srcDir}`);
  
  // Verify source directory exists
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Source directory not found: ${srcDir}`);
    throw new Error(`Source directory not found: ${srcDir}`);
  }

  // Production build only needs the app entry; this avoids builds failing due to
  // unrelated/unused files (especially on Netlify/Linux with case-sensitive paths).
  const entry = path.join(srcDir, 'main.tsx');
  if (!fs.existsSync(entry)) {
    throw new Error(`Entry file not found: ${entry}`);
  }

  const outDir = path.join(distDir, 'src');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    await esbuild.build({
      entryPoints: [entry],
      outfile: path.join(outDir, 'main.js'),
      bundle: true,
      format: 'esm',
      jsx: 'automatic',
      target: 'es2020',
      platform: 'browser',
      // Provided by importmap in index.html at runtime
      external: ['react', 'react-dom', 'react/*', 'react-dom/*', 'recharts', '@google/genai'],
      minify: true,
      sourcemap: false,
    });
    console.log('✅ Built: src/main.tsx → dist/src/main.js');
  } catch (error) {
    console.error('❌ Error building main.tsx:', error?.message || error);
    console.error(util.inspect(error, { depth: 6, colors: false }));
    throw error;
  }
}

// Main build function
async function build() {
  console.log('🚀 Starting build process...\n');
  console.log(`📁 Source directory: ${srcDir}`);
  console.log(`📁 Output directory: ${distDir}\n`);
  
  try {
    copyStaticFiles();
    await buildTypeScript();
    
    console.log('\n✨ Build complete!');
    console.log(`📁 Output directory: ${distDir}`);
    console.log(`📁 Source used: ${srcDir}`);
  } catch (error) {
    console.error('\n❌ Build failed:', error?.message || error);
    console.error(util.inspect(error, { depth: 6, colors: false }));
    writeBuildFailureLog('Build failed in frontend/build.js', error);
    console.error('\n💡 Troubleshooting:');
    console.error('   1. Ensure frontend/src/ directory exists');
    console.error('   2. Check that TypeScript files are present in frontend/src/');
    console.error('   3. Verify file paths in build.js');
    console.error('   4. Check that all source files are committed to git');
    // Netlify exit code 2 indicates build script failure; match that for clearer diagnostics.
    process.exit(2);
  }
}

build();

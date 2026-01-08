#!/usr/bin/env node
/**
 * Build script for Netlify deployment
 * Transpiles TypeScript files to JavaScript for production
 * This script runs from the frontend/ directory
 * Handles both frontend/src and root src/ directory locations
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const util = require('util');

const distDir = path.join(__dirname, 'dist');
// Check both frontend/src and root src directory
const frontendSrcDir = path.join(__dirname, 'src');
const rootSrcDir = path.join(__dirname, '..', 'src');
const srcDir = fs.existsSync(frontendSrcDir) ? frontendSrcDir : rootSrcDir;

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
      `frontendSrcDir exists: ${fs.existsSync(frontendSrcDir)}`,
      `rootSrcDir exists: ${fs.existsSync(rootSrcDir)}`,
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
  
  // Copy index.html - check both frontend and root
  const indexHtml = fs.existsSync('index.html') ? 'index.html' : 
                    fs.existsSync('../index.html') ? '../index.html' : null;
  if (indexHtml) {
    fs.copyFileSync(indexHtml, path.join(distDir, 'index.html'));
    console.log(`✅ Copied: ${indexHtml}`);
  } else {
    console.warn('⚠️  index.html not found in frontend/ or root');
  }
  
  // Copy docs.html - check both frontend and root
  const docsHtml = fs.existsSync('docs.html') ? 'docs.html' : 
                   fs.existsSync('../docs.html') ? '../docs.html' : null;
  if (docsHtml) {
    fs.copyFileSync(docsHtml, path.join(distDir, 'docs.html'));
    console.log(`✅ Copied: ${docsHtml}`);
  }
  
  // Copy manifesto.html - check both frontend and root
  const manifestoHtml = fs.existsSync('manifesto.html') ? 'manifesto.html' : 
                         fs.existsSync('../manifesto.html') ? '../manifesto.html' : null;
  if (manifestoHtml) {
    fs.copyFileSync(manifestoHtml, path.join(distDir, 'manifesto.html'));
    console.log(`✅ Copied: ${manifestoHtml}`);
  }
  
  // Copy _redirects file for Netlify SPA routing - check both frontend/public and root public
  const redirectsFile = fs.existsSync('public/_redirects') ? 'public/_redirects' : 
                        fs.existsSync('../public/_redirects') ? '../public/_redirects' : null;
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
    console.error(`❌ Source directory not found`);
    console.error(`   Checked frontend/src: ${frontendSrcDir} - ${fs.existsSync(frontendSrcDir) ? 'EXISTS' : 'NOT FOUND'}`);
    console.error(`   Checked root/src: ${rootSrcDir} - ${fs.existsSync(rootSrcDir) ? 'EXISTS' : 'NOT FOUND'}`);
    throw new Error(`Source directory not found. Expected either ${frontendSrcDir} or ${rootSrcDir}`);
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
    console.error('   1. Ensure src/ directory exists (either in frontend/ or root)');
    console.error('   2. Check that TypeScript files are present');
    console.error('   3. Verify file paths in build.js');
    console.error('   4. Check that all source files are committed to git');
    // Netlify exit code 2 indicates build script failure; match that for clearer diagnostics.
    process.exit(2);
  }
}

build();

#!/usr/bin/env node
/**
 * Build script for Netlify deployment
 * Transpiles TypeScript files to JavaScript for production
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const srcDir = path.join(__dirname, 'src');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML and static files
function copyStaticFiles() {
  console.log('📦 Copying static files...');
  
  // Copy index.html
  if (fs.existsSync('index.html')) {
    fs.copyFileSync('index.html', path.join(distDir, 'index.html'));
  }
  
  // Copy _redirects file for Netlify SPA routing
  if (fs.existsSync('public/_redirects')) {
    fs.copyFileSync('public/_redirects', path.join(distDir, '_redirects'));
  } else {
    // Create _redirects if it doesn't exist
    fs.writeFileSync(path.join(distDir, '_redirects'), '/*    /index.html   200\n');
  }
  
  // Copy any other static files (images, etc.)
  const staticFiles = ['favicon.ico', 'robots.txt', '.well-known'];
  staticFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const dest = path.join(distDir, file);
      if (fs.statSync(file).isDirectory()) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        copyRecursiveSync(file, dest);
      } else {
        fs.copyFileSync(file, dest);
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
  
  // Find all .tsx and .ts files
  const files = [];
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findFiles(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  }
  
  findFiles(srcDir);
  
  // Build each file
  const buildPromises = files.map(async (file) => {
    const relativePath = path.relative(srcDir, file);
    const outputPath = path.join(distDir, 'src', relativePath.replace(/\.tsx?$/, '.js'));
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    try {
      await esbuild.build({
        entryPoints: [file],
        outfile: outputPath,
        bundle: true,
        format: 'esm',
        jsx: 'automatic',
        target: 'es2020',
        platform: 'browser',
        external: ['react', 'react-dom', 'react/*', 'react-dom/*', 'recharts', '@google/genai'],
        minify: true,
        sourcemap: false,
      });
      console.log(`✅ Built: ${relativePath}`);
    } catch (error) {
      console.error(`❌ Error building ${relativePath}:`, error.message);
      throw error;
    }
  });
  
  await Promise.all(buildPromises);
}

// Main build function
async function build() {
  console.log('🚀 Starting build process...\n');
  
  try {
    copyStaticFiles();
    await buildTypeScript();
    
    console.log('\n✨ Build complete!');
    console.log(`📁 Output directory: ${distDir}`);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

build();


# Troubleshooting Guide

## start.bat Crashes

### Common Issues and Solutions

#### 1. Port Already in Use
**Error**: `EADDRINUSE` or "Port 8000 is already in use"

**Solution**:
- Close any other applications using port 8000
- Or change the port in `server.js` and `start.bat`
- Check what's using the port: `netstat -ano | findstr :8000`

#### 2. Node.js Server Fails
**Error**: Server.js crashes immediately

**Possible Causes**:
- esbuild not available via npx
- Syntax error in server.js
- Missing dependencies

**Solutions**:
1. Check Node.js version: `node --version` (should be 14+)
2. Test server.js manually: `node server.js`
3. Check for error messages in the console
4. Try the simple server: `node server-simple.js`

#### 3. TypeScript Transpilation Fails
**Error**: "Transpilation failed" or "esbuild failed"

**Solutions**:
- The server will automatically fall back to `server-simple.js`
- Or use Python/PHP server (TypeScript won't work but landing page will)
- Install esbuild globally: `npm install -g esbuild`

#### 4. Browser Doesn't Open
**Solution**: Manually open `http://localhost:8000`

#### 5. File Not Found Errors
**Error**: "Cannot find module" or "File not found"

**Solution**: 
- Make sure you're running `start.bat` from the project root directory
- Check that all files exist in `frontend/src/` directory

#### 6. ARM64 / Apple Silicon Compatibility
**Question**: Does the dev server work on ARM64 (Apple Silicon M1/M2/M3)?

**Answer**: ✅ **Yes, fully supported!**

The dev server works perfectly on ARM64 architectures:
- **Node.js 20+** has native ARM64 support
- **esbuild** automatically downloads the correct ARM64 binary via `npx`
- All code uses cross-platform Node.js APIs (no architecture-specific code)
- The `start.sh` script handles macOS (including ARM64) correctly

**If you encounter issues on ARM64:**
1. Ensure Node.js 20+ is installed: `node --version`
2. Clear npm cache: `npm cache clean --force`
3. Let `npx` download the correct esbuild binary: `npx --yes esbuild --version`
4. The server will automatically use the ARM64 version of esbuild

## Manual Testing

### Test Node.js Server
```bash
node server.js
```

### Test Simple Server
```bash
node server-simple.js
```

### Test Python Server
```bash
python -m http.server 8000
```

### Test with http-server
```bash
npx http-server -p 8000
```

## Getting More Information

If `start.bat` crashes, check:
1. Open Command Prompt manually
2. Navigate to project directory
3. Run `start.bat` to see full error messages
4. Check the console output for specific errors

## Alternative: Use VS Code Live Server

If `start.bat` continues to have issues:
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

Note: Live Server may not transpile TypeScript, so React app might not work.


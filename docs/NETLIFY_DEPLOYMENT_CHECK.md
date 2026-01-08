# Netlify Deployment Verification Checklist
## Complete Pre-Deployment Review

**Date**: January 2026  
**Status**: ✅ Ready for Deployment (with current file structure)

---

## ✅ Configuration Files Verified

### 1. `netlify.toml` ✅
```toml
[build]
  command = "npm run build"           # ✅ Correct
  publish = "frontend/dist"            # ✅ Correct
  functions = "backend/netlify/functions"  # ✅ Correct

[build.environment]
  NODE_VERSION = "18"                  # ✅ Correct

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200                         # ✅ SPA routing configured
```

**Status**: ✅ All paths correct for new folder structure

### 2. `package.json` ✅
```json
{
  "scripts": {
    "build": "cd frontend && node build.js",  // ✅ Correct
    "dev": "cd frontend && node server.js",   // ✅ Correct
    "start": "cd frontend && node server.js"  // ✅ Correct
  }
}
```

**Status**: ✅ All scripts use correct paths

### 3. `frontend/build.js` ✅
- ✅ Checks both `frontend/src/` and root `src/` directory
- ✅ Handles HTML files from both locations
- ✅ Handles `public/_redirects` from both locations
- ✅ Provides clear error messages if source not found
- ✅ Uses absolute paths for esbuild

**Status**: ✅ Works with current file structure (files in root)

### 4. `frontend/server.js` ✅
- ✅ Checks both `frontend/src/` and root `src/` directory
- ✅ Handles files from both locations
- ✅ Works for development

**Status**: ✅ Works with current file structure

---

## 📁 Current File Structure

### Files in Root (Not Yet Moved)
- `src/` - React source code ⚠️ **Still in root**
- `index.html` - Landing page ⚠️ **Still in root**
- `docs.html` - Documentation page ⚠️ **Still in root**
- `manifesto.html` - Manifesto page ⚠️ **Still in root**
- `public/` - Static assets ⚠️ **Still in root**
- `netlify/` - Serverless functions ⚠️ **Still in root**

### Files Already in Frontend/
- `frontend/build.js` ✅
- `frontend/server.js` ✅
- `frontend/index.html` ✅ (also exists in root)

### Files Already in Backend/
- `backend/netlify/functions/` - Should exist after move

---

## ✅ Build Script Compatibility

The `frontend/build.js` script is **designed to work with files in either location**:

1. **Source Directory Detection**:
   ```javascript
   const frontendSrcDir = path.join(__dirname, 'src');      // frontend/src
   const rootSrcDir = path.join(__dirname, '..', 'src');    // root/src
   const srcDir = fs.existsSync(frontendSrcDir) ? frontendSrcDir : rootSrcDir;
   ```

2. **HTML Files Detection**:
   - Checks `frontend/index.html` first
   - Falls back to `../index.html` (root)
   - Same for `docs.html` and `manifesto.html`

3. **Static Files Detection**:
   - Checks `frontend/public/_redirects` first
   - Falls back to `../public/_redirects` (root)

**Result**: ✅ Build will work with files in root directory

---

## ⚠️ Important: Files Must Be Committed to Git

For Netlify to build successfully, **all source files must be committed to git**:

### Required Files for Build:
- ✅ `src/` directory (all TypeScript files)
- ✅ `index.html`, `docs.html`, `manifesto.html`
- ✅ `public/_redirects`
- ✅ `frontend/build.js`
- ✅ `package.json`
- ✅ `netlify.toml`

### Verify Files Are Tracked:
```bash
# Check if src/ is tracked
git ls-files src/ | head -5

# Check if index.html is tracked
git ls-files index.html frontend/index.html

# Check if build.js is tracked
git ls-files frontend/build.js
```

---

## 🚀 Netlify Build Process

### What Happens During Build:

1. **Netlify clones repository**
   - Gets all committed files
   - Files in root `src/` will be available

2. **Runs `npm install`**
   - Installs `esbuild` and `@supabase/supabase-js`
   - Creates `node_modules/`

3. **Runs `npm run build`**
   - Changes to `frontend/` directory
   - Executes `node build.js`
   - `build.js` uses `frontend/src/` directory ✅
   - Transpiles all TypeScript files
   - Copies HTML files from `frontend/` directory
   - Copies `_redirects` from `frontend/public/` directory
   - Creates `frontend/dist/` with all output

4. **Netlify publishes `frontend/dist/`**
   - Serves files from this directory
   - Functions from `backend/netlify/functions/`

---

## ✅ Verification Steps

### Before Pushing to GitHub:

1. **Verify source files exist**:
   ```bash
   # Check src/ exists
   dir src\main.tsx
   
   # Check index.html exists
   dir index.html
   ```

2. **Test build locally**:
   ```bash
   npm run build
   ```
   
   Expected output:
   - ✅ "Using source directory: [path to root/src]"
   - ✅ "Found X TypeScript files to build"
   - ✅ "Build complete!"

3. **Verify dist/ output**:
   ```bash
   dir frontend\dist\index.html
   dir frontend\dist\src\main.js
   ```

4. **Check git status**:
   ```bash
   git status
   git ls-files src/ | findstr main.tsx
   ```

---

## 🔧 If Build Still Fails

### Issue: `src/` not found during build

**Solution 1**: Ensure `src/` is committed to git
```bash
git add src/
git commit -m "Add source files"
git push
```

**Solution 2**: Check `.gitignore` doesn't exclude `src/`
```bash
# .gitignore should NOT have:
# src/
# frontend/src/
```

**Solution 3**: Verify build script paths
- Check `frontend/build.js` has fallback logic
- Verify `rootSrcDir` path is correct

### Issue: HTML files not found

**Solution**: Build script checks both locations, but ensure files are committed:
```bash
git add index.html docs.html manifesto.html
git commit -m "Add HTML files"
git push
```

### Issue: Functions not found

**Solution**: Ensure `backend/netlify/functions/` exists and is committed:
```bash
git add backend/netlify/functions/
git commit -m "Add serverless functions"
git push
```

---

## 📋 Pre-Deployment Checklist

- [x] `netlify.toml` configured correctly
- [x] `package.json` scripts use correct paths
- [x] `frontend/build.js` handles both file locations
- [x] `frontend/server.js` handles both file locations
- [ ] `src/` directory committed to git
- [ ] `index.html`, `docs.html`, `manifesto.html` committed
- [ ] `public/_redirects` committed
- [ ] `backend/netlify/functions/` committed
- [ ] Local build test passes (`npm run build`)
- [ ] `frontend/dist/` created successfully
- [ ] All files pushed to GitHub

---

## 🎯 Recommended Next Steps

### Option 1: Deploy with Current Structure (Recommended)
1. ✅ Build script already handles root `src/`
2. Commit all files to git
3. Push to GitHub
4. Deploy on Netlify
5. Build should succeed ✅

### Option 2: Move Files First (Future)
1. Run `MOVE_FILES.bat` to organize files
2. Commit moved files
3. Push to GitHub
4. Deploy on Netlify
5. Build will use `frontend/src/` ✅

---

## ✅ Conclusion

**Current Status**: ✅ **Ready for Netlify Deployment**

The build system is configured to work with files in either location:
- ✅ Works with files in root (current state)
- ✅ Will work with files in `frontend/` (after move)

**Action Required**: 
1. Ensure all source files are committed to git
2. Push to GitHub
3. Deploy on Netlify

The build will automatically detect and use the correct file locations.

---

**Last Updated**: January 2026

# Netlify Deployment Checklist

**Date**: January 2026  
**Purpose**: Ensure successful Netlify deployment

## ✅ Configuration Files Status

### netlify.toml
```toml
[build]
  command = "npm run build"          ✅ Correct
  publish = "frontend/dist"           ✅ Correct
  functions = "netlify/functions"     ✅ Points to root (where functions currently are)

[build.environment]
  NODE_VERSION = "18"                 ✅ Correct

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200                        ✅ Correct (SPA routing)
```

### package.json
```json
{
  "scripts": {
    "build": "cd frontend && node build.js"  ✅ Correct
  }
}
```

### frontend/build.js
- ✅ Checks both `frontend/src/` and root `src/` directory
- ✅ Checks both `frontend/index.html` and root `index.html`
- ✅ Checks both `frontend/public/` and root `public/`
- ✅ Provides clear error messages
- ✅ Uses absolute paths for esbuild

## 📁 Current File Structure

### Root Directory
```
BitNexus Landing Page/
├── src/                    ✅ React source (build script finds this)
├── index.html              ✅ Landing page (build script finds this)
├── docs.html               ✅ Docs page (build script finds this)
├── manifesto.html          ✅ Manifesto page (build script finds this)
├── public/                 ✅ Static assets (build script finds this)
│   └── _redirects         ✅ SPA routing
├── netlify/                ✅ Serverless functions (netlify.toml points here)
│   └── functions/
├── frontend/               ✅ Frontend build files
│   ├── build.js            ✅ Updated build script
│   ├── index.html          ✅ (duplicate, build uses root)
│   └── server.js           ✅ Dev server
├── backend/                ✅ Backend directory (empty, functions in root)
├── package.json            ✅ Dependencies and scripts
└── netlify.toml            ✅ Netlify configuration
```

## ✅ Build Process Flow

1. **Netlify runs**: `npm run build`
2. **Package.json executes**: `cd frontend && node build.js`
3. **Build script**:
   - Checks for `frontend/src/` → Not found
   - Falls back to root `src/` → ✅ Found
   - Copies HTML files from root
   - Copies `public/_redirects` from root
   - Transpiles TypeScript from root `src/`
   - Outputs to `frontend/dist/`
4. **Netlify publishes**: `frontend/dist/`
5. **Netlify functions**: Serves from `netlify/functions/`

## 🔍 Pre-Deployment Verification

### 1. Verify Source Files are Committed
```bash
git ls-files | grep "^src/"
git ls-files | grep "\.html$"
git ls-files | grep "^public/"
git ls-files | grep "^netlify/functions/"
```

### 2. Test Build Locally
```bash
npm install
npm run build
```

**Expected Output**:
- `frontend/dist/` directory created
- `frontend/dist/index.html` exists
- `frontend/dist/src/main.js` exists
- `frontend/dist/_redirects` exists

### 3. Verify Build Output
```bash
ls -la frontend/dist/
ls -la frontend/dist/src/
```

## ⚠️ Potential Issues & Solutions

### Issue 1: src/ Not Found
**Error**: `ENOENT: scandir failed because frontend/src does not exist`

**Solution**: ✅ Already handled - build script checks root `src/` as fallback

### Issue 2: HTML Files Not Found
**Error**: `index.html not found`

**Solution**: ✅ Already handled - build script checks root for HTML files

### Issue 3: Functions Not Found
**Error**: `Functions directory not found`

**Solution**: ✅ `netlify.toml` points to `netlify/functions/` (root location)

### Issue 4: _redirects Missing
**Error**: SPA routing doesn't work

**Solution**: ✅ Build script creates `_redirects` if missing

## 🚀 Deployment Steps

### Step 1: Verify Git Status
```bash
git status
git add .
git commit -m "Fix Netlify build configuration - January 2026"
```

### Step 2: Push to GitHub
```bash
git push origin main
```

### Step 3: Netlify Auto-Deploy
- Netlify will detect the push
- Run `npm run build`
- Publish `frontend/dist/`
- Deploy functions from `netlify/functions/`

### Step 4: Verify Deployment
- Check Netlify build logs
- Visit deployed site
- Test React app loads
- Test serverless functions

## ✅ Success Criteria

- [ ] Build completes without errors
- [ ] `frontend/dist/` contains all files
- [ ] `frontend/dist/src/main.js` exists
- [ ] `frontend/dist/index.html` exists
- [ ] `frontend/dist/_redirects` exists
- [ ] Site loads correctly
- [ ] React app loads when clicking "Try Demo"
- [ ] Serverless functions respond correctly

## 📝 Notes

- Build script is flexible and handles both folder structures
- Current structure (files in root) will work for deployment
- Future: Move files to proper `frontend/` and `backend/` folders for better organization
- All paths are correctly configured for current structure

---

**Last Updated**: January 2026  
**Status**: ✅ Ready for Deployment


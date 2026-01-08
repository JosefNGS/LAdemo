# Drag-and-Drop Deployment Guide

**Date**: January 2026

## Where to See Build Logs on Netlify

When you drag-and-drop deploy on Netlify:

1. **Go to your Netlify Dashboard**: https://app.netlify.com
2. **Click on your site** (or create a new site)
3. **Click "Deploys" tab** (top navigation)
4. **Click on the failed deploy** (it will show a red X or error icon)
5. **Click "View deploy log"** or expand the deploy details
6. **Scroll down** to see the full build log with error messages

The logs will show:
- What command was run
- What files were found/missing
- The exact error message and line number

## Two Ways to Deploy

### Option 1: Drag Pre-Built Folder (Recommended for Drag-and-Drop)

**Step 1: Build Locally**
```bash
# Install dependencies (if not done)
npm install

# Build the project
npm run build
```

**Step 2: Verify Build Output**
```bash
# Check that dist folder was created
dir frontend\dist

# Should see:
# - index.html
# - src/main.js (and other JS files)
# - _redirects
```

**Step 3: Drag to Netlify**
- Go to Netlify Dashboard
- Click "Add new site" → "Deploy manually"
- Drag the **`frontend/dist`** folder (not the whole project)
- Netlify will deploy it

**Note**: With this method, Netlify won't run a build command - it just serves the files you upload.

### Option 2: Git-Based Deployment (Recommended for Production)

**Step 1: Push to GitHub**
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

**Step 2: Connect to Netlify**
- Go to Netlify Dashboard
- Click "Add new site" → "Import an existing project"
- Connect to GitHub
- Select your repository

**Step 3: Configure Build Settings**
Netlify should auto-detect from `netlify.toml`, but verify:
- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist`
- **Functions directory**: `netlify/functions`
- **Node version**: 18

**Step 4: Deploy**
- Click "Deploy site"
- Netlify will run the build automatically
- Check the deploy log for any errors

## Current Error: "Build script returned non-zero exit code: 2"

This error means Netlify tried to run a build command but it failed.

### If Using Drag-and-Drop:
- **Don't drag the whole project** - only drag `frontend/dist` (after building locally)
- OR disable build command in Netlify settings

### If Using Git Deployment:
The build is failing. Check the deploy log for:
1. **Missing files**: "ENOENT" or "cannot find"
2. **Missing dependencies**: "Cannot find module"
3. **Path issues**: "No such file or directory"
4. **Node version**: Wrong Node.js version

## Quick Fix Checklist

- [ ] **Source files committed**: `git ls-files src/` shows files
- [ ] **package.json exists**: With correct build script
- [ ] **netlify.toml exists**: With correct paths
- [ ] **Local build works**: `npm run build` succeeds
- [ ] **dist folder created**: `frontend/dist/` exists after build
- [ ] **All files pushed**: `git push` completed

## Test Build Locally First

```bash
# 1. Install dependencies
npm install

# 2. Run build
npm run build

# 3. Check output
dir frontend\dist
dir frontend\dist\src

# Should see:
# - index.html
# - src/main.js
# - _redirects
# - Other JS files
```

If local build fails, fix it before deploying to Netlify.

## Common Issues

### Issue: "Source directory not found"
**Fix**: Ensure `src/` folder is in the repository root (it is)

### Issue: "Cannot find module 'esbuild'"
**Fix**: Run `npm install` to install dependencies

### Issue: "Build command failed"
**Fix**: Check `package.json` build script: `"build": "cd frontend && node build.js"`

### Issue: "Publish directory not found"
**Fix**: Build locally first to create `frontend/dist/`

---

**Last Updated**: January 2026


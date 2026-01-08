# Netlify Build Troubleshooting Guide

**Date**: January 2026

## Common Build Failures & Solutions

### Error: "Source directory not found" or "ENOENT: scandir failed"

**Cause**: The `frontend/src/` directory is not committed to git or doesn't exist in the repository.

**Solution**:
```bash
# 1. Verify frontend/src/ exists locally
dir src\main.tsx

# 2. Check if it's tracked by git
git ls-files src/main.tsx

# 3. If not tracked, add it
git add frontend/src/
git add frontend/
git commit -m "Add source files for Netlify build"
git push origin main
```

### Error: "Cannot find module 'esbuild'"

**Cause**: Dependencies not installed or `package.json` missing.

**Solution**:
1. Verify `package.json` is committed:
   ```bash
   git ls-files package.json
   ```

2. Ensure `package.json` has esbuild:
   ```json
   {
     "devDependencies": {
       "esbuild": "^0.19.0"
     }
   }
   ```

3. Netlify will run `npm install` automatically, but verify it's in the build log.

### Error: "Build command failed"

**Cause**: Build script error or missing files.

**Solution**:
1. Test build locally:
   ```bash
   npm install
   npm run build
   ```

2. If local build works, the issue is likely missing files in git.

3. Verify all required files are committed:
   ```bash
   git ls-files | findstr "src"
   git ls-files | findstr "frontend"
   git ls-files | findstr "package.json"
   git ls-files | findstr "netlify.toml"
   ```

### Error: Node version mismatch

**Cause**: Netlify using wrong Node version.

**Solution**: 
1. Created `.nvmrc` file with Node 18
2. `netlify.toml` already specifies `NODE_VERSION = "18"`
3. `package.json` now includes `"engines": { "node": "18.x" }`

### Error: "Functions directory not found"

**Cause**: Functions not in expected location.

**Solution**: 
- `netlify.toml` points to `backend/netlify/functions`
- Verify functions are committed:
  ```bash
  git ls-files backend/netlify/functions/
  ```

## Pre-Deployment Checklist

Before pushing to GitHub, verify:

- [ ] `frontend/src/` directory exists and is committed
- [ ] `package.json` is committed with correct build script
- [ ] `netlify.toml` is committed with correct paths
- [ ] `.nvmrc` file exists (Node 18)
- [ ] `frontend/build.js` is committed
- [ ] `backend/netlify/functions/` is committed
- [ ] Local build works: `npm run build`
- [ ] `frontend/dist/` is created after build

## Verification Commands

Run `VERIFY_NETLIFY_BUILD.bat` to check all requirements:

```bash
VERIFY_NETLIFY_BUILD.bat
```

Or manually:
```bash
# Check source files
git ls-files src/main.tsx

# Check build files
git ls-files frontend/build.js
git ls-files package.json
git ls-files netlify.toml

# Test local build
npm install
npm run build
dir frontend\dist
```

## Netlify Build Settings

Verify these in Netlify Dashboard:

- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist`
- **Functions directory**: `netlify/functions`
- **Node version**: 18 (or use `.nvmrc`)

## If Build Still Fails

1. **Get the full build log** from Netlify dashboard
2. **Copy the last 50-100 lines** of the error
3. **Check for specific error messages**:
   - File not found errors → Files not committed
   - Module not found → Dependencies issue
   - Permission errors → File access issue
   - Timeout errors → Build taking too long

4. **Common fixes**:
   - Ensure all source files are committed
   - Verify `.gitignore` doesn't exclude needed files
   - Check that `package.json` has all dependencies
   - Verify Node version matches (18)

## Quick Fix Script

```bash
# Add all necessary files
git add frontend/src/
git add frontend/
git add package.json
git add netlify.toml
git add .nvmrc
git add backend/netlify/functions/

# Commit
git commit -m "Fix Netlify build - ensure all files committed"

# Push
git push origin main
```

---

**Last Updated**: January 2026


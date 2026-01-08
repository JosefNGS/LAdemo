# Netlify Build Fix Guide

**Date**: January 2026

## Common Netlify Build Issues & Solutions

### Issue 1: Source Files Not Committed to Git

**Symptom**: Build fails with "Source directory not found" or "ENOENT: scandir failed"

**Solution**:
```bash
# Check if src/ is tracked
git ls-files src/

# If empty, add and commit:
git add src/
git add frontend/
git add package.json
git add netlify.toml
git commit -m "Add source files for Netlify build"
git push
```

### Issue 2: Build Script Path Issues

**Symptom**: Build script can't find files

**Solution**: The `frontend/build.js` already handles both locations, but verify:
- `src/` exists in root OR `frontend/src/` exists
- `index.html` exists in root OR `frontend/index.html` exists
- `public/_redirects` exists in root OR `frontend/public/_redirects` exists

### Issue 3: Node Version Mismatch

**Symptom**: Build fails with Node version errors

**Solution**: Create `.nvmrc` file:
```bash
echo 18 > .nvmrc
git add .nvmrc
git commit -m "Add Node version specification"
git push
```

### Issue 4: Missing Dependencies

**Symptom**: Build fails with "Cannot find module"

**Solution**: Ensure `package.json` has all dependencies:
```json
{
  "devDependencies": {
    "esbuild": "^0.19.0"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.39.0"
  }
}
```

### Issue 5: Build Command Issues

**Symptom**: Build command fails

**Current Build Command**: `npm run build`
**Which runs**: `cd frontend && node build.js`

**Verify in Netlify**:
- Build command: `npm run build`
- Publish directory: `frontend/dist`
- Functions directory: `netlify/functions`
- Node version: 18

## Pre-Deployment Checklist

- [ ] All source files committed (`git ls-files src/` shows files)
- [ ] `package.json` has correct build script
- [ ] `netlify.toml` configured correctly
- [ ] `.nvmrc` file exists (if needed)
- [ ] Local build works: `npm run build`
- [ ] `frontend/dist/` is created after local build
- [ ] All files pushed to GitHub

## Quick Fix Commands

```bash
# 1. Verify files are tracked
git ls-files | findstr "src/main.tsx"
git ls-files | findstr "package.json"
git ls-files | findstr "netlify.toml"

# 2. If missing, add them
git add src/
git add frontend/
git add package.json
git add netlify.toml
git add .nvmrc

# 3. Commit and push
git commit -m "Fix Netlify build - ensure all files committed"
git push origin main
```

## Test Build Locally

```bash
# Install dependencies
npm install

# Run build
npm run build

# Verify output
dir frontend\dist
dir frontend\dist\src
```

If local build works, Netlify should work too (assuming files are committed).

---

**Last Updated**: January 2026


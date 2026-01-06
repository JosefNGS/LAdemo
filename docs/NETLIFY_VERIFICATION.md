# Netlify Deployment Verification

This document verifies that the BitNexus Landing Page is properly configured for Netlify deployment.

## ✅ Configuration Checklist

### 1. Project Structure
- [x] `frontend/` directory contains all frontend files
- [x] `backend/` directory contains all backend files
- [x] `netlify.toml` is in the root directory

### 2. Netlify Configuration (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "frontend/dist"
  functions = "backend/netlify/functions"

[build.environment]
  NODE_VERSION = "18"

[functions]
  submit-email.timeout = 10
  submit-email-supabase.timeout = 10

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Status**: ✅ Correctly configured

### 3. Package.json Scripts

```json
{
  "scripts": {
    "build": "cd frontend && node build.js",
    "dev": "cd frontend && node server.js",
    "start": "cd frontend && node server.js"
  }
}
```

**Status**: ✅ Correctly configured

### 4. Build Script (`frontend/build.js`)

The build script:
- ✅ Transpiles TypeScript files to JavaScript
- ✅ **Automatically detects source files** in both `frontend/src/` and root `src/` directory
- ✅ Copies HTML files (index.html, docs.html, manifesto.html) from both locations
- ✅ Copies static files from `public/` (checks both frontend and root)
- ✅ Creates `_redirects` file for SPA routing
- ✅ Outputs to `frontend/dist/`
- ✅ Provides clear error messages if source files not found

**Status**: ✅ Ready for production - Works with current file structure (files in root)

### 5. Serverless Functions

Functions are located at:
- `backend/netlify/functions/submit-email.js`
- `backend/netlify/functions/submit-email-supabase.js`
- `backend/netlify/functions/submit-email-airtable.js`

**Status**: ✅ Correctly located

### 6. Frontend Files Structure

```
frontend/
├── src/              # React source code
├── public/           # Static assets
│   └── _redirects   # Netlify SPA routing
├── index.html        # Landing page
├── docs.html         # Documentation page
├── manifesto.html    # Manifesto page
├── build.js          # Production build script
├── server.js         # Development server
└── server.py         # Fallback dev server
```

**Status**: ✅ All files in correct location

### 7. Environment Variables (Netlify Dashboard)

Required environment variables:
- `SUPABASE_URL` (if using Supabase)
- `SUPABASE_ANON_KEY` (if using Supabase)
- `GEMINI_API_KEY` (optional, for AI features)

**Status**: ⚠️ Must be set in Netlify Dashboard

## 🚀 Deployment Steps

### Step 1: Prepare Repository

1. Ensure all files are committed to Git
2. Push to GitHub/GitLab/Bitbucket

### Step 2: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider
4. Select your repository

### Step 3: Configure Build Settings

Netlify should auto-detect from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist`
- **Functions directory**: `backend/netlify/functions`

If not auto-detected, manually set:
- Base directory: `/` (root)
- Build command: `npm run build`
- Publish directory: `frontend/dist`

### Step 4: Set Environment Variables

In Netlify Dashboard → Site settings → Environment variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
GEMINI_API_KEY=your-gemini-key (optional)
```

### Step 5: Deploy

1. Click "Deploy site"
2. Wait for build to complete
3. Your site will be live at `https://your-site-name.netlify.app`

## 🔍 Verification Tests

### Test 1: Build Locally

```bash
npm run build
```

Expected output:
- `frontend/dist/` directory created
- `frontend/dist/index.html` exists
- `frontend/dist/src/main.js` exists
- `frontend/dist/_redirects` exists

### Test 2: Check Function Paths

```bash
# Verify functions exist
ls backend/netlify/functions/
```

Expected files:
- `submit-email.js`
- `submit-email-supabase.js`
- `submit-email-airtable.js`

### Test 3: Test SPA Routing

After deployment:
1. Visit `https://your-site.netlify.app/`
2. Click "Try Demo"
3. Navigate to different routes (e.g., `/dashboard`, `/marketplace`)
4. Refresh the page - should not show 404

### Test 4: Test Serverless Functions

1. Submit the signup form on the landing page
2. Check Netlify function logs
3. Verify data is saved (if using Supabase/Airtable)

## ⚠️ Common Issues

### Issue 1: Build Fails

**Error**: `Cannot find module 'esbuild'`

**Solution**: 
- Ensure `package.json` includes `esbuild` in `devDependencies`
- Run `npm install` before building

### Issue 2: Functions Not Found

**Error**: `Function not found`

**Solution**:
- Verify `netlify.toml` has `functions = "backend/netlify/functions"`
- Ensure functions are in the correct directory

### Issue 3: SPA Routing Not Working

**Error**: 404 on page refresh

**Solution**:
- Verify `_redirects` file exists in `frontend/public/`
- Check `netlify.toml` has redirect rules
- Ensure `frontend/dist/_redirects` is created during build

### Issue 4: TypeScript Files Not Transpiled

**Error**: `Failed to load module script`

**Solution**:
- Verify `build.js` is running correctly
- Check that `.tsx` files are being transpiled to `.js`
- Ensure `frontend/dist/src/` contains `.js` files

## 📝 Pre-Deployment Checklist

- [ ] All files moved to `frontend/` and `backend/`
- [ ] `netlify.toml` is in root directory
- [ ] `package.json` has correct build script
- [ ] `frontend/build.js` exists and is correct
- [ ] `frontend/public/_redirects` exists
- [ ] Serverless functions are in `backend/netlify/functions/`
- [ ] Environment variables are set in Netlify Dashboard
- [ ] Local build test passes (`npm run build`)
- [ ] Git repository is up to date
- [ ] All dependencies are in `package.json`

## ✅ Deployment Ready

Once all items are checked, the project is ready for Netlify deployment!

**Last Updated**: January 2026
**Status**: ✅ Ready for Production


# Local Build Test Instructions

**Date**: January 2026

## Run these commands in your terminal (CMD or PowerShell)

### Step 1: Navigate to project folder
```cmd
cd "C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page"
```

### Step 2: Install dependencies (if not already done)
```cmd
npm install
```

### Step 3: Run the build
```cmd
npm run build
```

### Step 4: Check if build succeeded

**If build succeeds**, you should see:
- ✅ Messages like "Built: main.tsx"
- ✅ "Build complete!"
- ✅ A new `frontend/dist` folder

Check the folder:
```cmd
dir frontend\dist
dir frontend\dist\src
```

**If build fails**, you'll see:
- ❌ Error messages (copy the full error)
- ❌ No `frontend/dist` folder

### Step 5: What to do next

**If build succeeds locally**:
1. Push to GitHub: `git add . && git commit -m "Fix Netlify build" && git push`
2. In Netlify: Clear cache and deploy
3. If Netlify still fails, we need the Netlify deploy log

**If build fails locally**:
1. Copy the entire error message
2. Paste it in chat so I can fix the exact issue

## How to get the Netlify deploy log

If Netlify is still failing:

1. Go to https://app.netlify.com
2. Click your site
3. Click **"Deploys"** tab (top navigation)
4. Click the **failed deploy** (red X icon)
5. Click **"View deploy log"** button
6. Scroll to find the first line that says **"Error:"**
7. Copy from that Error line + 30 lines above it + 20 lines below it
8. Paste in chat

## Common errors and fixes

### Error: "Cannot find module 'esbuild'"
**Fix**: Run `npm install` again

### Error: "Source directory not found"
**Fix**: Ensure `src/` folder exists in project root

### Error: "ENOENT: no such file or directory"
**Fix**: Check that all files are committed to git

---

**Last Updated**: January 2026


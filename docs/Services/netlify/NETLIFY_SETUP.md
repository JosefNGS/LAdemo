# Netlify Setup - Quick Start Guide

## 🚀 Deploy to Netlify in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Test Build Locally (Optional)
```bash
npm run build
```
This creates a `dist/` folder with production-ready files.

### Step 3: Deploy to Netlify

#### Option A: Via Netlify Dashboard
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository (GitHub/GitLab/Bitbucket)
4. Netlify will auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Option B: Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## ✅ That's It!

Your site will be live at `https://your-site-name.netlify.app`

## 📚 More Information

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.


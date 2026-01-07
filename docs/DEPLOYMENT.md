# Deployment Guide
## Netlify Deployment Instructions

This guide covers how to deploy the BitNexus Landing Page to Netlify.

---

## Prerequisites

1. **Netlify Account**: Sign up at [netlify.com](https://www.netlify.com)
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)
3. **Node.js**: Netlify will use Node.js 18 (configured in `netlify.toml`)

---

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. **Connect Repository**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository

2. **Configure Build Settings**:
   - **Build command**: `npm run build` (runs from `frontend/` directory)
   - **Publish directory**: `frontend/dist`
   - **Functions directory**: `backend/netlify/functions`
   - These are already configured in `netlify.toml`, so Netlify should auto-detect them

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will install dependencies and run the build
   - Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Initialize Site**:
   ```bash
   netlify init
   ```
   - Follow the prompts to link your site

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

---

## Build Process

The build process (`npm run build`) does the following:

1. **Changes to `frontend/` directory** and creates `dist/` directory for production files
2. **Detects source files** - Checks both `frontend/src/` and root `src/` directory (works with current structure)
3. **Copies static files** (index.html, docs.html, manifesto.html) - Checks both frontend and root locations
4. **Transpiles TypeScript** files to JavaScript:
   - All `.tsx` and `.ts` files are compiled to `.js`
   - Files are bundled and minified
   - CDN dependencies (React, ReactDOM, Recharts) remain external
5. **Outputs production-ready files** to `frontend/dist/`

**Note**: The build script automatically detects files in either location, so it works whether files are in `frontend/` or root directory.

---

## Environment Variables

### Setting Environment Variables in Netlify

1. Go to your site in Netlify Dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add variables:
   - `GEMINI_API_KEY` - Your Google Gemini API key (optional)

### Using Environment Variables

For production, you can inject the API key via Netlify's build process. Update `index.html` to use environment variables if needed, or set `window.GEMINI_API_KEY` directly in the HTML.

---

## Custom Domain

### Adding a Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

---

## Continuous Deployment

Netlify automatically deploys when you push to your repository:

- **Production**: Deploys from `main` or `master` branch
- **Deploy Previews**: Creates previews for pull requests
- **Branch Deploys**: Deploy specific branches

### Configure Branch Deployments

1. Go to **Site settings** → **Build & deploy**
2. Under **Branch deploys**, configure:
   - Which branches to deploy
   - Build settings per branch

---

## Build Settings

The `netlify.toml` file contains:

```toml
[build]
  command = "npm run build"
  publish = "frontend/dist"
  functions = "backend/netlify/functions"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Explanation

- **command**: Runs the build script
- **publish**: Output directory for static files
- **NODE_VERSION**: Node.js version to use
- **redirects**: SPA routing - all routes redirect to index.html

---

## Troubleshooting

### Build Fails

1. **Check Build Logs**:
   - Go to **Deploys** tab in Netlify
   - Click on failed deploy
   - Review build logs for errors

2. **Common Issues**:
   - **Missing dependencies**: Ensure `package.json` includes `esbuild`
   - **TypeScript errors**: Fix any TypeScript errors locally first
   - **File not found**: Ensure all files are committed to Git

### Site Not Loading

1. **Check Publish Directory**:
   - Verify `frontend/dist/` folder is being created
   - Check that `index.html` exists in `frontend/dist/`

2. **Check Redirects**:
   - Ensure `netlify.toml` has the SPA redirect rule
   - Or create `_redirects` file in `frontend/dist/` with: `/* /index.html 200`

### TypeScript Files Not Loading

- In production, the app loads `.js` files (pre-built)
- In development, it loads `.tsx` files (transpiled on the fly)
- The `index.html` automatically detects production vs development

---

## Performance Optimization

### Netlify Features

1. **Asset Optimization**:
   - Netlify automatically optimizes images
   - Minifies CSS and JavaScript
   - Compresses assets with gzip/brotli

2. **CDN**:
   - All files are served via Netlify's global CDN
   - Automatic caching headers

3. **Edge Functions** (Optional):
   - Can add serverless functions if needed
   - Useful for API proxying

---

## Monitoring

### Netlify Analytics

1. Enable **Netlify Analytics** in site settings
2. View:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers

### Build Notifications

1. Go to **Site settings** → **Build & deploy** → **Deploy notifications**
2. Configure:
   - Email notifications
   - Slack integration
   - GitHub status checks

---

## Rollback

### Deploy Previous Version

1. Go to **Deploys** tab
2. Find the deploy you want to restore
3. Click **...** menu → **Publish deploy**

---

## Local Testing

Before deploying, test the production build locally:

```bash
# Build for production
npm run build

# Serve the dist folder
npx http-server frontend/dist -p 8000
```

Visit `http://localhost:8000` to verify everything works.

---

## File Structure After Build

```
frontend/dist/
├── index.html
├── src/
│   ├── main.js (transpiled from main.tsx)
│   ├── App.js (transpiled from App.tsx)
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── Marketplace.js
│   │   └── ...
│   ├── components/
│   │   └── Layout.js
│   └── ...
└── (other static files)
```

---

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)

---

## Support

For deployment issues:
1. Check Netlify build logs
2. Review this documentation
3. Check `docs/TROUBLESHOOTING.md` for common issues
4. Contact Netlify support if needed




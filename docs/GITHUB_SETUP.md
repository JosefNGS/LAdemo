# GitHub Repository Setup Guide

## Repository Information
- **Repository**: [JosefNGS/LAdemo](https://github.com/JosefNGS/LAdemo)
- **Status**: Currently empty (ready for initial push)

## Initial Setup Steps

### 1. Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd "C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page"

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - BitNexus landing page and dashboard"
```

### 2. Connect to GitHub Repository

```bash
# Add remote repository
git remote add origin https://github.com/JosefNGS/LAdemo.git

# Verify remote
git remote -v
```

### 3. Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## GitHub Features to Enable

### 1. Enable Issues
1. Go to repository Settings
2. Scroll to "Features" section
3. Check "Issues" checkbox
4. Save changes

### 2. Enable GitHub Actions
1. Go to repository Settings
2. Scroll to "Actions" → "General"
3. Enable "Allow all actions and reusable workflows"
4. Save changes

### 3. Configure Secrets (for Netlify deployment)

1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - **NETLIFY_AUTH_TOKEN**: Your Netlify authentication token
   - **NETLIFY_SITE_ID**: Your Netlify site ID

To get these values:
- Go to [Netlify](https://app.netlify.com)
- User Settings → Applications → New access token
- Site Settings → General → Site details → Site ID

### 4. Enable Discussions (Optional)

1. Go to repository Settings
2. Scroll to "Features" section
3. Check "Discussions" checkbox
4. Save changes

## GitHub Files Created

All GitHub configuration files are in the `.github/` directory:

```
.github/
├── CONTRIBUTING.md          # Contribution guidelines
├── CODE_OF_CONDUCT.md       # Code of conduct
├── SECURITY.md              # Security policy
├── PULL_REQUEST_TEMPLATE.md # PR template
├── ISSUE_TEMPLATE/
│   ├── bug_report.md        # Bug report template
│   ├── feature_request.md    # Feature request template
│   └── config.yml           # Issue template config
├── workflows/
│   ├── ci.yml               # CI pipeline
│   └── deploy.yml           # Deployment workflow
└── dependabot.yml           # Dependency updates
```

## Workflow Status

After pushing, you can check workflow status at:
- **Actions**: https://github.com/JosefNGS/LAdemo/actions

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable Issues and Actions
3. ✅ Configure Netlify secrets (if deploying)
4. ✅ Test issue templates by creating a test issue
5. ✅ Test CI workflow by making a small change and pushing

## Branch Protection (Recommended)

To protect the `main` branch:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Require branches to be up to date

## Repository Settings

### General Settings
- **Repository name**: LAdemo
- **Description**: BitNexus - Decentralized Affiliate Revenue Platform
- **Visibility**: Public (or Private, as preferred)
- **Topics**: Add relevant topics like: `react`, `typescript`, `affiliate-marketing`, `crypto`, `blockchain`

### Pages (if using GitHub Pages)
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Save

## Troubleshooting

### Push Rejected
If push is rejected, you may need to pull first:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Workflows Not Running
- Check that Actions are enabled in repository settings
- Verify workflow files are in `.github/workflows/`
- Check Actions tab for error messages

### Secrets Not Working
- Verify secret names match exactly (case-sensitive)
- Check that secrets are set in the correct repository
- Ensure workflow has access to secrets

## Support

For issues with GitHub setup:
- Check [GitHub Documentation](https://docs.github.com)
- Review workflow logs in Actions tab
- Open an issue in the repository


# GitHub Configuration

This directory contains GitHub-specific configuration files for the BitNexus project.

## Files Overview

### Issue Templates
- **bug_report.md** - Template for reporting bugs
- **feature_request.md** - Template for requesting new features
- **config.yml** - Configuration for issue templates

### Pull Requests
- **PULL_REQUEST_TEMPLATE.md** - Template for pull requests with checklist

### Documentation
- **CONTRIBUTING.md** - Guidelines for contributors
- **CODE_OF_CONDUCT.md** - Community code of conduct
- **SECURITY.md** - Security policy and vulnerability reporting

### CI/CD Workflows
- **workflows/ci.yml** - Continuous Integration pipeline
- **workflows/deploy.yml** - Netlify deployment workflow

### Automation
- **dependabot.yml** - Automated dependency updates

## Repository

**GitHub**: [JosefNGS/LADEMO](https://github.com/JosefNGS/LADEMO)

## Setup Instructions

1. Push these files to your GitHub repository
2. Configure GitHub Secrets (for deployment):
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
3. Enable GitHub Features:
   - Issues
   - Discussions (optional)
   - Actions

## Workflows

### CI Pipeline
Runs on every push and pull request to `main` or `develop` branches:
- Builds the project
- Runs type checking
- Runs linting (if configured)

### Deployment
Automatically deploys to Netlify when pushing to `main` branch.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed contribution guidelines.


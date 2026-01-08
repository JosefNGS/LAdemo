# GitHub Push Instructions

**⚠️ CRITICAL**: Every push MUST include:
1. **CHANGELOG.md update** (MANDATORY - NO EXCEPTIONS)
2. **Change documentation** (see "Push Change Documentation" section below)

---

**Date**: January 2026

## Quick Push Commands

Run these commands in your terminal from the project root:

```bash
# Step 0: Update CHANGELOG.md (MANDATORY - ALL changes must be logged)
# Step 0.5: Create change documentation (REQUIRED - see above)
# Step 1: Add all files including documentation and changelog
git add .
# OR add specific files including documentation:
git add path/to/changed-files.ext docs/Services/github/push-docs/YYYY-MM-DD-HHMMSS-[description].md

# Step 2: Commit changes (include changelog update in message)
git commit -m "Fix Netlify deployment configuration - Update build script to handle both file locations, verify all paths, ensure functions directory matches config - Updated CHANGELOG.md - January 2026"

# 3. Set remote (if not already set)
git remote add origin https://github.com/JosefNGS/LADEMO.git
# OR if remote exists, update it:
git remote set-url origin https://github.com/JosefNGS/LADEMO.git

# 4. Set branch to main
git branch -M main

# 5. Push to GitHub
git push -u origin main
```

## Alternative: Use the Batch Script

You can also run the automated script:

```bash
PUSH_TO_GITHUB.bat
```

This script will:
1. Check git status
2. Add all files
3. Commit with message
4. Set remote origin
5. Set branch to main
6. Push to GitHub

## If Push Fails

### Authentication Required
If you're prompted for credentials:
- Use a **GitHub Personal Access Token** (not your password)
- Create one at: https://github.com/settings/tokens
- Select scopes: `repo` (full control of private repositories)

### Repository Doesn't Exist
1. Go to: https://github.com/JosefNGS/LAdemo
2. Create the repository (if it doesn't exist)
3. Don't initialize with README (if you're pushing existing code)

### First Push to Empty Repository
If the remote repository exists but is empty:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Check Current Status
```bash
# Check if files are staged
git status

# Check if remote is configured
git remote -v

# Check current branch
git branch
```

## CHANGELOG Requirement - CRITICAL

**⚠️ MANDATORY - NO EXCEPTIONS**: Every push MUST update `docs/Project Management/CHANGELOG.md`

### What Must Be Logged
- **ALL changes** must be logged, regardless of size
- New features
- Bug fixes
- Documentation updates
- Configuration changes
- File structure changes
- Dependency updates
- Any modification to the project

### When to Update
- **BEFORE committing** changes (not after)
- Update changelog as you make changes
- Never commit without updating changelog

### Format
Follow [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format:
- Use semantic versioning
- Categories: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`
- Include date in format: `## [version] - Month Year`
- **CRITICAL**: Every entry MUST track who made the change:
  - **Developer entries**: `[Developer: Name]` - e.g., `[Developer: Josef Lindbom]`
  - **Cursor/AI entries**: `[Cursor]` - e.g., `[Cursor]`
  - **Format example**: `- Description of change [Developer: Josef Lindbom]`
  - **Format example**: `- Description of change [Cursor]`

### Developer Tracking - MANDATORY
- **Every changelog entry** must include developer/Cursor tracking
- **Format**: `- Change description [Developer: Name]` or `- Change description [Cursor]`
- **NO EXCEPTIONS** - All entries must track who made the change
- **Purpose**: Accountability, tracking, and audit trail

### Location
- File: `docs/Project Management/CHANGELOG.md`
- Must be included in every commit
- Must be pushed with all changes

**CRITICAL**: No exceptions. ALL changes must be logged with developer tracking.

## Push Change Documentation

**CRITICAL**: Every push MUST also include change documentation in `docs/Services/github/push-docs/`

See `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md` for template.

## Developer Tracking

**CRITICAL**: All pushes must include developer information:
- Developer name must be included in change documentation
- Developer must be listed in `docs/Services/github/DEVELOPERS.md`
- If developer information changes, update `DEVELOPERS.md` first

**Current Active Developers** (see `docs/Services/github/DEVELOPERS.md`):
- Josef Lindbom (COO & Development Vision Lead)
- Craig Martin (CTO)
- Jonne Waselius (Backend Developer)

## Files Being Pushed

This push includes:
- ✅ **CHANGELOG.md** (MANDATORY - must be updated for every push)
- ✅ All source files (`frontend/src/`)
- ✅ HTML files (`index.html`, `docs.html`, `manifesto.html`)
- ✅ Static files (`public/_redirects`)
- ✅ Serverless functions (`backend/netlify/functions/`)
- ✅ Build scripts (`frontend/build.js`, `frontend/server.js`)
- ✅ Configuration files (`netlify.toml`, `package.json`)
- ✅ Documentation (`docs/`)
- ✅ Change documentation (`docs/Services/github/push-docs/`)
- ✅ Developer registry (`docs/Services/github/DEVELOPERS.md` - if updated)
- ✅ All updated configuration files

## Verification

After pushing, verify on GitHub:
1. Go to: https://github.com/JosefNGS/LAdemo
2. Check that all files are present
3. Verify `frontend/src/` directory exists
4. Verify `backend/netlify/functions/` exists
5. Verify `frontend/build.js` exists

---

**Last Updated**: January 2026


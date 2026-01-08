# 🚀 START HERE - Developer Guide

**Welcome to the BitNexus Landing Page project!**

This guide will help you get started, understand the critical rules, and learn how to work with this codebase effectively.

---

## ⚠️ CRITICAL RULES - READ FIRST

### 🔴 MANDATORY REQUIREMENTS (NO EXCEPTIONS)

Before making ANY changes, you MUST understand these critical rules:

1. **CHANGELOG.md MUST ALWAYS BE UPDATED**
   - **EVERY change** must be logged in `docs/Project Management/CHANGELOG.md`
   - **NO EXCEPTIONS** - All changes, regardless of size, must be documented
   - **BEFORE committing** - Update changelog first, then commit
   - **DEVELOPER TRACKING MANDATORY** - Every entry must include `[Developer: Name]` or `[Cursor]` tag
   - **Format**: Follow [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format
   - **Example**: `- Feature description [Developer: Josef Lindbom]` or `- Feature description [Cursor]`
   - **Location**: `docs/Project Management/CHANGELOG.md`

2. **VERSION CONTROL - MAIN BRANCH PROTECTION**
   - **Main branch is PROTECTED** - Only CTO (Craig Martin) can merge
   - **NO direct pushes to main** - Always use Pull Request workflow
   - **Create feature branch** for all changes: `git checkout -b feature/your-feature-name`
   - **All code must be tested** before merging to main

3. **PUSH CHANGE DOCUMENTATION**
   - **EVERY push MUST have** change documentation
   - **Location**: `docs/Services/github/push-docs/`
   - **Template**: `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md`
   - **Must include**: Developer name, email, role, and all changes made

4. **PROJECT STRUCTURE**
   - **Follow structure** defined in `docs/Core Documentation/STRUCTURE.md`
   - **NO random files in root** - All files must follow folder structure
   - **Development server files** → `Dev server/` folder ONLY
   - **Documentation** → `docs/` folder (organized by purpose)

### 📌 WORKFLOW STANDARDIZATION

**This is how we work. This document defines our standard workflow and processes.**

If anyone wants to work differently or proposes changes to this workflow, **it must be discussed in a team meeting and added to the meeting agenda** before implementation. This ensures:
- All team members are aware of proposed changes
- Changes are discussed and agreed upon by the team
- Process changes are documented and communicated properly
- Consistency is maintained across the project

**Do not deviate from this workflow without team discussion and approval.**

---

## 📋 Quick Start Checklist

### First Time Setup

- [ ] **Read this entire document** (START_HERE.md)
- [ ] **Read `.cursorrules`** for coding standards and critical rules
- [ ] **Read `docs/Core Documentation/STRUCTURE.md`** for project structure
- [ ] **Join Admin & Developer Discord**: [https://discord.gg/YRYJMGsrW2](https://discord.gg/YRYJMGsrW2)
- [ ] **Register in Developer Registry**: `docs/Services/github/DEVELOPERS.md`
- [ ] **Set up development environment** (see Development Setup below)
- [ ] **Test the development server** to ensure everything works

### Before Every Change

- [ ] **Create feature branch**: `git checkout -b feature/your-feature-name`
- [ ] **Make your changes**
- [ ] **Test your changes** (no console errors, functionality works)
- [ ] **Update CHANGELOG.md** with ALL changes (MANDATORY)
- [ ] **Update documentation** if needed
- [ ] **Create push change documentation** (see template)
- [ ] **Commit changes** with clear message
- [ ] **Create Pull Request** (never push directly to main)

---

## 🛠️ Development Setup

### Prerequisites

- **Node.js** (v18 or higher) - For development server and build scripts
- **Git** - For version control
- **Code Editor** - VS Code, Cursor, or similar
- **GitHub Account** - For repository access

### Starting the Development Server

**Windows:**
```bash
# Run the launcher script
start.bat
```

**Manual Start:**
```bash
# Navigate to frontend directory
cd frontend

# Start Node.js server (recommended - supports TypeScript)
node server.js

# OR use Python fallback
python -m http.server 8000
```

**Server will open at**: `http://localhost:8000`

### Project Structure Overview

```
BitNexus Landing Page/
├── frontend/              # React application (TypeScript)
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── build.js          # Production build script
│   └── server.js         # Dev server
├── backend/              # Backend services (one folder per service)
│   ├── netlify/         # Serverless functions
│   ├── n8n/             # Automation (planned)
│   └── ...
├── Dev server/          # ⚠️ ALL dev server files here
├── docs/                # Documentation
│   ├── Core Documentation/    # Structure, tech stack
│   ├── Services/        # Service-specific docs
│   ├── Development/     # Developer docs and tasks
│   ├── Project Management/    # TODO, CHANGELOG
│   └── Product docs/     # Product documentation
├── .github/             # GitHub files (LICENSE, README)
├── package.json         # Dependencies
├── netlify.toml         # Netlify config
└── .cursorrules         # Coding standards
```

**For complete structure, see**: `docs/Core Documentation/STRUCTURE.md`

---

## 🔄 How to Make Changes

### Step-by-Step Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make Your Changes**
   - Write code following `.cursorrules` standards
   - Test thoroughly (no console errors)
   - Ensure responsive design works
   - Follow project structure

3. **Update CHANGELOG.md** (MANDATORY)
   ```markdown
   ## [Version] - Month Year
   
   ### Added
   - Your new feature description [Developer: Your Name]
   - Another feature [Cursor]
   
   ### Fixed
   - Bug fix description [Developer: Your Name]
   ```
   **Location**: `docs/Project Management/CHANGELOG.md`
   **CRITICAL**: Every entry MUST include `[Developer: Name]` or `[Cursor]` tag

4. **Update Documentation** (if needed)
   - Update relevant docs in `docs/` folder
   - Update `COMPLETE_UI_DOCUMENTATION.md` for UI changes
   - Update service docs if working with services

5. **Create Push Change Documentation**
   - Use template: `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md`
   - Save to: `docs/Services/github/push-docs/YYYY-MM-DD-HHMMSS-[description].md`
   - Include: Developer info, all changes made

6. **Commit Changes**
   ```bash
   git add .
   git commit -m "Clear description - Updated CHANGELOG.md"
   ```

7. **Push to Remote**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create Pull Request**
   - Go to GitHub repository
   - Create PR from feature branch to main
   - Request review from CTO (Craig Martin)
   - **NEVER push directly to main**

---

## 📝 How to Update Documentation

### Documentation Organization

All documentation is in the `docs/` folder, organized by purpose:

- **`docs/Core Documentation/`** - Structure, tech stack, core docs
- **`docs/Services/`** - Service-specific documentation (Netlify, GitHub, etc.)
- **`docs/Development/`** - Developer docs, task lists
- **`docs/Project Management/`** - TODO, CHANGELOG, project status
- **`docs/Product docs/`** - Product documentation (pitch decks, market analysis, etc.)
- **`docs/Setup & Configuration/`** - Setup guides, troubleshooting

### When to Update Documentation

- **Code changes** → Update relevant technical docs
- **UI changes** → Update `docs/Product docs/Technical Documentation/COMPLETE_UI_DOCUMENTATION.md`
- **New features** → Update feature documentation
- **Service changes** → Update service-specific docs
- **Structure changes** → Update `docs/Core Documentation/STRUCTURE.md`

### Documentation Rules

- **ALWAYS update dates** when modifying docs (Month Year format)
- **Keep docs synchronized** with code changes
- **Follow documentation structure** in `docs/Core Documentation/DOCS_STRUCTURE.md`
- **Update CHANGELOG.md** for documentation changes too

---

## 🏗️ Project Structure Rules

### Critical Structure Rules

1. **Frontend Files** → `frontend/` folder
   - All React code in `frontend/src/`
   - HTML files in `frontend/`
   - Build scripts in `frontend/`

2. **Backend Files** → `backend/` folder
   - **One folder per service** (netlify/, n8n/, discourse/, etc.)
   - Each service has its own folder

3. **Development Server** → `Dev server/` folder
   - **ALL dev server files** must be here
   - Docker files, server configs, etc.

4. **Documentation** → `docs/` folder
   - **NO documentation files in root**
   - Organized by purpose (see above)

5. **Root Directory** - Only these files allowed:
   - `README.md` (project overview)
   - `LICENSE` (must match `.github/LICENSE`)
   - `package.json` (dependencies)
   - `netlify.toml` (Netlify config)
   - `start.bat` (dev launcher)
   - `.cursorrules` (IDE rules)
   - `.gitignore` (Git ignore rules)
   - `START_HERE.md` (this file)

**For complete structure details, see**: `docs/Core Documentation/STRUCTURE.md`

---

## 🔧 Development Tools & Commands

### Build Commands

```bash
# Production build
cd frontend
node build.js

# Output: frontend/dist/
```

### Development Server

```bash
# Start dev server (Windows)
start.bat

# Manual start
cd frontend
node server.js
```

### Git Commands

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Check status
git status

# Add files
git add .

# Commit
git commit -m "Description - Updated CHANGELOG.md"

# Push
git push origin feature/your-feature-name
```

---

## 📚 Important Documentation Links

### Must-Read Documents

- **`.cursorrules`** - Coding standards and critical rules
- **`docs/Core Documentation/STRUCTURE.md`** - Project structure (MAIN SOURCE)
- **`docs/Services/github/VERSION_CONTROL.md`** - Git workflow guidelines
- **`docs/Services/github/GITHUB_PUSH_INSTRUCTIONS.md`** - Push procedures
- **`docs/Project Management/CHANGELOG.md`** - Change log (update for every change)

### Service Documentation

- **Netlify**: `docs/Services/netlify/SERVICE_RULES.md`
- **GitHub**: `docs/Services/github/SERVICE_RULES.md`
- **Supabase**: `docs/Services/supabase/SERVICE_RULES.md`
- **n8n**: `docs/Services/n8n/SERVICE_RULES.md`
- **Discourse**: `docs/Services/discourse/SERVICE_RULES.md`

### Developer Resources

- **Developer Tasks**: `docs/Development/` (individual task files)
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
- **TODO**: `docs/Project Management/TODO.md`
- **Troubleshooting**: `docs/Setup & Configuration/TROUBLESHOOTING.md`

---

## 👥 Team Information

### Active Developers

- **Josef Lindbom** (COO & Development Vision Lead)
  - Email: josef@nordicglobalsolutions.com
  - Responsibilities: UX/UI, user flow logic, overall platform logic

- **Craig Martin** (CTO)
  - Email: craig@nordicglobalsolutions.com
  - Responsibilities: Hosting services, Discourse, n8n, version control

- **Jonne Waselius** (Backend Developer)
  - Email: Jonne@nordicglobalsolutions.com
  - Responsibilities: Real-time hosting, auth, backend, n8n, API, ports, Google Sync

**Developer Registry**: `docs/Services/github/DEVELOPERS.md`

### Communication

- **Admin & Developer Discord**: [https://discord.gg/YRYJMGsrW2](https://discord.gg/YRYJMGsrW2)
- **Official Nordic Global Discord**: [https://discord.gg/UhsYV4aytG](https://discord.gg/UhsYV4aytG)
- **Nordic Global Solutions**: [www.nordicglobalsolutions.com](https://www.nordicglobalsolutions.com)
- **Nordic Global Trade**: [www.nordicglobaltrade.com](https://www.nordicglobaltrade.com)

**All active developers must join the Admin & Developer Discord server.**

#### 📢 Office Discord Setup & Reporting System

**We use office Discord according to Jonne's rules.**

The office Discord setup includes a comprehensive reporting system for all functions within the system:

- **Code Problem Reporting**: Report bugs, errors, and code issues through Discord channels
- **Bug Fix Reporting**: Document bug fixes and resolutions in designated Discord channels
- **Function-Specific Reporting**: Every function in the system has its own reporting system within Discord
- **System Updates**: Track system updates, changes, and deployments through Discord
- **Team Communication**: Coordinate development work and share updates via Discord

**Important**: All reporting, bug tracking, and system updates should be done through the office Discord setup as defined by Jonne's rules. This ensures proper documentation and team visibility.

**For detailed instructions on using the office Discord setup**, see the documentation that Jonne will create (task added to `docs/Development/JONNE_TASKS.md`).

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T DO THESE

- ❌ **Don't commit without updating CHANGELOG.md** (MANDATORY)
- ❌ **Don't forget developer tracking** in changelog entries (must include `[Developer: Name]` or `[Cursor]`)
- ❌ **Don't push directly to main branch** (use Pull Request workflow)
- ❌ **Don't skip changelog entries** for "small" changes (ALL changes must be logged)
- ❌ **Don't create files in root directory** (follow folder structure)
- ❌ **Don't create documentation in root** (use `docs/` folder)
- ❌ **Don't place dev server files in root** (use `Dev server/` folder)
- ❌ **Don't commit broken or untested code**
- ❌ **Don't commit API keys or sensitive data**
- ❌ **Don't update changelog after committing** (must be done BEFORE)

### ✅ DO THESE

- ✅ **Always update CHANGELOG.md** before committing with developer tracking
- ✅ **Always create feature branch** for changes
- ✅ **Always test your code** before committing
- ✅ **Always follow project structure** (`docs/Core Documentation/STRUCTURE.md`)
- ✅ **Always create push change documentation** for every push
- ✅ **Always request CTO review** before merging to main
- ✅ **Always update documentation** when making changes
- ✅ **Always follow coding standards** (`.cursorrules`)

---

## 🆘 Getting Help

### If You're Stuck

1. **Check Documentation**
   - Read relevant docs in `docs/` folder
   - Check `docs/Setup & Configuration/TROUBLESHOOTING.md`

2. **Check Existing Code**
   - Look at similar implementations in the codebase
   - Follow existing patterns and conventions

3. **Ask in Discord**
   - Post in Admin & Developer Discord: [https://discord.gg/YRYJMGsrW2](https://discord.gg/YRYJMGsrW2)
   - Tag relevant team members

4. **Contact Team**
   - **Josef Lindbom**: josef@nordicglobalsolutions.com (UX/UI, platform logic)
   - **Craig Martin**: craig@nordicglobalsolutions.com (CTO, technical issues)
   - **Jonne Waselius**: Jonne@nordicglobalsolutions.com (Backend, API)

---

## 📋 Quick Reference Checklist

### Before Starting Work

- [ ] Read `.cursorrules`
- [ ] Read `docs/Core Documentation/STRUCTURE.md`
- [ ] Join Admin & Developer Discord
- [ ] Register in `docs/Services/github/DEVELOPERS.md`
- [ ] Set up development environment

### Before Every Commit

- [ ] Code is tested and working
- [ ] No console errors
- [ ] **CHANGELOG.md updated** with developer tracking (MANDATORY - include `[Developer: Name]` or `[Cursor]`)
- [ ] Documentation updated (if needed)
- [ ] Follows project structure
- [ ] Follows coding standards
- [ ] Push change documentation created

### Before Every Push

- [ ] Feature branch created
- [ ] All changes committed
- [ ] CHANGELOG.md updated
- [ ] Push change documentation created
- [ ] Ready for Pull Request

### Before Merging to Main

- [ ] CTO (Craig Martin) has reviewed
- [ ] All tests pass
- [ ] No breaking changes
- [ ] Documentation is updated
- [ ] Production-ready

---

## 🎯 Next Steps

1. **Read `.cursorrules`** - Understand coding standards
2. **Read `docs/Core Documentation/STRUCTURE.md`** - Understand project structure
3. **Set up development environment** - Get the dev server running
4. **Make a test change** - Practice the workflow
5. **Join Discord** - Connect with the team

---

## 📝 Summary

**Remember these three critical rules:**

1. **CHANGELOG.md MUST ALWAYS BE UPDATED** - Every change, no exceptions
2. **NEVER push directly to main** - Always use Pull Request workflow
3. **Follow project structure** - All files in correct locations

**Welcome to the team! 🚀**

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Maintained by**: Development Team


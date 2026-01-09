# 🚀 START HERE - Project Guide

**Welcome to the BitNexus Landing Page project!**

This guide provides essential information for developers, stakeholders, contributors, and anyone working with this codebase.

---

## 🔐 FUNDAMENTAL STRUCTURE LICENSE & USAGE

### ⚠️ CRITICAL - STRUCTURE LICENSING INFORMATION

**This system uses the fundamental structure from Nordic Global Solutions (NGS), made by NorthStar.**

**🔴 PROPRIETARY STRUCTURE - LICENSED TO NORTHSTAR**

The fundamental project structure, organization framework, and architectural patterns used in this system are:
- **Licensed to NorthStar** (a team within Nordic Global Solutions)
- **Developed by**: NorthStar Team (Josef Lindbom - COO, Craig Martin - CTO)
- **NOT FOR USE** without explicit written permission and a signed contract

**What's Protected:**
- Project folder structure and organization patterns
- Documentation organization framework
- Development workflow standards
- Task management system structure
- Framework integration patterns (BMAD-METHOD, Agent OS, NSR)
- Version control and change management workflows
- Service organization patterns

### Contract Requirements for Structure Use

**MANDATORY: A signed written contract is required for:**
- ❌ Using this fundamental structure in other projects
- ❌ Copying the organizational framework to other codebases
- ❌ Adapting the structure patterns for other systems
- ❌ Using the workflow standards in other projects
- ❌ Any commercial or commercial-related use of the structure
- ❌ Any use of the structure without explicit written permission

**PERMITTED (No Contract Required):**
- ✅ Viewing the structure for reference or educational purposes (personal learning only)
- ✅ Contributing to this project (subject to approval and project CLA)

### Contact for Structure Licensing

**To obtain permission to use this fundamental structure:**

**Primary Contacts:**
- **Josef Lindbom** (COO & Development Vision Lead)
  - Email: josef@nordicglobalsolutions.com
  - Subject: "NorthStar Structure License Request"
  
- **Craig Martin** (CTO & NorthStar Co-Creator)
  - Email: craig@nordicglobalsolutions.com
  - Subject: "NorthStar Structure License Request"

**Required Information:**
- Purpose of use
- Project details
- Intended scope of structure adoption
- Commercial vs. non-commercial use
- Timeline and duration

**⚠️ IMPORTANT**: Without a signed written contract from NorthStar, any use of this fundamental structure in other projects is strictly prohibited and may result in legal action.

**NorthStar Structure Repository**: [https://github.com/zerwiz/NSR](https://github.com/zerwiz/NSR)  
**NorthStar Team**: Josef Lindbom (COO) & Craig Martin (CTO)  
**License Holder**: NorthStar / Nordic Global Solutions

---

## 📖 Who Should Read This Guide

### For Developers
This guide contains comprehensive development information, coding standards, workflow procedures, and technical documentation. Read the entire document, especially the "Development Setup" and "How to Make Changes" sections.

### For Project Managers & Stakeholders
Focus on:
- "Critical Rules" section (understanding project standards)
- "Team Information" section (who to contact)
- "Project Structure Overview" section (understanding organization)
- "Getting Help" section (how to communicate with the team)

### For Contributors & Contributors
Read:
- "Critical Rules" section (must understand before contributing)
- "Quick Start Checklist" (first-time setup)
- "How to Make Changes" section (contribution workflow)
- "Contact Information" section (who to reach out to)

### For Anyone Working with This Project
Everyone should read:
- "Fundamental Structure License & Usage" section (CRITICAL - licensing information)
- "Critical Rules" section (understanding mandatory requirements)
- "Team Information" section (knowing who to contact)

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

5. **KEEP ROOT CLEAN - CRITICAL RULE**
   - **Files MUST be where they belong** - No exceptions
   - **Root directory must stay clean** - Only approved files allowed
   - **You are responsible** for placing files in correct locations
   - **Check `docs/Core Documentation/STRUCTURE.md`** before creating any file
   - **If unsure where a file belongs** - Check structure docs first, ask team if needed
   - **Move misplaced files immediately** - Don't leave files in wrong locations

6. **DEVELOPER RESPONSIBILITY**
   - **You are responsible** for keeping yourself updated with project rules
   - **You are responsible** for following all rules and guidelines
   - **You are responsible** for reading and understanding documentation
   - **You are responsible** for maintaining project structure
   - **You are responsible** for updating documentation when needed
   - **No excuses** - Rules are documented, follow them

7. **FOLLOW TODOLISTS - MANDATORY**
   - **You MUST follow todolists** assigned to you
   - **Check your task files** in `docs/Development/` regularly
   - **Update task status** as you complete work
   - **Follow task priorities** and deadlines
   - **Report blockers** in Discord if tasks cannot be completed
   - **Task files location**: `docs/Development/[YOUR_NAME]_TASKS.md`

8. **TASK OWNERSHIP - MANDATORY**
   - **Every task MUST have a clear owner** (person or role) – NO unowned tasks
   - **Owners must use consistent pattern**: `[Owner: Name]` or `[Owner: Role]`
   - **Examples**: `[Owner: Josef]`, `[Owner: Craig]`, `[Owner: Sales]`, `[Owner: Frontend]`, `[Owner: Team]`
   - **When adding a new task**, you MUST assign an owner immediately
   - **When moving tasks** between people, update the owner tag in both `docs/Project Management/TODO.md` and the person's task doc
   - **Shared tasks** must list all owners or use `[Owner: Shared]` with primary contact
   - **CRITICAL**: All tasks in TODO.md and individual task files MUST have explicit ownership

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

- [ ] **Check your todolist** in `docs/Development/[YOUR_NAME]_TASKS.md` (MANDATORY)
- [ ] **Verify file location** - Check `docs/Core Documentation/STRUCTURE.md` if unsure
- [ ] **Create feature branch**: `git checkout -b feature/your-feature-name`
- [ ] **Make your changes** (files in correct locations)
- [ ] **Test your changes** (no console errors, functionality works)
- [ ] **Update CHANGELOG.md** with ALL changes (MANDATORY)
- [ ] **Update documentation** if needed
- [ ] **Create push change documentation** (see template)
- [ ] **Update task status** in your task file if applicable
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
├── instructions/        # External frameworks and instruction sets
│   ├── NSR/             # ⭐ NorthStar Rules (NSR) - Project generation framework
│   │   ├── src/         # NSR framework source (templates, rules, workflows, standards)
│   │   └── ref/         # Reference frameworks (Agent OS, BMAD-METHOD)
│   ├── BMAD-METHOD/     # BMAD Method framework
│   └── .agent-os/       # Agent OS configuration
├── rules/               # Extracted rules from instruction frameworks
│   ├── agent-os/        # Agent OS framework rules
│   ├── bmad-method/     # BMAD-METHOD framework rules
│   ├── services/        # Service-specific rules
│   └── (other rule folders)
├── .github/             # GitHub files (LICENSE, README)
├── package.json         # Dependencies
├── netlify.toml         # Netlify config (⚠️ ALPHA PHASE - AWS migration planned)
└── .cursorrules         # Coding standards
```

**For complete structure, see**: `docs/Core Documentation/STRUCTURE.md`

### Important Project Folders

- **`instructions/NSR/`** - **⭐ NorthStar Rules (NSR) Framework** - Project generation framework used to create BitNexus structure
  - **Developed by**: NorthStar Team (Josef Lindbom - COO, Craig Martin - CTO)
  - **Purpose**: Framework for generating consistent project structures with standardized organization, documentation, and development practices
  - **Contains**: Templates, rules, workflows, standards, and reference frameworks
  - **Repository**: [https://github.com/zerwiz/NSR](https://github.com/zerwiz/NSR)
  - **License**: MIT License (Copyright 2026 NorthStar Team)
  - **DO NOT modify** core NSR framework files without understanding the framework
  - **See**: `instructions/NSR/README.md` for complete documentation
- **`instructions/BMAD-METHOD/`** - BMAD Method framework (referenced by NSR)
- **`instructions/.agent-os/`** - Agent OS configuration (referenced by NSR)
- **`rules/`** - Extracted rules from instruction frameworks - Quick reference for framework guidelines
- **`Dev server/`** - ALL development server files (Docker, configs, scripts) - Must be here, not in root

### README & CHANGELOG Requirement

**CRITICAL**: Every folder MUST have `README.md` and `CHANGELOG.md` files. This is mandatory for all folders:
- Main folders (`frontend/`, `backend/`, `docs/`, etc.)
- Service folders (`backend/netlify/`, `docs/Services/admin/`, etc.)
- Rules folders (`rules/agent-os/`, `rules/services/`, etc.)
- All other folders

**When creating a new folder**: Immediately create `README.md` and `CHANGELOG.md`
**When finding a folder without these files**: Create them immediately

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

### 🔴 KEEP ROOT CLEAN - YOUR RESPONSIBILITY

**CRITICAL RULE**: The root directory must stay clean. Files MUST be where they belong.

**Your Responsibilities**:
- ✅ **Check structure docs** before creating any file
- ✅ **Place files in correct locations** according to `docs/Core Documentation/STRUCTURE.md`
- ✅ **Move misplaced files immediately** if you find them
- ✅ **Ask team if unsure** where a file belongs
- ❌ **NEVER create files in root** unless they're in the approved list
- ❌ **NEVER leave files in wrong locations** - Fix immediately

**If you find files in wrong location**:
1. **Check `docs/Core Documentation/STRUCTURE.md`** to find correct location
2. **Move file to correct location** immediately
3. **Update any references** to the moved file
4. **Update CHANGELOG.md** if file location changed
5. **Never leave it for someone else** - You found it, you fix it

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
   - `start.bat` / `start.sh` (dev launcher)
   - `stop.bat` / `stop.sh` (stop dev server)
   - `.cursorrules` (IDE rules)
   - `.gitignore` (Git ignore rules)
   - `START_HERE.md` (this file)

**⚠️ CRITICAL**: If you find files in root that don't belong here, **move them immediately** to the correct location. You are responsible for keeping root clean.

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

- **Netlify**: `docs/Services/netlify/SERVICE_RULES.md` (⚠️ **ALPHA PHASE** - Migration to AWS planned)
- **GitHub**: `docs/Services/github/SERVICE_RULES.md`
- **PostgreSQL**: `docs/Services/supabase/SERVICE_RULES.md`
- **n8n**: `docs/Services/n8n/SERVICE_RULES.md`
- **Discourse**: `docs/Services/discourse/SERVICE_RULES.md`
- **Admin View & Task Management**: `docs/Services/admin/SERVICE_RULES.md` (CRITICAL - UI/Database sync rules)
- **Erlang/Elixir Ledger**: `docs/Services/erlang-ledger/SERVICE_RULES.md`
- **Phoenix**: `docs/Services/phoenix/SERVICE_RULES.md` (CRITICAL - Web framework implementation)
- **Elixir**: `docs/Services/elixir/SERVICE_RULES.md` (CRITICAL - Business logic & BEAM VM)
- **Golang API**: `docs/Services/golang-api/SERVICE_RULES.md`

### Framework Documentation

- **NSR (NorthStar Rules)**: `instructions/NSR/` - **NorthStar Project Generation Framework**
  - **Framework Type**: Project structure generation and standardization framework
  - **Developed by**: NorthStar Team (Josef Lindbom - COO, Craig Martin - CTO)
  - **Purpose**: Generates BitNexus-like project structures with consistent organization, documentation, and development practices
  - **License**: MIT License (Copyright 2026 NorthStar Team)
  - **Repository**: [https://github.com/zerwiz/NSR](https://github.com/zerwiz/NSR)
  - **What NSR Does**:
    - Provides templates for generating consistent project structures
    - Extracts and organizes rules from BitNexus and other frameworks
    - Creates workflows for project initialization
    - Enforces code and project standards
    - Integrates reference frameworks (Agent OS, BMAD-METHOD)
  - **NSR Structure**:
    - `src/templates/` - Project structure templates (`project-structure-template.md`)
    - `src/rules/` - Extracted rules (`cursor-rules-template.md`)
    - `src/workflows/` - Project initialization workflows (`project-init-workflow.md`)
    - `src/standards/` - Code and project standards (`code-standards.md`, `project-standards.md`)
    - `ref/` - Reference frameworks (Agent OS, BMAD-METHOD) used for development
  - **How NSR Works**:
    1. Uses templates to generate consistent project folder structures
    2. Applies rules extracted from BitNexus and framework references
    3. Follows workflows for step-by-step project initialization
    4. Enforces standards for code quality and project organization
    5. References Agent OS and BMAD-METHOD for best practices
  - **Usage in BitNexus**:
    - BitNexus project structure was generated using NSR framework
    - All rules, standards, and workflows follow NSR patterns
    - Reference frameworks (Agent OS, BMAD-METHOD) are included in `instructions/NSR/ref/`
    - NSR is actively used to maintain consistency across the project
  - **For Framework Licensing**: See "Fundamental Structure License & Usage" section above
  - **Documentation**: See `instructions/NSR/README.md` for complete NSR framework documentation
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Build-Measure-Analyze-Deploy methodology framework (referenced by NSR in `instructions/NSR/ref/BMAD-METHOD/`)
- **Agent OS**: `instructions/.agent-os/` - Agent OS configuration and standards (referenced by NSR in `instructions/NSR/ref/.agent-os/`)
- **Rules Reference**: `rules/` - Quick reference for framework rules extracted from instructions

### Developer Resources

- **Developer Tasks**: `docs/Development/` (individual task files)
  - **YOUR TASK FILE**: `docs/Development/[YOUR_NAME]_TASKS.md` - **YOU MUST FOLLOW THIS**
  - **Check your tasks regularly** - This is MANDATORY
  - **Update task status** as you complete work
  - **Follow task priorities** and deadlines
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
  - **Current**: React, TypeScript, Tailwind CSS, Netlify (alpha phase)
  - **Planned**: Phoenix/Elixir backend, PostgreSQL with vector extensions (pgvector), AWS migration
- **Tech Stack Evaluation**: `docs/Core Documentation/TECH_STACK_EVALUATION.md` - Technology decision framework
- **Tech Stack Suggestions**: `docs/Core Documentation/TECH_STACK_SUGGESTIONS.md` - Technology recommendations
- **TODO**: `docs/Project Management/TODO.md` - Project-wide todo list (⚠️ All tasks must have owners)
- **Troubleshooting**: `docs/Setup & Configuration/TROUBLESHOOTING.md`

**⚠️ CRITICAL - FOLLOW TODOLISTS**:
- **You MUST check your task file** before starting work
- **You MUST follow assigned tasks** and priorities
- **You MUST update task status** as you complete work
- **You MUST report blockers** if tasks cannot be completed

---

## 👥 Team Information

### Active Developers

- **Josef Lindbom** (COO & Development Vision Lead)
  - Email: josef@nordicglobalsolutions.com
  - Responsibilities: UX/UI (updates everything on UI/UX), user flow logic, overall platform logic

- **Craig Martin** (CTO)
  - Email: craig@nordicglobalsolutions.com
  - Responsibilities: Hosting services, Discourse, n8n, version control

- **Jonne Waselius** (Backend Developer)
  - Email: Jonne@nordicglobalsolutions.com
  - Responsibilities: Real-time hosting, auth, backend, n8n, API, ports, Google Sync, PostgreSQL & vector database

- **Cory** (Junior Developer)
  - Email: (To be added)
  - Mentor: Jonne Waselius
  - Responsibilities: Junior development, code implementation, testing, documentation, learning & growth

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
- ❌ **Don't leave files in wrong locations** - Move them immediately
- ❌ **Don't ignore your todolist** - You MUST follow assigned tasks
- ❌ **Don't skip checking structure docs** - Always verify file location
- ❌ **Don't blame others for misplaced files** - You are responsible
- ❌ **Don't commit broken or untested code**
- ❌ **Don't commit API keys or sensitive data**
- ❌ **Don't update changelog after committing** (must be done BEFORE)
- ❌ **Don't create tasks without owners** - Every task MUST have `[Owner: Name]` or `[Owner: Role]`
- ❌ **Don't create folders without README.md and CHANGELOG.md** - This is mandatory
- ❌ **Don't modify core framework files** in `instructions/` without understanding the framework

### ✅ DO THESE

- ✅ **Always check your todolist** before starting work (`docs/Development/[YOUR_NAME]_TASKS.md`)
- ✅ **Always verify file location** before creating files (check `docs/Core Documentation/STRUCTURE.md`)
- ✅ **Always place files in correct locations** - Keep root clean
- ✅ **Always move misplaced files** if you find them - Don't leave for others
- ✅ **Always update CHANGELOG.md** before committing with developer tracking
- ✅ **Always create feature branch** for changes
- ✅ **Always test your code** before committing
- ✅ **Always follow project structure** (`docs/Core Documentation/STRUCTURE.md`)
- ✅ **Always create push change documentation** for every push
- ✅ **Always request CTO review** before merging to main
- ✅ **Always update documentation** when making changes
- ✅ **Always follow coding standards** (`.cursorrules`)
- ✅ **Always take responsibility** for following rules and maintaining structure
- ✅ **Always assign owners to tasks** - Use `[Owner: Name]` or `[Owner: Role]` pattern
- ✅ **Always create README.md and CHANGELOG.md** when creating new folders
- ✅ **Always check framework rules** in `rules/` folder when working with frameworks
- ✅ **Always reference `instructions/`** for complete framework documentation

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
   - **Craig Martin**: craig@nordicglobalsolutions.com (CTO, technical issues, Phoenix/Elixir)
   - **Jonne Waselius**: Jonne@nordicglobalsolutions.com (Backend, API, PostgreSQL/vector DB)
   - **Cory**: (To be added) (Junior Developer, mentored by Jonne)

---

## 📋 Quick Reference Checklist

### Before Starting Work

- [ ] Read `.cursorrules`
- [ ] Read `docs/Core Documentation/STRUCTURE.md`
- [ ] **Check your todolist** in `docs/Development/[YOUR_NAME]_TASKS.md` (MANDATORY)
- [ ] Join Admin & Developer Discord
- [ ] Register in `docs/Services/github/DEVELOPERS.md`
- [ ] Set up development environment
- [ ] Understand your responsibility to keep root clean and follow rules

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

**Remember these critical rules:**

1. **CHANGELOG.md MUST ALWAYS BE UPDATED** - Every change, no exceptions
2. **NEVER push directly to main** - Always use Pull Request workflow
3. **KEEP ROOT CLEAN** - Files MUST be where they belong, you are responsible
4. **FOLLOW YOUR TODOLIST** - Check `docs/Development/[YOUR_NAME]_TASKS.md` regularly
5. **YOU ARE RESPONSIBLE** - For following rules, maintaining structure, and keeping yourself updated

**Welcome to the team! 🚀**

---

**Last Updated**: January 2026  
**Version**: 1.3  
**Maintained by**: Development Team  
**Structure Framework**: NorthStar Rules (NSR) - Developed by NorthStar Team (Josef Lindbom & Craig Martin)  
**NSR Repository**: [https://github.com/zerwiz/NSR](https://github.com/zerwiz/NSR)  
**Structure License**: Licensed to NorthStar - Contact Josef or Craig for usage permissions

---

## 📌 Recent System Updates (New Team Members Should Know)

### Task Ownership System (v1.31.0)
- **Every task MUST have an owner** - No unowned tasks allowed
- Use pattern: `[Owner: Josef]`, `[Owner: Craig]`, `[Owner: Sales]`, `[Owner: Frontend]`, etc.
- Shared tasks use `[Owner: Shared]` with primary contact
- See `.cursorrules` for complete task ownership rules

### New Team Member: Cory (Junior Developer)
- Added to team with mentorship under Jonne Waselius
- Task file: `docs/Development/CORY_TASKS.md`
- Focus: Junior development, learning, and growth

### Instructions & Rules Folders (v1.20.0+)
- **`instructions/`** - External frameworks (BMAD-METHOD, .agent-os)
  - DO NOT modify core framework files without understanding the framework
  - Reference these for complete framework documentation
- **`rules/`** - Extracted rules from instruction frameworks
  - Quick reference for framework guidelines
  - Organized by framework, service, and folder
  - All rule folders have README.md and CHANGELOG.md

### Netlify Alpha Phase & AWS Migration (v1.29.0)
- **Netlify is in ALPHA PHASE** - Temporary hosting solution
- **AWS migration planned** - Production will move to AWS servers (EC2, ECS, Lambda, CloudFront, RDS)
- See `docs/Core Documentation/TECH_STACK.md` for migration plan

### Planned Technologies (v1.23.0+)
- **Phoenix/Elixir Backend** - Planned for high-concurrency APIs and ledger services
  - Craig Martin responsible for evaluation and implementation
- **PostgreSQL with Vector Extensions** - Planned for embeddings and similarity search
  - Jonne Waselius responsible for Postgres strategy and vector DB evaluation
  - Craig Martin must validate and approve final vector database choice (CRITICAL)

### Admin View & Task Management (v1.13.0)
- Real-time synchronization between UI and database
- Automatic task file sync from markdown files
- Task files auto-update database when markdown files change
- See `docs/Services/admin/SERVICE_RULES.md` for complete rules

### README/CHANGELOG Requirement (v1.22.0)
- **ALL folders MUST have README.md and CHANGELOG.md**
- This is mandatory for every folder in the project
- Create these files immediately when creating new folders


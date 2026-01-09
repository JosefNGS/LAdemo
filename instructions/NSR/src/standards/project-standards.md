# NSR Project Standards

**Purpose**: Project structure and organization standards for NSR-generated projects

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Owner**: NorthStar Team

---

## Folder Structure Standards

### Mandatory Folders
Every NSR-generated project MUST have:
- `frontend/` - Frontend application
- `backend/` - Backend services
- `developers/` - Developer profiles (source of truth)
- `instructions/` - External frameworks
- `rules/` - Extracted framework rules
- `docs/` - All documentation

### Mandatory Files in Every Folder
- `README.md` - Folder overview and purpose
- `CHANGELOG.md` - Change tracking (MANDATORY - NO EXCEPTIONS)

## File Organization Rules

### Root Directory
**Allowed in root**:
- `README.md` - Project overview
- `LICENSE` - Project license
- `package.json` - Node.js dependencies (if needed)
- `netlify.toml` - Netlify configuration (if using Netlify)
- `start.bat` / `start.sh` - Development launcher
- `.cursorrules` - IDE rules
- `.gitignore` - Git ignore rules

**Forbidden in root**:
- Random documentation files (must be in `docs/`)
- Service-specific files (must be in `backend/` or `frontend/`)
- Configuration files (must be in appropriate folders)

### Documentation Location
- **ALL documentation** → `docs/` folder
- **Product docs** → `docs/Product docs/`
- **Service docs** → `docs/Services/[service-name]/`
- **Development docs** → `docs/Development/`
- **Setup docs** → `docs/Setup & Configuration/`

### Backend Services
- **One folder per service** - No mixing services
- **Service folders** named after the service (e.g., `netlify/`, `phoenix/`, `elixir/`)
- **Service documentation** in `docs/Services/[service-name]/`

## Version Control Standards

### Branch Protection
- **Main branch is PROTECTED** - Production-ready only
- **ONLY CTO can merge to main** - All changes through PRs
- **NO direct pushes to main** - Always use Pull Request workflow

### Git Workflow
1. Create feature branch: `git checkout -b feature/your-feature-name`
2. Make changes and commit to feature branch
3. Create Pull Request from feature branch to main
4. Request review from CTO
5. CTO reviews and merges if production-ready

### Commit Requirements
Before committing:
- [ ] Code is tested and working
- [ ] No console errors
- [ ] Documentation updated (if needed)
- [ ] Follows project structure
- [ ] Follows coding standards
- [ ] **CRITICAL**: CHANGELOG.md updated with ALL changes
- [ ] Developer information updated in change documentation

## Task Management Standards

### Task Ownership
- **Every task MUST have an owner** - NO unowned tasks
- **Format**: `[Owner: Person]` or `[Owner: Role]`
- **Examples**: `[Owner: Josef]`, `[Owner: Frontend]`, `[Owner: CTO]`

### Task Synchronization
- **Bidirectional auto-update** - TODO ↔ Development docs
- **Auto-sync** - Changes in one location update the other
- **Source of truth** - Markdown files for task definitions, database for completion status

## Documentation Standards

### CHANGELOG Requirements
- **MANDATORY** - Every change MUST be logged
- **Developer tracking** - Include `[Developer: Name]` or `[Cursor]` tag
- **Location** - Update relevant CHANGELOG.md files
- **Format** - Follow Keep a Changelog format
- **Categories** - Added, Changed, Deprecated, Removed, Fixed, Security

### README Requirements
- **Every folder** - Must have README.md
- **Purpose** - Explain folder purpose, structure, and usage
- **Contents** - Folder overview, file organization, key files, documentation references

## Developer Profiles

### Location
- **Source of truth**: `developers/` folder in project root
- **Portable**: Profile files can be moved between projects
- **Format**: `[DEVELOPER_NAME].md` (e.g., `JOSEF_LINDBOM.md`)

### Contents
- Developer name, role, email
- Primary responsibilities
- Technical expertise
- Project-specific information

---

**Framework**: NSR (NorthStar Rules)  
**License**: MIT License - Copyright (c) 2026 NorthStar Team (Nordic Global Solutions)

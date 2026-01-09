# Rules Changelog

All notable changes to the rules directory will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**⚠️ CRITICAL - MANDATORY DEVELOPER TRACKING**:
Every changelog entry MUST track who made the change:
- **Developer entries**: `[Developer: Full Name]` - e.g., `[Developer: Josef Lindbom]`, `[Developer: Craig Martin]`, `[Developer: Jonne Waselius]`, `[Developer: Cory]`
- **Cursor/AI entries**: `[Cursor]` - e.g., `[Cursor]`
- **Format**: `- Description of change [Developer: Full Name]` or `- Description of change [Cursor]`
- **Purpose**: Accountability, tracking, audit trail, and responsibility assignment
- **NO EXCEPTIONS** - All entries must include developer/Cursor tracking
- **This is MANDATORY and STRICTLY ENFORCED**

## [1.4.0] - January 2026

### Changed
- **Admin Service Rules**: Comprehensive update from `docs/Services/admin/SERVICE_RULES.md` [Developer: Josef Lindbom]
  - Added detailed synchronization requirements (real-time, polling, error handling) [Developer: Josef Lindbom]
  - Added data consistency rules and conflict resolution [Developer: Josef Lindbom]
  - Added update triggers and refresh mechanisms [Developer: Josef Lindbom]
  - Added localStorage fallback rules [Developer: Josef Lindbom]
  - Added task service integration requirements [Developer: Josef Lindbom]
  - Added critical violations section [Developer: Josef Lindbom]
  - Expanded from basic rules to comprehensive service rules [Developer: Josef Lindbom]

- **Netlify Service Rules**: Updated with alpha phase status and migration plan [Developer: Josef Lindbom]
  - Added ALPHA PHASE status warning [Developer: Josef Lindbom]
  - Added AWS migration plan documentation [Developer: Josef Lindbom]
  - Added service-specific checklist [Developer: Josef Lindbom]
  - Added related documentation links [Developer: Josef Lindbom]
  - Expanded deployment rules and code standards [Developer: Josef Lindbom]

- **Development Server Rules**: Comprehensive update from `docs/Setup & Configuration/START_FILES_RULES.md` [Developer: Josef Lindbom]
  - Added mandatory start files rules (exactly TWO start files allowed) [Developer: Josef Lindbom]
  - Added start file definitions and purposes [Developer: Josef Lindbom]
  - Added forbidden actions section [Developer: Josef Lindbom]
  - Added cross-platform requirements [Developer: Josef Lindbom]
  - Expanded Docker setup documentation [Developer: Josef Lindbom]

- **GitHub Service Rules**: Enhanced with active developers section [Developer: Josef Lindbom]
  - Added active developers list [Developer: Josef Lindbom]
  - Added developer tracking requirements [Developer: Josef Lindbom]
  - Added service-specific checklist [Developer: Josef Lindbom]
  - Added related documentation links [Developer: Josef Lindbom]

### Added
- **Detailed Service Rules**: Expanded service rules with comprehensive information from docs [Developer: Josef Lindbom]
  - Admin service: Real-time sync, error handling, fallback mechanisms [Developer: Josef Lindbom]
  - Netlify service: Alpha phase status, AWS migration plan [Developer: Josef Lindbom]
  - Dev server: Start files critical rules, Docker setup [Developer: Josef Lindbom]
  - GitHub: Active developers, developer tracking [Developer: Josef Lindbom]

## [1.3.0] - January 2026

### Changed
- **All Rule Files**: Updated to reference `instructions/` folder as primary guide [Developer: Josef Lindbom]
  - Added PRIMARY GUIDE warnings to all rule files [Developer: Josef Lindbom]
  - Updated all rules to reference both Agent OS and BMAD-METHOD frameworks [Developer: Josef Lindbom]
  - Added complete framework documentation references with specific file paths [Developer: Josef Lindbom]
  - Enhanced framework references with detailed documentation locations [Developer: Josef Lindbom]
  - All rule files now guide users to `instructions/` for complete documentation [Developer: Josef Lindbom]

### Added
- **Framework References**: Added comprehensive framework documentation references to all rule files [Developer: Josef Lindbom]
  - Agent OS references: `instructions/.agent-os/standards/`, `instructions/.agent-os/instructions/` [Developer: Josef Lindbom]
  - BMAD-METHOD references: `instructions/BMAD-METHOD/docs/`, `instructions/BMAD-METHOD/src/` [Developer: Josef Lindbom]
  - Specific file paths for code style, security, deployment, workflows [Developer: Josef Lindbom]

---

## [1.2.0] - January 2026

### Added
- **Comprehensive Service Rules**: Created rules for all 8 services [Developer: Josef Lindbom]
  - `services/admin/rules.md` - Admin View & Task Management rules [Developer: Josef Lindbom]
  - `services/netlify/rules.md` - Netlify deployment rules [Developer: Josef Lindbom]
  - `services/PostgreSQL/rules.md` - PostgreSQL database rules [Developer: Josef Lindbom]
  - `services/github/rules.md` - GitHub version control rules [Developer: Josef Lindbom]
  - `services/n8n/rules.md` - n8n automation rules [Developer: Josef Lindbom]
  - `services/discourse/rules.md` - Discourse forum rules [Developer: Josef Lindbom]
  - `services/erlang-ledger/rules.md` - Erlang/Elixir ledger rules [Developer: Josef Lindbom]
  - `services/golang-api/rules.md` - Golang API rules [Developer: Josef Lindbom]
- **Folder Rules**: Created rules for major folders [Developer: Josef Lindbom]
  - `frontend/rules.md` - Frontend development rules [Developer: Josef Lindbom]
  - `backend/rules.md` - Backend development rules [Developer: Josef Lindbom]
  - `dev_server/rules.md` - Development server rules [Developer: Josef Lindbom]
  - `docs/rules.md` - Documentation rules [Developer: Josef Lindbom]
- **Services README**: Created `services/README.md` with service rules overview [Developer: Josef Lindbom]
- **Updated Main README**: Enhanced `README.md` with complete structure documentation [Developer: Josef Lindbom]

### Changed
- **README.md**: Updated with complete rules structure including all services and folders [Developer: Josef Lindbom]

---

## [1.1.0] - January 2026

### Added
- **Agent OS Rules**: Extracted rules from Agent OS framework [Developer: Josef Lindbom]
  - `agent-os/README.md` - Agent OS rules overview [Developer: Josef Lindbom]
  - `agent-os/code-style.md` - Code formatting, naming conventions, HTML/CSS/Tailwind style guidelines [Developer: Josef Lindbom]
  - `agent-os/best-practices.md` - DRY principles, simplicity, readability guidelines [Developer: Josef Lindbom]
  - `agent-os/security.md` - Core security principles and requirements [Developer: Josef Lindbom]
  - `agent-os/deployment.md` - Containerization and deployment requirements [Developer: Josef Lindbom]
- **BMAD-METHOD Rules**: Extracted rules from BMAD-METHOD framework [Developer: Josef Lindbom]
  - `bmad-method/README.md` - BMAD-METHOD rules overview [Developer: Josef Lindbom]
  - `bmad-method/workflow.md` - Workflow guidelines and agent usage [Developer: Josef Lindbom]
  - `bmad-method/structure.md` - Framework structure and organization rules [Developer: Josef Lindbom]
- **Main README**: Created `README.md` with rules directory overview [Developer: Josef Lindbom]

### Changed
- **Rules Structure**: Established rules directory structure mirroring system organization [Developer: Josef Lindbom]

---

## [1.0.0] - January 2026

### Added
- **Initial Rules Directory**: Created `rules/` folder structure [Developer: Josef Lindbom]
- **Rules Extraction**: Established process for extracting rules from frameworks and documentation [Developer: Josef Lindbom]
- **Source Tracking**: All rule files reference their source documentation [Developer: Josef Lindbom]

---

## Notes

- **Source Documentation**: All rules are extracted from `instructions/` frameworks and `docs/` documentation
- **Maintenance**: Rule files should be reviewed and updated when source documentation changes
- **Priority**: Project-specific rules in `.cursorrules` take precedence over framework rules
- **Integration**: Rules are integrated with `.cursorrules` for IDE usage

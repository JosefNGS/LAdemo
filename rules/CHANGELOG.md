# Rules Changelog

All notable changes to the rules directory will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**⚠️ CRITICAL - MANDATORY DEVELOPER TRACKING**:
Every changelog entry MUST track who made the change:
- **Developer entries**: `[Developer: Name]` - e.g., `[Developer: Josef Lindbom]`
- **Cursor/AI entries**: `[Cursor]` - e.g., `[Cursor]`
- **Format**: `- Description of change [Developer: Name]` or `- Description of change [Cursor]`
- **Purpose**: Accountability, tracking, audit trail, and responsibility assignment
- **NO EXCEPTIONS** - All entries must include developer/Cursor tracking
- **This is MANDATORY and STRICTLY ENFORCED**

## [1.4.0] - January 2026

### Changed
- **Admin Service Rules**: Comprehensive update from `docs/Services/admin/SERVICE_RULES.md` [Cursor]
  - Added detailed synchronization requirements (real-time, polling, error handling)
  - Added data consistency rules and conflict resolution
  - Added update triggers and refresh mechanisms
  - Added localStorage fallback rules
  - Added task service integration requirements
  - Added critical violations section
  - Expanded from basic rules to comprehensive service rules

- **Netlify Service Rules**: Updated with alpha phase status and migration plan [Cursor]
  - Added ALPHA PHASE status warning
  - Added AWS migration plan documentation
  - Added service-specific checklist
  - Added related documentation links
  - Expanded deployment rules and code standards

- **Development Server Rules**: Comprehensive update from `docs/Setup & Configuration/START_FILES_RULES.md` [Cursor]
  - Added mandatory start files rules (exactly TWO start files allowed)
  - Added start file definitions and purposes
  - Added forbidden actions section
  - Added cross-platform requirements
  - Expanded Docker setup documentation

- **GitHub Service Rules**: Enhanced with active developers section [Cursor]
  - Added active developers list
  - Added developer tracking requirements
  - Added service-specific checklist
  - Added related documentation links

### Added
- **Detailed Service Rules**: Expanded service rules with comprehensive information from docs [Cursor]
  - Admin service: Real-time sync, error handling, fallback mechanisms
  - Netlify service: Alpha phase status, AWS migration plan
  - Dev server: Start files critical rules, Docker setup
  - GitHub: Active developers, developer tracking

## [1.3.0] - January 2026

### Changed
- **All Rule Files**: Updated to reference `instructions/` folder as primary guide [Cursor]
  - Added PRIMARY GUIDE warnings to all rule files
  - Updated all rules to reference both Agent OS and BMAD-METHOD frameworks
  - Added complete framework documentation references with specific file paths
  - Enhanced framework references with detailed documentation locations
  - All rule files now guide users to `instructions/` for complete documentation

### Added
- **Framework References**: Added comprehensive framework documentation references to all rule files [Cursor]
  - Agent OS references: `instructions/.agent-os/standards/`, `instructions/.agent-os/instructions/`
  - BMAD-METHOD references: `instructions/BMAD-METHOD/docs/`, `instructions/BMAD-METHOD/src/`
  - Specific file paths for code style, security, deployment, workflows

---

## [1.2.0] - January 2026

### Added
- **Comprehensive Service Rules**: Created rules for all 8 services [Cursor]
  - `services/admin/rules.md` - Admin View & Task Management rules
  - `services/netlify/rules.md` - Netlify deployment rules
  - `services/supabase/rules.md` - Supabase database rules
  - `services/github/rules.md` - GitHub version control rules
  - `services/n8n/rules.md` - n8n automation rules
  - `services/discourse/rules.md` - Discourse forum rules
  - `services/erlang-ledger/rules.md` - Erlang/Elixir ledger rules
  - `services/golang-api/rules.md` - Golang API rules
- **Folder Rules**: Created rules for major folders [Cursor]
  - `frontend/rules.md` - Frontend development rules
  - `backend/rules.md` - Backend development rules
  - `dev_server/rules.md` - Development server rules
  - `docs/rules.md` - Documentation rules
- **Services README**: Created `services/README.md` with service rules overview [Cursor]
- **Updated Main README**: Enhanced `README.md` with complete structure documentation [Cursor]

### Changed
- **README.md**: Updated with complete rules structure including all services and folders [Cursor]

---

## [1.1.0] - January 2026

### Added
- **Agent OS Rules**: Extracted rules from Agent OS framework [Cursor]
  - `agent-os/README.md` - Agent OS rules overview
  - `agent-os/code-style.md` - Code formatting, naming conventions, HTML/CSS/Tailwind style guidelines
  - `agent-os/best-practices.md` - DRY principles, simplicity, readability guidelines
  - `agent-os/security.md` - Core security principles and requirements
  - `agent-os/deployment.md` - Containerization and deployment requirements
- **BMAD-METHOD Rules**: Extracted rules from BMAD-METHOD framework [Cursor]
  - `bmad-method/README.md` - BMAD-METHOD rules overview
  - `bmad-method/workflow.md` - Workflow guidelines and agent usage
  - `bmad-method/structure.md` - Framework structure and organization rules
- **Main README**: Created `README.md` with rules directory overview [Cursor]

### Changed
- **Rules Structure**: Established rules directory structure mirroring system organization [Cursor]

---

## [1.0.0] - January 2026

### Added
- **Initial Rules Directory**: Created `rules/` folder structure [Cursor]
- **Rules Extraction**: Established process for extracting rules from frameworks and documentation [Cursor]
- **Source Tracking**: All rule files reference their source documentation [Cursor]

---

## Notes

- **Source Documentation**: All rules are extracted from `instructions/` frameworks and `docs/` documentation
- **Maintenance**: Rule files should be reviewed and updated when source documentation changes
- **Priority**: Project-specific rules in `.cursorrules` take precedence over framework rules
- **Integration**: Rules are integrated with `.cursorrules` for IDE usage

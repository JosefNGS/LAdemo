# Core Documentation Changelog

All notable changes to core documentation will be documented in this file.

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

## [2.4] - January 2026

### Added
- **STRUCTURE.md**: Added complete NSR framework structure [Developer: Josef Lindbom]
  - NSR framework source (`src/`) with templates, rules, workflows, and standards [Developer: Josef Lindbom]
  - NSR configuration file (`config.yml`) [Developer: Josef Lindbom]
  - NSR license file (MIT License - NorthStar Team) [Developer: Josef Lindbom]
  - Updated NSR to reflect project generation framework capabilities [Developer: Josef Lindbom]

## [2.3] - January 2026

### Added
- **STRUCTURE.md**: Added `instructions/NSR/ref/` folder structure [Developer: Josef Lindbom]
  - Reference frameworks folder for NSR development [Developer: Josef Lindbom]
  - Agent OS and BMAD-METHOD reference copies [Developer: Josef Lindbom]
  - Reference frameworks documentation [Developer: Josef Lindbom]

## [2.2] - January 2026

### Added
- **STRUCTURE.md**: Added `developers/` folder structure [Developer: Josef Lindbom]
  - Developer profiles as source of truth [Developer: Josef Lindbom]
  - Portable profile files for each developer (JOSEF_LINDBOM.md, CRAIG_MARTIN.md, JONNE_WASELIUS.md, CORY.md) [Developer: Josef Lindbom]
- **STRUCTURE.md**: Added `instructions/NSR/` folder structure [Developer: Josef Lindbom]
- **STRUCTURE.md**: Added README.md and CHANGELOG.md files to various folders [Developer: Josef Lindbom]
  - `docs/` folder [Developer: Josef Lindbom]
  - `instructions/` folder [Developer: Josef Lindbom]
  - `docs/Services/github/` folder [Developer: Josef Lindbom]
  - `rules/services/` folder [Developer: Josef Lindbom]
  - `frontend/src/instructions/` folder [Developer: Josef Lindbom]
  - `frontend/src/instructions/NSR/` folder [Developer: Josef Lindbom]
  - `frontend/src/` subfolders (components, contexts, data, services, utils, pages) [Developer: Josef Lindbom]
  - `docs/Services/github/push-docs/` folder [Developer: Josef Lindbom]
- **STRUCTURE.md**: Added new frontend files [Developer: Josef Lindbom]
  - `userProfiles.ts` in `frontend/src/data/` [Developer: Josef Lindbom]
  - `profileNavigation.ts` in `frontend/src/utils/` [Developer: Josef Lindbom]

### Changed
- **STRUCTURE.md**: Updated to version 2.2 [Developer: Josef Lindbom]
- **STRUCTURE.md**: Updated frontend src structure to show all README.md and CHANGELOG.md files [Developer: Josef Lindbom]
- **STRUCTURE.md**: Updated Recent Updates section with latest changes [Developer: Josef Lindbom]

## [2.1] - January 2026

### Added
- Initial core documentation changelog [Developer: Josef Lindbom]
- TECH_STACK_EVALUATION.md - Tech stack evaluation document [Developer: Josef Lindbom]
- TECH_STACK_SUGGESTIONS.md - Tech stack suggestions document [Developer: Josef Lindbom]
- README.md - Core Documentation folder overview [Developer: Josef Lindbom]

### Changed
- **DOCS_STRUCTURE.md**: Added CORY_TASKS.md to task tracking file list [Developer: Josef Lindbom]
- **STRUCTURE.md**: Comprehensive update to reflect full current project structure [Developer: Josef Lindbom]
  - Added `instructions/` folder structure (BMAD-METHOD framework)
  - Added `rules/` folder structure (extracted framework rules)
  - Updated Development folder to include all owner files and BMAD-METHOD planning docs
  - Updated Services to include all current services (admin, postgresql, supabase, etc.)
  - Updated Project Management to include all planning documents
  - Updated frontend services to reflect current files (taskFileService, taskSyncService)
  - Updated backend structure to include README.md and CHANGELOG.md
  - Updated file count summary
  - Version updated to 2.1

---

## Notes

- **Location**: `docs/Core Documentation/CHANGELOG.md`
- **Maintained By**: Development Team
- **Update Frequency**: Every change to core documentation must be logged here
- **Core Documents**: STRUCTURE.md, DOCS_STRUCTURE.md, TECH_STACK.md

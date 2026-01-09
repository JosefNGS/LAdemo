# Backend Changelog

All notable changes to backend services will be documented in this file.

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

## [1.2.0] - January 2026

### Added
- **Supabase Database Service**: Created backend/supabase folder for Team Task Management database [Developer: Josef Lindbom]
  - Created complete database schema with migrations [Developer: Josef Lindbom]
  - Created team_members and team_tasks tables [Developer: Josef Lindbom]
  - Created indexes and RLS policies [Developer: Josef Lindbom]
  - Created README.md and CHANGELOG.md [Developer: Josef Lindbom]

## [1.1.0] - January 2026

### Added
- **LocalStorage Service**: Created backend/localstorage folder for browser memory management [Developer: Josef Lindbom]
  - Added README.md with service overview and documentation [Developer: Josef Lindbom]
  - Added CHANGELOG.md for tracking changes [Developer: Josef Lindbom]
  - Established folder structure for localStorage management services [Developer: Josef Lindbom]
  - Defined service purpose: browser memory management and data synchronization [Developer: Josef Lindbom]

## [Unreleased]

### Added
- Initial backend changelog [Developer: Josef Lindbom]

---

## Notes

- **Location**: `backend/CHANGELOG.md`
- **Maintained By**: Development Team
- **Update Frequency**: Every change to backend services must be logged here
- **Service-Specific Changelogs**: Each service folder should also have its own CHANGELOG.md

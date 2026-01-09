# Documentation

## Overview
This folder contains all project documentation, organized by purpose and topic.

## Purpose
The `docs/` folder serves as the central repository for all project documentation, including:
- Core system documentation
- Development planning and task management
- Service-specific documentation
- Product documentation
- Setup and configuration guides
- UI and feature documentation

## Folder Structure

### Core Documentation
- **`Core Documentation/`** - Structure, tech stack, documentation organization
- **`Development/`** - Developer docs, task lists, planning documents
- **`Project Management/`** - TODO lists, changelogs, planning documents
- **`Services/`** - Service-specific documentation (one folder per service)
- **`Setup & Configuration/`** - Setup guides, troubleshooting, configuration
- **`UI & Features/`** - UI documentation, feature specs, best practices
- **`Product docs/`** - Product documentation (organized by topic)

## Key Files

### Main Documentation
- **`Core Documentation/STRUCTURE.md`** - Main source for project structure
- **`Core Documentation/DOCS_STRUCTURE.md`** - Documentation organization guide
- **`Project Management/TODO.md`** - Central task list
- **`Project Management/CHANGELOG.md`** - Main project changelog

### Service Documentation
Each service has its own folder under `Services/` with:
- `SERVICE_RULES.md` - Service-specific rules
- `README.md` - Service overview
- `CHANGELOG.md` - Service changelog
- Additional service-specific documentation

## Documentation Standards

### README.md and CHANGELOG.md
- **ALL folders MUST have README.md and CHANGELOG.md** (CRITICAL)
- README.md explains folder purpose, structure, and usage
- CHANGELOG.md tracks all changes made within the folder

### Developer Tracking
- All CHANGELOG entries MUST include `[Developer: Name]` or `[Cursor]` tag
- Format: `- Description of change [Developer: Name]` or `- Description of change [Cursor]`

## Related Documentation
- **Project Structure**: `docs/Core Documentation/STRUCTURE.md`
- **Documentation Organization**: `docs/Core Documentation/DOCS_STRUCTURE.md`
- **Cursor Rules**: `.cursorrules`

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Active

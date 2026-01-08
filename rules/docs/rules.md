# Documentation Rules

**Source**: `docs/Core Documentation/DOCS_STRUCTURE.md` and `.cursorrules`

## Critical Rules

### Documentation Location
- **ALL documentation files MUST be in**: `docs/` folder
- **NO `.md` files in root directory** (except `README.md` and `START_HERE.md`)
- **Organized by purpose** - Follow `DOCS_STRUCTURE.md`

### Documentation Organization
- **Core Documentation**: `docs/Core Documentation/` - System structure and tech stack
- **Development**: `docs/Development/` - Development planning and tasks
- **Product docs**: `docs/Product docs/` - Product documentation
- **Project Management**: `docs/Project Management/` - Changelog, status, TODO
- **Services**: `docs/Services/` - Service-specific documentation (one folder per service)
- **Setup & Configuration**: `docs/Setup & Configuration/` - Setup guides
- **UI & Features**: `docs/UI & Features/` - UI and feature documentation

### Documentation Standards
- **Markdown format** (`.md` files)
- **Clear structure** with headers
- **Version tracking** in changelogs
- **Last updated dates** in headers
- **Developer tracking** in changelogs (mandatory)

### Service Documentation
- **Each service has its own folder** in `docs/Services/`
- **SERVICE_RULES.md** required for each service
- **CHANGELOG.md** required for each service
- **Service-specific documentation** in service folder

## CRITICAL Rules

- ✅ **All docs in `docs/` folder** - Correct location
- ✅ **Follow DOCS_STRUCTURE.md** - Use defined organization
- ✅ **Service documentation** - Required for each service
- ✅ **Changelog updates** - Mandatory for all changes
- ✅ **Developer tracking** - Required in all changelogs
- ❌ **Never create docs in root** - Must be in `docs/`
- ❌ **Never skip changelog updates** - It's mandatory
- ❌ **Never skip developer tracking** - Required in changelogs

# Documentation Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Core Documentation/DOCS_STRUCTURE.md` and `.cursorrules`

**Complete Framework Documentation**:
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Documentation structure, style guides, organization
- **Agent OS**: `instructions/.agent-os/` - Code documentation standards, best practices

**Framework References**:
- `instructions/BMAD-METHOD/docs/` - Complete documentation structure and guidelines
- `instructions/BMAD-METHOD/docs/_STYLE_GUIDE.md` - Documentation style guide
- `instructions/.agent-os/standards/code-style.md` - Code documentation standards
- `instructions/.agent-os/standards/best-practices.md` - Documentation best practices
- `instructions/.agent-os/instructions/core/` - Documentation workflow instructions

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

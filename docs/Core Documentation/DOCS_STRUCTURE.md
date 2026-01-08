# Documentation Folder Structure
## Complete Organization Guide for `docs/` Directory

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Authoritative Source for Documentation Organization

**⚠️ CRITICAL**: This document defines how ALL documentation files in `docs/` must be organized. All files must follow this structure.

---

## 📁 Complete Documentation Structure

```
docs/
├── Product docs/                    # Product documentation (organized by topic)
│   ├── Pitch Deck & Presentations/  # Pitch decks and presentation materials
│   ├── Business & Strategy/        # Business planning and strategy docs
│   ├── Technical Documentation/    # Technical specs and documentation
│   ├── Legal & Compliance/         # Legal protection documentation
│   └── Tokenomics/                  # Tokenomics and credit system
│
├── Services/                        # Service-specific documentation (one folder per service)
│   ├── netlify/                     # Netlify service documentation
│   │   ├── DEPLOYMENT.md
│   │   ├── NETLIFY_SETUP.md
│   │   ├── NETLIFY_BUILD_TROUBLESHOOTING.md
│   │   ├── NETLIFY_DEPLOYMENT_*.md (all Netlify deployment docs)
│   │   └── NETLIFY_*.md (all Netlify-related docs)
│   │
│   ├── supabase/                    # Supabase service documentation
│   │   ├── SUPABASE_SETUP.md
│   │   ├── SUPABASE_QUICK_START.md
│   │   └── supabase-migration.sql
│   │
│   ├── github/                      # GitHub service documentation
│   │   ├── GITHUB_SETUP.md
│   │   ├── GITHUB_PUSH_INSTRUCTIONS.md
│   │   ├── GITHUB_PUSH_SUMMARY.md
│   │   └── VERSION_CONTROL.md
│   │
│   ├── n8n/                         # n8n automation service documentation (planned)
│   │   └── (n8n workflow docs when implemented)
│   │
│   └── discourse/                   # Discourse forum service documentation (planned)
│       └── (Discourse setup docs when implemented)
│
├── Development/                     # Development planning and implementation docs
│   ├── Development planning docs/   # Planning documents
│   │   ├── IMPLEMENTATION_PLAN.md
│   │   ├── AFFILIATE_PROGRAM_ARCHITECTURE.md
│   │   └── (other planning docs)
│   │
│   ├── DEVELOPER_DOCS.md            # Developer documentation
│   ├── TEAM_DOCUMENTATION_RESPONSIBILITIES.md
│   ├── JOSEF_TASKS.md               # Josef's task tracking (synced with TODO.md)
│   ├── CRAIG_TASKS.md               # Craig's task tracking (synced with TODO.md)
│   ├── JONNE_TASKS.md               # Jonne's task tracking (synced with TODO.md)
│   ├── SVEIN_TASKS.md               # Svein's task tracking (synced with TODO.md)
│   ├── LEE_TASKS.md                 # Lee's task tracking (synced with TODO.md)
│   └── (development-related docs)
│
├── Setup & Configuration/           # Setup, configuration, and troubleshooting
│   ├── API_SETUP.md                 # API configuration (Gemini, etc.)
│   ├── EMAIL_COLLECTION_SETUP.md
│   ├── SETUP_CHECKLIST.md
│   ├── TROUBLESHOOTING.md
│   ├── LOCAL_BUILD_TEST.md
│   ├── DEPENDENCY_CHECK.md
│   └── VERIFICATION.md
│
├── Project Management/              # Project tracking and status
│   ├── TODO.md                      # Project task tracking and roadmap
│   ├── PROJECT_STATUS.md            # Project status and overview
│   ├── CHANGELOG.md                 # Project changelog
│   └── DOCUMENTATION_INDEX.md       # Documentation index
│
├── Core Documentation/              # Core system documentation
│   ├── STRUCTURE.md                 # Project structure reference
│   ├── TECH_STACK.md                # Technology stack documentation
│   ├── VERSION_CONTROL.md           # Version control and Git workflow
│   └── RESPONSIVE_FIXES_SUMMARY.md  # UI/UX fixes documentation
│
└── UI & Features/                   # UI and feature documentation
    ├── COMPLETE_UI_DOCUMENTATION.md  # Complete UI documentation
    ├── UI_DOCUMENTATION.md           # UI documentation
    ├── USER_TYPES.md                 # User type definitions
    ├── FINANCIAL_FREEDOM_ENHANCEMENTS.md
    └── QUICK_WINS_FINANCIAL_FREEDOM.md
```

---

## 🚫 CRITICAL RULES - STRICTLY ENFORCED

### Rule 1: Service-Based Organization
**MANDATORY**:
- **ALL service-specific documentation MUST be in `docs/Services/service-name/`**
- **One folder per service** - No mixing of services in the same folder
- **Service folders should be named after the service** (e.g., `netlify/`, `supabase/`, `github/`)

**Service Documentation Rules**:
1. **Netlify**: All Netlify-related docs go in `docs/Services/netlify/`
2. **Supabase**: All Supabase-related docs go in `docs/Services/supabase/`
3. **GitHub**: All GitHub-related docs go in `docs/Services/github/`
4. **n8n**: All n8n-related docs go in `docs/Services/n8n/` (when implemented)
5. **Discourse**: All Discourse-related docs go in `docs/Services/discourse/` (when implemented)

### Rule 2: Development Documentation
**MANDATORY**:
- **ALL development planning docs MUST be in `docs/Development/`**
- **Planning documents** go in `docs/Development/Development planning docs/`
- **Developer guides** go in `docs/Development/`

### Rule 3: Setup & Configuration
**MANDATORY**:
- **ALL setup, configuration, and troubleshooting docs go in `docs/Setup & Configuration/`**
- **API setup docs** go here
- **Troubleshooting guides** go here
- **Setup checklists** go here

### Rule 4: Project Management
**MANDATORY**:
- **ALL project tracking docs go in `docs/Project Management/`**
- **TODO.md** goes here
- **PROJECT_STATUS.md** goes here
- **CHANGELOG.md** goes here

### Rule 5: Core Documentation
**MANDATORY**:
- **ALL core system docs go in `docs/Core Documentation/`**
- **STRUCTURE.md** goes here
- **TECH_STACK.md** goes here
- **VERSION_CONTROL.md** goes here

### Rule 6: UI & Features
**MANDATORY**:
- **ALL UI and feature docs go in `docs/UI & Features/`**
- **UI documentation** goes here
- **Feature documentation** goes here

---

## 📂 Folder Purpose Reference

### `docs/Services/`
**Purpose**: Service-specific documentation (one folder per service)
- Netlify deployment and hosting
- Supabase database setup
- GitHub version control
- n8n automation (planned)
- Discourse forum (planned)

### `docs/Development/`
**Purpose**: Development planning and implementation
- Implementation plans
- Development architecture
- Developer guides
- Team responsibilities

### `docs/Setup & Configuration/`
**Purpose**: Setup, configuration, and troubleshooting
- API setup guides
- Configuration instructions
- Troubleshooting guides
- Setup checklists

### `docs/Project Management/`
**Purpose**: Project tracking and status
- Task tracking (TODO.md)
- Project status
- Changelog
- Documentation index

### `docs/Core Documentation/`
**Purpose**: Core system documentation
- Project structure
- Technology stack
- Version control
- System architecture

### `docs/UI & Features/`
**Purpose**: UI and feature documentation
- UI component documentation
- Feature specifications
- User type definitions
- Enhancement documentation

### `docs/Product docs/`
**Purpose**: Product documentation (organized by topic)
- Pitch decks and presentations
- Business and strategy
- Technical documentation
- Legal and compliance
- Tokenomics

---

## 🔄 File Organization Rules

### When Adding New Documentation:

1. **Service Documentation**:
   - Create folder in `docs/Services/service-name/`
   - Add service-specific docs there
   - Never mix services in same folder

2. **Development Documentation**:
   - Planning docs → `docs/Development/Development planning docs/`
   - Developer guides → `docs/Development/`

3. **Setup Documentation**:
   - Setup guides → `docs/Setup & Configuration/`
   - Troubleshooting → `docs/Setup & Configuration/`

4. **Project Management**:
   - Task tracking → `docs/Project Management/`
   - Status docs → `docs/Project Management/`

5. **Core Documentation**:
   - Structure docs → `docs/Core Documentation/`
   - Tech stack → `docs/Core Documentation/`

6. **UI & Features**:
   - UI docs → `docs/UI & Features/`
   - Feature docs → `docs/UI & Features/`

---

## ✅ Verification Checklist

Before committing documentation changes:

- [ ] File is in correct service folder (if service-specific)
- [ ] File follows folder structure defined here
- [ ] No random files in `docs/` root (except Product docs/)
- [ ] Service folders are properly named
- [ ] Documentation is organized by purpose
- [ ] Related docs are grouped together

---

## 📝 File Naming Conventions

### Service Documentation:
- `SERVICE_NAME_SETUP.md` - Setup guides
- `SERVICE_NAME_DEPLOYMENT.md` - Deployment guides
- `SERVICE_NAME_TROUBLESHOOTING.md` - Troubleshooting

### Development Documentation:
- `IMPLEMENTATION_PLAN.md` - Implementation plans
- `DEVELOPER_DOCS.md` - Developer guides
- `ARCHITECTURE.md` - Architecture docs

### Setup Documentation:
- `API_SETUP.md` - API setup
- `SETUP_CHECKLIST.md` - Setup checklists
- `TROUBLESHOOTING.md` - Troubleshooting

---

**This document defines how ALL documentation in `docs/` must be organized. Always refer to this file when organizing documentation.**


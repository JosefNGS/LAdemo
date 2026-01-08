# BitNexus Project Structure
## Complete Folder Organization & File Structure Guide

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Authoritative Source for Project Structure

**⚠️ CRITICAL**: This document is the **MAIN SOURCE** for project structure. All files must follow this structure. No exceptions.

---

## 📁 Complete Project Structure

```
BitNexus Landing Page/
├── frontend/                      # Frontend application
│   ├── index.html                 # Main HTML with landing page & React setup
│   ├── docs.html                  # Documentation page
│   ├── manifesto.html             # Manifesto page
│   ├── src/                       # React source code
│   │   ├── main.tsx               # React entry point
│   │   ├── App.tsx                 # Main app component with routing
│   │   ├── types.ts                # TypeScript type definitions
│   │   ├── constants.tsx           # Constants, icons, and shared data
│   │   ├── pages/                  # Page components (Dashboard, Marketplace, Alliance, Forum, etc.)
│   │   ├── components/             # Reusable components (Layout, ProductDetailDrawer, etc.)
│   │   ├── contexts/               # React contexts (CartContext)
│   │   └── services/               # API services and utilities
│   ├── public/                     # Static assets
│   │   └── _redirects              # Netlify SPA routing
│   ├── dist/                       # Production build output (generated)
│   ├── build.js                    # Production build script
│   ├── server.js                   # Node.js dev server with TypeScript transpilation
│   └── server.py                   # Python dev server (fallback)
│
├── Dev server/                     # ⚠️ CRITICAL: ALL development server files MUST be here
│   ├── server.js                   # Development server script (if moved from frontend/)
│   ├── server.py                   # Fallback Python server (if moved from frontend/)
│   ├── config/                     # Development server configuration
│   └── ... (all development server related files)
│
├── backend/                        # Backend services (one folder per service)
│   ├── netlify/                    # Netlify serverless functions
│   │   └── functions/               # Serverless functions
│   │       ├── submit-email.js
│   │       ├── submit-email-airtable.js
│   │       └── submit-email-supabase.js
│   ├── n8n/                        # n8n automation service (planned)
│   │   └── workflows/               # n8n workflow configurations
│   ├── discourse/                  # Discourse forum service (planned)
│   │   └── config/                 # Discourse configuration files
│   ├── erlang-ledger/              # Erlang/Elixir blockchain ledger (planned)
│   │   └── lib/                    # Erlang/Elixir source code
│   └── golang-api/                 # Go API services (planned)
│       └── cmd/                    # Application entry points
│
├── docs/                           # Documentation folder
│   ├── Product docs/                # Product documentation (organized by topic)
│   │   ├── Pitch Deck & Presentations/  # Pitch decks and presentation materials
│   │   │   ├── PITCH_DECK.md
│   │   │   ├── PITCH_DECK_SPEAKER_NOTES.md
│   │   │   ├── PRODUCT_PRESENTATION.md
│   │   │   └── PRODUCT_PRESENTATION_SLIDES.md
│   │   ├── Business & Strategy/          # Business planning and strategy docs
│   │   │   ├── BITNEXUS_ONE_PAGER.md
│   │   │   ├── BUSINESS_MODEL_CANVAS.md
│   │   │   ├── MARKET_ANALYSIS.md
│   │   │   ├── REVENUE_PLAN.md
│   │   │   └── SWOT_ANALYSIS.md
│   │   ├── Technical Documentation/      # Technical specs and documentation
│   │   │   ├── COMPLETE_UI_DOCUMENTATION.md
│   │   │   ├── PLATFORM_OVERVIEW.md
│   │   │   ├── TRUST_BUILDING_SYSTEM.md
│   │   │   └── USER_FLOW_LOGIC.md
│   │   ├── Legal & Compliance/           # Legal protection documentation
│   │   │   └── LEGAL_PROTECTIONS.md
│   │   └── Tokenomics/                    # Tokenomics and credit system
│   │       └── NXC_CREDITS_EXPLANATION.md
│   ├── STRUCTURE.md                 # This file - Main structure reference
│   ├── TECH_STACK.md                # Technology stack documentation
│   ├── TODO.md                      # Project task tracking and roadmap
│   ├── DEPLOYMENT.md                # Netlify deployment guide
│   ├── API_SETUP.md                 # Gemini API configuration guide
│   ├── PROJECT_STATUS.md            # Project status and overview
│   └── ... (other docs)
│
├── .github/                        # GitHub-specific files
│   ├── LICENSE                      # Must match root LICENSE
│   └── README.md                    # Must match root README.md
│
├── start.bat                        # Development server launcher (Windows)
├── package.json                     # Node.js dependencies
├── netlify.toml                     # Netlify configuration
├── LICENSE                          # Project license (must match .github/LICENSE)
├── README.md                        # Project documentation (must match .github/README.md)
└── .cursorrules                     # Cursor IDE rules
```

---

## 🚫 CRITICAL RULES - STRICTLY ENFORCED

### Rule 1: NO RANDOM FILES IN ROOT
**MANDATORY**: 
- **ALL files must be organized according to folder structure**
- **NO files in root directory except**:
  - `README.md` (project overview)
  - `LICENSE` (project license)
  - `package.json` (Node.js dependencies)
  - `netlify.toml` (Netlify configuration)
  - `start.bat` (development launcher)
  - `.cursorrules` (IDE rules)
  - `.gitignore` (Git ignore rules)

**What Goes Where**:
- ✅ **Frontend files** → `frontend/`
- ✅ **Backend files** → `backend/` (one folder per service)
- ✅ **Documentation** → `docs/` (organized by purpose)
- ✅ **GitHub files** → `.github/`
- ❌ **NO other files in root** - Move to appropriate folder immediately

### Rule 2: Development Server Location - CRITICAL
**MANDATORY - CRITICAL**:
- **ALL development server files MUST be in**: `Dev server/` folder
- **Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\Dev server\`
- **NO development server files in root or other locations**
- **This is CRITICAL for project organization**

**Development Server Files**:
- Development server scripts (`server.js`, `server.py`)
- Development server configuration
- Development server dependencies
- Development server logs (if any)
- All files related to running the development server

**What Goes Where**:
- ✅ **Development server files** → `Dev server/`
- ❌ **NO development server files in root** - Move to `Dev server/` immediately

**If you find development server files in wrong location**:
1. **Move files to `Dev server/`** immediately
2. **Update any references** to the moved files
3. **Never leave development server files in root** or other locations

### Rule 3: Backend Service Organization
**MANDATORY**: 
- **Each backend service MUST have its own folder** under `backend/`
- **One folder per service** - No mixing of services in the same folder
- **Service folders should be named after the service** (e.g., `n8n/`, `discourse/`, `netlify/`)

**Backend Structure Rules**:
1. **Netlify Functions**: `backend/netlify/functions/` - Serverless functions
2. **n8n Automation**: `backend/n8n/` - Workflow automation service (planned)
3. **Discourse Forum**: `backend/discourse/` - Forum service (planned)
4. **Future Services**: Each new service gets its own folder under `backend/`
   - Example: `backend/erlang-ledger/` for blockchain ledger service
   - Example: `backend/golang-api/` for Go API services

### Rule 4: Service Rules Documentation
**MANDATORY**:
- **Each service MUST have a SERVICE_RULES.md file** in `docs/Services/service-name/`
- **Service rules define critical requirements** for each service
- **All service rules are linked in cursor rules**

**Service Rules Files**:
- `docs/Services/netlify/SERVICE_RULES.md` - Netlify service rules
- `docs/Services/supabase/SERVICE_RULES.md` - Supabase service rules
- `docs/Services/github/SERVICE_RULES.md` - GitHub service rules
- `docs/Services/n8n/SERVICE_RULES.md` - n8n service rules
- `docs/Services/discourse/SERVICE_RULES.md` - Discourse service rules
- `docs/Services/erlang-ledger/SERVICE_RULES.md` - Erlang/Elixir ledger service rules
- `docs/Services/golang-api/SERVICE_RULES.md` - Golang API service rules

**When working with a service**:
1. **Check the service rules** first
2. **Follow all rules** defined in SERVICE_RULES.md
3. **Update service rules** if adding new requirements

### Rule 5: Documentation Organization
**MANDATORY**: 
- **ALL documentation files MUST be in the `docs/` folder**
- **NO `.md` files in root directory** (except `README.md` which is required for GitHub)
- **Documentation must be organized by purpose**:
  - `docs/Product docs/` - Product documentation (organized by topic)
  - `docs/` - System documentation (deployment, setup, troubleshooting, etc.)

**Documentation Structure**:
- ✅ `docs/Product docs/` - Product documentation (Pitch Deck, Revenue Plan, Market Analysis, etc.)
- ✅ `docs/` - System documentation (DEPLOYMENT.md, API_SETUP.md, PROJECT_STATUS.md, etc.)
- ✅ `README.md` - Only this file in root (brief project overview)
- ❌ **NO other `.md` files in root** - Move to `docs/` immediately

### Rule 4: GitHub Files Must Match
**MANDATORY**: 
- **`.github/LICENSE` MUST be identical to root `LICENSE`**
- **`.github/README.md` MUST be identical to root `README.md`**
- **When updating LICENSE or README.md, ALWAYS update both locations**

---

## 📂 Folder Purpose & Organization

### Frontend (`frontend/`)
**Purpose**: All frontend application files
- **HTML files**: Landing page, docs, manifesto
- **Source code**: React/TypeScript application
- **Static assets**: Images, fonts, etc.
- **Build scripts**: Production build and dev server
- **Output**: Production build goes to `frontend/dist/`

### Backend (`backend/`)
**Purpose**: All backend services (one folder per service)
- **Netlify**: Serverless functions
- **n8n**: Workflow automation (planned)
- **Discourse**: Forum service (planned)
- **Other services**: Each service gets its own folder

### Documentation (`docs/`)
**Purpose**: All project documentation
- **Product docs**: Business, technical, legal documentation
- **System docs**: Deployment, setup, troubleshooting guides
- **Structure**: This file - main structure reference

### Root Directory
**Purpose**: Project configuration and entry points only
- **Configuration**: `package.json`, `netlify.toml`, `.cursorrules`
- **Entry points**: `start.bat`, `README.md`, `LICENSE`
- **NO other files** - Everything else goes to appropriate folders

---

## 🔄 When Adding New Files

### Adding Frontend Files
1. **React components** → `frontend/src/components/`
2. **Pages** → `frontend/src/pages/`
3. **Services** → `frontend/src/services/`
4. **Types** → `frontend/src/types.ts`
5. **Static assets** → `frontend/public/`

### Adding Backend Services
1. **Create new folder** under `backend/` named after the service
2. **Add service-specific files** in that folder
3. **Update documentation** to reflect the new service
4. **Never mix services** in the same folder

### Adding Documentation
1. **Product docs** → `docs/Product docs/` (organized by topic)
2. **System docs** → `docs/` (deployment, setup, etc.)
3. **Structure reference** → Update `docs/STRUCTURE.md` (this file)
4. **Never add `.md` files to root** (except `README.md`)

---

## ✅ Verification Checklist

Before committing changes, verify:
- [ ] No random files in root directory
- [ ] All frontend files are in `frontend/`
- [ ] All backend files are in `backend/` (one folder per service)
- [ ] All documentation is in `docs/` (organized by purpose)
- [ ] `.github/LICENSE` matches root `LICENSE`
- [ ] `.github/README.md` matches root `README.md`
- [ ] All file paths in code reference correct structure
- [ ] Build scripts use correct paths (`frontend/src/`, `backend/netlify/functions/`)

---

## 📝 Team Responsibilities

### Josef Lindbom (COO & Development Vision Lead)
**Documentation Responsibilities**:
- UX/UI documentation
- User flow logic documentation
- Overall platform logic documentation
- Product documentation coordination

### Craig Martin (CTO)
**Documentation Responsibilities**:
- Hosting services documentation
- Discourse (forum) documentation
- n8n automation documentation
- Technical infrastructure documentation

### Jonne Waselius (Backend Developer)
**Documentation Responsibilities**:
- Hosting real-time services documentation
- Authentication documentation
- Backend API documentation
- n8n integration documentation
- API endpoints and ports documentation
- Google services sync documentation

---

**This document is the authoritative source for project structure. Always refer to this file when organizing files or folders.**

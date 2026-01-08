# BitNexus Project Structure
## Complete Folder Organization & File Structure Guide

**Last Updated**: January 2026  
**Version**: 2.0  
**Status**: Authoritative Source for Project Structure

**⚠️ CRITICAL**: This document is the **MAIN SOURCE** for project structure. All files must follow this structure. No exceptions.

---

## 📁 Complete Project Structure

```
BitNexus Landing Page/
├── frontend/                          # Frontend application
│   ├── index.html                     # Main HTML with landing page & React setup
│   ├── docs.html                      # Documentation page
│   ├── manifesto.html                 # Manifesto page
│   ├── src/                           # React source code
│   │   ├── main.tsx                   # React entry point
│   │   ├── App.tsx                    # Main app component with routing
│   │   ├── types.ts                   # TypeScript type definitions
│   │   ├── constants.tsx              # Constants, icons, and shared data
│   │   ├── pages/                     # Page components (35+ pages)
│   │   │   ├── About.tsx
│   │   │   ├── Academy.tsx
│   │   │   ├── AdminView.tsx
│   │   │   ├── AffiliateManager.tsx
│   │   │   ├── Alliance.tsx
│   │   │   ├── AllUsers.tsx
│   │   │   ├── Auth.tsx
│   │   │   ├── BotLab.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── Chat.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── ContentGenerator.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Earn.tsx
│   │   │   ├── Feed.tsx
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── Forum.tsx
│   │   │   ├── Friends.tsx
│   │   │   ├── GettingStarted.tsx
│   │   │   ├── Goals.tsx
│   │   │   ├── Governance.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Manifesto.tsx
│   │   │   ├── Marketplace.tsx
│   │   │   ├── MyProducts.tsx
│   │   │   ├── News.tsx
│   │   │   ├── NexusHub.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Support.tsx
│   │   │   ├── TaskChecklistView.tsx
│   │   │   ├── TeamProfile.tsx
│   │   │   ├── TokenShop.tsx
│   │   │   ├── Users.tsx
│   │   │   └── Vetting.tsx
│   │   ├── components/                 # Reusable components
│   │   │   ├── AdminLoginModal.tsx
│   │   │   ├── GettingStartedModal.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── NotificationBell.tsx
│   │   │   ├── PlatformAdminUsers.tsx
│   │   │   ├── ProductDetailDrawer.tsx
│   │   │   ├── ProductUploadForm.tsx
│   │   │   └── TeamTaskChecklist.tsx
│   │   ├── contexts/                   # React contexts
│   │   │   ├── CartContext.tsx
│   │   │   └── NotificationContext.tsx
│   │   ├── data/                       # Data files
│   │   │   └── teamProfiles.ts
│   │   ├── services/                   # API services and utilities
│   │   │   ├── geminiService.ts
│   │   │   ├── supabaseService.ts
│   │   │   └── taskService.ts
│   │   └── utils/                      # Utility functions
│   │       └── marketingAssets.ts
│   ├── public/                         # Static assets
│   │   └── _redirects                  # Netlify SPA routing
│   ├── dist/                           # Production build output (generated)
│   │   ├── _redirects
│   │   ├── docs.html
│   │   ├── index.html
│   │   ├── manifesto.html
│   │   └── src/
│   │       └── main.js
│   ├── build.js                        # Production build script
│   ├── server.js                       # Node.js dev server with TypeScript transpilation
│   └── server.py                       # Python dev server (fallback)
│
├── dev_server/                         # Development server folder
│   ├── README.md                       # Development server documentation
│   ├── CHANGELOG.md                    # Development server changelog
│   ├── start_dev_server.bat            # Full development server launcher (Docker Compose - starts EVERYTHING) (Windows)
│   ├── start_dev_server.sh             # Full development server launcher (Docker Compose - starts EVERYTHING) (Mac/Linux)
│   ├── stop_dev_server.bat             # Stop full development server (Windows)
│   ├── stop_dev_server.sh              # Stop full development server (Mac/Linux)
│   ├── Dockerfile                      # Docker container definition
│   ├── docker-compose.yml              # Multi-service Docker Compose configuration
│   ├── .dockerignore                   # Files to exclude from Docker build
│   ├── docker-entrypoint.sh            # Container entrypoint script (optional)
│   └── config/                         # Development server configuration
│       ├── README.md                   # Configuration documentation
│       ├── server.config.js            # Server configuration
│       └── env.example                 # Example environment variables
│
├── backend/                            # Backend services (one folder per service)
│   └── netlify/                        # Netlify serverless functions
│       └── functions/                  # Serverless functions
│           ├── submit-email.js
│           ├── submit-email-airtable.js
│           └── submit-email-supabase.js
│
├── docs/                               # Documentation folder
│   ├── Core Documentation/             # Core system documentation
│   │   ├── DOCS_STRUCTURE.md           # Documentation organization guide
│   │   ├── STRUCTURE.md                # This file - Main structure reference
│   │   └── TECH_STACK.md               # Technology stack documentation
│   │
│   ├── Development/                    # Development planning and documentation
│   │   ├── AFFILIATE_PROGRAM_ARCHITECTURE.md
│   │   ├── CRAIG_TASKS.md
│   │   ├── DEVELOPER_DOCS.md
│   │   ├── IMPLEMENTATION_PLAN.md
│   │   ├── JONNE_TASKS.md
│   │   ├── JOSEF_TASKS.md
│   │   ├── LEE_TASKS.md
│   │   ├── SVEIN_TASKS.md
│   │   ├── TEAM_DOCUMENTATION_RESPONSIBILITIES.md
│   │   └── Development planning docs/   # Development planning documents
│   │
│   ├── Product docs/                   # Product documentation (organized by topic)
│   │   ├── Business & Strategy/        # Business planning and strategy docs
│   │   │   ├── BITNEXUS_ONE_PAGER.md
│   │   │   ├── BUSINESS_MODEL_CANVAS.md
│   │   │   ├── MARKET_ANALYSIS.md
│   │   │   ├── REVENUE_PLAN.md
│   │   │   └── SWOT_ANALYSIS.md
│   │   │
│   │   ├── Investor Ready/            # Investor-ready documentation (15 folders)
│   │   │   ├── README.md               # Investor Ready overview
│   │   │   ├── 01_PitchDeck/          # Main presentation materials
│   │   │   │   ├── README.md
│   │   │   │   ├── Master_Deck.md
│   │   │   │   ├── One-Pager.md
│   │   │   │   └── Send-Ahead_Deck.md
│   │   │   ├── 02_Executive_Summary/  # Business summaries and investment thesis
│   │   │   │   ├── README.md
│   │   │   │   └── Executive_Summary.md
│   │   │   ├── 03_Financial_Model/    # Financial projections and models
│   │   │   │   └── README.md
│   │   │   ├── 04_Product_Demo/       # Demo videos and screenshots
│   │   │   │   └── README.md
│   │   │   ├── 05_Technical_Overview/ # System architecture and security
│   │   │   │   ├── README.md
│   │   │   │   ├── API_Documentation.md
│   │   │   │   ├── IP_Strategy.md
│   │   │   │   └── Security_Compliance.md
│   │   │   ├── 06_GoToMarket_Plan/    # Marketing strategy and competitive analysis
│   │   │   │   ├── README.md
│   │   │   │   ├── Competitor_Analysis.md
│   │   │   │   └── Market_Strategy.md
│   │   │   ├── 07_Team_Bios/          # Leadership resumes and org chart
│   │   │   │   └── README.md
│   │   │   ├── 08_Company_Docs/       # Legal documents and governance
│   │   │   │   └── README.md
│   │   │   ├── 09_Client_Material/    # Case studies and testimonials
│   │   │   │   └── README.md
│   │   │   ├── 10_KPI_Snapshot/       # Key metrics dashboards
│   │   │   │   └── README.md
│   │   │   ├── 11_Costs/              # Vendor contracts and salary breakdowns
│   │   │   │   └── README.md
│   │   │   ├── 12_Revenue_Model/      # Pricing strategy and unit economics
│   │   │   │   ├── README.md
│   │   │   │   └── Pricing_Strategy.md
│   │   │   ├── 13_Partnership/        # Partnership agreements and channel strategy
│   │   │   │   └── README.md
│   │   │   ├── 14_Product_Roadmap/    # Future features and R&D plans
│   │   │   │   └── README.md
│   │   │   └── 15_Deep_Research/      # AI-generated research repository
│   │   │       ├── README.md
│   │   │       ├── Deep_Research_Source_Material.md
│   │   │       ├── Gemini_Deep_Due_Diligence_Report.md
│   │   │       ├── Claude_Verification_Report.md
│   │   │       ├── Team_Questions_From_Research.md
│   │   │       ├── JOSEF_ANSWERS.md
│   │   │       ├── CRAIG_ANSWERS.md
│   │   │       ├── JONNE_ANSWERS.md
│   │   │       ├── LEE_ANSWERS.md
│   │   │       └── SVEIN_ANSWERS.md
│   │   │
│   │   ├── Legal & Compliance/        # Legal protection documentation
│   │   │   └── LEGAL_PROTECTIONS.md
│   │   │
│   │   ├── Pitch Deck & Presentations/  # Pitch decks and presentation materials
│   │   │   ├── PITCH_DECK.md
│   │   │   ├── PITCH_DECK_SPEAKER_NOTES.md
│   │   │   ├── PRODUCT_PRESENTATION.md
│   │   │   └── PRODUCT_PRESENTATION_SLIDES.md
│   │   │
│   │   ├── Technical Documentation/  # Technical specs and documentation
│   │   │   ├── COMPLETE_UI_DOCUMENTATION.md
│   │   │   ├── PLATFORM_OVERVIEW.md
│   │   │   ├── TRUST_BUILDING_SYSTEM.md
│   │   │   └── USER_FLOW_LOGIC.md
│   │   │
│   │   └── Tokenomics/                # Tokenomics and credit system
│   │       └── NXC_CREDITS_EXPLANATION.md
│   │
│   ├── Project Management/            # Project tracking and status
│   │   ├── CHANGELOG.md               # Project changelog (MANDATORY updates)
│   │   ├── DOCUMENTATION_INDEX.md
│   │   ├── PROJECT_STATUS.md
│   │   └── TODO.md
│   │
│   ├── Services/                      # Service-specific documentation (one folder per service)
│   │   ├── discourse/                 # Discourse forum service
│   │   │   ├── CHANGELOG.md
│   │   │   └── SERVICE_RULES.md
│   │   ├── erlang-ledger/             # Erlang/Elixir blockchain ledger
│   │   │   ├── CHANGELOG.md
│   │   │   └── SERVICE_RULES.md
│   │   ├── github/                    # GitHub service documentation
│   │   │   ├── BITNEXUS_DOCS_README.md
│   │   │   ├── BITNEXUS_DOCS_SYNC.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── DEVELOPERS.md
│   │   │   ├── GITHUB_PUSH_INSTRUCTIONS.md
│   │   │   ├── GITHUB_PUSH_SUMMARY.md
│   │   │   ├── GITHUB_SETUP.md
│   │   │   ├── PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   ├── VERSION_CONTROL.md
│   │   │   └── push-docs/             # Push change documentation
│   │   │       ├── README.md
│   │   │       └── 2026-01-08-165657-admin-guide-and-workflow-updates.md
│   │   ├── golang-api/                # Go API services
│   │   │   ├── CHANGELOG.md
│   │   │   └── SERVICE_RULES.md
│   │   ├── n8n/                       # n8n automation service
│   │   │   ├── CHANGELOG.md
│   │   │   └── SERVICE_RULES.md
│   │   ├── netlify/                   # Netlify service documentation
│   │   │   ├── CHANGELOG.md
│   │   │   ├── DEPLOYMENT.md
│   │   │   ├── DRAG_DROP_DEPLOYMENT.md
│   │   │   ├── NETLIFY_BUILD_FIX.md
│   │   │   ├── NETLIFY_BUILD_TROUBLESHOOTING.md
│   │   │   ├── NETLIFY_DEPLOYMENT_CHECK.md
│   │   │   ├── NETLIFY_DEPLOYMENT_CHECKLIST.md
│   │   │   ├── NETLIFY_DEPLOYMENT_READY.md
│   │   │   ├── NETLIFY_DEPLOYMENT_VERIFIED.md
│   │   │   ├── NETLIFY_FIX_SUMMARY.md
│   │   │   ├── NETLIFY_SETUP_COMPLETE.md
│   │   │   ├── NETLIFY_SETUP.md
│   │   │   ├── NETLIFY_VERIFICATION.md
│   │   │   └── SERVICE_RULES.md
│   │   └── supabase/                  # Supabase service documentation
│   │       ├── CHANGELOG.md
│   │       ├── SERVICE_RULES.md
│   │       ├── SUPABASE_QUICK_START.md
│   │       ├── SUPABASE_SETUP.md
│   │       └── supabase-migration.sql
│   │
│   ├── Setup & Configuration/         # Setup, configuration, and troubleshooting
│   │   ├── API_SETUP.md
│   │   ├── DEPENDENCY_CHECK.md
│   │   ├── DOCKER_SETUP.md
│   │   ├── EMAIL_COLLECTION_SETUP.md
│   │   ├── LOCAL_BUILD_TEST.md
│   │   ├── SETUP_CHECKLIST.md
│   │   ├── TROUBLESHOOTING.md
│   │   └── VERIFICATION.md
│   │
│   └── UI & Features/                 # UI and feature documentation
│       ├── COMPLETE_UI_DOCUMENTATION.md
│       ├── FINANCIAL_FREEDOM_ENHANCEMENTS.md
│       ├── QUICK_WINS_FINANCIAL_FREEDOM.md
│       ├── RESPONSIVE_FIXES_SUMMARY.md
│       ├── UI_DOCUMENTATION.md
│       └── USER_TYPES.md
│
├── .github/                           # GitHub-specific files
│   ├── LICENSE                        # Must match root LICENSE
│   ├── README.md                      # Must match root README.md
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── SECURITY.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── dependabot.yml
│   ├── ISSUE_TEMPLATE/                # GitHub issue templates
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── config.yml
│   └── workflows/                     # GitHub Actions workflows
│       ├── branch-protection.yml
│       ├── ci.yml
│       └── deploy.yml
│
├── index.html                         # Root index (legacy - should use frontend/index.html)
├── LICENSE                            # Project license (must match .github/LICENSE)
├── README.md                          # Project documentation (must match .github/README.md)
├── START_HERE.md                      # Developer onboarding guide
├── .cursorrules                       # Cursor IDE rules
├── .gitignore                         # Git ignore rules
├── netlify.toml                       # Netlify configuration
├── package.json                       # Node.js dependencies
├── package-lock.json                  # NPM lock file
├── npm                                # NPM executable (if present)
├── node_modules/                      # NPM dependencies (generated, gitignored)
├── organize-project.ps1               # PowerShell script for project organization
├── start.bat                          # Simple development server launcher (Windows) - Basic start
├── start.sh                           # Simple development server launcher (Unix/Mac) - Basic start
├── stop.bat                           # Stop simple development server (Windows)
└── stop.sh                            # Stop simple development server (Unix/Mac)
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
  - `start.bat` / `start.sh` (simple development launchers - basic start only)
  - `.cursorrules` (IDE rules)
  - `.gitignore` (Git ignore rules)
  - `START_HERE.md` (developer onboarding - exception)

**What Goes Where**:
- ✅ **Frontend files** → `frontend/`
- ✅ **Backend files** → `backend/` (one folder per service)
- ✅ **Documentation** → `docs/` (organized by purpose)
- ✅ **GitHub files** → `.github/`
- ❌ **NO other files in root** - Move to appropriate folder immediately

### Rule 2: Development Server Location
**MANDATORY**:
- **Development server folder**: `dev_server/` (lowercase, underscore)
- **Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\dev_server\`
- **ALL development server files MUST be in this folder**:
  - Docker files (Dockerfile, docker-compose.yml, .dockerignore)
  - Development server configuration (config/ folder)
  - Development server scripts (if moved from frontend/)
  - All files related to running the development server

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
- `docs/Services/admin/SERVICE_RULES.md` - Admin View & Task Management service rules (CRITICAL)

**When working with a service**:
1. **Check the service rules** first
2. **Follow all rules** defined in SERVICE_RULES.md
3. **Update service rules** if adding new requirements

### Rule 5: Documentation Organization
**MANDATORY**: 
- **ALL documentation files MUST be in the `docs/` folder**
- **NO `.md` files in root directory** (except `README.md` and `START_HERE.md`)
- **Documentation must be organized by purpose**:
  - `docs/Product docs/` - Product documentation (organized by topic)
  - `docs/Core Documentation/` - Core system documentation
  - `docs/Development/` - Development planning and documentation
  - `docs/Project Management/` - Project tracking and status
  - `docs/Services/` - Service-specific documentation
  - `docs/Setup & Configuration/` - Setup and troubleshooting
  - `docs/UI & Features/` - UI and feature documentation

**Documentation Structure**:
- ✅ `docs/Product docs/` - Product documentation (Pitch Deck, Revenue Plan, Market Analysis, etc.)
- ✅ `docs/Core Documentation/` - Core system docs (STRUCTURE.md, TECH_STACK.md, etc.)
- ✅ `docs/Development/` - Development planning and team tasks
- ✅ `docs/Project Management/` - CHANGELOG.md, TODO.md, PROJECT_STATUS.md
- ✅ `docs/Services/` - Service-specific documentation (one folder per service)
- ✅ `docs/Setup & Configuration/` - Setup guides and troubleshooting
- ✅ `docs/UI & Features/` - UI documentation and feature specs
- ✅ `README.md` - Only this file in root (brief project overview)
- ✅ `START_HERE.md` - Developer onboarding guide (exception)
- ❌ **NO other `.md` files in root** - Move to `docs/` immediately

### Rule 6: GitHub Files Must Match
**MANDATORY**: 
- **`.github/LICENSE` MUST be identical to root `LICENSE`**
- **`.github/README.md` MUST be identical to root `README.md`**
- **When updating LICENSE or README.md, ALWAYS update both locations**

### Rule 7: Investor Ready Documentation
**MANDATORY**:
- **ALL investor-ready materials MUST be in `docs/Product docs/Investor Ready/`**
- **15 numbered folders** (01_PitchDeck through 15_Deep_Research)
- **Each folder MUST have a README.md** explaining its purpose
- **15_Deep_Research** contains AI-generated research from Gemini and Claude

---

## 📂 Folder Purpose & Organization

### Frontend (`frontend/`)
**Purpose**: All frontend application files
- **HTML files**: Landing page, docs, manifesto
- **Source code**: React/TypeScript application
  - **Pages**: 35+ page components (Dashboard, Marketplace, Alliance, Forum, etc.)
  - **Components**: Reusable UI components (Layout, ProductDetailDrawer, etc.)
  - **Contexts**: React contexts (CartContext, NotificationContext)
  - **Services**: API services (Gemini, Supabase, Task services)
  - **Utils**: Utility functions (marketing assets, etc.)
  - **Data**: Data files (team profiles, etc.)
- **Static assets**: Images, fonts, etc. in `public/`
- **Build scripts**: Production build (`build.js`) and dev servers (`server.js`, `server.py`)
- **Output**: Production build goes to `frontend/dist/`

### Backend (`backend/`)
**Purpose**: All backend services (one folder per service)
- **Netlify**: Serverless functions (`backend/netlify/functions/`)
- **n8n**: Workflow automation (planned)
- **Discourse**: Forum service (planned)
- **Other services**: Each service gets its own folder

### Documentation (`docs/`)
**Purpose**: All project documentation

#### Core Documentation (`docs/Core Documentation/`)
- **STRUCTURE.md**: This file - main structure reference
- **DOCS_STRUCTURE.md**: Documentation organization guide
- **TECH_STACK.md**: Technology stack documentation

#### Development (`docs/Development/`)
- **Team task files**: CRAIG_TASKS.md, JONNE_TASKS.md, JOSEF_TASKS.md, LEE_TASKS.md, SVEIN_TASKS.md
- **Architecture docs**: AFFILIATE_PROGRAM_ARCHITECTURE.md, IMPLEMENTATION_PLAN.md
- **Developer docs**: DEVELOPER_DOCS.md, TEAM_DOCUMENTATION_RESPONSIBILITIES.md
- **Development planning docs/**: Planning documents folder

#### Product Documentation (`docs/Product docs/`)
- **Business & Strategy**: Business planning and strategy documents
- **Investor Ready**: Complete investor-ready documentation (15 folders)
  - **15_Deep_Research**: AI-generated research repository (Gemini & Claude reports)
- **Legal & Compliance**: Legal protection documentation
- **Pitch Deck & Presentations**: Pitch decks and presentation materials
- **Technical Documentation**: Technical specs and documentation
- **Tokenomics**: Tokenomics and credit system

#### Project Management (`docs/Project Management/`)
- **CHANGELOG.md**: Project changelog (MANDATORY updates)
- **TODO.md**: Project task tracking
- **PROJECT_STATUS.md**: Project status and overview
- **DOCUMENTATION_INDEX.md**: Documentation index

#### Services (`docs/Services/`)
- **One folder per service**: netlify, supabase, github, n8n, discourse, erlang-ledger, golang-api
- **Each service folder contains**:
  - SERVICE_RULES.md (mandatory)
  - CHANGELOG.md (mandatory)
  - Service-specific documentation
- **github/push-docs/**: Push change documentation folder

#### Setup & Configuration (`docs/Setup & Configuration/`)
- **Setup guides**: API_SETUP.md, DOCKER_SETUP.md, SETUP_CHECKLIST.md
- **Troubleshooting**: TROUBLESHOOTING.md, DEPENDENCY_CHECK.md
- **Verification**: VERIFICATION.md, LOCAL_BUILD_TEST.md
- **Email setup**: EMAIL_COLLECTION_SETUP.md

#### UI & Features (`docs/UI & Features/`)
- **UI documentation**: COMPLETE_UI_DOCUMENTATION.md, UI_DOCUMENTATION.md
- **Feature docs**: FINANCIAL_FREEDOM_ENHANCEMENTS.md, QUICK_WINS_FINANCIAL_FREEDOM.md
- **User types**: USER_TYPES.md
- **Responsive fixes**: RESPONSIVE_FIXES_SUMMARY.md

### Development Server (`dev_server/`)
**Purpose**: All development server files and Docker configuration
- **Docker files**: Dockerfile, docker-compose.yml, .dockerignore
- **Configuration**: config/ folder with server configuration files
- **Documentation**: README.md explaining development server setup
- **Entrypoint**: docker-entrypoint.sh for container initialization
- **⚠️ CRITICAL**: All development server files MUST be in this folder
- **Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\dev_server\`

### Root Directory
**Purpose**: Project configuration and entry points only
- **Configuration**: `package.json`, `netlify.toml`, `.cursorrules`, `.gitignore`
- **Entry points**: `start.bat`, `start.sh`, `README.md`, `LICENSE`, `START_HERE.md`
- **Legacy**: `index.html` (should use `frontend/index.html`)
- **NO other files** - Everything else goes to appropriate folders

### GitHub (`.github/`)
**Purpose**: GitHub-specific configuration and templates
- **License/README**: Must match root versions
- **Templates**: Issue templates, pull request template
- **Workflows**: GitHub Actions workflows (CI, deploy, branch protection)
- **Config**: CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, dependabot.yml

---

## 🔄 When Adding New Files

### Adding Frontend Files
1. **React components** → `frontend/src/components/`
2. **Pages** → `frontend/src/pages/`
3. **Services** → `frontend/src/services/`
4. **Contexts** → `frontend/src/contexts/`
5. **Utils** → `frontend/src/utils/`
6. **Data** → `frontend/src/data/`
7. **Types** → `frontend/src/types.ts`
8. **Static assets** → `frontend/public/`

### Adding Backend Services
1. **Create new folder** under `backend/` named after the service
2. **Add service-specific files** in that folder
3. **Create SERVICE_RULES.md** in `docs/Services/service-name/`
4. **Create CHANGELOG.md** in `docs/Services/service-name/`
5. **Update documentation** to reflect the new service
6. **Never mix services** in the same folder

### Adding Development Server Files
1. **All development server files** → `dev_server/`
2. **Docker files** → `dev_server/` (Dockerfile, docker-compose.yml, .dockerignore)
3. **Configuration files** → `dev_server/config/`
4. **Development server scripts** → `dev_server/` (if moved from frontend/)
5. **Never place development server files in root** or other locations

### Adding Documentation
1. **Product docs** → `docs/Product docs/` (organized by topic)
2. **Core docs** → `docs/Core Documentation/`
3. **Development docs** → `docs/Development/`
4. **Project management** → `docs/Project Management/`
5. **Service docs** → `docs/Services/service-name/`
6. **Setup docs** → `docs/Setup & Configuration/`
7. **UI docs** → `docs/UI & Features/`
8. **Structure reference** → Update `docs/Core Documentation/STRUCTURE.md` (this file)
9. **Never add `.md` files to root** (except `README.md` and `START_HERE.md`)

### Adding Investor Ready Materials
1. **Use appropriate numbered folder** (01-15)
2. **Add README.md** to folder explaining purpose
3. **Follow folder naming convention** (01_PitchDeck, 02_Executive_Summary, etc.)
4. **Update Investor Ready README.md** if adding new folder

---

## ✅ Verification Checklist

Before committing changes, verify:
- [ ] No random files in root directory (except allowed files)
- [ ] All frontend files are in `frontend/`
- [ ] All backend files are in `backend/` (one folder per service)
- [ ] All development server files are in `dev_server/`
- [ ] All documentation is in `docs/` (organized by purpose)
- [ ] `.github/LICENSE` matches root `LICENSE`
- [ ] `.github/README.md` matches root `README.md`
- [ ] All service folders have SERVICE_RULES.md and CHANGELOG.md
- [ ] All Investor Ready folders have README.md
- [ ] All file paths in code reference correct structure
- [ ] Build scripts use correct paths (`frontend/src/`, `backend/netlify/functions/`)
- [ ] CHANGELOG.md updated (MANDATORY)

---

## 📝 Team Responsibilities

### Josef Lindbom (COO & Development Vision Lead)
**Documentation Responsibilities**:
- UX/UI documentation
- User flow logic documentation
- Overall platform logic documentation
- Product documentation coordination
- Investor Ready documentation oversight

### Craig Martin (CTO)
**Documentation Responsibilities**:
- Development documentation (planning, architecture, implementation)
- Hosting services documentation
- Discourse (forum) documentation
- n8n automation documentation
- Technical infrastructure documentation
- Technical Overview in Investor Ready

### Jonne Waselius (Backend Developer)
**Documentation Responsibilities**:
- Hosting real-time services documentation
- Authentication documentation
- Backend API documentation
- n8n integration documentation
- API endpoints and ports documentation
- Google services sync documentation

---

## 📊 File Count Summary

### Frontend
- **Pages**: 35+ page components
- **Components**: 8 reusable components
- **Contexts**: 2 React contexts
- **Services**: 3 API services
- **Utils**: 1 utility file
- **Data**: 1 data file

### Backend
- **Services**: 1 active (netlify), 6 planned
- **Functions**: 3 Netlify serverless functions

### Documentation
- **Core Documentation**: 3 files
- **Development**: 10+ files
- **Product docs**: 20+ files across 6 categories
- **Investor Ready**: 15 folders with 30+ files
- **Project Management**: 4 files
- **Services**: 7 service folders with 40+ files
- **Setup & Configuration**: 8 files
- **UI & Features**: 6 files

### Total Documentation Files: 120+ files

---

**This document is the authoritative source for project structure. Always refer to this file when organizing files or folders.**

**Last Updated**: January 2026  
**Version**: 2.0  
**Next Review**: February 2026

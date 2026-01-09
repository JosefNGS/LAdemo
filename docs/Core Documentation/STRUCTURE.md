# BitNexus Project Structure
## Complete Folder Organization & File Structure Guide

**Last Updated**: January 2026  
**Version**: 2.1  
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
│   │   │   ├── geminiService.ts       # Google Gemini AI service
│   │   │   ├── postgresqlService.ts   # PostgreSQL database service
│   │   │   ├── supabaseService.ts     # Supabase service (legacy)
│   │   │   ├── taskFileService.ts     # Task file parsing service
│   │   │   ├── taskService.ts         # Task management service
│   │   │   └── taskSyncService.ts     # Task synchronization service
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
│   ├── README.md                       # Backend folder overview
│   ├── CHANGELOG.md                    # Backend changelog
│   ├── netlify/                        # Netlify serverless functions
│   │   ├── README.md
│   │   ├── CHANGELOG.md
│   │   └── functions/                  # Serverless functions
│   │       ├── submit-email.js
│   │       ├── submit-email-airtable.js
│   │       └── submit-email-supabase.js
│   ├── phoenix/                        # Phoenix web framework (planned)
│   │   └── bitnexus_api/              # Phoenix application
│   │       ├── lib/                    # Application code
│   │       ├── config/                 # Configuration
│   │       ├── priv/repo/migrations/   # Database migrations
│   │       └── test/                   # Tests
│   └── elixir/                        # Elixir services (planned)
│       ├── accounts_service/          # Accounts domain service
│       ├── products_service/          # Products domain service
│       ├── transactions_service/      # Transactions domain service
│       └── ledger_client/             # Ledger integration service
│
├── instructions/                       # External frameworks and instruction sets
│   ├── BMAD-METHOD/                    # BMAD Method framework
│   │   ├── src/                        # Framework source files
│   │   ├── docs/                       # BMAD documentation
│   │   ├── samples/                    # Sample modules
│   │   ├── tools/                      # Development tools
│   │   └── website/                    # Website files
│   └── .agent-os/                      # Agent OS configuration (if present)
│
├── rules/                              # Extracted rules from instruction frameworks
│   ├── agent-os/                       # Agent OS framework rules
│   ├── bmad-method/                    # BMAD-METHOD framework rules
│   ├── services/                       # Service-specific rules
│   ├── frontend/                       # Frontend rules
│   ├── backend/                        # Backend rules
│   ├── dev_server/                     # Development server rules
│   ├── docs/                           # Documentation rules
│   ├── README.md                       # Rules directory overview
│   ├── TODO.md                         # Rules TODO
│   └── CHANGELOG.md                    # Rules changelog
│
├── docs/                               # Documentation folder
│   ├── Core Documentation/             # Core system documentation
│   │   ├── CHANGELOG.md                # Core documentation changelog
│   │   ├── DOCS_STRUCTURE.md           # Documentation organization guide
│   │   ├── README.md                   # Core documentation overview
│   │   ├── STRUCTURE.md                # This file - Main structure reference
│   │   ├── TECH_STACK.md               # Technology stack documentation
│   │   ├── TECH_STACK_EVALUATION.md   # Tech stack evaluation
│   │   └── TECH_STACK_SUGGESTIONS.md  # Tech stack suggestions
│   │
│   ├── Development/                    # Development planning and documentation
│   │   ├── AFFILIATE_PROGRAM_ARCHITECTURE.md
│   │   ├── BACKEND_OWNER.md            # Backend owner responsibilities
│   │   ├── CHANGELOG.md                # Development documentation changelog
│   │   ├── CORY_TASKS.md               # Cory's task list
│   │   ├── CRAIG_TASKS.md              # Craig's task list
│   │   ├── CTO_OWNER.md                # CTO owner responsibilities
│   │   ├── DEVELOPER_DOCS.md           # Developer documentation
│   │   ├── FRONTEND_OWNER.md           # Frontend owner responsibilities
│   │   ├── IMPLEMENTATION_PLAN.md
│   │   ├── JONNE_TASKS.md              # Jonne's task list
│   │   ├── JOSEF_TASKS.md              # Josef's task list
│   │   ├── LEE_TASKS.md                # Lee's task list
│   │   ├── README.md                   # Development folder overview
│   │   ├── SALES_OWNER.md              # Sales owner responsibilities
│   │   ├── SECURITY_OWNER.md           # Security owner responsibilities
│   │   ├── SVEIN_TASKS.md              # Svein's task list
│   │   ├── TEAM_DOCUMENTATION_RESPONSIBILITIES.md
│   │   ├── TEAM_OWNER.md               # Team owner responsibilities
│   │   └── development Bmad Planning docs/   # BMAD-METHOD planning documents
│   │       ├── Architecture_Decision_Document.md
│   │       ├── Epic_Breakdown.md
│   │       ├── PRD.md                   # Product Requirements Document
│   │       ├── Product_Brief.md
│   │       ├── Project_Context.md
│   │       ├── README.md                # BMAD-METHOD planning docs overview
│   │       ├── RULES.md                 # BMAD-METHOD compliance rules
│   │       └── UX_Design_Specification.md
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
│   │   ├── ACADEMY_PLANNING.md        # Academy planning document
│   │   ├── ALLIANCE_ARENA_PLANNING.md # Alliance Arena planning document
│   │   ├── CHANGELOG.md               # Project changelog (MANDATORY updates)
│   │   ├── CHAT_PLANNING.md           # Chat planning document
│   │   ├── CONTENT_GENERATOR_PLANNING.md  # Content Generator planning
│   │   ├── DOCUMENTATION_INDEX.md
│   │   ├── MARKETPLACE_PLANNING.md   # Marketplace planning document
│   │   ├── N8N_PLANNING.md           # n8n planning document
│   │   ├── NEXT_STEPS.md             # Next steps document
│   │   ├── PROJECT_STATUS.md
│   │   ├── SECURITY_PLANNING.md      # Security planning document
│   │   └── TODO.md                   # Main project TODO list
│   │
│   ├── Services/                      # Service-specific documentation (one folder per service)
│   │   ├── admin/                     # Admin View & Task Management service
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── discourse/                 # Discourse forum service
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── elixir/                    # Elixir services & BEAM VM
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── erlang-ledger/             # Erlang/Elixir blockchain ledger
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── github/                    # GitHub service documentation
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── BITNEXUS_DOCS_README.md
│   │   │   ├── BITNEXUS_DOCS_SYNC.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── DEVELOPERS.md          # Developer registry (CRITICAL)
│   │   │   ├── GITHUB_PUSH_INSTRUCTIONS.md
│   │   │   ├── GITHUB_PUSH_SUMMARY.md
│   │   │   ├── GITHUB_SETUP.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   ├── SETUP_GUIDE.md
│   │   │   ├── VERSION_CONTROL.md
│   │   │   └── push-docs/             # Push change documentation
│   │   │       ├── README.md
│   │   │       └── [push documentation files]
│   │   ├── golang-api/                # Go API services
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── n8n/                       # n8n automation service
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── netlify/                   # Netlify service documentation (ALPHA PHASE)
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── DEPLOYMENT.md
│   │   │   ├── DRAG_DROP_DEPLOYMENT.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
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
│   │   ├── phoenix/                   # Phoenix web framework service
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CAPABILITIES.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── INTEGRATION_GUIDE.md
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   ├── postgresql/                # PostgreSQL service documentation
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── CHANGELOG.md
│   │   │   ├── IMPLEMENTATION_GUIDE.md
│   │   │   ├── PostgreSQL_QUICK_START.md
│   │   │   ├── PostgreSQL_SETUP.md
│   │   │   ├── PostgreSQL-migration.sql
│   │   │   ├── README.md
│   │   │   ├── SERVICE_RULES.md
│   │   │   └── SETUP_GUIDE.md
│   │   └── supabase/                  # Supabase service documentation (legacy)
│   │       ├── ARCHITECTURE.md
│   │       ├── CAPABILITIES.md
│   │       ├── CHANGELOG.md
│   │       ├── IMPLEMENTATION_GUIDE.md
│   │       ├── INTEGRATION_GUIDE.md
│   │       ├── README.md
│   │       ├── SERVICE_RULES.md
│   │       ├── SETUP_GUIDE.md
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
├── instructions/                      # External frameworks and instruction sets
│   ├── BMAD-METHOD/                   # BMAD Method framework
│   │   ├── src/                       # BMAD-METHOD source files
│   │   │   ├── core/                  # Core framework files
│   │   │   ├── modules/               # BMAD modules (bmb, bmgd, bmm, cis)
│   │   │   └── utility/               # Utility components
│   │   ├── docs/                      # BMAD documentation
│   │   ├── samples/                   # Sample modules
│   │   ├── tools/                     # Development tools
│   │   └── website/                   # Website files
│   └── .agent-os/                     # Agent OS configuration (if present)
│
├── rules/                             # Extracted rules from instruction frameworks
│   ├── agent-os/                      # Agent OS framework rules
│   │   ├── best-practices.md
│   │   ├── code-style.md
│   │   ├── deployment.md
│   │   ├── security.md
│   │   ├── README.md
│   │   └── CHANGELOG.md
│   ├── bmad-method/                   # BMAD-METHOD framework rules
│   │   ├── workflow.md
│   │   ├── structure.md
│   │   ├── README.md
│   │   └── CHANGELOG.md
│   ├── services/                      # Service-specific rules
│   │   ├── admin/                     # Admin service rules
│   │   ├── discourse/                 # Discourse service rules
│   │   ├── elixir/                    # Elixir service rules
│   │   ├── erlang-ledger/             # Erlang ledger rules
│   │   ├── github/                    # GitHub service rules
│   │   ├── golang-api/                # Golang API rules
│   │   ├── n8n/                       # n8n service rules
│   │   ├── netlify/                   # Netlify service rules
│   │   ├── phoenix/                   # Phoenix service rules
│   │   ├── postgresql/                # PostgreSQL service rules
│   │   ├── supabase/                  # Supabase service rules (legacy)
│   │   └── README.md
│   ├── frontend/                      # Frontend rules
│   ├── backend/                       # Backend rules
│   ├── dev_server/                    # Development server rules
│   ├── docs/                          # Documentation rules
│   ├── README.md                      # Rules directory overview
│   ├── TODO.md                        # Rules TODO
│   └── CHANGELOG.md                   # Rules changelog
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
2. **Phoenix**: `backend/phoenix/` - Phoenix web framework (HTTP API, WebSocket) (planned)
3. **Elixir**: `backend/elixir/` - Elixir services (business logic, BEAM VM) (planned)
4. **n8n Automation**: `backend/n8n/` - Workflow automation service (planned)
5. **Discourse Forum**: `backend/discourse/` - Forum service (planned)
6. **Future Services**: Each new service gets its own folder under `backend/`
   - Example: `backend/erlang-ledger/` for blockchain ledger service
   - Example: `backend/golang-api/` for Go API services

### Rule 4: Service Rules Documentation
**MANDATORY**:
- **Each service MUST have a SERVICE_RULES.md file** in `docs/Services/service-name/`
- **Service rules define critical requirements** for each service
- **All service rules are linked in cursor rules**

**Service Rules Files**:
- `docs/Services/netlify/SERVICE_RULES.md` - Netlify service rules
- `docs/Services/PostgreSQL/SERVICE_RULES.md` - PostgreSQL service rules
- `docs/Services/github/SERVICE_RULES.md` - GitHub service rules
- `docs/Services/n8n/SERVICE_RULES.md` - n8n service rules
- `docs/Services/discourse/SERVICE_RULES.md` - Discourse service rules
- `docs/Services/erlang-ledger/SERVICE_RULES.md` - Erlang/Elixir ledger service rules
- `docs/Services/phoenix/SERVICE_RULES.md` - Phoenix web framework service rules (CRITICAL)
- `docs/Services/phoenix/IMPLEMENTATION_GUIDE.md` - Complete Phoenix implementation guide
- `docs/Services/phoenix/ARCHITECTURE.md` - Phoenix system architecture
- `docs/Services/phoenix/INTEGRATION_GUIDE.md` - Integration with existing system
- `docs/Services/phoenix/SETUP_GUIDE.md` - Quick setup guide
- `docs/Services/elixir/SERVICE_RULES.md` - Elixir services & BEAM VM service rules (CRITICAL)
- `docs/Services/elixir/IMPLEMENTATION_GUIDE.md` - Complete Elixir services implementation guide
- `docs/Services/elixir/ARCHITECTURE.md` - Elixir services system architecture
- `docs/Services/elixir/INTEGRATION_GUIDE.md` - Integration with existing system
- `docs/Services/elixir/SETUP_GUIDE.md` - Quick setup guide
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
  - **Services**: API services (Gemini, PostgreSQL, Task services)
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

### Instructions (`instructions/`)
**Purpose**: External frameworks and instruction sets
- **BMAD-METHOD**: Complete BMAD Method framework for product development
- **.agent-os**: Agent OS configuration (if present)
- **⚠️ CRITICAL**: These are external frameworks - do not modify internal structure

### Rules (`rules/`)
**Purpose**: Extracted rules from instruction frameworks
- **agent-os/**: Agent OS framework rules (code style, best practices, security, deployment)
- **bmad-method/**: BMAD-METHOD framework rules (workflow, structure)
- **services/**: Service-specific rules (one folder per service)
- **frontend/**, **backend/**, **dev_server/**, **docs/**: Folder-specific rules
- **README.md**: Rules directory overview
- **TODO.md**: Rules TODO
- **CHANGELOG.md**: Rules changelog

### Documentation (`docs/`)
**Purpose**: All project documentation

#### Core Documentation (`docs/Core Documentation/`)
- **STRUCTURE.md**: This file - main structure reference
- **DOCS_STRUCTURE.md**: Documentation organization guide
- **TECH_STACK.md**: Technology stack documentation

#### Development (`docs/Development/`)
- **Team task files**: CRAIG_TASKS.md, JONNE_TASKS.md, JOSEF_TASKS.md, LEE_TASKS.md, SVEIN_TASKS.md, CORY_TASKS.md
- **Owner files**: BACKEND_OWNER.md, FRONTEND_OWNER.md, SECURITY_OWNER.md, CTO_OWNER.md, SALES_OWNER.md, TEAM_OWNER.md
- **Architecture docs**: AFFILIATE_PROGRAM_ARCHITECTURE.md, IMPLEMENTATION_PLAN.md
- **Developer docs**: DEVELOPER_DOCS.md, TEAM_DOCUMENTATION_RESPONSIBILITIES.md
- **CHANGELOG.md**: Development documentation changelog
- **README.md**: Development folder overview
- **development Bmad Planning docs/**: BMAD-METHOD planning documents folder
  - **Product_Brief.md**: Initial product analysis
  - **PRD.md**: Product Requirements Document (100 FRs, 52 NFRs)
  - **UX_Design_Specification.md**: User experience design
  - **Architecture_Decision_Document.md**: Technical architecture (8 ADRs)
  - **Epic_Breakdown.md**: Implementation epics and stories (15 epics)
  - **Project_Context.md**: Rules and patterns for developers/AI
  - **RULES.md**: BMAD-METHOD compliance rules
  - **README.md**: BMAD-METHOD planning docs overview

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
- **TODO.md**: Main project task tracking (1624+ lines)
- **PROJECT_STATUS.md**: Project status and overview
- **DOCUMENTATION_INDEX.md**: Documentation index
- **NEXT_STEPS.md**: Next steps document
- **Planning Documents**:
  - **ACADEMY_PLANNING.md**: Academy planning
  - **ALLIANCE_ARENA_PLANNING.md**: Alliance Arena planning
  - **CHAT_PLANNING.md**: Chat planning
  - **CONTENT_GENERATOR_PLANNING.md**: Content Generator planning
  - **MARKETPLACE_PLANNING.md**: Marketplace planning
  - **N8N_PLANNING.md**: n8n planning
  - **SECURITY_PLANNING.md**: Security planning

#### Services (`docs/Services/`)
- **One folder per service**: admin, discourse, elixir, erlang-ledger, github, golang-api, n8n, netlify, phoenix, postgresql, supabase (legacy)
- **Each service folder contains** (standard structure):
  - **SERVICE_RULES.md** (mandatory) - Service-specific rules
  - **CHANGELOG.md** (mandatory) - Service changelog
  - **README.md** (mandatory) - Service overview
  - **ARCHITECTURE.md** - System architecture
  - **CAPABILITIES.md** - What the service can/cannot manage
  - **IMPLEMENTATION_GUIDE.md** - Implementation guide
  - **INTEGRATION_GUIDE.md** - Integration guide
  - **SETUP_GUIDE.md** - Setup guide
- **github/push-docs/**: Push change documentation folder
- **Service-specific files**: Additional documentation as needed

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

### Instructions (`instructions/`)
**Purpose**: External frameworks and instruction sets
- **BMAD-METHOD/**: Complete BMAD Method framework
  - **src/**: Core framework source files
  - **docs/**: BMAD documentation
  - **samples/**: Sample modules
  - **tools/**: Development tools
- **.agent-os/**: Agent OS configuration (if present)
- **⚠️ CRITICAL**: Do not modify internal structure without understanding framework

### Rules (`rules/`)
**Purpose**: Extracted rules from instruction frameworks
- **agent-os/**: Agent OS framework rules
- **bmad-method/**: BMAD-METHOD framework rules
- **services/**: Service-specific rules (one folder per service)
- **frontend/**, **backend/**, **dev_server/**, **docs/**: Folder-specific rules
- **README.md**: Rules directory overview
- **TODO.md**: Rules TODO
- **CHANGELOG.md**: Rules changelog

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
4. **BMAD-METHOD planning docs** → `docs/Development/development Bmad Planning docs/` (MUST follow BMAD-METHOD)
5. **Project management** → `docs/Project Management/`
6. **Service docs** → `docs/Services/service-name/`
7. **Setup docs** → `docs/Setup & Configuration/`
8. **UI docs** → `docs/UI & Features/`
9. **Structure reference** → Update `docs/Core Documentation/STRUCTURE.md` (this file)
10. **Never add `.md` files to root** (except `README.md` and `START_HERE.md`)
11. **All folders MUST have README.md and CHANGELOG.md** (CRITICAL)

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
- **Core Documentation**: 6 files (STRUCTURE.md, DOCS_STRUCTURE.md, TECH_STACK.md, TECH_STACK_EVALUATION.md, TECH_STACK_SUGGESTIONS.md, README.md, CHANGELOG.md)
- **Development**: 26+ files
  - **Team task files**: 6 files (CRAIG, JONNE, JOSEF, LEE, SVEIN, CORY)
  - **Owner files**: 6 files (BACKEND, FRONTEND, SECURITY, CTO, SALES, TEAM)
  - **BMAD-METHOD planning docs**: 8 files (Product Brief, PRD, UX Design, Architecture, Epic Breakdown, Project Context, RULES, README)
  - **Other docs**: AFFILIATE_PROGRAM_ARCHITECTURE.md, IMPLEMENTATION_PLAN.md, DEVELOPER_DOCS.md, TEAM_DOCUMENTATION_RESPONSIBILITIES.md, README.md, CHANGELOG.md
- **Product docs**: 20+ files across 6 categories
- **Investor Ready**: 15 folders with 72+ files
- **Project Management**: 12 files (CHANGELOG.md, TODO.md, PROJECT_STATUS.md, DOCUMENTATION_INDEX.md, NEXT_STEPS.md, 7 planning documents)
- **Services**: 11 service folders with 113+ files
  - **admin**: 8 files
  - **discourse**: 8 files
  - **elixir**: 8 files
  - **erlang-ledger**: 8 files
  - **github**: 17 files (including push-docs/)
  - **golang-api**: 8 files
  - **n8n**: 8 files
  - **netlify**: 19 files
  - **phoenix**: 8 files
  - **postgresql**: 10 files
  - **supabase**: 11 files (legacy)
- **Setup & Configuration**: 11 files
- **UI & Features**: 8 files

### Instructions & Rules
- **instructions/BMAD-METHOD/**: 1000+ files (complete framework)
- **rules/**: 50+ files (extracted rules from frameworks)

### Total Documentation Files: 200+ files

---

**This document is the authoritative source for project structure. Always refer to this file when organizing files or folders.**

**Last Updated**: January 2026  
**Version**: 2.1  
**Next Review**: February 2026

**Recent Updates**:
- Added `instructions/` folder structure (BMAD-METHOD framework)
- Added `rules/` folder structure (extracted framework rules)
- Updated Development folder to include all owner files and BMAD-METHOD planning docs
- Updated Services to include all current services with standard documentation structure
- Updated Project Management to include all planning documents
- Updated frontend services to reflect current files
- Updated Core Documentation to include new files

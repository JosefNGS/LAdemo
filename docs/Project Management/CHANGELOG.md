# Changelog

All notable changes to the BitNexus platform will be documented in this file.

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

## [1.17.0] - January 2026

### Added
- **START_HERE.md Updates**: Added critical rules about keeping root clean and developer responsibility [Cursor]
  - Added "KEEP ROOT CLEAN" section emphasizing file placement responsibility
  - Added "DEVELOPER RESPONSIBILITY" section requiring developers to keep themselves updated
  - Added "FOLLOW TODOLISTS" section making todolist following mandatory
  - Updated checklists to include todolist checking and file location verification
  - Updated "Common Mistakes" and "Do These" sections with root clean and responsibility rules
- **Developer Responsibility Rules**: Established that developers are responsible for following all rules and maintaining project structure [Cursor]

### Changed
- **START_HERE.md**: Enhanced with developer responsibility and root clean rules [Cursor]
- **Quick Reference Checklist**: Updated to include todolist checking and responsibility acknowledgment [Cursor]

---

## [1.16.0] - January 2026

### Added
- **Development Server Changelog**: Created `dev_server/CHANGELOG.md` for tracking development server changes [Cursor]
- **STRUCTURE.md Updates**: Added CHANGELOG.md to dev_server folder structure [Cursor]

---

## [1.15.0] - January 2026

### Added
- **Stop Files**: Created stop scripts for all start files [Cursor]
  - `stop.bat` / `stop.sh` - Stop simple development server (Windows/Mac-Linux)
  - `dev_server/stop_dev_server.bat` / `dev_server/stop_dev_server.sh` - Stop full dev server (Windows/Mac-Linux)
- **Cross-Platform Anti-Patterns**: Added cross-platform violations to Anti-Patterns section [Cursor]
  - Don't hardcode Windows-specific paths
  - Don't use platform-specific commands without alternatives
  - Don't create start files without stop files
- **Stop Files Rules**: Updated START_FILES_RULES.md to include stop files requirement [Cursor]
- **STRUCTURE.md Updates**: Added stop files to project structure documentation [Cursor]
- **Cursor Rules Updates**: Added stop files to start files rules and cross-platform violations to Anti-Patterns [Cursor]

### Changed
- **Start Files Rules**: Updated to require stop files for every start file [Cursor]
- **Anti-Patterns Section**: Expanded with cross-platform compatibility violations [Cursor]

---

## [1.14.0] - January 2026

### Added
- **Start Files Critical Rules**: Created comprehensive rules for development server start files [Cursor]
  - Defined exactly TWO allowed start files: `start.bat` (simple) and `dev_server/start_dev_server.bat` (full)
  - Established mandatory rule: System MUST NOT have several start files
  - Created `docs/Setup & Configuration/START_FILES_RULES.md` with complete rules
  - Created `dev_server/start_dev_server.bat` for full Docker Compose development server
- **start_dev_server.bat**: Created full development server launcher in dev_server folder [Cursor]
  - Starts ALL services using Docker Compose
  - Checks for Docker and Docker Compose before starting
  - Handles both `docker compose` and `docker-compose` commands
  - Provides clear error messages and troubleshooting
- **STRUCTURE.md Updates**: Added start_dev_server.bat to dev_server folder structure [Cursor]
- **Cursor Rules Updates**: Added Start Files critical rules section to cursor rules [Cursor]

### Changed
- **start.bat Documentation**: Updated STRUCTURE.md to clarify start.bat is for simple start only [Cursor]
- **Start Files Rules**: Established critical rules preventing multiple start files [Cursor]

---

## [1.13.0] - January 2026

### Added
- **Admin View & Task Management Service Rules**: Created critical service rules for Admin View UI and database synchronization [Cursor]
  - Real-time synchronization requirements between UI and database
  - Automatic refresh mechanisms (mount, tab switch, window focus, polling)
  - Error handling and recovery rules
  - LocalStorage fallback mechanism
  - Data consistency validation rules
  - Task service integration requirements
  - Database schema requirements
  - Monitoring and alerting guidelines
- **Admin Service Documentation**: Created `docs/Services/admin/SERVICE_RULES.md` with comprehensive synchronization rules [Cursor]
- **Admin Service Changelog**: Created `docs/Services/admin/CHANGELOG.md` for service-specific change tracking [Cursor]
- **STRUCTURE.md Updates**: Added Admin service rules to service rules documentation section [Cursor]
- **Cursor Rules Updates**: Added Admin View & Task Management service rules to cursor rules [Cursor]

### Changed
- **Service Rules Documentation**: Updated STRUCTURE.md and .cursorrules to include Admin View & Task Management service rules [Cursor]

---

## [1.12.0] - January 2026

### Added
- **Development Server Folder Structure**: Created complete dev_server folder with all required files [Cursor]
  - Dockerfile - Docker container definition for development
  - docker-compose.yml - Multi-service Docker Compose configuration
  - .dockerignore - Files to exclude from Docker build
  - docker-entrypoint.sh - Container entrypoint script
  - config/ folder with server.config.js and env.example
  - README.md - Comprehensive development server documentation
- **STRUCTURE.md Updates**: Added Development Server section to folder purpose documentation [Cursor]
- **Docker Configuration**: Created Dockerfile, docker-compose.yml, and .dockerignore in dev_server folder [Cursor]
- **Development Server Config**: Created config/ folder with server.config.js and env.example [Cursor]
- **Docker Entrypoint Script**: Created docker-entrypoint.sh for container initialization [Cursor]
- **dev_server README**: Created comprehensive README.md for development server folder [Cursor]

### Changed
- **dev_server Folder**: Populated empty dev_server folder with complete development server structure [Cursor]

---

## [1.11.0] - January 2026

### Added
- **Development Documentation Responsibilities**: Added development documentation responsibilities to Craig Martin (CTO) [Cursor]
- **CRAIG_TASKS.md Update**: Added development documentation section to Craig's task tracking [Cursor]

### Changed
- **STRUCTURE.md**: Updated Craig Martin's documentation responsibilities to include development documentation [Cursor]
- **TEAM_DOCUMENTATION_RESPONSIBILITIES.md**: Added comprehensive development documentation section to Craig Martin's responsibilities [Cursor]
  - Development planning documentation
  - Architecture documentation
  - Implementation plans
  - Developer guides
  - Development workflow documentation
  - Code organization and structure
  - Development best practices
  - Technical decision documentation

---

## [1.10.0] - January 2026

### Changed
- **Removed NorthStar Nexus Option**: Updated all documentation to remove "NorthStar Nexus" as rebranding option [Cursor]
- **Added Alternative Name Suggestions**: Added comprehensive alternative name suggestions in brand identity sections [Cursor]
- **Brand Identity Updates**: Updated Team_Questions_From_Research.md with alternative name categories (Nordic-themed, Nexus-themed, trust-themed, innovation-themed) [Cursor]
- **Gemini Report Updates**: Removed NorthStar Nexus references and added alternative name suggestions [Cursor]
- **Deep Research Updates**: Updated Deep_Research_Source_Material.md to remove NorthStar Nexus and add alternatives [Cursor]

### Important Notes
- **NorthStar Nexus is NOT an option**: BitNexus has no connection to NorthStar - all references removed
- **Alternative Name Categories Added**: Nordic-themed, Nexus-themed, trust-themed, innovation-themed name suggestions provided
- **Brand Identity Questions Updated**: All brand identity questions now focus on independent alternative names

---

## [1.9.0] - January 2026

### Added
- **Complete STRUCTURE.md Update**: Comprehensive update to STRUCTURE.md (version 2.0) with ALL files and folders in system [Cursor]
- **Full File Inventory**: Added complete file listing including all 35+ frontend pages, all components, all documentation files [Cursor]
- **GitHub Folder Structure**: Added complete .github folder structure with workflows, templates, and config files [Cursor]
- **Investor Ready Complete Structure**: Added complete Investor Ready folder structure with all 15 folders and their contents [Cursor]
- **Services Complete Structure**: Added complete Services folder structure with all 7 services and their documentation [Cursor]
- **File Count Summary**: Added file count summary section to STRUCTURE.md [Cursor]

### Changed
- **STRUCTURE.md Version**: Updated to version 2.0 to reflect comprehensive structure update [Cursor]
- **Documentation Organization**: Enhanced all documentation sections with complete file listings [Cursor]
- **Folder Purpose Sections**: Expanded folder purpose sections with detailed file listings [Cursor]

---

## [1.8.0] - January 2026

### Added
- **Investor Ready Structure**: Added complete Investor Ready folder structure (15 folders) to STRUCTURE.md [Cursor]
- **15_Deep_Research Documentation**: Added 15_Deep_Research folder structure with all 4 documents to STRUCTURE.md [Cursor]
  - Deep_Research_Source_Material.md - Centralized research repository
  - Gemini_Deep_Due_Diligence_Report.md - Gemini AI due diligence report
  - Claude_Verification_Report.md - Claude AI verification report
  - Team_Questions_From_Research.md - Q&A document for team responses

### Changed
- **STRUCTURE.md Version**: Updated to version 1.1 to reflect new Investor Ready structure [Cursor]
- **Documentation Section**: Enhanced documentation section to include Investor Ready folder details [Cursor]

---

## [1.0.0] - January 2026

### Added
- Initial release of BitNexus Landing Page and Dashboard
- Complete React application with TypeScript
- Landing page with countdown timer and Genesis signup
- Dashboard with affiliate revenue tracking
- Financial Freedom Progress Bar
- Income Streams Widget
- Quick Actions Section
- Daily Tips feature
- Marketplace with product tags and earning calculators
- XAB Bot Lab with passive income calculator
- Alliance network with success stories
- Academy with financial freedom learning paths
- Goals page for tracking financial objectives
- Content Generator with AI integration
- Affiliate Manager with analytics
- Chat and Friends pages
- Profile with social media connections
- Admin pages (Vetting, Users, Reports)
- Credits Shop for NXC purchases
- Manifesto and Documentation pages
- GitHub configuration and workflows
- Complete documentation suite

### Changed
- **Dashboard Hero Card**: Changed from "Net NXC Assets" to "Affiliate Link Revenue" focus
  - Removed Deposit/Trade buttons
  - Added View Links/Generate Link buttons
  - Updated to show total affiliate earnings ($14,210.00 USD)
  - Added growth percentage indicator (+15.2%)

### Features
- Real-time earnings tracking
- Multiple income stream visualization
- AI-powered content generation
- Passive income projection calculators
- Network building tools
- Educational content and training
- Goal setting and progress tracking
- Social media integration
- Transparent blockchain tracking (prepared)

### Technical
- React 19.2.3 with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Google Gemini API integration
- ES Modules architecture
- Netlify deployment ready
- CI/CD workflows configured

---

## [1.1.0] - January 2026

### Added
- **Forum Page**: Community forum with categories (Affiliate Marketing, MEV Bot Trading, XAB Bot Trading, Network Building, Financial Freedom, Support)
- **Dashboard Tools Section**: Comprehensive tools including Link Shortener, QR Code Generator, Commission Calculator, Link Performance Tracker, UTM Parameter Builder, and Quick Actions
- **MEV Bot Support**: Added MEV Bot Lab alongside XAB Bot Lab (XRP-specific)
- **Frontend/Backend Structure**: Organized project into `frontend/` and `backend/` folders for better separation of concerns
- **Enhanced Income Streams Widget**: Larger, more prominent display with improved visibility
- **Shopping Cart & Checkout**: Complete cart management and payment processing
- **Enhanced Authentication**: Separate Login, Register, and Forgot Password pages with form validation
- **Product Detail Drawer**: Detailed product view with tabs (Overview, Marketing Assets, Affiliate Link)
- **Product Upload Form**: Form for submitting new products to marketplace

### Changed
- **Project Structure**: Reorganized into `frontend/` and `backend/` directories
  - Frontend: All React code, HTML files, build scripts, dev servers
  - Backend: Netlify serverless functions
- **Course Pricing**: Updated Academy pricing structure
  - Individual Courses: Beginner $199-$2,000, Intermediate $499-$2,000, Advanced $4,000-$9,000, Mastery $10,000
  - Self-Paced Online Courses (No Personal Contact): Beginner $99-$499, Intermediate $299-$999, Advanced $1,499-$3,999, Learning Paths $999-$4,999, Lifetime Pass $9,999
  - Course Bundles: $1,999-$9,999 range
  - Live Events (With Personal Contact): $499-$9,999 range
- **Bot Lab**: Split into MEV Bots (general) and XAB Bots (XRP-specific) with tabbed interface
- **Dashboard Tools**: Enhanced Tools tab with comprehensive utility tools
- **Income Streams**: Increased size and visibility of income stream cards
- **Build Configuration**: Updated `netlify.toml` and `package.json` to work with new folder structure

### Fixed
- Tools tab content now properly displays
- Path references updated for new folder structure
- Development server paths updated

### Technical
- Updated build scripts to work with `frontend/` directory
- Updated `start.bat` to navigate to `frontend/` before starting server
- Updated Netlify configuration for new folder structure
- All file paths updated to reflect frontend/backend separation

---

## [1.2.0] - January 2026

### Added
- **CRITICAL CHANGELOG REQUIREMENT**: Mandatory changelog updates for ALL changes [Cursor]
- **CHANGELOG DEVELOPER TRACKING**: All changelog entries must track developer/Cursor who made changes [Cursor]
- **START_HERE.md Developer Guide**: Comprehensive developer onboarding document in root directory [Cursor]
- **Investor Ready Documentation Structure**: Complete folder structure for investor materials (14 folders) [Cursor]
- **Investor Ready README Files**: Comprehensive documentation for each investor folder [Cursor]
- **Service-Specific Changelogs**: Created CHANGELOG.md files for all services (Netlify, GitHub, Supabase, n8n, Discourse, Erlang-Ledger, Golang-API) with developer tracking requirement [Cursor]
- **Fixed JavaScript Errors**: Resolved `useNotifications` undefined error in Dashboard [Cursor]
- **Fixed Missing Imports**: Added TeamProfile and teamProfiles imports to App.tsx [Cursor]
- **Fixed Missing State**: Added authView state variable to App.tsx [Cursor]

### Changed
- **Cursor Rules**: Added CRITICAL changelog requirements - ALL changes MUST be logged with developer tracking [Cursor]
- **Changelog Format**: Updated to require developer/Cursor tracking in all entries [Cursor]
- **All Service Changelogs**: Updated with developer tracking requirement and format examples [Cursor]
- **GitHub Push Instructions**: Added developer tracking requirement to changelog format [Cursor]
- **Version Control Documentation**: Added developer tracking requirement to changelog workflow [Cursor]
- **START_HERE.md**: Updated with developer tracking requirement and examples [Cursor]
- **Documentation Organization**: Created Investor Ready folder structure in `docs/Product docs/` [Cursor]
- **Project Structure**: Moved pitch deck, technical docs, and market analysis to Investor Ready folders [Cursor]

### Critical Rules Added
- **CHANGELOG MANDATORY**: Every change must be logged in CHANGELOG.md before committing [Cursor]
- **DEVELOPER TRACKING MANDATORY**: All changelog entries must include `[Developer: Name]` or `[Cursor]` tag [Cursor]
- **NO EXCEPTIONS**: All changes, regardless of size, must be documented with developer tracking [Cursor]
- **Format**: Follow Keep a Changelog format with proper categories and developer tracking [Cursor]
- **Location**: `docs/Project Management/CHANGELOG.md` [Cursor]
- **Service Changelogs**: All service-specific changelogs must also track developers [Cursor]

**For detailed implementation plans, see [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)**

---

## [1.6.0] - January 2026

### Added
- **Enhanced Brand Risk Questions**: Expanded brand identity section with 6 detailed sub-sections covering brand contamination assessment, rebranding decision, trademark considerations, disassociation strategy, investor impact, and alternative options [Cursor]
- **High Priority Alert Section**: Added urgent alert section at top of Team Questions document highlighting critical brand fragmentation risk [Cursor]
- **Brand Contamination Assessment**: Added detailed questions about TRX scams, BitNexus LLC, legacy tokens, and other contaminating entities [Cursor]
- **Investor Impact Questions**: Added questions about how brand contamination affects investor confidence and fundraising [Cursor]

### Changed
- **Brand Identity Section**: Expanded from 4 basic questions to comprehensive 6-sub-section framework with 20+ detailed questions [Cursor]
- **Priority Marking**: Added URGENT priority markers and critical risk indicators throughout brand section [Cursor]
- **Tracking Dashboard**: Updated to highlight brand identity as highest priority issue [Cursor]

---

## [1.5.0] - January 2026

### Added
- **Team Questions Document**: Created comprehensive Q&A document for team to answer questions from research [Cursor]
- **Team_Questions_From_Research.md**: 20 question categories covering all aspects from Gemini and Claude reports [Cursor]
- **Question Tracking System**: Added status tracking (Pending/In Progress/Completed) for each question category [Cursor]
- **Assignment Framework**: Added assignment and due date tracking for team accountability [Cursor]

### Changed
- **Deep Research README**: Updated to include Team Questions document [Cursor]

---

## [1.4.0] - January 2026

### Added
- **Separate AI Research Reports**: Created standalone documents for Gemini and Claude reports [Cursor]
- **Gemini Deep Due Diligence Report**: Created `Gemini_Deep_Due_Diligence_Report.md` as separate document [Cursor]
- **Claude Verification Report**: Created `Claude_Verification_Report.md` as separate document [Cursor]
- **Claude Verification Summary**: Added comprehensive verification findings to main Deep Research document [Cursor]
- **Market Data Corrections**: Documented critical market sizing corrections (DeFi TVL, TAM recalculation) [Cursor]
- **Technology Stack Verification**: Added verified technology stack assessment from Claude [Cursor]
- **ISO Certification Verification**: Added verified ISO certification process and costs [Cursor]

### Changed
- **Deep Research Structure**: Separated comprehensive reports into standalone documents for better organization [Cursor]
- **README Updates**: Updated 15_Deep_Research README to reference both separate reports [Cursor]
- **Version History**: Updated to reflect new document structure [Cursor]

### Critical Findings Documented
- **DeFi TVL Correction**: Identified need to correct "$200B+ TVL" to "$143B TVL (2025)" [Cursor]
- **TAM Recalculation**: Corrected total TAM from $427B to $320B (2024) → $678B (2030) [Cursor]
- **MLM Market Specificity**: Identified need for more specific MLM market figures ($201B vs $200B+) [Cursor]
- **Technology Verification**: Verified React 19, ISO certifications, and technology stack [Cursor]
- **Security Audit Status**: Documented need for downloadable audit reports [Cursor]

---

## [1.3.0] - January 2026

### Added
- **Deep Research Source Material Repository**: Created comprehensive AI research repository in `docs/Product docs/Investor Ready/15_Deep_Research/` [Cursor]
- **Deep Research Documentation**: Created `Deep_Research_Source_Material.md` with critical update rules and research methodology [Cursor]
- **Deep Research README**: Created README.md for 15_Deep_Research folder with usage guidelines and update schedules [Cursor]
- **Gemini Deep Due Diligence Report**: Integrated comprehensive due diligence report from Gemini AI (January 8, 2026) [Cursor]
- **Brand Risk Analysis**: Documented critical brand identity crisis findings for "BitNexus" name [Cursor]
- **Corporate Governance Verification**: Added verified personnel profiles (Josef Lindbom, Craig Martin, Svein Nilsen, etc.) [Cursor]
- **Regulatory Compliance Framework**: Added Finland 2026 regulatory requirements (MiCA, CARF, KKV) [Cursor]
- **Financial Model Assumptions**: Added revenue streams, cost structure, and scenario planning data [Cursor]
- **Technical Architecture Details**: Added NorthStarOS and Solins AI agents technical specifications [Cursor]
- **Pitch Deck Content Strategy**: Added strategic recommendations for addressing brand and regulatory risks [Cursor]

### Changed
- **Investor Ready README**: Updated to include 15_Deep_Research folder in folder structure [Cursor]
- **Deep Research Document**: Updated version history to include Gemini report integration [Cursor]
- **Table of Contents**: Added Comprehensive Due Diligence Reports section to table of contents [Cursor]

### Critical Findings Documented
- **Brand Identity Crisis**: "BitNexus" name severely contaminated by scams and unrelated entities - strategic rebrand recommended [Cursor]
- **Regulatory Requirements**: Mandatory MiCA authorization and CARF reporting requirements for Finland operations [Cursor]
- **Corporate Governance**: Verified "Nuclear Grade Governance" through Svein Nilsen's Systemair and nuclear safety background [Cursor]
- **Market Intelligence**: Updated market sizing, yield benchmarks, and revenue model assumptions [Cursor]

### Research Categories Added
- Market Research (TAM/SAM/SOM analysis)
- Competitive Intelligence
- Technical Research (NorthStarOS, Solins, blockchain infrastructure)
- Financial Analysis (revenue streams, cost structure, scenarios)
- Regulatory & Compliance Research (Finland 2026 framework)
- User & Behavioral Research
- Industry Trends & Insights
- Strategic Research
- Comprehensive Due Diligence Reports

---

## [1.6.0] - January 2026

### Added
- **AdminView Developer Guide Tab**: Added comprehensive Developer Guide tab to AdminView with full START_HERE.md content [Cursor]
- **Workflow Standardization Section**: Added workflow standardization note to START_HERE.md requiring team meeting discussion for workflow changes [Cursor]
- **Office Discord Setup Documentation**: Added office Discord setup and reporting system information to START_HERE.md [Cursor]
- **Office Discord Tasks**: Added comprehensive tasks to JONNE_TASKS.md for documenting office Discord setup and reporting system [Cursor]
- **BMAD Method Implementation Tasks**: Added BMAD method implementation tasks to CRAIG_TASKS.md [Cursor]
- **PRD Implementation Tasks**: Added Product Requirements Document (PRD) creation and maintenance tasks to CRAIG_TASKS.md [Cursor]
- **Developer Guide in Admin Interface**: AdminView now includes full developer guide accessible after login [Cursor]

### Changed
- **START_HERE.md**: Added workflow standardization section emphasizing this is the standard way of working [Cursor]
- **START_HERE.md**: Added office Discord setup section with reporting system details [Cursor]
- **AdminView.tsx**: Added new "Developer Guide" tab with formatted START_HERE.md content [Cursor]
- **AdminView.tsx**: Added office Discord setup and reporting system information section [Cursor]
- **JONNE_TASKS.md**: Added high-priority section for office Discord setup documentation tasks [Cursor]
- **CRAIG_TASKS.md**: Added high-priority sections for BMAD method and PRD implementation [Cursor]

### Documentation Updates
- **Office Discord Reporting**: Documented that every function in the system has a reporting system within Discord [Cursor]
- **Workflow Process**: Established that workflow changes must go through team meeting agenda [Cursor]
- **BMAD Methodology**: Added tasks for implementing Build-Measure-Analyze-Deploy methodology [Cursor]
- **PRD Process**: Added tasks for creating and maintaining Product Requirements Document [Cursor]

---
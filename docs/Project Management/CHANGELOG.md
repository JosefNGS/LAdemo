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

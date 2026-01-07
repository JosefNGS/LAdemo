# Changelog

All notable changes to the BitNexus platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

**For detailed implementation plans, see [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)**




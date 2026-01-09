# BitNexus TODO List
## Project Task Tracking & Roadmap

**Last Updated**: January 2026  
**Version**: 1.1  
**Status**: Active Development

---

## 📋 Table of Contents

1. [Completed Tasks](#completed-tasks)
2. [In Progress](#in-progress)
3. [High Priority](#high-priority)
4. [Medium Priority](#medium-priority)
5. [Low Priority](#low-priority)
6. [Future Enhancements](#future-enhancements)
7. [Bug Fixes](#bug-fixes)
8. [Technical Debt](#technical-debt)
9. [Documentation](#documentation)

---

## ✅ Completed Tasks

### Core Platform
- [x] Landing page with countdown timer
- [x] React application structure
- [x] TypeScript setup and type definitions
- [x] Layout component with sidebar navigation
- [x] Responsive design system
- [x] Glassmorphism design implementation
- [x] Color scheme and typography

### Authentication
- [x] Login page with form validation
- [x] Register page with password strength indicator
- [x] Forgot password page
- [x] Real-time form validation
- [x] Loading states for auth pages
- [x] Referral code processing

### Main Pages
- [x] Dashboard with financial overview, Commission Calculator, Global Leaderboard
- [x] Marketplace with product discovery, Due Diligence tab, ISO certifications, audit modals
- [x] Earn page (Bot Lab - MEV Bot & XAB Bot)
- [x] Alliance network page with Outreach & Communication (manual entry support)
- [x] Token Shop with packages
- [x] Academy with learning paths
- [x] Goals page (integrated into Profile)
- [x] Content Generator with upload modal, Save Template, Schedule Post, View Analytics modals
- [x] Affiliate Manager
- [x] Chat interface
- [x] Friends page
- [x] Profile settings with verification badges and vendor certification
- [x] NexusHub AI assistant
- [x] Cart page
- [x] Checkout page
- [x] Forum page with categories
- [x] Governance page with decentralized voting system
- [x] Vetting page with community-driven product approval
- [x] News page with article images
- [x] Feed page with social interactions (like, comment, share)

### Components
- [x] ProductDetailDrawer component (with images, downloads, certification badges)
- [x] ProductUploadForm component
- [x] Cart context and state management
- [x] Cart badge in header
- [x] Content Generator upload modal
- [x] Content Generator quick action modals (Save Template, Schedule Post, View Analytics)
- [x] Marketplace audit modals (CertiK, OpenZeppelin, KPMG, ISO 27001, ISO 27701)
- [x] Alliance management modal
- [x] Governance proposal voting interface

### Features
- [x] Financial Freedom Progress Bar
- [x] Income Streams Widget (enhanced size and visibility)
- [x] Quick Actions Section
- [x] Daily Tips banner
- [x] Product tags system
- [x] Earning potential calculator
- [x] Passive income calculator
- [x] Commission Calculator (functional with calculations)
- [x] Global Leaderboard (clickable with sorting)
- [x] Social media connection buttons
- [x] AI credits system in Token Shop
- [x] Multiple payment methods in checkout
- [x] Dashboard Tools section (Link Shortener, QR Generator, etc.)
- [x] MEV Bot & XAB Bot (XRP) distinction with tabs
- [x] Enhanced landing page FOMO elements
- [x] Larger, more prominent "Initiate Access" button
- [x] Urgency messaging with animations
- [x] Responsive design fixes (mobile-first, all viewports)
- [x] Landing page countdown timer (counts down to January 21, 2026)
- [x] News page with images for articles
- [x] Feed page with functional like, comment, and share buttons
- [x] Product detail drawer with dynamic images and download functionality
- [x] Content Generator with upload modal and quick actions modals
- [x] Marketplace Due Diligence tab with ISO certifications and audit modals
- [x] Product and vendor certification badges
- [x] Alliance Outreach with manual entry for emails and phone numbers
- [x] Governance page with voting system
- [x] Vetting page with community-driven product approval

### Infrastructure
- [x] Development server with TypeScript transpilation
- [x] Netlify deployment configuration
- [x] Build system (build.js)
- [x] SPA routing setup
- [x] GitHub repository setup
- [x] CI/CD workflows
- [x] Frontend/Backend folder structure
- [x] Server path resolution for both locations
- [x] Supabase integration setup
- [x] **Reorganize Project Structure** ✅ **COMPLETED**
  - [x] Move all frontend files to `frontend/` directory ✅
    - [x] Move `src/` folder → `frontend/src/` ✅
    - [x] Move `index.html`, `docs.html`, `manifesto.html` → `frontend/` ✅
    - [x] Move `build.js`, `server.js`, `server.py` → `frontend/` ✅
    - [x] Move `public/` folder → `frontend/public/` ✅
  - [x] Move all backend files to `backend/` directory ✅
    - [x] Move `netlify/functions/` → `backend/netlify/functions/` ✅
  - [x] Update all file path references throughout the system ✅
  - [x] Implement one-folder-per-service backend structure ✅
    - [x] `backend/netlify/` - Netlify serverless functions ✅
    - [ ] `backend/n8n/` - n8n automation service (planned)
    - [ ] `backend/discourse/` - Discourse forum service (planned)
    - [ ] `backend/erlang-ledger/` - Erlang/Elixir blockchain ledger (planned)
    - [ ] `backend/golang-api/` - Go API services (planned)
    - [ ] Update `package.json` scripts
    - [ ] Update `netlify.toml` configuration
    - [ ] Update `server.js` file paths
    - [ ] Update `build.js` file paths
    - [ ] Update `README.md` documentation
    - [ ] Update all documentation file paths
    - [ ] Update import paths in React components
    - [ ] Update `index.html` script paths
  - [ ] Test development server with new paths
  - [ ] Test production build with new paths
  - [ ] Verify Netlify deployment configuration
  - [ ] Update `.gitignore` if needed
- [ ] **Erlang/Elixir environment setup** (for blockchain ledger)
  - [ ] Install Erlang/Elixir runtime
  - [ ] Set up development environment
  - [ ] Configure Phoenix/GenServer for ledger service
  - [ ] Create ledger service architecture

### Documentation
- [x] README.md (with legal protections, team contacts)
- [x] UI Documentation
- [x] Complete UI Documentation (updated with all recent features)
- [x] Product Presentation (with ISO certifications, team info, legal protections)
- [x] Product Presentation Slides
- [x] Pitch Deck Speaker Notes (with expanded security section, team info)
- [x] SWOT Analysis (updated with trust features, ISO certifications)
- [x] Market Analysis (with user flows)
- [x] Business Model Canvas (with user flows)
- [x] Platform Overview document
- [x] Trust Building System document (with ISO certifications)
- [x] Legal Protections document (comprehensive IP protection framework)
- [x] Tech Stack document (with Erlang/Elixir, n8n, Golang, server infrastructure)
- [x] One-Pager document
- [x] Implementation Plan
- [x] Quick Wins document
- [x] Financial Freedom Enhancements
- [x] Deployment guide
- [x] API Setup guide
- [x] Troubleshooting guide
- [x] Changelog
- [x] Documentation Index
- [x] Pitch Deck
- [x] Revenue Plan (with updated pricing and self-paced courses)
- [x] Netlify Verification guide
- [x] Supabase Setup guide
- [x] All documentation aligned with MEV/XAB Bot distinction
- [x] All documentation aligned with updated course pricing
- [x] Date management rules added to .cursorrules

---

## 🔄 In Progress

### Current Sprint
- [ ] Testing all new features (Governance, Feed interactions, Content Generator modals)
- [ ] Verifying responsive design across all viewports
- [ ] Testing Marketplace Due Diligence modals and ISO certifications
- [ ] Verifying Alliance manual entry functionality
- [ ] Testing Content Generator upload and quick actions

---

## 🔴 High Priority

### Multi-Tenant System & User Roles
- [ ] **Implement Multi-Tenant Architecture**
  - [ ] Design tenant data model
  - [ ] Tenant isolation at database level
  - [ ] Tenant identification in API requests
  - [ ] Cross-tenant data protection
  - [ ] Tenant configuration management
  
- [ ] **User Role System**
  - [ ] **Super Admin Role** - Platform-wide access and control
    - [ ] Full platform access and control
    - [ ] Tenant management capabilities
    - [ ] System-wide configuration access
    - [ ] Global user management
    - [ ] Platform analytics and metrics
    - [ ] Billing and subscription management
    - [ ] System maintenance and updates
  - [ ] **Admin Role (Tenant-Level)** - Tenant-specific admin access
    - [ ] Tenant-specific admin access
    - [ ] User management within tenant
    - [ ] Tenant configuration settings
    - [ ] Tenant analytics and reporting
    - [ ] Product vetting and approval (for tenant)
    - [ ] Content moderation (for tenant)
    - [ ] Alliance management (for tenant)
    - [ ] Custom branding and settings
  - [ ] **Member Role** - Full access to tenant features
    - [ ] Full access to tenant features
    - [ ] Affiliate program access
    - [ ] Product marketplace access
    - [ ] Bot Lab access
    - [ ] Academy access
    - [ ] Alliance network access
    - [ ] Content Generator access
    - [ ] Social features (Chat, Forum, Friends)
    - [ ] Profile and settings management
  - [ ] **User Role (Limited/Basic)** - Read-only and basic features
    - [ ] Read-only access to public content
    - [ ] Basic profile management
    - [ ] Limited marketplace browsing
    - [ ] Restricted affiliate features
    - [ ] Upgrade path to Member role

- [ ] **Role-Based Access Control (RBAC)**
  - [ ] Define permission matrix for each role
  - [ ] Implement permission checks in API endpoints
  - [ ] Implement permission checks in UI components
  - [ ] Route protection based on roles
  - [ ] Feature flags based on roles
  - [ ] UI visibility based on roles (hide/show features)

- [ ] **Tenant Management**
  - [ ] Tenant creation and onboarding
  - [ ] Tenant configuration dashboard
  - [ ] Tenant branding (logo, colors, domain)
  - [ ] Tenant subscription management
  - [ ] Tenant analytics and reporting
  - [ ] Tenant billing and payment
  - [ ] Tenant suspension and deletion

- [ ] **User Management Within Tenants**
  - [ ] User invitation system (tenant-specific)
  - [ ] Role assignment per tenant
  - [ ] User permission management
  - [ ] User activity tracking per tenant
  - [ ] User data isolation per tenant
  - [ ] Bulk user operations per tenant

- [ ] **Database Schema Updates**
  - [ ] Add `tenant_id` to all relevant tables
  - [ ] Add `role` field to user table
  - [ ] Create tenant table
  - [ ] Create role_permissions table
  - [ ] Create tenant_settings table
  - [ ] Index tenant_id for performance
  - [ ] Foreign key constraints for data integrity
  - [ ] **Team Answers Database** - Create database schema for research questions answers
    - [ ] Create `team_answers` table (see TEAM_ANSWERS_DATABASE_SCHEMA.md)
    - [ ] Create `team_members` table
    - [ ] Create `answer_history` table for audit trail
    - [ ] Create database indexes for performance
    - [ ] Create database migration file
    - [ ] Set up foreign key relationships
    - [ ] Add database constraints and validations

- [ ] **API Updates**
  - [ ] Add tenant context to all API requests
  - [ ] Filter queries by tenant_id
  - [ ] Role-based API endpoint access
  - [ ] Tenant-scoped data retrieval
  - [ ] Admin APIs for tenant management
  - [ ] Super admin APIs for platform management

- [ ] **UI Updates**
  - [ ] Role-based navigation menu
  - [ ] Feature visibility based on role
  - [ ] Tenant switcher (for super admins)
  - [ ] Admin dashboard for tenant management
  - [ ] Super admin dashboard for platform management
  - [ ] Role indicators in user profiles
  - [ ] Permission error messages
  - [ ] **Research Answers Admin View** - Add answers management interface
    - [ ] Research Answers tab in AdminView
    - [ ] Team member answer views
    - [ ] Category-based filtering
    - [ ] Status tracking and updates
    - [ ] Completion statistics dashboard

- [ ] **Security Considerations**
  - [ ] Prevent cross-tenant data access
  - [ ] Validate tenant_id in all requests
  - [ ] Role-based authorization checks
  - [ ] Audit logging per tenant
  - [ ] Data encryption per tenant (if needed)
  - [ ] Tenant isolation testing

- [ ] **Migration Strategy**
  - [ ] Plan migration from single-tenant to multi-tenant
  - [ ] Default tenant creation for existing users
  - [ ] Role assignment for existing users
  - [ ] Data migration scripts
  - [ ] Testing migration process

### Authentication & Security
- [ ] Implement actual authentication backend
- [ ] Add JWT token management
- [ ] Implement password reset email functionality
- [ ] Add two-factor authentication (2FA)
- [ ] Session management and timeout
- [ ] Rate limiting for login attempts
- [ ] Email verification system

### Backend Integration
- [ ] Connect to real API endpoints
- [ ] Implement user registration API
- [ ] Implement login API
- [ ] Product data API integration
- [ ] Affiliate link generation API
- [ ] Earnings tracking API
- [ ] Network tree API
- [ ] MEV Bot & XAB Bot staking API
- [ ] Supabase email collection integration (function ready)

### Phoenix & Elixir Backend Stack (Planned)
- [ ] **Evaluate Elixir + Phoenix** as core backend framework for high-concurrency services (aligned with TECH_STACK roadmap)
- [ ] **Design architecture** for Phoenix services that sit on top of the Erlang/Elixir ledger stack
- [ ] **Define integration pattern** between Phoenix APIs and existing Netlify/Go services
- [ ] **Choose deployment strategy** for Phoenix apps (hosting, clustering, monitoring)
- [ ] **Document Phoenix/Elixir stack** in `docs/Core Documentation/TECH_STACK.md` and related service docs
- [ ] **Create initial Phoenix proof-of-concept** service (API + simple real-time channel)
- [ ] Set up Phoenix development environment
- [ ] Configure Phoenix for BEAM VM concurrency
- [ ] Implement Phoenix API endpoints for ledger data access
- [ ] Plan Phoenix Channels/LiveView integration (future real-time features)

### PostgreSQL & Vector Database Stack (Planned)
- [ ] **Design overall PostgreSQL strategy** across Supabase and additional Postgres instances
- [ ] **Evaluate requirements** for dedicated Postgres with vector extension (e.g., `pgvector`) based on TECH_STACK roadmap
- [ ] **Propose schema patterns** for vector-based similarity search (embeddings tables, indexes, query patterns)
- [ ] **Define migration and synchronization approach** between Supabase (core data) and extra Postgres/vector database
- [ ] **Document Postgres and vector database architecture** in `docs/Core Documentation/TECH_STACK.md` and `docs/Services/supabase/`
- [ ] **Create initial PoC** for vector search (e.g., semantic product or document search) using Postgres + vector extension
- [ ] **CRITICAL**: Craig to validate and approve the official vector database technology choice
- [ ] Set up dedicated PostgreSQL instance with vector extension
- [ ] Create vector database schema and indexes
- [ ] Implement vector embedding generation pipeline
- [ ] Build vector similarity search queries
- [ ] Test vector database performance and scalability

### Blockchain & Transparency Ledger
- [ ] **Implement custom blockchain ledger using Erlang/Elixir**
  - [ ] Research Erlang/Elixir blockchain implementation patterns
    - [ ] Review BEAM VM advantages for blockchain (concurrency, distribution, fault tolerance)
    - [ ] Study proven patterns from Erlang Solutions blockchain implementations
    - [ ] Reference: https://www.erlang-solutions.com/blog/erlang-and-elixir-blockchain-tech-deep-dive/
  - [ ] Design ledger architecture (block structure, hash chain, consensus)
    - [ ] Block structure: Transactions, hash, previous hash, timestamp, nonce
    - [ ] Hash chain: SHA-256 or similar cryptographic hashing
    - [ ] Consensus mechanism: RAFT (for trusted/hybrid network) or custom consensus
    - [ ] P2P network architecture using Erlang distribution
  - [ ] Implement test chain/ledger (~200 lines of code)
    - [ ] Basic block structure with transactions
    - [ ] Hash chain verification
    - [ ] Block creation and validation
    - [ ] Simple consensus mechanism (test/proof of concept)
  - [ ] Build block creation and validation logic
    - [ ] Transaction validation (affiliate commissions, earnings)
    - [ ] Block mining/creation process
    - [ ] Hash calculation and verification
    - [ ] Merkle tree computation (for transaction batching)
  - [ ] Implement hash chain verification
    - [ ] Previous block hash verification
    - [ ] Chain integrity checks
    - [ ] Fork detection and resolution
    - [ ] Chain validation on startup
  - [ ] Add transaction recording functionality
    - [ ] Record affiliate transactions (sales, commissions)
    - [ ] Record bot staking transactions
    - [ ] Record network commission transactions
    - [ ] Transaction metadata (user ID, product ID, amounts, timestamps)
  - [ ] Implement BEAM VM advantages
    - [ ] **Massive Concurrency**: Lightweight processes for concurrent block processing
    - [ ] **P2P Networking**: Leverage Erlang's built-in distribution for node communication
    - [ ] **Fault Tolerance**: Supervisor pattern for process crash recovery
    - [ ] **High Availability**: Mnesia database replication across nodes
    - [ ] **Introspection**: Connect to running system for debugging and monitoring
    - [ ] **Safety**: No direct memory access (immune to buffer overflow vulnerabilities)
  - [ ] Integrate with transparency ledger feature in Marketplace
    - [ ] Connect blockchain ledger to Marketplace Due Diligence tab
    - [ ] Display on-chain transaction records
    - [ ] Transaction hash verification links
    - [ ] Real-time ledger updates
  - [ ] Connect to affiliate transaction recording
    - [ ] Automatic transaction recording on affiliate sales
    - [ ] Commission calculation and recording
    - [ ] Multi-level commission tracking (network commissions)
    - [ ] Transaction history queries
  - [ ] Add commission tracking on-chain
    - [ ] Record all commission transactions
    - [ ] Track commission types (direct, network, staking)
    - [ ] Commission verification and audit trail
    - [ ] Historical commission queries
  - [ ] Implement query/read API for ledger data
    - [ ] REST API or GraphQL for ledger queries
    - [ ] Transaction lookup by hash
    - [ ] User transaction history
    - [ ] Block explorer endpoints
    - [ ] Real-time transaction streaming
  - [ ] Add ledger explorer interface
    - [ ] Web UI for browsing blocks
    - [ ] Transaction search and filtering
    - [ ] Block details view
    - [ ] Chain statistics and metrics
    - [ ] Network status and node information
  - [ ] Performance testing and optimization
    - [ ] TPS (Transactions per Second) benchmarking
    - [ ] Concurrent transaction processing testing
    - [ ] Network performance under load
    - [ ] Storage optimization for growing chain
    - [ ] Sharding considerations (if needed for scale)
  - [ ] Security audit of ledger implementation
    - [ ] Smart contract audit (if applicable)
    - [ ] Consensus mechanism security review
    - [ ] P2P network security assessment
    - [ ] Access control and permission verification
    - [ ] Cryptographic implementation review

**Why Erlang/Elixir for Blockchain** (Reference: [Erlang Solutions Blockchain Deep Dive](https://www.erlang-solutions.com/blog/erlang-and-elixir-blockchain-tech-deep-dive/)):
- ✅ **Fast Development**: Functional languages at high abstraction level, smaller codebase (~200 lines for test chain)
- ✅ **Massively Concurrent**: BEAM VM lightweight processes (hundreds of thousands simultaneously)
- ✅ **Built-in Distribution**: Transparent message handling, no IDLs or brokers needed
- ✅ **High Availability**: Supervisor pattern + Mnesia replication = fault-tolerant system
- ✅ **Strong Networking**: Proven P2P capabilities (WhatsApp, Bet365, Klarna use BEAM VM)
- ✅ **Introspection**: Connect to running system for debugging, monitoring, status checks
- ✅ **Safety**: No direct memory access = immune to buffer overflow vulnerabilities
- ✅ **RAFTS Consensus**: Can use RAFT for trusted/hybrid networks (quick prototype)
- ✅ **Merkle Tree Computation**: Ideal for collaborative concurrent approach via sharding

### QR Code System & Affiliate Link Generator
- [ ] **QR Code Generation System**
  - [ ] Enhanced QR code generation API
    - [ ] Custom QR code sizes (100x100 to 2000x2000)
    - [ ] Custom colors (foreground, background, logo overlay)
    - [ ] QR code format options (PNG, SVG, PDF)
    - [ ] Error correction levels (L, M, Q, H)
    - [ ] Logo/branding overlay in QR code center
    - [ ] QR code border customization
  - [ ] QR code storage and management
    - [ ] Save QR codes to user account
    - [ ] QR code history and gallery
    - [ ] QR code organization by product/campaign
    - [ ] Bulk QR code generation
    - [ ] QR code analytics tracking
  - [ ] QR code scanning and tracking
    - [ ] Track QR code scans (timestamp, location, device)
    - [ ] Conversion tracking from QR scans
    - [ ] QR code performance analytics
    - [ ] Unique QR codes per user/product/campaign
  - [ ] QR code templates
    - [ ] Pre-designed QR code templates
    - [ ] Industry-specific templates (retail, events, real estate, etc.)
    - [ ] Custom template builder
    - [ ] Template library and marketplace

- [ ] **Affiliate Link Generator System**
  - [ ] Link generation features
    - [ ] Automatic affiliate link generation per product
    - [ ] Custom link slug/shortcodes
    - [ ] Link expiration dates
    - [ ] Password-protected links
    - [ ] Deep linking support (specific pages/sections)
    - [ ] UTM parameter management
    - [ ] Multiple destination URLs (A/B testing)
  - [ ] Link shortening service
    - [ ] Custom domain support (bitnex.us, etc.)
    - [ ] Custom short link slugs
    - [ ] Link preview customization
    - [ ] Bulk link shortening
    - [ ] Link alias management
  - [ ] Link tracking and analytics
    - [ ] Click tracking (count, timestamp, location)
    - [ ] Conversion tracking (sales, signups, clicks)
    - [ ] Device and browser analytics
    - [ ] Geographic analytics (country, city)
    - [ ] Referrer source tracking
    - [ ] Real-time click notifications
    - [ ] Historical performance data
  - [ ] Link management
    - [ ] Link organization and folders
    - [ ] Link tagging and categories
    - [ ] Link search and filtering
    - [ ] Bulk link operations (archive, delete, update)
    - [ ] Link sharing and collaboration
    - [ ] Link export (CSV, JSON)
  - [ ] Advanced link features
    - [ ] Retargeting pixels integration
    - [ ] Conversion pixel tracking
    - [ ] Social media link preview customization
    - [ ] Link cloaking (hide affiliate parameters)
    - [ ] Geo-targeting (redirect based on location)
    - [ ] Time-based redirects
    - [ ] Device-specific redirects (mobile vs desktop)
  - [ ] Link security
    - [ ] Link verification and validation
    - [ ] Spam/fraud detection
    - [ ] Rate limiting for link generation
    - [ ] Link access logs
    - [ ] Suspicious activity alerts

- [ ] **Integrated QR Code + Affiliate Link System**
  - [ ] Generate QR code from affiliate link automatically
  - [ ] Link QR codes to affiliate links in database
  - [ ] Track both QR scans and link clicks together
  - [ ] Combined analytics dashboard (QR + Link performance)
  - [ ] Bulk generation (links + QR codes for multiple products)
  - [ ] Campaign management (products, links, QR codes as campaigns)

- [ ] **Backend Service Structure** (One folder per service)
  - [x] `backend/netlify/` - Netlify serverless functions ✅
  - [ ] `backend/n8n/` - n8n automation service
    - [ ] Create `backend/n8n/` folder structure
    - [ ] n8n workflow configurations
    - [ ] Integration with Supabase, Gemini AI, payment gateways
    - [ ] Commission calculation workflows
    - [ ] Notification workflows
    - [ ] Data sync workflows
  - [ ] `backend/discourse/` - Discourse forum service
    - [ ] Create `backend/discourse/` folder structure
    - [ ] Discourse configuration files
    - [ ] Integration with main platform
    - [ ] SSO (Single Sign-On) setup
    - [ ] Custom theme and branding
  - [ ] `backend/erlang-ledger/` - Erlang/Elixir blockchain ledger
    - [ ] Create `backend/erlang-ledger/` folder structure
    - [ ] Implement test chain/ledger (~200 lines)
    - [ ] Block creation and validation logic
    - [ ] Hash chain verification
    - [ ] Transaction recording functionality
  - [ ] `backend/phoenix-elixir/` - Phoenix/Elixir backend services (Planned)
    - [ ] Create `backend/phoenix-elixir/` folder structure
    - [ ] Set up Phoenix project structure
    - [ ] Configure Phoenix for high-concurrency APIs
    - [ ] Design architecture for Phoenix services on top of Erlang/Elixir ledger
    - [ ] Implement integration pattern with existing Netlify/Go services
    - [ ] Set up Phoenix Channels for real-time features (future)
    - [ ] Create initial Phoenix proof-of-concept service (API + simple real-time channel)
    - [ ] Document Phoenix/Elixir stack in `docs/Core Documentation/TECH_STACK.md`
  - [ ] `backend/golang-api/` - Go API services
    - [ ] Create `backend/golang-api/` folder structure
    - [ ] High-performance API servers
    - [ ] Real-time data processing
    - [ ] Blockchain service integration

- [ ] **Backend API Development**
  - [ ] QR code generation API endpoint
  - [ ] Affiliate link generation API endpoint
  - [ ] Link shortening API endpoint
  - [ ] Click tracking API endpoint
  - [ ] Analytics API endpoints
  - [ ] Bulk operations API endpoints
  - [ ] Link validation API endpoint
  - [ ] QR code storage API endpoints

- [ ] **Database Schema**
  - [ ] `affiliate_links` table (link_id, user_id, product_id, url, short_url, slug, created_at, expires_at, etc.)
  - [ ] `qr_codes` table (qr_id, user_id, link_id, image_url, size, format, created_at, etc.)
  - [ ] `link_clicks` table (click_id, link_id, timestamp, ip_address, user_agent, location, device, conversion, etc.)
  - [ ] `qr_scans` table (scan_id, qr_id, timestamp, ip_address, user_agent, location, device, conversion, etc.)
  - [ ] `link_campaigns` table (campaign_id, name, user_id, created_at, etc.)
  - [ ] Link-campaign and QR-campaign relationships

- [ ] **UI Enhancements**
  - [ ] Enhanced QR code generator in Dashboard Tools
  - [ ] Enhanced affiliate link generator in ProductDetailDrawer
  - [ ] Dedicated Affiliate Link Manager page
  - [ ] QR Code Gallery page
  - [ ] Link analytics dashboard
  - [ ] QR code analytics dashboard
  - [ ] Campaign management interface
  - [ ] Bulk generation interface
  - [ ] Link preview modal with analytics
  - [ ] QR code preview modal with analytics

- [ ] **Mobile Features**
  - [ ] QR code scanner in mobile app
  - [ ] Generate QR codes on mobile
  - [ ] Link management on mobile
  - [ ] Mobile-optimized analytics views
  - [ ] Push notifications for link clicks/conversions

### Payment Processing
- [ ] Integrate payment gateway (Stripe/PayPal)
- [ ] NXC credits payment processing
- [ ] Wallet connection (MetaMask/WalletConnect)
- [ ] Transaction history API
- [ ] Refund processing
- [ ] Payment confirmation emails

### Core Features
- [ ] Real-time earnings updates (backend needed)
- [ ] Live commission ticker (backend needed)
- [ ] Network tree visualization (interactive, backend needed)
- [x] Product detail drawer enhancements (images, downloads, certifications - DONE)
- [ ] Alliance chat implementation (backend needed)
- [ ] Alliance private forum (backend needed)
- [ ] Real-time chat functionality (backend needed)
- [ ] File upload for product images (backend needed)

### Data Management
- [ ] User data persistence
- [ ] Cart persistence (already in localStorage, needs API)
- [ ] Product catalog API
- [ ] Analytics tracking
- [ ] User activity logging

### Research Questions Answers System
- [ ] **Team Answer Documents** - Create separate answer documents for each team member
  - [x] Create JOSEF_ANSWERS.md document
  - [x] Create CRAIG_ANSWERS.md document
  - [x] Create JONNE_ANSWERS.md document
  - [x] Create SVEIN_ANSWERS.md document
  - [x] Create LEE_ANSWERS.md document
  - [x] Add tasks to each team member's task doc
- [ ] **Database Implementation** - Create database for storing answers
  - [ ] Create database schema (see TEAM_ANSWERS_DATABASE_SCHEMA.md)
  - [ ] Create `team_answers` table with all required columns
  - [ ] Create `team_members` table
  - [ ] Create `answer_history` table for audit trail
  - [ ] Create database migration file
  - [ ] Set up foreign key relationships
  - [ ] Create database indexes for performance
  - [ ] Add database constraints and validations
- [ ] **API Endpoints** - Create REST API for answers management
  - [ ] GET `/api/team-answers` - Get all answers (with filters)
  - [ ] GET `/api/team-answers/:id` - Get specific answer
  - [ ] GET `/api/team-answers/team-member/:memberId` - Get answers by team member
  - [ ] GET `/api/team-answers/category/:category` - Get answers by category
  - [ ] POST `/api/team-answers` - Create new answer
  - [ ] PUT `/api/team-answers/:id` - Update answer
  - [ ] PATCH `/api/team-answers/:id/status` - Update answer status
  - [ ] GET `/api/team-answers/statistics` - Get completion statistics
  - [ ] GET `/api/team-answers/history/:id` - Get answer change history
- [ ] **Admin View Integration** - Add answers management to AdminView
  - [ ] Create "Research Answers" tab in AdminView
  - [ ] Display answers by team member
  - [ ] Display answers by category
  - [ ] Show completion statistics dashboard
  - [ ] Add filters (status, priority, team member, category)
  - [ ] Add search functionality
  - [ ] Display answer details and history
  - [ ] Add edit/update functionality (for admins)
  - [ ] Add status update functionality
  - [ ] Display due dates and overdue indicators
  - [ ] Show progress tracking (completed/pending/in progress)
  - [ ] Export answers functionality
- [ ] **Data Sync** - Sync between documents and database
  - [ ] Create script to import answers from documents to database
  - [ ] Create script to export answers from database to documents
  - [ ] Set up automatic sync (if needed)
  - [ ] Handle conflicts between document and database versions
- [ ] **Reporting & Analytics** - Add reporting features
  - [ ] Completion rate by team member
  - [ ] Completion rate by category
  - [ ] Overdue answers report
  - [ ] Priority distribution
  - [ ] Answer history timeline

### Product Tracking & Metrics API
- [ ] **Product Performance Metrics**
  - [ ] Product views tracking
    - [ ] Track individual product page views
    - [ ] Track product card views in marketplace
    - [ ] Track product detail drawer opens
    - [ ] Track product search impressions
    - [ ] Track time spent on product pages
    - [ ] Track scroll depth on product pages
    - [ ] Track product image views/clicks
  - [ ] Product click tracking
    - [ ] Track product card clicks
    - [ ] Track affiliate link clicks per product
    - [ ] Track product category clicks
    - [ ] Track product tag clicks
    - [ ] Track product comparison clicks
    - [ ] Track "Add to Cart" clicks
    - [ ] Track "Buy Now" clicks
  - [ ] Product conversion tracking
    - [ ] Track product purchases per affiliate
    - [ ] Track product sign-ups/registrations
    - [ ] Track product download completions
    - [ ] Track product subscription activations
    - [ ] Track product trial conversions
    - [ ] Track product upsell conversions
  - [ ] Product revenue metrics
    - [ ] Track total revenue per product
    - [ ] Track average order value per product
    - [ ] Track commission generated per product
    - [ ] Track revenue per affiliate per product
    - [ ] Track revenue trends over time
    - [ ] Track product profit margins
  - [ ] Product engagement metrics
    - [ ] Track product favorites/bookmarks
    - [ ] Track product shares (social media, email, etc.)
    - [ ] Track product reviews submitted
    - [ ] Track product ratings given
    - [ ] Track product comments/interactions
    - [ ] Track product report issues
    - [ ] Track product feedback submissions

- [ ] **Product Analytics API Endpoints**
  - [ ] Product views API endpoint
    - [ ] POST `/api/products/{id}/views` - Record product view
    - [ ] GET `/api/products/{id}/views` - Get view statistics
    - [ ] GET `/api/products/{id}/views/timeline` - Get view timeline data
  - [ ] Product clicks API endpoint
    - [ ] POST `/api/products/{id}/clicks` - Record product click
    - [ ] GET `/api/products/{id}/clicks` - Get click statistics
    - [ ] GET `/api/products/clicks/top` - Get top clicked products
  - [ ] Product conversions API endpoint
    - [ ] POST `/api/products/{id}/conversions` - Record conversion
    - [ ] GET `/api/products/{id}/conversions` - Get conversion statistics
    - [ ] GET `/api/products/{id}/conversion-rate` - Get conversion rate
    - [ ] GET `/api/products/conversions/top` - Get top converting products
  - [ ] Product revenue API endpoint
    - [ ] GET `/api/products/{id}/revenue` - Get product revenue
    - [ ] GET `/api/products/{id}/revenue/timeline` - Get revenue timeline
    - [ ] GET `/api/products/revenue/top` - Get top revenue products
    - [ ] GET `/api/products/{id}/revenue/breakdown` - Get revenue breakdown by source
  - [ ] Product engagement API endpoint
    - [ ] POST `/api/products/{id}/engagement` - Record engagement action
    - [ ] GET `/api/products/{id}/engagement` - Get engagement statistics
    - [ ] GET `/api/products/engagement/top` - Get most engaged products
  - [ ] Product performance API endpoint
    - [ ] GET `/api/products/{id}/performance` - Get comprehensive performance metrics
    - [ ] GET `/api/products/performance/compare` - Compare multiple products
    - [ ] GET `/api/products/performance/dashboard` - Get dashboard metrics
    - [ ] GET `/api/products/performance/trends` - Get performance trends

- [ ] **Product Metrics Database Schema**
  - [ ] `product_views` table
    - [ ] view_id, product_id, user_id, affiliate_id, timestamp, session_id, device, browser, location, referrer, duration
  - [ ] `product_clicks` table
    - [ ] click_id, product_id, user_id, affiliate_id, timestamp, session_id, click_type, source, device, browser, location
  - [ ] `product_conversions` table
    - [ ] conversion_id, product_id, user_id, affiliate_id, timestamp, conversion_type, revenue, commission, order_id, metadata
  - [ ] `product_revenue` table
    - [ ] revenue_id, product_id, affiliate_id, amount, commission, timestamp, transaction_id, currency, status
  - [ ] `product_engagement` table
    - [ ] engagement_id, product_id, user_id, affiliate_id, timestamp, engagement_type (favorite, share, review, rating, etc.), metadata
  - [ ] `product_metrics_aggregated` table
    - [ ] product_id, date, total_views, total_clicks, total_conversions, total_revenue, conversion_rate, avg_order_value, unique_visitors

- [ ] **Product Analytics Dashboards**
  - [ ] Product Performance Dashboard
    - [ ] Real-time product views/clicks
    - [ ] Conversion rate metrics
    - [ ] Revenue charts and graphs
    - [ ] Engagement metrics visualization
    - [ ] Product ranking charts
    - [ ] Time-series performance graphs
  - [ ] Product Comparison Dashboard
    - [ ] Side-by-side product metrics
    - [ ] Product performance comparison charts
    - [ ] Category performance analysis
    - [ ] Competitor product analysis
  - [ ] Affiliate Product Performance Dashboard
    - [ ] Products promoted by affiliate
    - [ ] Affiliate's product conversion rates
    - [ ] Revenue per product for affiliate
    - [ ] Top performing products for affiliate
    - [ ] Product recommendations based on performance
  - [ ] Vendor Product Analytics Dashboard
    - [ ] Vendor's products performance overview
    - [ ] Product sales and revenue tracking
    - [ ] Product engagement metrics
    - [ ] Product optimization recommendations

- [ ] **Real-time Product Metrics**
  - [ ] WebSocket/SSE for real-time updates
    - [ ] Real-time product view counts
    - [ ] Real-time click tracking
    - [ ] Real-time conversion notifications
    - [ ] Real-time revenue updates
  - [ ] Product metrics caching
    - [ ] Cache aggregated metrics
    - [ ] Cache top products lists
    - [ ] Cache dashboard data
    - [ ] Cache with TTL for performance

- [ ] **Product Metrics Reporting**
  - [ ] Daily product metrics reports
  - [ ] Weekly product performance summaries
  - [ ] Monthly product analytics reports
  - [ ] Custom date range reports
  - [ ] Product performance export (CSV, JSON, PDF)
  - [ ] Automated email reports for vendors/affiliates
  - [ ] Product performance alerts (thresholds, anomalies)

- [ ] **Product A/B Testing Metrics**
  - [ ] Track A/B test variations per product
  - [ ] Compare conversion rates between variants
  - [ ] Track performance differences
  - [ ] Statistical significance calculations
  - [ ] A/B test results dashboard

- [ ] **Product Segmentation & Filtering**
  - [ ] Filter metrics by product category
  - [ ] Filter metrics by product tags
  - [ ] Filter metrics by date range
  - [ ] Filter metrics by affiliate
  - [ ] Filter metrics by geographic location
  - [ ] Filter metrics by device/browser
  - [ ] Filter metrics by traffic source

- [ ] **Product Performance Optimization**
  - [ ] Identify underperforming products
  - [ ] Product performance recommendations
  - [ ] Automatic product ranking adjustments
  - [ ] Product visibility optimization
  - [ ] Conversion rate optimization suggestions
  - [ ] Product pricing optimization insights

- [ ] **Integration with Existing Systems**
  - [ ] Integrate with affiliate link tracking
  - [ ] Integrate with QR code scan tracking
  - [ ] Integrate with commission calculation system
  - [ ] Integrate with marketplace product display
  - [ ] Integrate with product vetting system
  - [ ] Integrate with content generator (track generated content performance)

---

## 🟡 Medium Priority

### Marketplace Enhancements
- [ ] Product image upload (not just URL)
- [ ] Product editing for sellers
- [ ] Product review system
- [ ] Product rating system
- [ ] Advanced search filters
- [ ] Product comparison feature
- [ ] Wishlist functionality
- [ ] Product recommendations based on history

### Dashboard Enhancements
- [ ] Export data functionality
- [ ] Custom date range selection
- [ ] More chart types
- [ ] Dashboard customization
- [ ] Widget rearrangement
- [ ] Dark/light theme toggle
- [ ] Notification center

### Alliance Features
- [ ] Alliance chat room
- [ ] Alliance private forum
- [ ] Team performance analytics
- [ ] Network growth visualization
- [ ] Team leaderboard
- [ ] Alliance events calendar
- [ ] Mentorship matching

### Academy Enhancements
- [ ] Video player integration
- [ ] Course progress tracking
- [ ] Certificate generation
- [ ] Quiz system
- [ ] Course reviews
- [ ] Live webinar integration
- [ ] Course completion badges

### Content Generator
- [ ] Image generation
- [ ] Video script generation
- [ ] Multiple content variations
- [ ] Content scheduling
- [ ] Platform-specific formatting
- [ ] Content performance tracking
- [ ] A/B testing for content

### Affiliate Manager
- [x] Link performance analytics (basic UI implemented)
- [ ] Advanced conversion funnel visualization
- [ ] Enhanced geographic analytics
- [ ] Enhanced device analytics
- [ ] Campaign management system (see QR Code & Affiliate Link Generator section)
- [x] Link expiration dates (UI placeholder)
- [ ] Custom landing pages
- [ ] Link performance comparison tools
- [ ] A/B testing for links
- [ ] Automated link optimization recommendations

### Social Features
- [ ] Real-time messaging
- [ ] Group chats
- [ ] File sharing in chat
- [ ] Voice messages
- [ ] Video calls
- [ ] Activity feed
- [ ] Notifications system

---

## 🟢 Low Priority

### UI/UX Improvements
- [ ] Animations and transitions
- [ ] Loading skeletons
- [ ] Empty state illustrations
- [ ] Onboarding tour
- [ ] Tooltips and help text
- [ ] Keyboard shortcuts
- [ ] Accessibility improvements (ARIA labels)
- [ ] Screen reader support

### Mobile App
- [ ] React Native app
- [ ] iOS app
- [ ] Android app
- [ ] Push notifications
- [ ] Mobile-specific features

### Advanced Features
- [ ] AI-powered product recommendations
- [ ] Predictive analytics
- [ ] Automated content scheduling
- [ ] Email campaign builder
- [ ] Landing page builder
- [ ] A/B testing framework
- [ ] Advanced reporting

### Integrations
- [ ] Email marketing integration (Mailchimp, etc.)
- [ ] CRM integration
- [ ] Social media API integrations
- [ ] Analytics integration (Google Analytics)
- [ ] Customer support integration (Intercom, etc.)

### Localization
- [ ] Multi-language support
- [ ] Currency conversion
- [ ] Regional payment methods
- [ ] Localized content

---

## 🚀 Future Enhancements

### Phase 1 (Q1 2025)
- [ ] Complete backend API development
- [ ] User authentication system
- [ ] Payment processing integration
- [ ] Real-time data updates
- [ ] Email notification system

### Phase 2 (Q2 2025)
- [ ] Mobile applications
- [ ] Advanced analytics
- [ ] AI enhancements
- [ ] Social features expansion
- [ ] Marketplace improvements

### Phase 3 (Q3 2025)
- [ ] White-label solutions
- [ ] API for third-party developers
- [ ] Enterprise features
- [ ] Advanced automation
- [ ] Blockchain integration

### Phase 4 (Q4 2025)
- [ ] International expansion
- [ ] Multi-language support
- [ ] Regional partnerships
- [ ] Advanced MLM features
- [ ] Gamification elements

---

## 🐛 Bug Fixes

### Known Issues
- [ ] Fix Recharts ResponsiveContainer sizing warnings
- [ ] Resolve MIME type issues in development
- [ ] Fix cart badge not updating immediately
- [ ] Resolve TypeScript strict mode warnings
- [ ] Fix mobile navigation menu
- [ ] Resolve form validation edge cases
- [ ] Fix image loading errors
- [ ] Resolve chart rendering on mobile

### Testing Needed
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Form validation testing
- [ ] Payment flow testing
- [ ] Authentication flow testing
- [ ] Cart functionality testing
- [ ] API integration testing

---

## 🔧 Technical Debt

### Code Quality
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add E2E tests
- [ ] Code review process
- [ ] Refactor duplicate code
- [ ] Improve error handling
- [ ] Add logging system
- [ ] Performance optimization

### Architecture
- [ ] State management (Redux/Zustand)
- [ ] API layer abstraction
- [ ] Error boundary components
- [ ] Loading state management
- [ ] Cache management
- [ ] Optimistic updates

### Security
- [ ] Security audit
- [ ] Penetration testing
- [ ] Input sanitization
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] API key management
- [ ] **Blockchain ledger security audit** (after Erlang/Elixir implementation)

### Performance
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Bundle size optimization
- [ ] CDN configuration
- [ ] Caching strategy
- [ ] Database optimization

---

## 📚 Documentation

### User Documentation
- [ ] User guide
- [ ] Video tutorials
- [ ] FAQ expansion
- [ ] Best practices guide
- [ ] Troubleshooting guide for users
- [ ] Getting started guide

### Developer Documentation
- [ ] API documentation
- [ ] Component library docs
- [ ] Architecture documentation
- [ ] Deployment guide updates
- [ ] Contributing guidelines
- [ ] Code style guide

### Business Documentation
- [ ] Business plan updates
- [ ] Financial projections
- [ ] Marketing strategy
- [ ] Partnership proposals
- [ ] Investor pitch deck

---

## 📊 Progress Tracking

### Overall Progress
- **Completed**: ~75% (UI/UX features mostly complete, backend integration needed)
- **In Progress**: ~5% (Testing and refinement of new features)
- **Planned**: ~20% (Backend APIs, authentication, payment processing, blockchain ledger)

### By Category
- **Core Features**: 95% complete (UI complete, backend integration needed)
- **Authentication**: 70% complete (UI done, backend needed)
- **Payment**: 40% complete (UI done, integration needed)
- **Social Features**: 80% complete (Forum, Feed, News, Friends, Chat - UI done)
- **Trust & Security Features**: 90% complete (UI implemented, certifications documented)
- **Admin Features**: 85% complete (Governance, Vetting with community approval added)
- **Documentation**: 98% complete (comprehensive documentation, regularly updated)
- **UI/UX**: 90% complete (Responsive design, trust features, enhanced interactions)
- **Content & Marketing**: 85% complete (Content Generator with modals, product marketing assets)

---

## 🎯 Next Steps (Immediate)

### This Week
1. Complete authentication backend integration
2. Test all new pages thoroughly
3. Fix known bugs
4. Add error boundaries
5. Improve loading states

### This Month
1. Payment gateway integration
2. Real API endpoints
3. Email notification system
4. User testing
5. Performance optimization

### This Quarter
1. Mobile app development
2. Advanced features
3. Security audit
4. Beta launch preparation
5. Marketing materials

---

## 📝 Notes

### Priority Guidelines
- **High Priority**: Blocks core functionality or user experience
- **Medium Priority**: Enhances user experience or adds value
- **Low Priority**: Nice-to-have features or polish
- **Future**: Long-term roadmap items

### Task Assignment
- **MANDATORY RULE - TASK OWNERSHIP**:
  - ✅ **Every task MUST have a clear owner** (person or role) – NO unowned tasks
  - ✅ Owners must be specified using a consistent pattern, e.g. `[Owner: Josef]`, `[Owner: Craig]`, `[Owner: Jonne]`, `[Owner: Lee]`, `[Owner: Svein]`, `[Owner: Cory]`, or `[Owner: Role]` (e.g. `[Owner: Backend]`, `[Owner: CTO]`)
  - ✅ Shared tasks must list all responsible owners or clearly state `[Owner: Shared]` with primary contact
  - ✅ When adding a new task, you MUST assign an owner immediately
  - ✅ When moving tasks between people, update the owner tag here and in the person’s task doc\n- Tasks should be assigned to specific team members\n- Each task should have an estimated time\n- Tasks should be broken down into smaller subtasks when needed

### Review Process
- Weekly review of high-priority tasks
- Monthly review of all tasks
- Quarterly roadmap planning
- Update this document regularly

---

## 🔄 Update Log

**January 2026 - Initial Creation**
- Created comprehensive TODO list
- Categorized all tasks
- Set priorities
- Added progress tracking

**January 2026 - Major Updates**
- Added Forum page
- Enhanced Dashboard with Tools section, functional Commission Calculator, clickable Global Leaderboard
- Implemented MEV Bot & XAB Bot (XRP) distinction
- Updated all documentation with MEV/XAB Bot references
- Updated course pricing structure (individual, self-paced, bundles, live events)
- Enhanced landing page with FOMO elements and working countdown timer (January 21, 2026)
- Improved "Initiate Access" button with animations and urgency
- Increased text size for "Limited to 500 Early-Adopter licenses"
- Fixed responsive design issues (mobile-first, all viewports working)
- Added News page with article images
- Added Feed page with functional like, comment, and share buttons
- Enhanced ProductDetailDrawer with dynamic images and download functionality
- Enhanced Content Generator with upload modal and quick actions modals (Save Template, Schedule Post, View Analytics)
- Enhanced Marketplace with Due Diligence tab, ISO 27001/27701 certifications, detailed audit modals
- Added product and vendor certification badges throughout system
- Enhanced Alliance page with manual entry for emails and phone numbers in Outreach
- Added Governance page with decentralized voting system
- Enhanced Vetting page with community-driven product approval
- Organized project into frontend/ and backend/ folders (structure ready, files not moved yet - future task)
- Added Supabase integration setup
- Updated Revenue Plan with self-paced courses
- Added date management rules to .cursorrules
- Fixed server path resolution for both folder structures
- Updated all Product docs to align with recent changes
- Added comprehensive documentation (Platform Overview, Trust Building System, Legal Protections, Tech Stack, One-Pager)
- Updated README.md with legal protections and team contact information
- Added Craig Martin's contact email to all documentation
- **Added blockchain ledger implementation task**: Custom Erlang/Elixir ledger (~200 lines) for transparency ledger system
  - Detailed Erlang/Elixir + BEAM VM advantages for blockchain
  - Reference to Erlang Solutions blockchain deep dive article
  - Comprehensive implementation plan with BEAM VM features
  - Integration points with Marketplace transparency ledger
- **Added n8n and Golang to tech stack**: Workflow automation and high-performance services
- **Added server infrastructure (future)** to tech stack for dedicated server hosting
- **Added Multi-Tenant System & User Roles task**: Complete multi-tenant architecture with Super Admin, Admin, Member, and User roles, including RBAC, tenant management, database schema updates, API updates, UI updates, security considerations, and migration strategy
- **Added QR Code System & Affiliate Link Generator task**: Comprehensive QR code generation system with customization, tracking, analytics, and storage. Full affiliate link generator with shortening, tracking, analytics, campaign management, and advanced features. Integrated system for QR codes and affiliate links with combined analytics
- **Added Product Tracking & Metrics API task**: Comprehensive product performance tracking system with views, clicks, conversions, revenue, and engagement metrics. Full analytics API endpoints, database schema for metrics, real-time tracking, dashboards, A/B testing metrics, segmentation, and optimization features

---

**Last Updated**: January 2026  
**Next Review**: Weekly  
**Maintained By**: Development Team




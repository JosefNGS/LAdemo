# BitNexus Marketplace – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- Product & UX: [Owner: Josef]  
- Backend & Data: [Owner: Jonne]  
- Architecture & Security: [Owner: Craig]  

---

## 1. Vision & Scope

- **Goal**: Build a fully functional, multi-tenant Marketplace where affiliates can discover, evaluate, and promote vetted products, with full transparency on due diligence, commissions, and performance.
- **Scope (v1)**:
  - Public/marketing view of products (read-only)
  - Authenticated user view with affiliate-specific actions
  - Vendor / product owner workflows for listing and updating products
  - Admin tooling for vetting, approvals, and takedowns
  - Multi-tenant isolation (tenant-specific product catalogs, pricing, and branding)

---

## 2. Phasing Overview

1. **Phase 0 – Stabilize Current Demo**
   - Align existing Marketplace UI with this plan
   - Map current fake/demo data to target data model
2. **Phase 1 – Core Product Catalog (Single Tenant)**
   - Read-only product listing, detail pages, filters, search
3. **Phase 2 – Multi-Tenant Marketplace**
   - Tenant-aware catalog, pricing, and configurations
4. **Phase 3 – Vendor & Product Owner Workflows**
   - Product submission, editing, and approval flows
5. **Phase 4 – Commission & Tracking Integration**
   - Click tracking, affiliate links, attribution, and reporting
6. **Phase 5 – Governance, Vetting & Compliance**
   - Formal approval pipeline, audit trails, and dispute handling

Each phase should be reflected in `docs/Project Management/TODO.md` with concrete tasks and owners.

---

## 3. Domain Model & Data Design (Backend / PostgreSQL)

**Owner**: [Owner: Jonne], review by [Owner: Craig]  

### 3.1 Core Entities (Minimal v1)
- `tenants`
- `products`
- `product_versions` (optional v1, recommended v2+)
- `product_assets` (images, PDFs, links)
- `categories` / `tags`
- `vendors` (if separate from tenants)

### 3.2 Multi-Tenant Fields
- All marketplace tables MUST include:
  - `tenant_id` (FK → `tenants`)
  - `created_at`, `updated_at`
  - `status` (e.g. `draft`, `pending_review`, `approved`, `rejected`, `deprecated`)

### 3.3 Integration Points
- Align with:
  - **Authentication & Security (Multi-Tenant)** section in `TODO.md`
  - **PostgreSQL & Vector Database Stack (Planned)** in `TODO.md`
  - **TECH_STACK.md** (PostgreSQL + planned vector search)

Planned extension: vector search for product discovery (embeddings table + `pgvector`).

---

## 4. Backend Services Responsibilities

**Owners**:  
- Phoenix HTTP/API: [Owner: Craig]  
- Elixir services (business logic): [Owner: Backend]  
- Erlang Ledger (optional, later): [Owner: Backend]  

### 4.1 Phoenix (docs/Services/phoenix/)
- Public & authenticated HTTP API for Marketplace:
  - List products, filters, search
  - Get product detail
  - Tenant-aware routes (tenant in JWT + URL/host)
- No core marketplace business rules here; delegate to Elixir services.

### 4.2 Elixir Services (docs/Services/elixir/)
- **MarketplaceService** responsibilities:
  - Product lifecycle (create, update, archive)
  - Vetting status, approvals, rejection reasons
  - Tenant-specific visibility rules
  - Commission rate configuration (read-only until ledger ready)
  - Integration points to Erlang ledger (future)

### 4.3 Erlang/Elixir Ledger (docs/Services/erlang-ledger/)
- Later phase:
  - Record marketplace transactions and commission events
  - Immutable ledger for transparency

---

## 5. Frontend & UX Plan (React)

**Owner**: [Owner: Josef]  

### 5.1 Key Views
- **Marketplace Landing**
  - Category filters, search, featured products, badges (audited, verified, risk level)
- **Product Detail**
  - Full description, media, due-diligence section, risk flags
  - Commission info (planned), expected earnings scenarios
  - “Get Affiliate Link” / “Promote” button (wired when auth & tracking ready)
- **Vendor Console (later phase)**
  - Vendor’s own products, stats, and editing tools

### 5.2 Multi-Tenant UX
- Visual indication of current tenant (logo, colors)
- Tenant-specific:
  - Catalog
  - Pricing
  - Available actions (depending on role & tenant)

### 5.3 Integration with Admin View
- Admin View (`AdminView.tsx`) should eventually:
  - Surface marketplace moderation queues
  - Show per-tenant marketplace KPIs
  - Link directly into product approval flows

---

## 6. Authentication, Roles & Tenancy

**Owners**:  
- Auth architecture: [Owner: Craig]  
- Implementation: [Owner: Backend]  

Tie Marketplace permissions to:
- **Multi-Tenant System & User Roles** (in `TODO.md`)
- **Authentication & Security (Multi-Tenant)** plan

### 6.1 Roles Relevant to Marketplace
- **Super Admin**: Cross-tenant visibility, global controls
- **Tenant Admin**: Tenant’s marketplace configuration & approvals
- **Vendor / Product Owner**: Manage their products (within tenant)
- **Member/User**: Browse and get affiliate links (once live)

### 6.2 Access Patterns
- All Marketplace APIs must:
  - Validate JWT (Phoenix + Elixir accounts_service)
  - Enforce tenant_id from token
  - Enforce role-based permissions

---

## 7. Integration with Other Services

### 7.1 n8n (Automation)
- Workflows for:
  - Product approval notifications
  - Vendor onboarding flows
  - KPI alerts (e.g., product underperforming, fraud flags)

### 7.2 Netlify / Hosting (Alpha)
- Current:
  - UI served via Netlify / static hosting
- Future:
  - Move Marketplace APIs to Phoenix on AWS

### 7.3 GitHub / Process
- All Marketplace work must:
  - Use feature branches
  - Update `docs/Project Management/CHANGELOG.md`
  - Update this planning doc when scope changes

---

## 8. Phased Task Breakdown (to sync into TODO.md)

> **Note**: This section is a planning view. Concrete, atomic tasks should be mirrored into `docs/Project Management/TODO.md` with explicit `[Owner: …]` tags.

### Phase 0 – Align & Stabilize (UI & Docs)
- [ ] Review current Marketplace UI against this plan [Owner: Josef]
- [ ] Identify demo-only elements and mark them clearly [Owner: Josef]
- [ ] Map current frontend state to planned backend entities [Owner: Backend]
- [ ] Update `START_HERE.md` with Marketplace summary & status [Owner: Josef]

### Phase 1 – Core Product Catalog (Single Tenant)
- [ ] Finalize PostgreSQL schema for core marketplace tables [Owner: Jonne]
- [ ] Implement basic read-only Phoenix endpoints for products [Owner: Backend]
- [ ] Wire React Marketplace pages to real API [Owner: Josef]
- [ ] Add loading/error states for catalog & product detail views [Owner: Frontend]

### Phase 2 – Multi-Tenant Marketplace
- [ ] Add `tenant_id` to all marketplace tables [Owner: Jonne]
- [ ] Enforce tenant_id in all Marketplace queries [Owner: Backend]
- [ ] Implement tenant-scoped product visibility rules [Owner: Backend]
- [ ] Add tenant-aware UI indicators (logo, color, scope) [Owner: Josef]

### Phase 3 – Vendor & Product Workflows
- [ ] Design vendor/product owner UX flows [Owner: Josef]
- [ ] Implement create/update product APIs (Phoenix + Elixir) [Owner: Backend]
- [ ] Implement vendor console UI [Owner: Josef]
- [ ] Add validation & error messages (frontend + backend) [Owner: Team]

### Phase 4 – Tracking, Commissions & Ledger (Planned)
- [ ] Define data model for clicks, conversions, commissions [Owner: Backend]
- [ ] Decide what goes into Erlang ledger vs PostgreSQL [Owner: Craig]
- [ ] Implement initial ledger integration for transaction logging [Owner: Backend]
- [ ] Surface basic performance metrics in Marketplace UI [Owner: Frontend]

### Phase 5 – Governance, Vetting & Compliance
- [ ] Define formal vetting checklist & workflow [Owner: Team]
- [ ] Implement moderation & approval tools in Admin View [Owner: Admin]
- [ ] Add audit logs for product changes & approvals [Owner: Backend]
- [ ] Document governance rules in `docs/Services/netlify/`, `docs/Services/elixir/`, and `docs/Services/erlang-ledger/` as needed [Owner: Docs]

---

## 9. Documentation & Sync Rules

- **Must update**:
  - `docs/Project Management/CHANGELOG.md` for any Marketplace changes
  - `docs/Core Documentation/TECH_STACK.md` if tech choices impact Marketplace
  - `docs/Services/*/SERVICE_RULES.md` when Marketplace adds new responsibilities
- **Task ownership**:
  - Every Marketplace task MUST have an `[Owner: …]` tag (see `.cursorrules` and `TODO.md` rules).

---

## 10. Open Questions (to be resolved before deep implementation)

- [ ] How strict should tenant isolation be for cross-tenant marketplace visibility (if any)? [Owner: Craig]
- [ ] Exact split of responsibility between Elixir services vs Erlang ledger for commission logic? [Owner: Craig]
- [ ] Priority order of Marketplace vs other backend services (n8n, Golang API, etc.)? [Owner: Team]


# Alliance Arena – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- Business & Partner Strategy: [Owner: Josef]  
- Backend & Data: [Owner: Jonne]  
- Architecture & Security: [Owner: Craig]  

---

## 1. Vision & Scope

- **Goal**: Alliance Arena is the partner/alliances hub for BitNexus: manage alliances, joint campaigns, revenue sharing, and outreach in one place.
- **Scope (v1)**:
  - Partner profiles (alliance records)
  - Pipeline of alliance opportunities (stages: prospect → active → paused → closed)
  - Basic KPIs (revenue, leads, deals per alliance)
  - Integration with Content Generator & Outreach System (n8n)

---

## 2. Phasing Overview

1. **Phase 0 – Model & UX Definition**
   - Define “alliance” vs “regular affiliate” and CRM-style stages
2. **Phase 1 – Core Alliance CRM**
   - Alliances, contacts, opportunities, notes
3. **Phase 2 – Multi-Tenant Alliances**
   - Different alliances per tenant; shared/alliance types
4. **Phase 3 – Outreach & Playbooks**
   - Deep integration with Content Generator + n8n
5. **Phase 4 – Analytics & Reporting**
   - Dashboards for performance by alliance, status, segment

---

## 3. Domain Model & Data Design (PostgreSQL)

**Owner**: [Owner: Jonne]  

### 3.1 Core Entities
- `alliances`
  - Core alliance/partner record
- `alliance_contacts`
  - People at the partner organization
- `alliance_opportunities`
  - Deals / initiatives / joint campaigns
- `alliance_activities`
  - Logged touchpoints, calls, meetings, outreach

### 3.2 Multi-Tenant Fields
- Every Alliance table includes:
  - `tenant_id`
  - `owner_user_id`
  - `status` (e.g. `prospect`, `negotiation`, `active`, `paused`, `closed`)

---

## 4. Backend Services & Responsibilities

**Owners**:  
- Phoenix HTTP/API: [Owner: Backend]  
- Elixir services (business logic): [Owner: Backend]  

### 4.1 AllianceService
- Responsibilities:
  - CRUD for alliances, contacts, opportunities
  - Stage transitions and validation
  - Access control (who can see/edit which alliances)
  - Summaries / KPIs per alliance

### 4.2 Phoenix Endpoints
- Alliance routes:
  - `GET /api/v1/alliances`
  - `POST /api/v1/alliances`
  - `GET /api/v1/alliances/:id`
  - `PATCH /api/v1/alliances/:id`
  - Similar endpoints for contacts and opportunities

---

## 5. Frontend & UX Plan (React)

**Owner**: [Owner: Josef]  

### 5.1 Key Views
- **Alliance List**
  - Table / cards with status, owner, KPIs
- **Alliance Detail**
  - Profile of partner
  - Contacts and opportunities
  - Activity timeline
- **Pipeline View**
  - Kanban-style stages (similar to CRM pipeline)

### 5.2 Integration Hooks
- Buttons / flows to:
  - “Generate outreach sequence” (opens Content Generator)
  - “Schedule outreach” (triggers Outreach System via n8n)

---

## 6. Roles & Permissions

Tie into **Multi-Tenant System & User Roles**:

- Role ideas:
  - **Alliance Owner**: primary responsible person
  - **Tenant Admin**: can view/edit all alliances in tenant
  - **Member/User**: limited view, can log activities for assigned alliances

Permissions enforced in AllianceService and reflected in UI.

---

## 7. Integrations

### 7.1 Content Generator
- Use templates for:
  - Initial outreach
  - Negotiation / proposal emails
  - Joint campaign announcements

### 7.2 Outreach System (n8n)
- Alliance Arena defines:
  - Targets (contacts, segments)
  - Sequences (steps, delays, channels)
- n8n executes:
  - Email / message sequences
  - Logs send status back into `alliance_activities`

### 7.3 Marketplace & Academy
- Marketplace:
  - Tie alliances to specific product lines or vendors
- Academy:
  - Training paths for alliance partners

---

## 8. Phased Task Breakdown (to sync into TODO.md)

> Planning only – mirror atomic tasks into `docs/Project Management/TODO.md` with `[Owner: …]`.

### Phase 0 – Concept & IA
- [ ] Define Alliance Arena terminology and stages [Owner: Team]
- [ ] Draft UX wireframes for list/detail/pipeline [Owner: Josef]

### Phase 1 – Core CRM
- [ ] Design PostgreSQL schema for alliances, contacts, opportunities [Owner: Jonne]
- [ ] Implement basic AllianceService and Phoenix endpoints [Owner: Backend]
- [ ] Implement Alliance list + detail UI [Owner: Frontend]

### Phase 2 – Multi-Tenant & Roles
- [ ] Add tenant/role-based filtering and access [Owner: Backend]
- [ ] Show alliance ownership and responsibilities in UI [Owner: Frontend]

### Phase 3 – Outreach & Playbooks
- [ ] Connect Alliance Arena to Content Generator templates [Owner: Frontend]
- [ ] Define outreach payload schema for n8n [Owner: Backend]
- [ ] Implement n8n workflows for alliance outreach [Owner: Craig]

### Phase 4 – Analytics
- [ ] Define KPIs and metrics per alliance [Owner: Team]
- [ ] Implement summary endpoints and UI dashboards [Owner: Backend + Frontend]

---

## 9. Open Questions

- [ ] Minimum features needed for “Alliance Arena” in early demos? [Owner: Team]  
- [ ] How do we distinguish alliances from large affiliates in the model? [Owner: Craig]  
- [ ] Any regulatory or contractual requirements for alliance data retention? [Owner: Team]  


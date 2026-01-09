# Development Planning Documents

**Last Updated**: January 2026  
**Status**: Active Planning Documentation

**Based on**: BMAD-METHOD Framework  
**Reference**: `instructions/BMAD-METHOD/`

**⚠️ CRITICAL**: See `RULES.md` for mandatory BMAD-METHOD compliance rules.

---

## Overview

This folder contains comprehensive development planning documents created using the **BMAD-METHOD framework**. These documents guide all design, architecture, and development work for the BitNexus Platform.

**⚠️ CRITICAL RULE - BMAD-METHOD COMPLIANCE**:
- **ALL documents in this folder MUST follow BMAD-METHOD framework structure and workflows**
- **ALL documents MUST be created or updated using BMAD-METHOD templates and workflows**
- **NO EXCEPTIONS** - This is a mandatory requirement for consistency and quality
- **Reference**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/` for workflow templates

---

## Documents

### 1. Product Brief (`Product_Brief.md`)

**Purpose**: Initial product analysis and vision document.

**Contents**:
- Product vision and mission
- Problem statement and target market
- Solution overview
- Key differentiators
- Success metrics
- Product scope (MVP, Growth, Vision)
- Technical foundation
- Competitive advantages
- Risks and mitigation

**Status**: Active  
**Owner**: Josef Lindbom (COO & Development Vision Lead)

---

### 2. Product Requirements Document (`PRD.md`)

**Purpose**: Comprehensive product requirements document defining all functional and non-functional requirements.

**Contents**:
- Executive Summary
- Success Criteria
- User Journeys (7 detailed journeys)
- Domain Requirements (Financial, Privacy, Blockchain, Multi-Tenant)
- Innovation Analysis (AI Content, Blockchain Ledger, Multi-Stream Income)
- Project-Type Requirements (Web App, E-Commerce, Affiliate, Financial)
- Functional Requirements (100 requirements across 13 categories)
- Non-Functional Requirements (52 requirements across 8 categories)

**Status**: Active  
**Owner**: Josef Lindbom (COO & Development Vision Lead)

**Reference**: BMAD-METHOD PRD Workflow

---

### 3. UX Design Specification (`UX_Design_Specification.md`)

**Purpose**: User experience and interaction design specifications.

**Contents**:
- Design philosophy and system
- User interface patterns
- Navigation patterns
- Dashboard, Marketplace, Content Generator patterns
- Responsive design guidelines
- Accessibility requirements (WCAG 2.1 AA)
- User experience principles
- Interaction design (micro-interactions, feedback)
- Information architecture
- Design specifications
- User testing considerations

**Status**: Active  
**Owner**: Josef Lindbom (COO & Development Vision Lead)

**Reference**: BMAD-METHOD UX Design Workflow

---

### 4. Architecture Decision Document (`Architecture_Decision_Document.md`)

**Purpose**: Technical architecture decisions and patterns.

**Contents**:
- Architecture overview (multi-tenant SaaS, microservices)
- Architectural Decisions (ADR-001 through ADR-008):
  - Multi-Tenant Architecture
  - Phoenix for HTTP API
  - Elixir Services for Business Logic
  - PostgreSQL with Vector Extension
  - Custom Blockchain Ledger
  - React SPA
  - Authentication Architecture
  - Deployment Strategy
- Technology stack decisions
- Integration patterns
- Security architecture
- Scalability architecture
- Performance architecture
- Monitoring & observability
- Disaster recovery
- Architecture diagrams

**Status**: Active  
**Owner**: Craig Martin (CTO), Josef Lindbom (COO)

**Reference**: BMAD-METHOD Architecture Workflow

---

### 5. Epic Breakdown (`Epic_Breakdown.md`)

**Purpose**: Decomposition of requirements into implementable epics and stories.

**Contents**:
- Requirements inventory (100 FRs, 52 NFRs)
- Epic list (15 epics)
- Detailed epic breakdown with stories:
  - Epic 1: User Authentication & Authorization
  - Epic 2: Dashboard & Financial Overview
  - Epic 3: Marketplace & Product Discovery
  - Epic 4: Affiliate Link Management
  - Epic 5: Bot Lab & Passive Income
  - Epic 6: Content Generator
  - Epic 7: Alliance Network & MLM
  - Epic 8: Academy & Education
  - Epic 9: Token Shop & Credits
  - Epic 10: Social Features
  - Epic 11: Admin & Governance
  - Epic 12: Multi-Tenant Architecture
  - Epic 13: Backend Integration (Phoenix/Elixir)
  - Epic 14: Blockchain Ledger Integration
  - Epic 15: Security & Compliance
- FR coverage map

**Status**: Active  
**Owner**: Josef Lindbom (COO & Development Vision Lead)

**Reference**: BMAD-METHOD Epic Breakdown Workflow

---

### 6. Project Context (`Project_Context.md`)

**Purpose**: Critical rules and patterns for AI agents and developers.

**Contents**:
- Technology stack & versions
- Critical implementation rules (13 rules):
  - Multi-Tenant Data Isolation
  - Authentication Architecture
  - Frontend Component Patterns
  - Styling Rules
  - TypeScript Type Safety
  - Database Query Safety
  - Error Handling
  - Responsive Design
  - File Organization
  - Git Workflow
  - Documentation Requirements
  - Task Ownership
  - Bidirectional Auto-Update
- Architecture patterns
- Unobvious details
- Testing considerations
- Performance considerations
- Security considerations

**Status**: Active  
**Owner**: Josef Lindbom (COO & Development Vision Lead)

**Reference**: BMAD-METHOD Project Context Workflow

---

## Document Relationships

```
Product Brief
    ↓
    PRD (Product Requirements Document)
    ↓
    ├──→ UX Design Specification
    ├──→ Architecture Decision Document
    └──→ Epic Breakdown
            ↓
            Project Context (for implementation)
```

**Workflow**:
1. **Product Brief** → Initial vision and analysis
2. **PRD** → Comprehensive requirements (based on Product Brief)
3. **UX Design Specification** → User experience (based on PRD)
4. **Architecture Decision Document** → Technical architecture (based on PRD)
5. **Epic Breakdown** → Implementation stories (based on PRD, UX, Architecture)
6. **Project Context** → Implementation rules (for developers and AI agents)

---

## Usage Guidelines

### For Product Managers
- Start with **Product Brief** for product vision
- Use **PRD** for requirement reference
- Reference **Epic Breakdown** for implementation planning

### For UX Designers
- Use **PRD** for functional requirements
- Follow **UX Design Specification** for design patterns
- Reference **Project Context** for implementation constraints

### For Architects
- Use **PRD** for system requirements
- Follow **Architecture Decision Document** for technical decisions
- Reference **Project Context** for architecture patterns

### For Developers
- Use **Epic Breakdown** for implementation stories
- Follow **Project Context** for coding rules and patterns
- Reference **Architecture Decision Document** for technical architecture
- Reference **UX Design Specification** for UI patterns

### For AI Agents
- **CRITICAL**: Read **Project Context** first before any implementation
- Follow all critical implementation rules
- Reference **PRD** for requirements
- Reference **Architecture Decision Document** for technical decisions

---

## Maintenance

### Update Frequency
- **Weekly**: Review and update based on development progress
- **After Major Changes**: Update relevant documents
- **Before Releases**: Verify all documents are current

### Document Owners
- **Product Brief, PRD, UX Design, Epic Breakdown, Project Context**: Josef Lindbom (COO)
- **Architecture Decision Document**: Craig Martin (CTO), Josef Lindbom (COO)

### Change Process
1. Identify needed changes
2. Update relevant document(s)
3. Update CHANGELOG.md
4. Notify document owners
5. Update related documents if needed

---

## Related Documentation

**BMAD-METHOD Framework**:
- `instructions/BMAD-METHOD/` - Complete BMAD-METHOD framework

**Project Documentation**:
- `docs/Project Management/TODO.md` - Task tracking and implementation roadmap
- `docs/Product docs/Technical Documentation/PLATFORM_OVERVIEW.md` - Platform overview
- `docs/Core Documentation/TECH_STACK.md` - Technology stack details
- `docs/Project Management/MARKETPLACE_PLANNING.md` - Marketplace planning
- `docs/Project Management/CONTENT_GENERATOR_PLANNING.md` - Content Generator planning
- `docs/Project Management/SECURITY_PLANNING.md` - Security planning

**Service Documentation**:
- `docs/Services/phoenix/` - Phoenix service documentation
- `docs/Services/elixir/` - Elixir service documentation
- `docs/Services/postgresql/` - PostgreSQL service documentation

---

## BMAD-METHOD Compliance Rules

### Mandatory Requirements

**CRITICAL**: All documents in this folder MUST follow BMAD-METHOD framework:

1. **Document Structure**: Follow BMAD-METHOD templates exactly
   - Use frontmatter with `stepsCompleted`, `inputDocuments`, `workflowType`
   - Follow template structure from `instructions/BMAD-METHOD/src/modules/bmm/workflows/`

2. **Workflow Compliance**: Documents must align with BMAD-METHOD workflows
   - **Product Brief**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/1-analysis/create-product-brief/`
   - **PRD**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/2-plan-workflows/prd/`
   - **UX Design**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/2-plan-workflows/create-ux-design/`
   - **Architecture**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/create-architecture/`
   - **Epic Breakdown**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/create-epics-and-stories/`
   - **Project Context**: `instructions/BMAD-METHOD/src/modules/bmm/workflows/generate-project-context/`

3. **Content Quality**: Documents must meet BMAD-METHOD standards
   - Comprehensive coverage of all required sections
   - Clear, actionable requirements and decisions
   - Proper traceability between documents
   - Consistent terminology and format

4. **Update Process**: When updating documents, follow BMAD-METHOD workflows
   - Review BMAD-METHOD templates before making changes
   - Maintain document structure and frontmatter
   - Update `stepsCompleted` array when adding new sections
   - Ensure consistency with other BMAD-METHOD documents

### Forbidden Actions

- ❌ **DO NOT** create documents without following BMAD-METHOD templates
- ❌ **DO NOT** modify document structure without referencing BMAD-METHOD workflows
- ❌ **DO NOT** skip required sections from BMAD-METHOD templates
- ❌ **DO NOT** create custom document formats that deviate from BMAD-METHOD

### Required Documents (BMAD-METHOD Core)

According to BMAD-METHOD framework, the following documents are **REQUIRED**:

1. ✅ **Product Brief** - Initial product analysis (`Product_Brief.md`)
2. ✅ **PRD** - Product Requirements Document (`PRD.md`)
3. ✅ **UX Design Specification** - User experience design (`UX_Design_Specification.md`)
4. ✅ **Architecture Decision Document** - Technical architecture (`Architecture_Decision_Document.md`)
5. ✅ **Epic Breakdown** - Implementation epics and stories (`Epic_Breakdown.md`)
6. ✅ **Project Context** - Rules and patterns for developers/AI (`Project_Context.md`)

### Optional Documents (BMAD-METHOD Extended)

The following documents are **OPTIONAL** but may be created as needed:

- **Research Reports** - Domain, market, or technical research (`Research_Domain.md`, `Research_Market.md`, `Research_Technical.md`)
- **Implementation Readiness Report** - Readiness assessment (`Implementation_Readiness.md`)
- **Technical Specifications** - Feature-specific technical specs (`Tech_Spec_[Feature].md`)
- **Workflow Status** - BMAD workflow progress tracking (`bmm-workflow-status.yaml`)

---

## Notes

- **ALL documents MUST follow BMAD-METHOD framework structure** - This is mandatory
- Documents are living documents and should be updated as the project evolves
- All changes must be tracked in CHANGELOG.md
- Documents must maintain consistency with each other
- When requirements change, update PRD first, then related documents
- Before creating or updating documents, always reference BMAD-METHOD templates

---

**Last Updated**: January 2026  
**Status**: Active Planning Documentation  
**Maintained By**: Josef Lindbom (COO & Development Vision Lead)

---
stepsCompleted: []
inputDocuments: []
workflowType: 'architecture'
project_name: 'BitNexus Platform'
user_name: 'Josef Lindbom'
date: 'January 2026'
---

# Architecture Decision Document - BitNexus Platform

**Author:** Josef Lindbom (COO & Development Vision Lead), Craig Martin (CTO)  
**Date:** January 2026  
**Version:** 1.0  
**Status:** Active Architecture Documentation

**Based on:** BMAD-METHOD Architecture Workflow  
**Reference:** `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/create-architecture/`

---

## Architecture Overview

### System Architecture Pattern

**Pattern**: Multi-Tenant SaaS with Microservices Architecture

**Layers**:
1. **Presentation Layer**: React 19.2.3 + TypeScript (SPA)
2. **API Layer**: Phoenix (HTTP/WebSocket)
3. **Business Logic Layer**: Elixir Services (BEAM VM)
4. **Data Layer**: PostgreSQL (primary) + PostgreSQL with vector extension
5. **Blockchain Layer**: Custom Erlang/Elixir Ledger (BEAM VM)
6. **Infrastructure Layer**: Netlify (alpha) → AWS (planned)

---

## Architectural Decisions

### ADR-001: Multi-Tenant Architecture

**Decision**: Implement multi-tenant architecture with complete tenant isolation at database level.

**Context**: Platform needs to support multiple organizations (tenants) with isolated data, branding, and configurations.

**Options Considered**:
1. **Single-Tenant**: One database per tenant (rejected - too complex)
2. **Shared Database with tenant_id**: All tables include tenant_id (selected)
3. **Schema per Tenant**: Separate schema per tenant (rejected - scaling issues)

**Decision**: Use shared database with `tenant_id` in all tables.

**Consequences**:
- ✅ Simpler deployment and management
- ✅ Efficient resource utilization
- ✅ Easy cross-tenant analytics (for super admin)
- ⚠️ Requires careful query filtering to prevent data leakage
- ⚠️ Database indexes must include tenant_id

**Implementation**:
- All tables include `tenant_id` column
- All queries filter by `tenant_id`
- JWT tokens include `tenant_id` claim
- API middleware validates tenant context

---

### ADR-002: Phoenix for HTTP API Layer

**Decision**: Use Phoenix web framework for HTTP API and WebSocket handling.

**Context**: Need high-performance HTTP API with WebSocket support for real-time features.

**Options Considered**:
1. **Node.js/Express**: Current Netlify Functions (rejected - not scalable for real-time)
2. **Phoenix**: Elixir web framework (selected)
3. **Go/Gin**: High-performance Go framework (rejected - no WebSocket support)

**Decision**: Use Phoenix for HTTP API and WebSocket channels.

**Consequences**:
- ✅ Excellent WebSocket support (Channels)
- ✅ High concurrency (BEAM VM)
- ✅ Real-time features built-in
- ✅ Integrates with Elixir services
- ⚠️ Learning curve for team
- ⚠️ Requires Elixir expertise

**Implementation**:
- Phoenix controllers for REST API
- Phoenix channels for WebSocket
- Phoenix plugs for authentication
- Integration with Elixir services

---

### ADR-003: Elixir Services for Business Logic

**Decision**: Use Elixir services (BEAM VM) for business logic and high-concurrency operations.

**Context**: Need high-concurrency services for blockchain ledger, real-time updates, and business logic.

**Options Considered**:
1. **Node.js Services**: JavaScript/TypeScript (rejected - concurrency limitations)
2. **Elixir Services**: BEAM VM processes (selected)
3. **Go Services**: Golang (rejected - no integration with blockchain ledger)

**Decision**: Use Elixir services for all business logic.

**Consequences**:
- ✅ Massive concurrency (millions of processes)
- ✅ Fault tolerance (supervisor trees)
- ✅ Integrates with blockchain ledger (Erlang/Elixir)
- ✅ High availability
- ⚠️ Requires Elixir expertise
- ⚠️ Different programming paradigm (functional)

**Implementation**:
- `AccountsService` for authentication
- `ProductsService` for marketplace
- `TransactionsService` for commissions
- `LedgerClient` for blockchain integration

---

### ADR-004: PostgreSQL with Vector Extension

**Decision**: Use PostgreSQL with pgvector extension for semantic search and embeddings.

**Context**: Need vector search for AI-powered product discovery and recommendations.

**Options Considered**:
1. **PostgreSQL + pgvector**: Vector extension for PostgreSQL (selected)
2. **Pinecone**: Managed vector database (rejected - external dependency)
3. **Weaviate**: Open-source vector database (rejected - additional infrastructure)

**Decision**: Use PostgreSQL with pgvector extension.

**Consequences**:
- ✅ Single database for all data
- ✅ SQL queries with vector similarity
- ✅ No additional infrastructure
- ✅ Familiar PostgreSQL ecosystem
- ⚠️ Requires CTO validation (CRITICAL)
- ⚠️ Performance may be lower than dedicated vector DB

**Implementation**:
- Dedicated PostgreSQL instance with pgvector
- Embeddings table with vector columns
- Vector similarity search queries
- Integration with AI content generation

---

### ADR-005: Custom Blockchain Ledger (Erlang/Elixir)

**Decision**: Implement custom blockchain ledger using Erlang/Elixir + BEAM VM.

**Context**: Need transparent, verifiable transaction records for affiliate commissions and earnings.

**Options Considered**:
1. **Ethereum Smart Contracts**: Public blockchain (rejected - gas fees, public)
2. **Custom Ledger (Erlang/Elixir)**: Private/hybrid blockchain (selected)
3. **Database Only**: PostgreSQL records (rejected - not immutable)

**Decision**: Build custom Erlang/Elixir blockchain ledger.

**Consequences**:
- ✅ Immutable transaction records
- ✅ High concurrency (BEAM VM)
- ✅ P2P network support
- ✅ Transparent and verifiable
- ⚠️ Custom implementation complexity
- ⚠️ Requires blockchain expertise

**Implementation**:
- Erlang/Elixir ledger service (~200 lines for test chain)
- Block structure with transactions
- Hash chain verification
- P2P network using Erlang distribution
- Integration with Marketplace transparency ledger

---

### ADR-006: React SPA with TypeScript

**Decision**: Use React 19.2.3 with TypeScript for frontend application.

**Context**: Need modern, type-safe frontend framework with excellent developer experience.

**Options Considered**:
1. **React + TypeScript**: Current choice (selected)
2. **Vue.js**: Alternative framework (rejected - less ecosystem)
3. **Svelte**: Lightweight framework (rejected - smaller ecosystem)

**Decision**: Continue with React 19.2.3 + TypeScript.

**Consequences**:
- ✅ Large ecosystem and community
- ✅ Type safety with TypeScript
- ✅ Excellent developer experience
- ✅ Component reusability
- ✅ Already implemented (90% complete)

**Implementation**:
- React components in `frontend/src/pages/`
- TypeScript types in `frontend/src/types.ts`
- Tailwind CSS for styling
- ES Modules via CDN

---

### ADR-007: Authentication Architecture (Phoenix + Elixir)

**Decision**: Split authentication between Phoenix (HTTP layer) and Elixir (business logic).

**Context**: Need secure, multi-tenant authentication with JWT tokens.

**Architecture**:
- **Phoenix**: HTTP layer, route protection, JWT extraction
- **Elixir**: Password hashing, JWT generation/validation, credential validation

**Decision**: Phoenix handles HTTP, Elixir handles business logic.

**Consequences**:
- ✅ Clear separation of concerns
- ✅ Reusable Elixir authentication logic
- ✅ Phoenix focuses on HTTP/WebSocket
- ✅ Testable business logic

**Implementation**:
- Phoenix `AuthController` for login/logout/register
- Phoenix `AuthPlug` for route protection
- Elixir `AccountsService.Auth` for business logic
- JWT tokens with tenant_id and role claims

---

### ADR-008: Deployment Strategy (Netlify → AWS)

**Decision**: Start with Netlify (alpha phase), migrate to AWS for production.

**Context**: Need scalable infrastructure for production deployment.

**Phases**:
1. **Alpha Phase**: Netlify (current) - Simple deployment, serverless functions
2. **Production Phase**: AWS - EC2/ECS for Phoenix/Elixir, RDS for PostgreSQL, CloudFront for CDN

**Decision**: Use Netlify for alpha, plan AWS migration.

**Consequences**:
- ✅ Fast initial deployment
- ✅ Easy CI/CD with Netlify
- ⚠️ Migration required for production scale
- ⚠️ Different infrastructure patterns

**Implementation**:
- Netlify Functions for serverless APIs
- Netlify hosting for React SPA
- AWS migration plan documented
- Infrastructure as Code (Terraform planned)

---

## Technology Stack Decisions

### Frontend Stack
- **React 19.2.3**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Recharts 3.6.0**: Data visualization
- **ES Modules**: Native browser modules

### Backend Stack
- **Phoenix**: HTTP API and WebSocket
- **Elixir**: Business logic services
- **BEAM VM**: High-concurrency runtime
- **PostgreSQL**: Primary database
- **PostgreSQL + pgvector**: Vector database (pending CTO validation)

### Infrastructure Stack
- **Netlify**: Alpha phase hosting
- **AWS**: Production infrastructure (planned)
- **Docker**: Containerization
- **Docker Compose**: Local development

### Blockchain Stack
- **Erlang/Elixir**: Custom ledger implementation
- **BEAM VM**: Process-based concurrency
- **P2P Network**: Erlang distribution

---

## Integration Patterns

### Frontend → Backend Integration

**Pattern**: REST API + WebSocket

**HTTP API**:
- RESTful endpoints via Phoenix
- JWT authentication in headers
- JSON request/response format
- Tenant context in JWT claims

**WebSocket**:
- Phoenix channels for real-time updates
- User-specific channels
- Broadcast to tenant channels
- Connection authorization

### Backend → Database Integration

**Pattern**: Ecto (Elixir ORM)

**Database Access**:
- Ecto repositories for data access
- Parameterized queries (SQL injection prevention)
- Database migrations for schema changes
- Connection pooling via Ecto

### Backend → Blockchain Integration

**Pattern**: Ledger Client Service

**Blockchain Access**:
- `LedgerClient` service in Elixir
- Transaction recording API
- Block query API
- Real-time transaction streaming

---

## Security Architecture

### Authentication Flow

1. User submits credentials → Phoenix `AuthController`
2. Phoenix calls → Elixir `AccountsService.authenticate_user()`
3. Elixir validates credentials, generates JWT
4. Phoenix returns JWT to frontend
5. Frontend stores JWT, includes in API requests

### Authorization Flow

1. Frontend request with JWT → Phoenix
2. Phoenix `AuthPlug` extracts JWT
3. Phoenix calls → Elixir `AccountsService.validate_token()`
4. Elixir validates token, extracts tenant_id and role
5. Phoenix enforces role-based route protection
6. Request proceeds if authorized

### Data Isolation

**Multi-Tenant Isolation**:
- All queries filter by `tenant_id`
- JWT includes `tenant_id` claim
- API middleware validates tenant context
- Database constraints prevent cross-tenant access

---

## Scalability Architecture

### Horizontal Scaling

**Frontend**:
- CDN distribution (CloudFront)
- Static asset caching
- No server-side rendering needed

**Backend**:
- Phoenix/Elixir cluster (BEAM VM distribution)
- Load balancer for API requests
- Database read replicas

**Database**:
- PostgreSQL read replicas
- Connection pooling
- Query optimization

### Vertical Scaling

**Database**:
- Larger instance sizes
- Optimized indexes
- Query performance tuning

---

## Performance Architecture

### Caching Strategy

**Frontend**:
- Browser caching for static assets
- Service worker for offline support (future)

**Backend**:
- Redis caching for frequently accessed data (planned)
- Database query result caching
- API response caching

### Database Optimization

**Indexes**:
- `tenant_id` indexes on all tables
- Composite indexes for common queries
- Vector indexes for similarity search

**Query Optimization**:
- Parameterized queries
- Query result pagination
- Lazy loading for large datasets

---

## Monitoring & Observability

### Logging

**Structured Logging**:
- JSON-formatted logs
- Log levels (debug, info, warn, error)
- Request/response logging
- Error tracking and alerting

### Metrics

**Key Metrics**:
- API response times
- Database query performance
- WebSocket connection counts
- Error rates
- User activity metrics

### Alerting

**Critical Alerts**:
- API downtime
- Database connection failures
- High error rates
- Security incidents

---

## Disaster Recovery

### Backup Strategy

**Database Backups**:
- Daily automated backups
- Point-in-time recovery
- Backup retention: 30 days

### Recovery Procedures

**Recovery Time Objective (RTO)**: < 4 hours  
**Recovery Point Objective (RPO)**: < 1 hour

**Recovery Steps**:
1. Restore database from backup
2. Restore application code
3. Verify data integrity
4. Resume operations

---

## Architecture Diagrams

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  BitNexus Platform                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐         ┌──────────────┐            │
│  │   Frontend   │         │   Phoenix    │            │
│  │   (React)    │◄────────┤   (HTTP/WS)  │            │
│  └──────────────┘         └──────────────┘            │
│         │                        │                      │
│         │                        ▼                      │
│         │              ┌──────────────┐                │
│         │              │   Elixir     │                │
│         │              │   Services   │                │
│         │              └──────────────┘                │
│         │                        │                      │
│         │                        ▼                      │
│         │              ┌──────────────┐                │
│         │              │  PostgreSQL  │                │
│         │              │  + pgvector  │                │
│         │              └──────────────┘                │
│         │                        │                      │
│         │                        ▼                      │
│         │              ┌──────────────┐                │
│         │              │   Erlang/    │                │
│         │              │   Elixir     │                │
│         │              │   Ledger    │                │
│         │              └──────────────┘                │
│         │                                               │
│         └─────────── External APIs ────────────────────┘
│                  (Gemini AI, QR Server, etc.)
└─────────────────────────────────────────────────────────┘
```

---

## Decision Log

### ADR-001: Multi-Tenant Architecture
- **Date**: January 2026
- **Status**: Approved
- **Owner**: Craig Martin (CTO)

### ADR-002: Phoenix for HTTP API
- **Date**: January 2026
- **Status**: Approved
- **Owner**: Craig Martin (CTO)

### ADR-003: Elixir Services
- **Date**: January 2026
- **Status**: Approved
- **Owner**: Craig Martin (CTO)

### ADR-004: PostgreSQL with pgvector
- **Date**: January 2026
- **Status**: Pending CTO Validation (CRITICAL)
- **Owner**: Craig Martin (CTO), Jonne Waselius (Backend)

### ADR-005: Custom Blockchain Ledger
- **Date**: January 2026
- **Status**: Approved
- **Owner**: Craig Martin (CTO)

### ADR-006: React SPA
- **Date**: January 2026
- **Status**: Approved (Already Implemented)
- **Owner**: Josef Lindbom (COO)

### ADR-007: Authentication Architecture
- **Date**: January 2026
- **Status**: Approved
- **Owner**: Craig Martin (CTO), Backend Team

### ADR-008: Deployment Strategy
- **Date**: January 2026
- **Status**: Approved (Alpha Phase)
- **Owner**: Craig Martin (CTO)

---

**Last Updated**: January 2026  
**Status**: Active Architecture Documentation  
**Related Documents**: PRD.md, TECH_STACK.md, Phoenix Architecture, Elixir Architecture

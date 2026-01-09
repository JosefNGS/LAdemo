# BitNexus Security – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- Security Architecture: [Owner: Craig]  
- Backend & Data Security: [Owner: Jonne]  
- Product & UX Guardrails: [Owner: Josef]  

---

## 1. Vision & Scope

- **Goal**: Ensure **every service** (frontend, Phoenix/Elixir, Golang API, Netlify, PostgreSQL, n8n, Discourse, Admin, Academy, Marketplace, Chat, Content Generator, Alliance Arena, Erlang Ledger) is secure by design, with clear responsibilities and guardrails.
- **Principles**:
  - Least privilege and explicit access control
  - Multi-tenant isolation as a hard requirement
  - No secrets in code; all secrets in environment/n8n credentials
  - Strong auditing and traceability for critical actions

This planning doc ties together the security rules already defined in `.cursorrules`, `rules/agent-os/security.md`, and each `docs/Services/*/SERVICE_RULES.md`.

---

## 2. Threat Model (High Level)

- **Data risks**:
  - Cross-tenant data leakage
  - Unauthorized access to PII, financial data, or ledger entries
- **System risks**:
  - Compromised API keys or credentials
  - Injection attacks (SQL, XSS, CSRF)
  - Misconfigured CORS or auth
- **Process risks**:
  - Unreviewed changes to security-sensitive code
  - Missing logging/audit for admin actions

Security planning must consider all of these for each service.

---

## 3. Cross-Cutting Security Requirements

Applies to **all services**:

- **Authentication & Authorization**
  - All APIs must validate JWT or secure session (no anonymous access to tenant data).
  - Role-based access control (RBAC) enforced in backend (Elixir/Go), not just frontend.
- **Multi-Tenant Isolation**
  - All core tables include `tenant_id`.
  - All queries must filter by `tenant_id`.
  - No cross-tenant joins without explicit justification and safeguards.
- **Secrets Management**
  - API keys, DB passwords, SMTP creds, etc. **never** in repo.
  - Use environment variables, n8n encrypted credentials, or secret stores.
- **Logging & Auditing**
  - Critical operations (auth, admin actions, ledger writes, outreach sends) must be logged with `who`, `when`, `what`, `tenant_id`.
- **Input Validation**
  - Validate and sanitize all external inputs (forms, webhooks, APIs).
  - Prefer parameterized queries and framework helpers (Ecto, etc.).

---

## 4. Service-by-Service Security Focus

This section summarizes what *must* be secured for each service; details live in the corresponding `SERVICE_RULES.md` and `rules/services/*/rules.md`.

### 4.1 Phoenix / Elixir (HTTP & Business Logic)

- Enforce:
  - JWT validation and role checks in plugs/middleware.
  - Tenant-aware context: derive `tenant_id` from token, not from user input.
  - Strong parameter validation via changesets.
- Protect:
  - All `/api/v1/*` routes that read/write tenant data.
  - Auth endpoints (login, refresh, password reset, 2FA).

### 4.2 Golang API

- Use:
  - Structured logging and centralized error handling.
  - Strict input validation and type-safe handlers.
  - Context-based timeouts and rate limits on expensive endpoints.

### 4.3 PostgreSQL

- Enforce:
  - Minimal DB roles (separate read/write where possible).
  - Migrations reviewed and tested for security impact.
  - Indexing and constraints to prevent inconsistent data.

### 4.4 Netlify (Alpha Hosting)

- Restrict:
  - Serverless functions to minimal required permissions.
  - Environment variables to least-privilege keys.
  - CORS only to allowed origins.

### 4.5 n8n (Automation & Outreach)

- Harden:
  - n8n instance access (basic auth/VPN/SSO).
  - Webhook endpoints (HMAC tokens, IP allowlists where possible).
  - Use tenant-aware payloads and avoid pulling “all data” without filters.

### 4.6 Discourse

- Ensure:
  - SSO configuration is correct and secure.
  - User sync does not leak internal roles or PII unnecessarily.
  - Admin accounts use strong auth (2FA where available).

### 4.7 Admin View & Task Management

- Protect:
  - Admin login (rate limiting, secure password flow once real auth is wired).
  - Task verification and admin-only operations.
  - Prevent UI from exposing more than the current user’s permissions allow.

### 4.8 Chat

- Requirements:
  - WebSocket authentication and tenant-scoped rooms.
  - Message content sanitization (XSS prevention).
  - Logging of moderation actions.

### 4.9 Content Generator & Outreach

- Guard:
  - AI prompts and outputs (avoid leaking secrets or PII).
  - Outreach payloads must respect opt-outs and regional laws (CAN-SPAM, GDPR).
  - Log all sends (who sent what to whom, when).

### 4.10 Academy

- Protect:
  - Enrollment and progress data as user-level PII.
  - Course content that should be tenant-private.

### 4.11 Alliance Arena

- Ensure:
  - Partner and contact data is treated as sensitive CRM data.
  - Only authorized roles can see alliance pipelines and notes.

### 4.12 Erlang/Elixir Ledger

- High criticality:
  - Immutable ledger writes (no silent edits).
  - Strong audit trail and optional external verification.

---

## 5. Security Phases & Tasks (to sync into TODO.md)

> Planning only – atomic tasks must be mirrored into `docs/Project Management/TODO.md` with `[Owner: …]`.

### Phase 0 – Baseline Security Posture

- [ ] Compile existing security rules from `.cursorrules`, `rules/agent-os/security.md`, and `docs/Services/*/SERVICE_RULES.md` into a short checklist [Owner: Craig]
- [ ] Identify all external entry points (HTTP endpoints, WebSockets, webhooks, n8n, Discourse SSO) [Owner: Backend]
- [ ] Define severity levels and incident response process (who does what when) [Owner: Team]

### Phase 1 – Auth, RBAC & Tenancy Enforcement

- [ ] Ensure all API endpoints validate auth and tenant_id [Owner: Backend]
- [ ] Implement or verify RBAC in Phoenix/Elixir and Golang [Owner: Backend]
- [ ] Add tests for cross-tenant access prevention (no tenant A seeing tenant B data) [Owner: Backend]

### Phase 2 – Secrets & Config Hardening

- [ ] Audit all configs for hard-coded secrets and remove them [Owner: Backend]
- [ ] Document secret management patterns for each environment [Owner: Craig]
- [ ] Harden n8n credentials and access controls [Owner: Craig]

### Phase 3 – Logging, Auditing & Monitoring

- [ ] Define “critical actions” list per service (auth, ledger, outreach, admin changes) [Owner: Team]
- [ ] Implement structured logs for these actions [Owner: Backend]
- [ ] Hook core logs/alerts into n8n “alerts/*” workflows [Owner: Craig]

### Phase 4 – App-Specific Hardening

- [ ] Chat: sanitize/escape all message content; test XSS vectors [Owner: Backend]
- [ ] Content Generator: define and enforce content safety filters [Owner: Backend]
- [ ] Academy & Alliance: verify access control around PII and sensitive business data [Owner: Backend]

### Phase 5 – Pen Testing & Review

- [ ] Run manual security review of critical paths (auth, admin, ledger, outreach) [Owner: Craig]
- [ ] Plan for external penetration test once MVP is stable [Owner: Team]

---

## 6. Documentation & Rules Sync

- **Must update** when security-related changes are made:
  - `docs/Project Management/CHANGELOG.md`
  - `.cursorrules` (if global rules change)
  - `rules/agent-os/security.md` and service-specific rules under `rules/services/*/rules.md`
  - Each relevant `docs/Services/*/SERVICE_RULES.md`

Every new feature/plan (Marketplace, Content Generator, Chat, Academy, Alliance Arena, n8n) should be checked against this doc before implementation and again before production deployment.

---

## 7. Open Questions

- [ ] Which services need 2FA/MFA in v1 vs later? [Owner: Craig]  
- [ ] What minimum logging and retention is needed for investor/legal comfort? [Owner: Team]  
- [ ] Do we need a formal DPA (data processing agreement) path for certain tenants/partners? [Owner: Team]  


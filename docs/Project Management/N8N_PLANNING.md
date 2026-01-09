# n8n Automation & Outreach System – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- Automation Architecture: [Owner: Craig]  
- Integrations & Data: [Owner: Jonne]  
- Product Flows & UX Handoffs: [Owner: Josef]  

---

## 1. Vision & Scope

- **Goal**: Use n8n as the central **automation and orchestration layer** for BitNexus – powering outreach, notifications, background jobs, and system glue between services.
- **Scope (v1)**:
  - Email and messaging outreach for Content Generator + Alliance Arena
  - Academy reminders and drip sequences
  - Internal notifications (admin alerts, errors, KPI thresholds)
  - Basic monitoring and error handling for workflows

Long term, n8n must remain a **stateless integration layer** – **business logic stays in Elixir/Go**, not inside complex n8n workflows.

---

## 2. Phasing Overview

1. **Phase 0 – Core n8n Instance & Standards**
   - Stand up n8n, define connection standards and security rules.
2. **Phase 1 – Outreach System (Email & Messaging)**
   - Implement core Outreach workflows fed by Content Generator & Alliance Arena.
3. **Phase 2 – Academy Automations**
   - Reminders, drips, and course-completion notifications.
4. **Phase 3 – System Alerts & KPI Notifications**
   - Alerting for errors, anomalies, and key thresholds.
5. **Phase 4 – Advanced Integrations**
   - Deeper CRM, billing, marketing tool integrations when needed.

---

## 3. Architecture & Responsibilities

**n8n is the “glue”**, not the source of truth:

- **Source of truth**:
  - PostgreSQL (data)
  - Elixir/Phoenix/Golang services (business logic)
- **n8n responsibilities**:
  - Orchestrate sequences of calls to APIs/services
  - Transform and route data between systems
  - Trigger side-effects (emails, messages, CRM updates)

### 3.1 n8n Topology

- One **core n8n instance** per environment (dev/stage/prod).
- All credentials stored in n8n’s **encrypted credentials store** (never in repo).
- Workflows grouped by domain:
  - `outreach/*`
  - `academy/*`
  - `alerts/*`
  - `ops/*` (backups, health checks, etc.)

---

## 4. Data Contracts & APIs

**Owner**: [Owner: Backend]  

All n8n workflows must rely on **explicit, documented payload shapes** between BitNexus services and n8n.

### 4.1 Outreach Payload (from Content Generator / Alliance Arena)

Minimal schema (sent via webhook or polled from PostgreSQL):

```jsonc
{
  "id": "uuid",
  "tenant_id": "uuid",
  "user_id": "uuid",
  "channel": "email | discord | slack | telegram",
  "subject": "string",
  "body": "string",
  "target": {
    "email": "string",
    "name": "string",
    "external_ids": { "crm_contact_id": "string" }
  },
  "schedule_at": "ISO8601 | null",
  "sequence_id": "uuid | null",
  "step": 1
}
```

### 4.2 Academy Reminder Payload

Minimal schema:

```jsonc
{
  "tenant_id": "uuid",
  "user_id": "uuid",
  "course_id": "uuid",
  "progress": { "completed_percent": 45 },
  "next_lesson_id": "uuid | null"
}
```

All payloads must be documented in `docs/Services/n8n/INTEGRATION_GUIDE.md`.

---

## 5. Key Workflows (v1–v2)

### 5.1 Outreach System – Email & Messaging

**Owners**: [Owner: Craig], [Owner: Backend]  

- **Input**: Outreach payloads from Content Generator / Alliance Arena.
- **Actions**:
  - Email send via chosen provider (e.g. SMTP, SendGrid, SES).
  - Optional posting to Discord/Slack/Telegram for internal notifications.
  - Update PostgreSQL with send status, timestamps, and errors.
- **Sequencing**:
  - Schedule follow-up steps based on `sequence_id` + `step`.
  - Respect quiet hours and rate limits (per tenant).

### 5.2 Academy Reminders & Drips

**Owners**: [Owner: Craig], [Owner: Backend]  

- **Inputs**: Enrollment/progress events from Academy.
- **Actions**:
  - Reminders for incomplete lessons.
  - “New lesson available” notifications.
  - Simple drip series (e.g. 1 email per module).

### 5.3 Alerts & Monitoring

**Owners**: [Owner: Craig], [Owner: Team]  

- **Inputs**:
  - Error logs / webhooks from backend services
  - KPI thresholds (e.g. failure rates, low signups)
- **Actions**:
  - Route alerts to:
    - Email
    - Discord/Slack channels
    - Possibly Chat rooms in BitNexus Chat module (later)

---

## 6. Security, Tenancy & Compliance

**Owners**: [Owner: Craig], [Owner: Backend]  

- **Tenancy**:
  - All payloads include `tenant_id`.
  - n8n workflows must not mix data between tenants when calling back into BitNexus APIs.
- **Security**:
  - All BitNexus ↔ n8n traffic over HTTPS.
  - Webhook endpoints must be authenticated (HMAC secrets, tokens, or IP whitelisting).
  - Secrets (API keys, SMTP credentials) live only in n8n credentials.
- **Compliance**:
  - Respect unsubscribe / opt-out flags (no outreach to opted-out users).
  - Respect regional rules (e.g. GDPR, CAN-SPAM) as they are defined in backend.

Business rules for *whether* to send must live in BitNexus backend; n8n only executes what’s allowed.

---

## 7. Frontend & UX Handoffs

n8n has no direct user-facing UI in BitNexus, but:

- Content Generator, Alliance Arena, Academy, and Admin View must:
  - Show the **status** of automated actions (e.g., “Scheduled via Outreach System”, “Sent”, “Failed”).
  - Avoid embedding n8n-specific logic in the frontend; they just display data from PostgreSQL / APIs.

---

## 8. Phased Task Breakdown (to sync into TODO.md)

> Planning only – mirror atomic tasks into `docs/Project Management/TODO.md` with `[Owner: …]`.

### Phase 0 – Core Setup & Standards
- [ ] Stand up dev n8n instance (Docker or managed) [Owner: Craig]
- [ ] Define naming conventions and folder structure for workflows [Owner: Craig]
- [ ] Document n8n credentials policy in `docs/Services/n8n/SERVICE_RULES.md` [Owner: Docs]

### Phase 1 – Outreach Workflows
- [ ] Finalize Outreach payload schema [Owner: Backend]
- [ ] Implement Content Generator → PostgreSQL storage for outreach items [Owner: Backend]
- [ ] Build n8n workflows to pull/push outreach items and send email [Owner: Craig]
- [ ] Write back send status to PostgreSQL [Owner: Backend]

### Phase 2 – Academy Automation
- [ ] Define Academy reminder payloads and triggers [Owner: Backend]
- [ ] Implement Academy → n8n hooks [Owner: Backend]
- [ ] Create reminder/drip workflows in n8n [Owner: Craig]

### Phase 3 – Alerts & KPIs
- [ ] Decide which events and KPIs to monitor [Owner: Team]
- [ ] Implement service-to-n8n alert hooks [Owner: Backend]
- [ ] Create alert routing workflows (Discord/Slack/email) [Owner: Craig]

---

## 9. Open Questions

- [ ] Preferred email provider(s) and messaging channels for v1? [Owner: Team]  
- [ ] How much retry/queue logic should live in n8n vs backend? [Owner: Craig]  
- [ ] What are the SLOs for Outreach and Academy automations (latency, reliability)? [Owner: Team]  


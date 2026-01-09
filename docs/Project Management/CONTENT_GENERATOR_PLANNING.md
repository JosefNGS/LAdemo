# BitNexus Content Generator – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- UX & Prompt Design: [Owner: Josef]  
- Backend & AI Orchestration: [Owner: Backend]  
- Architecture & Security: [Owner: Craig]  

---

## 1. Vision & Scope

- **Goal**: Build a production-ready, multi-modal Content Generator that helps affiliates produce compliant, on-brand **text, images, and video concepts/scripts** tied to Marketplace products and Alliance campaigns.
- **Scope (v1)** (text-focused):
  - Prompt-driven AI **text** generation (Gemini or future LLM)
  - Templates for common text use cases (social posts, email sequences, ad copy)
  - Basic editing, history, and export
  - Multi-tenant awareness (branding, tone, languages per tenant)
- **Scope (v2+) (multi-modal)**:
  - Image generation briefs + prompts (and optional integration to image models)
  - Video scripts, shot lists, and storyboard outlines
  - Asset metadata to hand off into design/video tools (not rendering video inside BitNexus)

---

## 2. Phasing Overview

1. **Phase 0 – Stabilize Current Demo**
   - Document current Content Generator UI and flows
   - Identify hard-coded/demo behavior vs. target architecture
2. **Phase 1 – Core Content Generation Engine**
   - Clean prompt pipeline, structured inputs, and outputs
3. **Phase 2 – Templates & Playbooks**
   - Reusable templates tied to Marketplace, Academy, Alliance Arena
4. **Phase 3 – Multi-Tenant & Role Awareness**
   - Tenant-specific presets, tones, and compliance rules
5. **Phase 4 – Storage, History & Collaboration**
   - Save drafts, history, and team collaboration
6. **Phase 5 – Governance, Compliance & Guardrails**
   - Policy enforcement, logging, and review workflows

---

## 3. Architecture & Services

**Owners**:  
- Phoenix/Elixir APIs: [Owner: Backend]  
- Frontend React: [Owner: Josef]  

### 3.1 Frontend (React)
- Content Generator page:
  - Input panel (goal, channel, audience, tone, product, length)
  - Output panel with copy, variations, and quick actions (copy, save, regenerate)
  - Template selector (pre-defined and tenant-specific)
- Integration points:
  - Marketplace (select product to generate content for)
  - Alliance Arena (generate outreach and partnership content)
  - Academy (generate learning materials, summaries, quizzes – later)

### 3.2 Backend (Phoenix + Elixir)
- **ContentGeneratorService** (Elixir):
  - Build structured prompts from user inputs + tenant/product context
  - Call AI provider (Gemini initially, abstracted for future LLMs)
  - Post-process outputs (formatting, filtering, safety checks)
  - Log generation metadata (who, when, what, for which tenant)
- Phoenix API endpoints:
  - `POST /api/v1/content/generate`
  - `GET /api/v1/content/templates`
  - `POST /api/v1/content/templates` (later)

### 3.3 AI Provider Integration
- Initially: direct Gemini integration, aligned with `docs/API_SETUP.md`
- Later: abstraction for multiple providers and model selection

### 3.4 Multi-Modal Generation Strategy (Text, Images, Video)
- **Text (v1)**:
  - Primary interface: structured prompts → LLM text output
  - Use ContentGeneratorService to keep prompts consistent and auditable
- **Images (v2)**:
  - BitNexus generates **image briefs and prompts**, not heavy image processing itself
  - Possible patterns:
    - Generate detailed Stable Diffusion / Midjourney-style prompts
    - Store prompts + references in PostgreSQL for designers or external tools
    - Optional: later integrate with an image-generation API via n8n or backend service
- **Video (v2+)**:
  - Generate:
    - Video scripts (intro, body, outro)
    - Shot lists and visual directions
    - Voice-over text and timing suggestions
  - Output is text-based; actual video editing/rendering happens in external tools
  - Keep schema flexible so future integrations (e.g. automated video tools) can plug in

---

## 4. Multi-Tenant & Roles

Tie into **Authentication & Security (Multi-Tenant)** plan:

- All content generation must:
  - Validate JWT (user, role, tenant_id)
  - Apply tenant-specific constraints (branding, tone, languages, banned topics)
  - Respect roles:
    - Super Admin: cross-tenant debugging and policy controls
    - Tenant Admin: configure presets, allowed channels
    - Member/User: generate content within tenant policies

---

## 5. Data Model & Storage

**Owner**: [Owner: Jonne]  

### 5.1 Core Tables (PostgreSQL)
- `content_generations`
  - `id`, `tenant_id`, `user_id`, `template_id`, `product_id` (optional)
  - `input_payload` (JSONB), `output_payload` (JSONB)
  - `channel` (e.g. `twitter`, `linkedin`, `email`, `blog`)
  - `status` (e.g. `draft`, `accepted`, `rejected`)
  - `created_at`, `updated_at`
- `content_templates`
  - `id`, `tenant_id`, `name`, `description`
  - `channel`, `prompt_schema` (JSONB), `active`

### 5.2 Logging & Auditing
- Minimal logging in v1:
  - Store inputs/outputs per tenant for review
  - Capture errors and latency

---

## 6. UX & Workflow Plan

**Owner**: [Owner: Josef]  

### 6.1 Core Flow (v1)
1. User selects:
   - Channel (e.g. LinkedIn post, email, landing page section)
   - Product (from Marketplace) or generic campaign
   - Audience, tone, region
2. User clicks **Generate**:
   - Frontend calls `/api/v1/content/generate`
3. Backend:
   - Builds prompt, calls AI, returns structured output
4. User:
   - Edits result
   - Saves to history or copies out to external channel

### 6.2 Templates & Playbooks (v2+)
- Pre-defined templates:
  - Launch announcement
  - Weekly value post
  - Email nurture sequence
  - Ad copy variants (headline + body)
- Tenant/Admin can:
  - Define custom templates and share with team

---

## 7. Integration with Other Modules

### 7.1 Marketplace
- Quickly inject:
  - Product name, benefits, risk level, commission info
  - Links and tracking parameters (once tracking is live)

### 7.2 Alliance Arena
- Generate:
  - Outreach emails
  - Partnership pitch decks (outline copy)
  - Follow-up sequences

### 7.3 Academy
- Generate (later phases):
  - Lesson summaries
  - Quiz questions
  - Study plans per module

---

## 8. Phased Task Breakdown (to sync into TODO.md)

> **Note**: These are planning items; concrete tasks must be mirrored into `docs/Project Management/TODO.md` with explicit owners.

### Phase 0 – Align & Stabilize
- [ ] Review current Content Generator implementation and UI [Owner: Josef]
- [ ] Document current prompt structure and limitations [Owner: Backend]
- [ ] Update `START_HERE.md` with Content Generator overview [Owner: Josef]

### Phase 1 – Core Engine
- [ ] Design ContentGeneratorService API in Elixir [Owner: Backend]
- [ ] Implement `/api/v1/content/generate` endpoint [Owner: Backend]
- [ ] Refactor frontend to use Phoenix API directly [Owner: Frontend]
- [ ] Add robust error and loading states [Owner: Frontend]

### Phase 2 – Templates
- [ ] Define initial template list and schema [Owner: Team]
- [ ] Implement `content_templates` table and migrations [Owner: Jonne]
- [ ] Build template selector UI [Owner: Josef]

### Phase 3 – Multi-Tenant Awareness
- [ ] Add tenant-based presets for tone, allowed channels [Owner: Backend]
- [ ] Expose tenant configuration in Admin View [Owner: Admin]
- [ ] Ensure all queries filter by `tenant_id` [Owner: Backend]

### Phase 4 – Storage & History
- [ ] Implement `content_generations` table [Owner: Jonne]
- [ ] Save generation history per user [Owner: Backend]
- [ ] Add history UI and simple search [Owner: Frontend]

### Phase 5 – Governance & Guardrails
- [ ] Define compliance rules per tenant [Owner: Team]
- [ ] Implement simple content filters/flags [Owner: Backend]
- [ ] Expose review tools in Admin View [Owner: Admin]

---

## 9. Open-Source Inspirations (for later evaluation)

> Investigation only – **do not integrate directly yet**, but use as references.

- **Chat / Assistant UX**:
  - `Rocket.Chat` – open-source chat platform with rich UI and roles.
  - Example React chat widgets on GitHub (search: `react chat widget open source`).
- **Content Generation Tooling**:
  - Open-source text-generation frameworks like **Texar** and **TextBox** (research-focused, not UI, but good for pipeline ideas).
  - Open-source React editors (e.g., Tiptap, Slate, Quill) for in-browser editing of generated content.
- **Learning / Academy**:
  - Open-source LMS platforms (e.g., Moodle, Open edX) for structuring courses, lessons, and quizzes.

---

## 10. Open Questions

- [ ] Which AI provider(s) do we standardize on for v1 (Gemini only vs pluggable)? [Owner: Craig]
- [ ] Minimum logging/audit level acceptable for investors/compliance? [Owner: Team]
- [ ] Priority of deep Academy integration vs Marketplace/Alliance flows? [Owner: Team]


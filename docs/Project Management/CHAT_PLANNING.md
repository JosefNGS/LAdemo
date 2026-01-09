# BitNexus Chat & Messaging – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- UX & Interaction Design: [Owner: Josef]  
- Realtime Backend: [Owner: Backend]  
- Architecture & Security: [Owner: Craig]  

---

## 1. Vision & Scope

- **Goal**: Provide a secure, multi-tenant chat system that covers:
  - User ↔ user (DMs)
  - User ↔ team (support / admin chat)
  - User ↔ AI (NexusHub assistant, future agents)
- **Scope (v1)**:
  - In-app chat UI with channels/threads appropriate for BitNexus
  - Basic history, typing indicator, and read status
  - Multi-tenant isolation (no cross-tenant leakage)
  - Hooks for AI assistant and notifications via n8n

---

## 2. Phasing Overview

1. **Phase 0 – Requirements & UX**
   - Decide which conversations we support first (Support? NexusHub? DMs?)
2. **Phase 1 – Core Realtime Messaging**
   - Channel-based chat, single tenant, no AI
3. **Phase 2 – Multi-Tenant & Roles**
   - Tenant-scoped rooms, permissions, and moderation
4. **Phase 3 – AI Assistant Integration**
   - NexusHub chat, tool access, and context from Marketplace/Academy
5. **Phase 4 – Notifications & Automation**
   - n8n-driven alerts and workflows

---

## 3. Architecture & Services

**Stack direction**: Phoenix Channels / LiveView for realtime, backed by PostgreSQL.  

### 3.1 Backend Responsibilities

**Phoenix**:
- WebSocket channels for:
  - Room-based chat (e.g. `room:tenant:general`, `support:tenant`)
  - Optional direct messages (`dm:user_id`)
- HTTP APIs for:
  - Listing conversations
  - Loading history

**Elixir Services**:
- ChatService:
  - Room creation / membership rules
  - Message validation and sanitization
  - Multi-tenant access control

### 3.2 Data Model (PostgreSQL)

- `chat_rooms`
  - `id`, `tenant_id`, `name`, `type` (e.g. `general`, `support`, `dm`, `alliance`)
- `chat_room_members`
  - `room_id`, `user_id`, `role` (e.g. `owner`, `member`, `admin`)
- `chat_messages`
  - `id`, `room_id`, `tenant_id`, `user_id`, `content`, `metadata`, `created_at`
- `chat_message_reads`
  - `message_id`, `user_id`, `read_at`

---

## 4. Frontend & UX Plan (React)

**Owner**: [Owner: Josef]  

### 4.1 Key Views
- Chat sidebar/panel:
  - List of rooms and DMs
  - Unread counts
- Chat window:
  - Message list
  - Composer (text + attachments later)
  - Typing indicators & read receipts (later)
- NexusHub AI Chat:
  - Same UI shell, but messages come from AI + tools

### 4.2 Multi-Tenant UX
- Scope chat to the current tenant:
  - Only tenant-specific rooms listed
  - Admin tools visible only for admins

---

## 5. Roles, Permissions & Moderation

Tie into **Multi-Tenant System & User Roles** and security rules:

- **Super Admin**:
  - Can observe tenant rooms for support/compliance (with logs)
- **Tenant Admin**:
  - Manage rooms, moderate messages, mute/ban users (tenant scope)
- **Member/User**:
  - Standard messaging within allowed rooms

Moderation actions should be logged to PostgreSQL and, optionally, Erlang ledger later if we need immutable records.

---

## 6. Integrations

### 6.1 n8n (Notifications & Automation)

- Triggers:
  - Important system messages (alerts, errors, tasks) into specific chat rooms
  - Academy / Marketplace events (“course completed”, “deal closed”)
- Actions:
  - Send notifications from n8n into chat via HTTP/Channel hooks

### 6.2 NexusHub AI

- Use Chat as the primary UI for the AI assistant:
  - AI messages rendered like user messages
  - Backend routes AI conversations through a NexusHub service

---

## 7. Phased Task Breakdown (to sync into TODO.md)

> Planning only – mirror atomic tasks into `docs/Project Management/TODO.md` with `[Owner: …]`.

### Phase 0 – Requirements & UX
- [ ] Decide v1 chat scope (support, DMs, AI, or combination) [Owner: Team]
- [ ] Design chat UX flows and components [Owner: Josef]

### Phase 1 – Core Realtime Messaging
- [ ] Design DB schema for rooms, messages, reads [Owner: Jonne]
- [ ] Implement Phoenix Channels for chat [Owner: Backend]
- [ ] Implement basic chat UI (single tenant, one or two rooms) [Owner: Frontend]

### Phase 2 – Multi-Tenant & Roles
- [ ] Add tenant_id enforcement in ChatService [Owner: Backend]
- [ ] Implement room membership & permissions [Owner: Backend]
- [ ] Expose admin tools in UI for tenant admins [Owner: Frontend]

### Phase 3 – AI Integration
- [ ] Integrate NexusHub AI backend into chat pipeline [Owner: Backend]
- [ ] Add AI assistant entry points in UI [Owner: Frontend]

### Phase 4 – Notifications & Automation
- [ ] Define n8n workflows that push events into chat [Owner: Craig]
- [ ] Implement webhook/API for n8n → chat messages [Owner: Backend]

---

## 8. Open Questions

- [ ] Which chat features are mandatory for first investor demo (DMs vs support vs AI)? [Owner: Team]  
- [ ] Do we log all chat history indefinitely or apply retention rules? [Owner: Craig]  
- [ ] Any compliance constraints (e.g. storing PII in chat messages)? [Owner: Team]  


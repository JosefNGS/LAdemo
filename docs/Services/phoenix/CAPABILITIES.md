# Phoenix Service Capabilities

**Last Updated**: January 2026  
**Status**: Planning / Design

## Overview
Phoenix is the **web framework layer** for BitNexus. It owns HTTP APIs, routing, and real-time WebSocket channels.

## What Phoenix Can Manage
- **HTTP API Layer**:
  - REST-style endpoints under `/api/v1/*`
  - Request validation and parsing
  - **Authentication & Authorization Plugs** (HTTP layer):
    - Reading JWT tokens from headers/cookies
    - Applying authentication plugs to routes
    - Extracting user identity from tokens
    - Routing authenticated vs unauthenticated requests
    - CORS and security headers
  - Consistent JSON response formatting (views)
- **Routing & Pipelines**:
  - `router.ex` with pipelines for public vs authenticated routes
  - CORS, rate limiting, logging middleware
- **Real-Time Features**:
  - Phoenix Channels for WebSocket topics (e.g., `transaction:*`)
  - User sockets, connection/auth lifecycle
  - Broadcasting events from Elixir services to clients
- **Health & Observability**:
  - /health and /metrics endpoints
  - Logging hooks and instrumentation points

## What Phoenix Should NOT Manage
- ❌ Core business rules / commissions logic (owned by **Elixir services**)
- ❌ **Password hashing, JWT generation logic, credential validation** (owned by **Elixir accounts_service**)
- ❌ Direct SQL or schema management (owned by **PostgreSQL + Ecto**)
- ❌ Long-running background jobs (use Elixir services / BEAM processes)
- ❌ Automation workflows (owned by **n8n**)

## Integrations
- **Elixir services**: controllers delegate to Elixir contexts for domain logic
  - Example: `AuthController.login()` calls `AccountsService.authenticate_user()` for password verification
  - Example: Auth plug calls `AccountsService.validate_token()` to verify JWT
- **PostgreSQL (via Ecto)**: reads/writes via Repos defined in Elixir app
- **Netlify / AWS**: front-door hosting and deployment pipeline
- **Go services**: outbound HTTP calls for specialized high-performance APIs

## Typical Use Cases
- Exposing a public API for investor dashboards and admin tools
- Providing real-time transaction feeds to the UI
- Serving authenticated admin endpoints for task management and ledger introspection


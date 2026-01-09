# Elixir Service Capabilities

**Last Updated**: January 2026  
**Status**: Planning / Design

## Overview
Elixir services handle **business logic**, **concurrency**, and **long-running processes** on the BEAM VM.
They own the core domain logic for accounts, products, transactions, and ledger integration.

## What Elixir Can Manage
- **Domain Services** (per folder in `backend/elixir/`):
  - `accounts_service/`: user accounts, **authentication business logic**, profile data
  - `products_service/`: product catalog, pricing, commission rules
  - `transactions_service/`: transaction flows, commission calculations, payouts
  - `ledger_client/`: integration with Erlang/Elixir ledger service
- **Authentication Business Logic** (in `accounts_service/`):
  - Password hashing and verification (using `bcrypt` or `argon2`)
  - JWT token generation and validation logic
  - User credential validation
  - Session state management (via GenServer or database)
  - Password reset flows and email verification logic
  - User permission/role checking (business rules)
- **Business Rules & Orchestration**:
  - Complex workflows that span multiple domains
  - Validation rules that must be enforced consistently
  - Aggregations, summaries, and derived metrics
- **Concurrency & Background Work**:
  - GenServers for stateful processes (caches, sessions, counters)
  - Tasks / Task.Supervisor for background jobs and fan-out work
  - Supervision trees for fault tolerance and auto-restart
- **Database Access (via Ecto)**:
  - Repositories that talk to PostgreSQL
  - Migrations (when owned by a specific service)
  - Queries optimized for domain needs

## What Elixir Should NOT Manage
- ❌ Direct HTTP routing or controllers (owned by **Phoenix**)
- ❌ Static asset hosting or build pipeline (owned by **Netlify / future AWS**)
- ❌ Frontend state or UI behavior (owned by **React/Tailwind**)
- ❌ n8n workflow definitions (owned by **n8n service**)

## Integrations
- **Phoenix**: Controllers call Elixir contexts (e.g., `AccountsService.Accounts`) for business logic
  - Auth endpoints call `AccountsService.authenticate_user()` for login
  - Auth plugs call `AccountsService.validate_token()` to verify JWTs
  - Controllers never hash passwords or generate tokens directly
- **PostgreSQL**: All persistent data flows through Ecto Repos
- **Erlang/Elixir Ledger**: Shared BEAM VM processes for recording on-chain transparency data
- **Go Services**: Optional cross-service calls via HTTP/gRPC for specialized APIs

## Typical Use Cases
- **Authentication**: Password hashing, JWT generation, user credential validation
- Implementing affiliate commission logic and payout rules
- Maintaining high-volume transaction processing with strong fault tolerance
- Providing a clean, tested API surface for Phoenix controllers

## Authentication Architecture

**Division of Responsibilities**:

1. **Phoenix (HTTP Layer)**:
   - Reads JWT from `Authorization` header
   - Applies auth plugs to routes
   - Extracts user ID from token claims
   - Returns 401/403 for invalid/missing tokens

2. **Elixir `accounts_service/` (Business Logic)**:
   - Validates username/password against database
   - Hashes passwords using `bcrypt` or `argon2`
   - Generates JWT tokens with user claims
   - Validates JWT signatures and expiration
   - Manages user sessions and refresh tokens
   - Handles password reset flows

**Example Flow**:
```
Frontend → POST /api/v1/auth/login {email, password}
  ↓
Phoenix AuthController.login()
  ↓
AccountsService.authenticate_user(email, password)
  ↓
[Elixir] Hash password, check database, generate JWT
  ↓
Phoenix returns JWT to frontend
```

**For Protected Routes**:
```
Frontend → GET /api/v1/users (with JWT in header)
  ↓
Phoenix AuthPlug extracts token
  ↓
AccountsService.validate_token(token)
  ↓
[Elixir] Verifies signature, checks expiration, returns user
  ↓
Phoenix allows request, passes user to controller
```

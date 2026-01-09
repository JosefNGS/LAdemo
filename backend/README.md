# Backend Services

This directory contains all backend services, organized with one folder per service.

## Structure

- **`netlify/`** - Netlify serverless functions
  - `functions/` - Serverless function files
- **`localstorage/`** - LocalStorage browser memory management service
  - Handles browser localStorage operations and synchronization
- **`supabase/`** - Supabase PostgreSQL database service
  - `migrations/` - SQL migration files for database schema
  - `schema/` - Database schema definitions
  - `config/` - Configuration files
  - Handles Team Task Management database operations
- **Future Services** (one folder per service):
  - `PostgreSQL/` - PostgreSQL database service
  - `n8n/` - n8n automation service
  - `discourse/` - Discourse forum service
  - `erlang-ledger/` - Erlang/Elixir blockchain ledger
  - `golang-api/` - Golang API services

## Service Organization Rules

- **One folder per service** - No mixing of services
- **Service folders named after service** (e.g., `netlify/`, `PostgreSQL/`, `n8n/`)
- **Each service has its own documentation** in `docs/Services/[service-name]/`
- **Each service should have README.md and CHANGELOG.md** in its folder

## Documentation

- **Service Rules**: See `rules/services/[service-name]/rules.md` for service-specific rules
- **Backend Rules**: See `rules/backend/rules.md` for backend development rules
- **Framework Guides**: See `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation
- **Structure**: See `docs/Core Documentation/STRUCTURE.md` for complete structure

## CRITICAL Requirements

- ✅ **One folder per service** - Never mix services
- ✅ **Service folders in `backend/`** - Correct location
- ✅ **Service documentation** - Required for each service
- ✅ **Environment variables** - Never hardcode configuration
- ✅ **Error handling** - Required in all services
- ✅ **README.md and CHANGELOG.md** - Required in this folder and each service folder

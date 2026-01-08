# Backend Rules

**Source**: `docs/Core Documentation/STRUCTURE.md` and service rules

## Critical Rules

### Backend Location
- **All backend files MUST be in**: `backend/`
- **One folder per service** - No mixing of services
- **Service folders named after service** (e.g., `netlify/`, `supabase/`, `n8n/`)

### Service Organization
- **Netlify Functions**: `backend/netlify/functions/` - Serverless functions
- **Supabase**: `backend/supabase/` - Database service (when implemented)
- **n8n**: `backend/n8n/` - Workflow automation service
- **Discourse**: `backend/discourse/` - Forum service
- **Erlang/Elixir Ledger**: `backend/erlang-ledger/` - Blockchain ledger
- **Golang API**: `backend/golang-api/` - Go API services

### Service Rules
- **Each service has its own folder** under `backend/`
- **Service-specific configuration** in service folder
- **Service documentation** in `docs/Services/[service-name]/`
- **Never mix services** in the same folder

### Code Standards
- **Service-specific languages** (JavaScript, SQL, Go, Erlang/Elixir)
- **Environment variables** for configuration
- **Error handling** required
- **Documentation** required for each service

## CRITICAL Rules

- ✅ **One folder per service** - Never mix services
- ✅ **Service folders in `backend/`** - Correct location
- ✅ **Service documentation** - Required for each service
- ✅ **Environment variables** - Never hardcode configuration
- ✅ **Error handling** - Required in all services
- ❌ **Never mix services** - One folder per service
- ❌ **Never hardcode configuration** - Use environment variables
- ❌ **Never skip service documentation** - It's required

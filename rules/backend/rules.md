# Backend Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Core Documentation/STRUCTURE.md` and service rules

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Security rules, deployment requirements, code standards
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Backend development workflows, architecture guidelines

**Framework References**:
- `instructions/.agent-os/standards/security-rules/` - Complete security guidelines
- `instructions/.agent-os/standards/deployment-requirements.md` - Complete deployment guidelines
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/.agent-os/standards/best-practices.md` - Best practices
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Backend development workflows
- `instructions/BMAD-METHOD/docs/explanation/architecture/` - Architecture patterns

## Critical Rules

### Backend Location
- **All backend files MUST be in**: `backend/`
- **One folder per service** - No mixing of services
- **Service folders named after service** (e.g., `netlify/`, `PostgreSQL/`, `n8n/`)

### Service Organization
- **Netlify Functions**: `backend/netlify/functions/` - Serverless functions
- **PostgreSQL**: `backend/PostgreSQL/` - Database service (when implemented)
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

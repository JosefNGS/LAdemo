# Phoenix Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/phoenix/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Code standards, security, deployment, best practices
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, structure, agent usage

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Phoenix service files MUST be in**: `backend/phoenix/`
- **Phoenix application structure** must follow Phoenix conventions
- **One folder per service** - No mixing with other services

### Architecture Rules
- **Phoenix Framework** for HTTP API and WebSocket channels
- **Phoenix Channels** for real-time features
- **Phoenix Controllers** for HTTP endpoints
- **Phoenix Views** for JSON serialization
- **Phoenix Router** for routing

### Integration Requirements
- **RESTful API** endpoints for frontend consumption
- **WebSocket channels** for real-time updates
- **Integration with Elixir services** (business logic layer)
- **Integration with PostgreSQL** database (via Ecto)

### Deployment Rules
- **Production-ready only** - No experimental code in production
- **CTO approval required** - All deployments must be approved by CTO
- **Docker containerization** - Phoenix apps must be containerized
- **Health checks** - All services must expose health check endpoints

## CRITICAL Rules

- ✅ **Phoenix app in `backend/phoenix/`** - Correct location
- ✅ **Follow Phoenix conventions** - Standard structure
- ✅ **Health checks required** - `/health` endpoint
- ✅ **CTO approval** - Required for all deployments
- ✅ **Integration with Elixir services** - Business logic layer
- ❌ **Never mix services** - One folder per service
- ❌ **Never skip tests** - Tests required
- ❌ **Never deploy without CTO approval** - Mandatory

## Related Documentation

- **Service Rules**: `docs/Services/phoenix/SERVICE_RULES.md`
- **Implementation Guide**: `docs/Services/phoenix/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/phoenix/ARCHITECTURE.md`
- **Elixir Services**: `docs/Services/elixir/SERVICE_RULES.md`

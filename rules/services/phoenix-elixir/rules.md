# Phoenix & Elixir Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/phoenix-elixir/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Code standards, security, deployment, best practices
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, structure, agent usage

**Framework References**:
- `instructions/.agent-os/standards/` - Code standards and best practices
- `instructions/.agent-os/standards/security-rules/` - Security guidelines
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Workflow guidelines
- `instructions/BMAD-METHOD/docs/explanation/` - Framework concepts

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Phoenix/Elixir service files MUST be in**: `backend/phoenix-elixir/`
- **Phoenix application structure** must follow Phoenix conventions
- **One folder per service** - No mixing with other services

### File Organization
- **Phoenix App**: `backend/phoenix-elixir/bitnexus_api/` (Phoenix application root)
- **Configuration**: `backend/phoenix-elixir/config/`
- **Documentation**: `docs/Services/phoenix-elixir/`
- **Tests**: `backend/phoenix-elixir/test/`
- **Migrations**: `backend/phoenix-elixir/priv/repo/migrations/`

### Architecture Rules
- **Phoenix Framework** for HTTP API and WebSocket channels
- **Elixir** for business logic and concurrency
- **BEAM VM** for process isolation and fault tolerance
- **PostgreSQL** for primary data storage
- **Ecto** for database access and migrations
- **Phoenix Channels** for real-time features
- **Phoenix LiveView** (optional, for future admin dashboards)

### Integration Requirements
- **RESTful API** endpoints for frontend consumption
- **WebSocket channels** for real-time updates
- **Integration with Erlang/Elixir ledger** (shared BEAM VM)
- **Integration with PostgreSQL** database
- **Integration with existing Netlify functions** (gradual migration)
- **Integration with Go services** (high-performance endpoints)

### Deployment Rules
- **Production-ready only** - No experimental code in production
- **CTO approval required** - All deployments must be approved by CTO
- **Docker containerization** - Phoenix apps must be containerized
- **Health checks** - All services must expose health check endpoints
- **Monitoring** - All services must expose metrics endpoints
- **Logging** - Structured logging required

### Code Standards
- **Elixir** for all backend logic
- **Phoenix** for HTTP/WebSocket handling
- **Ecto** for database operations
- **ExUnit** for testing
- **Credo** for code quality
- **Dialyxir** for static analysis
- **Error handling** required in all functions
- **Environment variables** for configuration

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- Set up Phoenix application structure
- Configure development environment
- Set up PostgreSQL connection
- Create health check endpoint
- Set up basic routing
- Configure logging and monitoring

### Phase 2: Core API (Weeks 3-4)
- Implement authentication system
- Create core API endpoints
- Set up database migrations
- Implement error handling
- Add API documentation
- Write unit tests

### Phase 3: Real-Time Features (Weeks 5-6)
- Implement Phoenix Channels
- Set up WebSocket connections
- Add real-time updates
- Implement channel authorization
- Add connection monitoring

### Phase 4: Integration (Weeks 7-8)
- Integrate with Erlang/Elixir ledger
- Migrate Netlify functions to Phoenix
- Integrate with Go services
- Set up production deployment
- Performance testing and optimization

## CRITICAL Rules

- ✅ **Phoenix app in `backend/phoenix-elixir/`** - Correct location
- ✅ **Follow Phoenix conventions** - Standard structure
- ✅ **Use Ecto for database** - Standard ORM
- ✅ **Health checks required** - `/health` endpoint
- ✅ **CTO approval** - Required for all deployments
- ✅ **Docker containerization** - Required for deployment
- ✅ **Integration with Erlang ledger** - Shared BEAM VM
- ❌ **Never mix services** - One folder per service
- ❌ **Never skip tests** - Tests required
- ❌ **Never deploy without CTO approval** - Mandatory
- ❌ **Never skip error handling** - Required in all functions
- ❌ **Never hardcode configuration** - Use environment variables

## Related Documentation

- **Service Rules**: `docs/Services/phoenix-elixir/SERVICE_RULES.md`
- **Implementation Guide**: `docs/Services/phoenix-elixir/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/phoenix-elixir/ARCHITECTURE.md`
- **Integration Guide**: `docs/Services/phoenix-elixir/INTEGRATION_GUIDE.md`
- **Setup Guide**: `docs/Services/phoenix-elixir/SETUP_GUIDE.md`
- **Erlang Ledger**: `docs/Services/erlang-ledger/SERVICE_RULES.md`
- **PostgreSQL**: `docs/Services/postgresql/SERVICE_RULES.md`
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`

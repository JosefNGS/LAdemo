# Elixir Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/elixir/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Code standards, security, deployment, best practices
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, structure, agent usage

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Elixir service files MUST be in**: `backend/elixir/`
- **Elixir application structure** must follow Elixir/OTP conventions
- **One folder per service** - No mixing with other services

### Architecture Rules
- **Elixir** for business logic and concurrency
- **BEAM VM** for process isolation and fault tolerance
- **OTP** (Open Telecom Platform) for process supervision
- **GenServer** for stateful processes
- **Supervisor** for process supervision trees
- **Ecto** for database operations

### Integration Requirements
- **Integration with Phoenix** (web framework layer)
- **Integration with Erlang/Elixir ledger** (shared BEAM VM)
- **Integration with PostgreSQL** database (via Ecto)
- **Shared BEAM VM** with Phoenix and Erlang ledger

### Deployment Rules
- **Production-ready only** - No experimental code in production
- **CTO approval required** - All deployments must be approved by CTO
- **Docker containerization** - Elixir services must be containerized
- **Process supervision** - All services must have supervision trees

## CRITICAL Rules

- ✅ **Elixir services in `backend/elixir/`** - Correct location
- ✅ **Follow OTP conventions** - Standard structure
- ✅ **Supervision trees required** - Fault tolerance
- ✅ **CTO approval** - Required for all deployments
- ✅ **Integration with Phoenix** - Web framework layer
- ✅ **Integration with Erlang ledger** - Shared BEAM VM
- ❌ **Never mix services** - One folder per service
- ❌ **Never skip supervision** - Required for fault tolerance
- ❌ **Never deploy without CTO approval** - Mandatory

## Related Documentation

- **Service Rules**: `docs/Services/elixir/SERVICE_RULES.md`
- **Implementation Guide**: `docs/Services/elixir/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/elixir/ARCHITECTURE.md`
- **Phoenix Framework**: `docs/Services/phoenix/SERVICE_RULES.md`
- **Erlang Ledger**: `docs/Services/erlang-ledger/SERVICE_RULES.md`

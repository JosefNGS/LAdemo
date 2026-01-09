# Elixir Service Rules
## Critical Rules for Elixir Language & BEAM VM Services

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: ⚠️ **PLANNED** - Critical implementation documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

**Technical Lead**: Craig Martin (CTO)  
**Backend Support**: Jonne Waselius (Backend Developer)

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Elixir service files MUST be in**: `backend/elixir/`
- **One folder per service** - No mixing with other services
- **Elixir application structure** must follow Elixir/OTP conventions

### File Organization
- **Elixir Apps**: `backend/elixir/[service-name]/` (one folder per Elixir service)
- **Configuration**: `backend/elixir/config/`
- **Documentation**: `docs/Services/elixir/`
- **Tests**: `backend/elixir/[service-name]/test/`

### Architecture Rules
- **Elixir** for business logic and concurrency
- **BEAM VM** for process isolation and fault tolerance
- **OTP** (Open Telecom Platform) for process supervision
- **GenServer** for stateful processes
- **Supervisor** for process supervision trees
- **Agent** for simple state management
- **Task** for concurrent computations

### Integration Requirements
- **Integration with Phoenix** (web framework layer)
- **Integration with Erlang/Elixir ledger** (shared BEAM VM)
- **Integration with PostgreSQL** database (via Ecto)
- **Integration with Go services** (via HTTP or gRPC)
- **Shared BEAM VM** with Phoenix and Erlang ledger

### Deployment Rules
- **Production-ready only** - No experimental code in production
- **CTO approval required** - All deployments must be approved by CTO
- **Docker containerization** - Elixir services must be containerized
- **Process supervision** - All services must have supervision trees
- **Health checks** - All services must expose health check endpoints
- **Monitoring** - Process monitoring required
- **Logging** - Structured logging required

### Code Standards
- **Elixir** for all business logic
- **Ecto** for database operations
- **ExUnit** for testing
- **Credo** for code quality
- **Dialyxir** for static analysis
- **Error handling** required in all functions
- **Environment variables** for configuration
- **OTP patterns** for concurrency and fault tolerance

### Documentation Requirements
- **All Elixir docs** in `docs/Services/elixir/`
- **Service documentation** required for each service
- **Architecture documentation** required
- **Deployment guides** must be updated
- **Integration guides** required

---

## 📋 Core Implementation Requirements

### 1. Elixir Service Structure

**MANDATORY STRUCTURE**:
```
backend/elixir/
├── accounts_service/          # Accounts domain service
│   ├── lib/
│   │   └── accounts_service/
│   │       ├── application.ex
│   │       ├── accounts.ex    # Business logic
│   │       └── user.ex        # Schema/struct
│   ├── config/
│   └── test/
├── products_service/          # Products domain service
│   ├── lib/
│   │   └── products_service/
│   │       ├── application.ex
│   │       ├── products.ex
│   │       └── product.ex
│   ├── config/
│   └── test/
├── transactions_service/     # Transactions domain service
│   ├── lib/
│   │   └── transactions_service/
│   │       ├── application.ex
│   │       ├── transactions.ex
│   │       └── transaction.ex
│   ├── config/
│   └── test/
└── ledger_client/            # Ledger integration service
    ├── lib/
    │   └── ledger_client/
    │       ├── application.ex
    │       └── ledger_client.ex
    ├── config/
    └── test/
```

### 2. Process Supervision

**MANDATORY RULES**:
- ✅ **Supervision trees** for all services
- ✅ **Process isolation** - One process per request/operation
- ✅ **Fault tolerance** - Automatic process restart
- ✅ **Process monitoring** - Monitor process health
- ✅ **Graceful shutdown** - Proper cleanup on shutdown

### 3. Concurrency Patterns

**MANDATORY RULES**:
- ✅ **GenServer** for stateful processes
- ✅ **Agent** for simple shared state
- ✅ **Task** for concurrent computations
- ✅ **Task.Supervisor** for task supervision
- ✅ **Process pools** for resource management

### 4. Database Integration

**MANDATORY RULES**:
- ✅ **Ecto** for database access
- ✅ **Migrations** for all schema changes
- ✅ **Connection pooling** configured
- ✅ **Transaction support** for data integrity
- ✅ **Query optimization** required
- ✅ **Database indexes** for performance

---

## 🔄 Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Elixir service structure
- [ ] Configure development environment
- [ ] Set up PostgreSQL connection (Ecto)
- [ ] Create supervision trees
- [ ] Implement basic GenServers
- [ ] Configure logging and monitoring

### Phase 2: Core Services (Weeks 3-4)
- [ ] Implement Accounts service
- [ ] Implement Products service
- [ ] Implement Transactions service
- [ ] Set up database migrations
- [ ] Implement error handling
- [ ] Write unit tests

### Phase 3: Integration (Weeks 5-6)
- [ ] Integrate with Phoenix (web layer)
- [ ] Integrate with Erlang ledger
- [ ] Set up inter-service communication
- [ ] Implement process monitoring
- [ ] Add health checks

### Phase 4: Optimization (Weeks 7-8)
- [ ] Performance optimization
- [ ] Process pool tuning
- [ ] Database query optimization
- [ ] Set up production deployment
- [ ] Load testing and optimization

---

## 📋 Service-Specific Checklist

Before deploying Elixir changes:
- [ ] Elixir service structure follows OTP conventions
- [ ] Supervision trees are configured
- [ ] Database migrations are tested
- [ ] Error handling is implemented
- [ ] Process monitoring is configured
- [ ] Logging is configured
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] CTO approval obtained

---

## 🔗 Related Documentation

- **Phoenix Framework**: `docs/Services/phoenix/SERVICE_RULES.md`
- **Erlang Ledger**: `docs/Services/erlang-ledger/SERVICE_RULES.md`
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
- **Implementation Guide**: `docs/Services/elixir/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/elixir/ARCHITECTURE.md`
- **Integration Guide**: `docs/Services/elixir/INTEGRATION_GUIDE.md`
- **Setup Guide**: `docs/Services/elixir/SETUP_GUIDE.md`
- **PostgreSQL**: `docs/Services/postgresql/SERVICE_RULES.md`

---

## 🚨 Critical Violations

**These actions are STRICTLY FORBIDDEN**:
- ❌ **CRITICAL**: Mixing Elixir services with other services
- ❌ **CRITICAL**: Deploying without CTO approval
- ❌ **CRITICAL**: Skipping supervision trees
- ❌ **CRITICAL**: No error handling
- ❌ **CRITICAL**: Hardcoding configuration values
- ❌ **CRITICAL**: No process monitoring
- ❌ **CRITICAL**: No logging

---

**These rules are CRITICAL and must be followed for all Elixir service work.**

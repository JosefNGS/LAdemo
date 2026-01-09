# Phoenix & Elixir Service Rules
## Critical Rules for Phoenix/Elixir Backend Implementation

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
- **All Phoenix/Elixir service files MUST be in**: `backend/phoenix-elixir/`
- **One folder per service** - No mixing with other services
- **Phoenix application structure** must follow Phoenix conventions

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

### Documentation Requirements
- **All Phoenix/Elixir docs** in `docs/Services/phoenix-elixir/`
- **API documentation** required for all endpoints
- **Architecture documentation** required
- **Deployment guides** must be updated
- **Integration guides** required

---

## 📋 Core Implementation Requirements

### 1. Phoenix Application Structure

**MANDATORY STRUCTURE**:
```
backend/phoenix-elixir/
├── bitnexus_api/              # Phoenix application root
│   ├── lib/
│   │   ├── bitnexus_api/      # Application module
│   │   │   ├── application.ex
│   │   │   └── repo.ex
│   │   ├── bitnexus_api_web/  # Web layer
│   │   │   ├── controllers/   # HTTP controllers
│   │   │   ├── channels/       # WebSocket channels
│   │   │   ├── views/          # JSON views
│   │   │   └── router.ex      # Routes
│   │   └── bitnexus_api/      # Business logic
│   │       ├── accounts/       # Account domain
│   │       ├── products/      # Product domain
│   │       ├── transactions/  # Transaction domain
│   │       └── ledger/         # Ledger integration
│   ├── config/                # Configuration
│   ├── priv/
│   │   └── repo/
│   │       └── migrations/    # Database migrations
│   └── test/                  # Tests
├── config/                     # Service configuration
├── docker/                     # Docker files
│   ├── Dockerfile
│   └── docker-compose.yml
└── README.md                   # Service documentation
```

### 2. API Endpoint Requirements

**MANDATORY ENDPOINTS**:
- ✅ **Health Check**: `GET /health` - Service health status
- ✅ **Metrics**: `GET /metrics` - Prometheus metrics
- ✅ **API Versioning**: All endpoints under `/api/v1/`
- ✅ **Authentication**: JWT or API key authentication
- ✅ **Rate Limiting**: Rate limiting on all endpoints
- ✅ **CORS**: Proper CORS configuration
- ✅ **Error Handling**: Consistent error response format

### 3. Database Integration

**MANDATORY RULES**:
- ✅ **Ecto** for database access
- ✅ **Migrations** for all schema changes
- ✅ **Connection pooling** configured
- ✅ **Transaction support** for data integrity
- ✅ **Query optimization** required
- ✅ **Database indexes** for performance

### 4. Real-Time Features

**MANDATORY RULES**:
- ✅ **Phoenix Channels** for WebSocket connections
- ✅ **Channel authorization** required
- ✅ **Message validation** required
- ✅ **Connection monitoring** required
- ✅ **Graceful disconnection** handling

### 5. Integration with Existing System

**MANDATORY RULES**:
- ✅ **Gradual migration** from Netlify functions
- ✅ **API compatibility** with existing endpoints
- ✅ **Shared authentication** with frontend
- ✅ **Shared database** with PostgreSQL
- ✅ **Integration with Erlang/Elixir ledger** (same BEAM VM)

---

## 🔄 Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Phoenix application structure
- [ ] Configure development environment
- [ ] Set up PostgreSQL connection
- [ ] Create health check endpoint
- [ ] Set up basic routing
- [ ] Configure logging and monitoring

### Phase 2: Core API (Weeks 3-4)
- [ ] Implement authentication system
- [ ] Create core API endpoints
- [ ] Set up database migrations
- [ ] Implement error handling
- [ ] Add API documentation
- [ ] Write unit tests

### Phase 3: Real-Time Features (Weeks 5-6)
- [ ] Implement Phoenix Channels
- [ ] Set up WebSocket connections
- [ ] Add real-time updates
- [ ] Implement channel authorization
- [ ] Add connection monitoring

### Phase 4: Integration (Weeks 7-8)
- [ ] Integrate with Erlang/Elixir ledger
- [ ] Migrate Netlify functions to Phoenix
- [ ] Integrate with Go services
- [ ] Set up production deployment
- [ ] Performance testing and optimization

---

## 📋 Service-Specific Checklist

Before deploying Phoenix/Elixir changes:
- [ ] Phoenix application structure follows conventions
- [ ] All endpoints have health checks
- [ ] Database migrations are tested
- [ ] Error handling is implemented
- [ ] Authentication is configured
- [ ] Rate limiting is configured
- [ ] CORS is configured
- [ ] Logging is configured
- [ ] Monitoring is configured
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] CTO approval obtained

---

## 🔗 Related Documentation

- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
- **Implementation Guide**: `docs/Services/phoenix-elixir/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/phoenix-elixir/ARCHITECTURE.md`
- **Setup Guide**: `docs/Services/phoenix-elixir/SETUP_GUIDE.md`
- **Integration Guide**: `docs/Services/phoenix-elixir/INTEGRATION_GUIDE.md`
- **Erlang Ledger**: `docs/Services/erlang-ledger/SERVICE_RULES.md`
- **PostgreSQL**: `docs/Services/postgresql/SERVICE_RULES.md`

---

## 🚨 Critical Violations

**These actions are STRICTLY FORBIDDEN**:
- ❌ **CRITICAL**: Mixing Phoenix/Elixir code with other services
- ❌ **CRITICAL**: Deploying without CTO approval
- ❌ **CRITICAL**: Skipping database migrations
- ❌ **CRITICAL**: No error handling
- ❌ **CRITICAL**: Hardcoding configuration values
- ❌ **CRITICAL**: No authentication on endpoints
- ❌ **CRITICAL**: No rate limiting
- ❌ **CRITICAL**: No monitoring or logging

---

**These rules are CRITICAL and must be followed for all Phoenix/Elixir service work.**

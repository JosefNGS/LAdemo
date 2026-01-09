# Phoenix Service Rules
## Critical Rules for Phoenix Web Framework Implementation

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
- **All Phoenix service files MUST be in**: `backend/phoenix/`
- **One folder per service** - No mixing with other services
- **Phoenix application structure** must follow Phoenix conventions

### File Organization
- **Phoenix App**: `backend/phoenix/bitnexus_api/` (Phoenix application root)
- **Configuration**: `backend/phoenix/config/`
- **Documentation**: `docs/Services/phoenix/`
- **Tests**: `backend/phoenix/test/`
- **Migrations**: `backend/phoenix/priv/repo/migrations/`

### Architecture Rules
- **Phoenix Framework** for HTTP API and WebSocket channels
- **Phoenix Channels** for real-time features
- **Phoenix LiveView** (optional, for future admin dashboards)
- **Phoenix Controllers** for HTTP endpoints
- **Phoenix Views** for JSON serialization
- **Phoenix Router** for routing

### Integration Requirements
- **RESTful API** endpoints for frontend consumption
- **WebSocket channels** for real-time updates
- **Integration with Elixir services** (business logic layer)
- **Integration with PostgreSQL** database (via Ecto)
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
- **Phoenix** for HTTP/WebSocket handling
- **Ecto** for database operations (via Elixir services)
- **ExUnit** for testing
- **Error handling** required in all functions
- **Environment variables** for configuration

### Documentation Requirements
- **All Phoenix docs** in `docs/Services/phoenix/`
- **API documentation** required for all endpoints
- **Architecture documentation** required
- **Deployment guides** must be updated
- **Integration guides** required

---

## 📋 Core Implementation Requirements

### 1. Phoenix Application Structure

**MANDATORY STRUCTURE**:
```
backend/phoenix/
├── bitnexus_api/              # Phoenix application root
│   ├── lib/
│   │   ├── bitnexus_api/      # Application module
│   │   │   ├── application.ex
│   │   │   └── repo.ex
│   │   └── bitnexus_api_web/  # Web layer
│   │       ├── controllers/   # HTTP controllers
│   │       ├── channels/       # WebSocket channels
│   │       ├── views/          # JSON views
│   │       └── router.ex      # Routes
│   ├── config/                # Configuration
│   ├── priv/
│   │   └── repo/
│   │       └── migrations/    # Database migrations
│   └── test/                  # Tests
├── config/                     # Service configuration
├── docker/                     # Docker files
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

### 3. Real-Time Features

**MANDATORY RULES**:
- ✅ **Phoenix Channels** for WebSocket connections
- ✅ **Channel authorization** required
- ✅ **Message validation** required
- ✅ **Connection monitoring** required
- ✅ **Graceful disconnection** handling

---

## 🔄 Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Phoenix application structure
- [ ] Configure development environment
- [ ] Set up PostgreSQL connection (via Elixir services)
- [ ] Create health check endpoint
- [ ] Set up basic routing
- [ ] Configure logging and monitoring

### Phase 2: Core API (Weeks 3-4)
- [ ] Implement authentication system
- [ ] Create core API endpoints
- [ ] Integrate with Elixir business logic services
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
- [ ] Integrate with Elixir services
- [ ] Migrate Netlify functions to Phoenix
- [ ] Integrate with Go services
- [ ] Set up production deployment
- [ ] Performance testing and optimization

---

## 📋 Service-Specific Checklist

Before deploying Phoenix changes:
- [ ] Phoenix application structure follows conventions
- [ ] All endpoints have health checks
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

- **Elixir Services**: `docs/Services/elixir/SERVICE_RULES.md`
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
- **Implementation Guide**: `docs/Services/phoenix/IMPLEMENTATION_GUIDE.md`
- **Architecture**: `docs/Services/phoenix/ARCHITECTURE.md`
- **Integration Guide**: `docs/Services/phoenix/INTEGRATION_GUIDE.md`
- **Setup Guide**: `docs/Services/phoenix/SETUP_GUIDE.md`
- **PostgreSQL**: `docs/Services/postgresql/SERVICE_RULES.md`

---

## 🚨 Critical Violations

**These actions are STRICTLY FORBIDDEN**:
- ❌ **CRITICAL**: Mixing Phoenix code with other services
- ❌ **CRITICAL**: Deploying without CTO approval
- ❌ **CRITICAL**: No error handling
- ❌ **CRITICAL**: Hardcoding configuration values
- ❌ **CRITICAL**: No authentication on endpoints
- ❌ **CRITICAL**: No rate limiting
- ❌ **CRITICAL**: No monitoring or logging

---

**These rules are CRITICAL and must be followed for all Phoenix service work.**

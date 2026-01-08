# Golang API Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/golang-api/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Security rules, deployment requirements, code standards
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - API development workflow guidelines

**Framework References**:
- `instructions/.agent-os/standards/security-rules/` - Complete security guidelines
- `instructions/.agent-os/standards/deployment-requirements.md` - Complete deployment guidelines
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - API development workflow guidelines
- `instructions/BMAD-METHOD/docs/explanation/architecture/` - Architecture patterns

## Critical Rules

### Service Location
- **All Go API service files MUST be in**: `backend/golang-api/`
- **Application entry points**: `backend/golang-api/cmd/`
- **One folder per service** - No mixing with other services

### File Organization
- **Entry points**: `backend/golang-api/cmd/`
- **Source code**: `backend/golang-api/internal/`
- **API handlers**: `backend/golang-api/api/`
- **Documentation**: `docs/Services/golang-api/`

### Code Standards
- **Go (Golang)** for high-performance APIs
- **RESTful API** design
- **Error handling** required
- **API versioning** required

### Performance Rules
- **High-performance** API servers
- **Real-time data processing**
- **Concurrent request handling**
- **Optimized database queries**

## CRITICAL Rules

- ✅ **Source code in `backend/golang-api/`** - Correct location
- ✅ **RESTful API design** - Must follow REST principles
- ✅ **Error handling** - Required in all handlers
- ✅ **API versioning** - Required for all endpoints
- ✅ **Performance optimization** - Must be optimized
- ❌ **Never skip error handling** - It's required
- ❌ **Never skip API versioning** - It's required

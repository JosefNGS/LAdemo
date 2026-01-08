# Golang API Service Rules

**Source**: `docs/Services/golang-api/SERVICE_RULES.md`

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

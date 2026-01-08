# Golang API Service Rules
## Critical Rules for Go API Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules (Planned)

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

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

### Documentation Requirements
- **All Go API docs** in `docs/Services/golang-api/`
- **API endpoint documentation** required
- **Performance benchmarks** required

---

## 📋 Service-Specific Checklist

Before deploying Go API changes:
- [ ] Source code is in `backend/golang-api/`
- [ ] API endpoints are documented
- [ ] Error handling is implemented
- [ ] Performance is tested
- [ ] Documentation is updated in `docs/Services/golang-api/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/golang-api/` (to be created)
- **API Documentation**: `docs/Services/golang-api/` (to be created)

---

**These rules are CRITICAL and must be followed for all Go API service work.**


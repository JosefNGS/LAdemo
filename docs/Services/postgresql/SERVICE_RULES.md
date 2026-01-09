# PostgreSQL Service Rules
## Critical Rules for PostgreSQL Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All PostgreSQL service files MUST be in**: `backend/postgresql/` (when implemented)
- **Database migrations**: `backend/postgresql/migrations/`
- **One folder per service** - No mixing with other services

### File Organization
- **Migrations**: `backend/postgresql/migrations/*.sql`
- **Configuration**: `backend/postgresql/config/`
- **Documentation**: `docs/Services/postgresql/`

### Database Rules
- **Schema changes** require migrations
- **Migrations must be versioned** and documented
- **Backup before** major schema changes
- **Test migrations** in development first

### Code Standards
- **SQL** for migrations
- **TypeScript/JavaScript** for client code
- **Environment variables** for connection strings
- **Error handling** required

### Documentation Requirements
- **All PostgreSQL docs** in `docs/Services/postgresql/`
- **Schema documentation** required
- **Migration documentation** required

---

## 📋 Service-Specific Checklist

Before deploying PostgreSQL changes:
- [ ] Migrations are in `backend/postgresql/migrations/`
- [ ] Migrations are tested in development
- [ ] Schema changes are documented
- [ ] Connection strings use environment variables
- [ ] Documentation is updated in `docs/Services/postgresql/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/postgresql/POSTGRESQL_SETUP.md`
- **Quick Start**: `docs/Services/postgresql/POSTGRESQL_QUICK_START.md`
- **Migrations**: `docs/Services/postgresql/postgresql-migration.sql`

---

**These rules are CRITICAL and must be followed for all PostgreSQL service work.**



# Supabase Service Rules
## Critical Rules for Supabase Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Supabase service files MUST be in**: `backend/supabase/` (when implemented)
- **Database migrations**: `backend/supabase/migrations/`
- **One folder per service** - No mixing with other services

### File Organization
- **Migrations**: `backend/supabase/migrations/*.sql`
- **Configuration**: `backend/supabase/config/`
- **Documentation**: `docs/Services/supabase/`

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
- **All Supabase docs** in `docs/Services/supabase/`
- **Schema documentation** required
- **Migration documentation** required

---

## 📋 Service-Specific Checklist

Before deploying Supabase changes:
- [ ] Migrations are in `backend/supabase/migrations/`
- [ ] Migrations are tested in development
- [ ] Schema changes are documented
- [ ] Connection strings use environment variables
- [ ] Documentation is updated in `docs/Services/supabase/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/supabase/SUPABASE_SETUP.md`
- **Quick Start**: `docs/Services/supabase/SUPABASE_QUICK_START.md`
- **Migrations**: `docs/Services/supabase/supabase-migration.sql`

---

**These rules are CRITICAL and must be followed for all Supabase service work.**


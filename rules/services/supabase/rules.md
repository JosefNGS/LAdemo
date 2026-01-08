# Supabase Service Rules

**Source**: `docs/Services/supabase/SERVICE_RULES.md`

## Critical Rules

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

## CRITICAL Rules

- ✅ **Migrations in `backend/supabase/migrations/`** - Correct location
- ✅ **Version migrations** - Always version and document
- ✅ **Test migrations** - Test in development first
- ✅ **Backup before changes** - Always backup before major schema changes
- ✅ **Use environment variables** - Never hardcode connection strings
- ❌ **Never skip migrations** - All schema changes require migrations
- ❌ **Never hardcode connection strings** - Use environment variables

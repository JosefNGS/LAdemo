# PostgreSQL Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/PostgreSQL/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Security rules, code standards, database best practices
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines for database operations

**Framework References**:
- `instructions/.agent-os/standards/security-rules/` - Complete security guidelines
- `instructions/.agent-os/standards/security-rules/sql.md` - SQL security rules
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Database workflow guidelines

## Critical Rules

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

## CRITICAL Rules

- ✅ **Migrations in `backend/postgresql/migrations/`** - Correct location
- ✅ **Version migrations** - Always version and document
- ✅ **Test migrations** - Test in development first
- ✅ **Backup before changes** - Always backup before major schema changes
- ✅ **Use environment variables** - Never hardcode connection strings
- ❌ **Never skip migrations** - All schema changes require migrations
- ❌ **Never hardcode connection strings** - Use environment variables

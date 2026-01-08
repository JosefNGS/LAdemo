# n8n Service Rules

**Source**: `docs/Services/n8n/SERVICE_RULES.md`

## Critical Rules

### Service Location
- **All n8n service files MUST be in**: `backend/n8n/`
- **Workflows**: `backend/n8n/workflows/`
- **One folder per service** - No mixing with other services

### File Organization
- **Workflows**: `backend/n8n/workflows/*.json`
- **Configuration**: `backend/n8n/config/`
- **Documentation**: `docs/Services/n8n/`

### Workflow Rules
- **All workflows must be versioned**
- **Workflows must be documented**
- **Test workflows** before production
- **Backup workflows** regularly

### Integration Rules
- **Supabase integration** - Use environment variables
- **Gemini AI integration** - Use API keys from environment
- **Payment gateways** - Secure credential storage
- **Commission calculations** - Document formulas

## CRITICAL Rules

- ✅ **Workflows in `backend/n8n/workflows/`** - Correct location
- ✅ **Version workflows** - Always version and document
- ✅ **Test workflows** - Test before production
- ✅ **Use environment variables** - Never hardcode credentials
- ✅ **Backup workflows** - Backup regularly
- ❌ **Never skip testing** - Always test workflows before production
- ❌ **Never hardcode credentials** - Use environment variables

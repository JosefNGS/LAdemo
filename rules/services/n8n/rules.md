# n8n Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/n8n/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, automation patterns
- **Agent OS**: `instructions/.agent-os/` - Security rules, code standards, integration best practices

**Framework References**:
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Complete workflow guidelines
- `instructions/BMAD-METHOD/docs/explanation/workflows/` - Workflow concepts
- `instructions/.agent-os/standards/security-rules/` - Security guidelines for integrations
- `instructions/.agent-os/standards/code-style.md` - Code standards

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

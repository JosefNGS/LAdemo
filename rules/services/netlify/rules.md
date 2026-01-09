# Netlify Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/netlify/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Deployment requirements, code standards, security
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines for deployment processes

**Framework References**:
- `instructions/.agent-os/standards/deployment-requirements.md` - Complete deployment guidelines
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/.agent-os/standards/security-rules/` - Security guidelines
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Deployment workflow guidelines

## ⚠️ CRITICAL STATUS - ALPHA PHASE

**Status**: ⚠️ **ALPHA PHASE** - Temporary hosting solution, migration to AWS planned

**⚠️ IMPORTANT**: Netlify is currently in **ALPHA PHASE**. Migration to AWS servers is planned after alpha phase completion for better control, scalability, and production capabilities.

**Migration Plan**: Production will move to AWS servers (EC2, ECS, Lambda, CloudFront, RDS) after alpha phase completion.

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Netlify service files MUST be in**: `backend/netlify/`
- **Serverless functions MUST be in**: `backend/netlify/functions/`
- **One folder per service** - No mixing with other services

### File Organization
- **Functions**: `backend/netlify/functions/*.js`
- **Configuration**: `netlify.toml` (root level)
- **Documentation**: `docs/Services/netlify/`

### Deployment Rules
- **Main branch only** - Production deployments from main branch
- **CTO approval required** - All deployments must be approved by CTO
- **Build output**: `frontend/dist/`
- **Functions directory**: `backend/netlify/functions/`

### Code Standards
- **JavaScript/Node.js** for serverless functions
- **ES Modules** preferred
- **Error handling** required in all functions
- **Environment variables** for sensitive data

### Documentation Requirements
- **All Netlify docs** in `docs/Services/netlify/`
- **Deployment guides** must be updated
- **Function documentation** required for each function

## CRITICAL Rules

- ✅ **Functions in `backend/netlify/functions/`** - Correct location
- ✅ **Use environment variables** - Never hardcode secrets
- ✅ **Error handling** - Required in all functions
- ✅ **CTO approval** - Required for all deployments
- ✅ **Alpha phase awareness** - Document temporary nature of Netlify hosting
- ❌ **Never mix services** - One folder per service
- ❌ **Never hardcode secrets** - Use environment variables
- ❌ **Never forget alpha phase status** - AWS migration is planned

## Service-Specific Checklist

Before deploying Netlify changes:
- [ ] Functions are in `backend/netlify/functions/`
- [ ] `netlify.toml` is configured correctly
- [ ] Environment variables are set in Netlify dashboard
- [ ] Build output directory is correct (`frontend/dist/`)
- [ ] Functions directory is correct (`backend/netlify/functions/`)
- [ ] Documentation is updated in `docs/Services/netlify/`

## Related Documentation

- **Deployment Guide**: `docs/Services/netlify/DEPLOYMENT.md`
- **Setup Guide**: `docs/Services/netlify/NETLIFY_SETUP.md`
- **Troubleshooting**: `docs/Services/netlify/NETLIFY_BUILD_TROUBLESHOOTING.md`
- **Complete Rules**: `docs/Services/netlify/SERVICE_RULES.md`

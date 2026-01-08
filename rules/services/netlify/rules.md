# Netlify Service Rules

**Source**: `docs/Services/netlify/SERVICE_RULES.md`

## Critical Rules

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

## CRITICAL Rules

- ✅ **Functions in `backend/netlify/functions/`** - Correct location
- ✅ **Use environment variables** - Never hardcode secrets
- ✅ **Error handling** - Required in all functions
- ✅ **CTO approval** - Required for all deployments
- ❌ **Never mix services** - One folder per service
- ❌ **Never hardcode secrets** - Use environment variables

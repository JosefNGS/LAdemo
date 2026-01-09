# Netlify Service Rules
## Critical Rules for Netlify Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: ⚠️ **ALPHA PHASE** - Temporary hosting solution, migration to AWS planned

**⚠️ IMPORTANT**: Netlify is currently in **ALPHA PHASE**. Migration to AWS servers is planned after alpha phase completion for better control, scalability, and production capabilities.

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

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

---

## 📋 Service-Specific Checklist

Before deploying Netlify changes:
- [ ] Functions are in `backend/netlify/functions/`
- [ ] `netlify.toml` is configured correctly
- [ ] Environment variables are set in Netlify dashboard
- [ ] Build output directory is correct (`frontend/dist/`)
- [ ] Functions directory is correct (`backend/netlify/functions/`)
- [ ] Documentation is updated in `docs/Services/netlify/`

---

## 🔗 Related Documentation

- **Deployment Guide**: `docs/Services/netlify/DEPLOYMENT.md`
- **Setup Guide**: `docs/Services/netlify/NETLIFY_SETUP.md`
- **Troubleshooting**: `docs/Services/netlify/NETLIFY_BUILD_TROUBLESHOOTING.md`
- **Version Control**: `docs/Services/github/VERSION_CONTROL.md`

---

**These rules are CRITICAL and must be followed for all Netlify service work.**


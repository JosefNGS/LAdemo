# n8n Service Rules
## Critical Rules for n8n Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules (Planned)

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

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
- **PostgreSQL integration** - Use environment variables
- **Gemini AI integration** - Use API keys from environment
- **Payment gateways** - Secure credential storage
- **Commission calculations** - Document formulas

### Documentation Requirements
- **All n8n docs** in `docs/Services/n8n/`
- **Workflow documentation** required
- **Integration guides** required

---

## 📋 Service-Specific Checklist

Before deploying n8n changes:
- [ ] Workflows are in `backend/n8n/workflows/`
- [ ] Workflows are tested
- [ ] Environment variables are configured
- [ ] Documentation is updated in `docs/Services/n8n/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/n8n/` (to be created)
- **Workflow Documentation**: `docs/Services/n8n/workflows/` (to be created)

---

**These rules are CRITICAL and must be followed for all n8n service work.**


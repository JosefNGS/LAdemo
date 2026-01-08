# Discourse Service Rules
## Critical Rules for Discourse Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules (Planned)

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Service Location
- **All Discourse service files MUST be in**: `backend/discourse/`
- **Configuration**: `backend/discourse/config/`
- **One folder per service** - No mixing with other services

### File Organization
- **Configuration**: `backend/discourse/config/`
- **Themes**: `backend/discourse/themes/`
- **Plugins**: `backend/discourse/plugins/`
- **Documentation**: `docs/Services/discourse/`

### Integration Rules
- **SSO (Single Sign-On)** setup required
- **Custom theme** and branding
- **Integration with main platform** required
- **User synchronization** with main platform

### Documentation Requirements
- **All Discourse docs** in `docs/Services/discourse/`
- **SSO setup documentation** required
- **Theme documentation** required
- **Integration documentation** required

---

## 📋 Service-Specific Checklist

Before deploying Discourse changes:
- [ ] Configuration files are in `backend/discourse/config/`
- [ ] SSO is configured and tested
- [ ] Theme is customized
- [ ] Integration with main platform is working
- [ ] Documentation is updated in `docs/Services/discourse/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/discourse/` (to be created)
- **SSO Documentation**: `docs/Services/discourse/` (to be created)

---

**These rules are CRITICAL and must be followed for all Discourse service work.**


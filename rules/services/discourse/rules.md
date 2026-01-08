# Discourse Service Rules

**Source**: `docs/Services/discourse/SERVICE_RULES.md`

## Critical Rules

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

## CRITICAL Rules

- ✅ **Configuration in `backend/discourse/config/`** - Correct location
- ✅ **SSO setup required** - Must be configured and tested
- ✅ **Custom theme** - Must be customized
- ✅ **Platform integration** - Must integrate with main platform
- ✅ **User synchronization** - Must sync with main platform
- ❌ **Never skip SSO setup** - It's required
- ❌ **Never skip integration** - Must integrate with main platform

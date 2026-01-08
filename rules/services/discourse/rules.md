# Discourse Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/discourse/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Security rules, SSO guidelines, code standards
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Integration workflow guidelines

**Framework References**:
- `instructions/.agent-os/standards/security-rules/` - Complete security guidelines
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Integration workflow guidelines

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

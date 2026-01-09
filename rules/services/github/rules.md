# GitHub Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/github/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Code standards, best practices, security
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, version control workflows

**Framework References**:
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Complete workflow guidelines
- `instructions/BMAD-METHOD/docs/reference/workflows/` - Workflow reference documentation
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/.agent-os/standards/best-practices.md` - Best practices

## Critical Rules

### Main Branch Protection
- **Main branch is PROTECTED** - Production-ready only
- **ONLY CTO can merge** to main branch
- **NO direct pushes** to main branch
- **All changes** must go through Pull Requests

### Push Change Documentation
- **EVERY push MUST have** change documentation
- **Documentation location**: `docs/Services/github/push-docs/`
- **Naming**: `YYYY-MM-DD-HHMMSS-[brief-description].md`
- **Template**: `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md`

### Branch Workflow
- **Feature branches**: `feature/feature-name`
- **Bug fixes**: `fix/bug-name`
- **Documentation**: `docs/documentation-name`
- **Never push directly to main**

### Code Review
- **All PRs must be reviewed** by CTO
- **All PRs must pass** automated checks
- **All PRs must have** clear description
- **All PRs must have** change documentation

## 👥 Active Developers

**CRITICAL**: All active developers must be registered in `docs/Services/github/DEVELOPERS.md`.

**Current Active Developers**:
- **Josef Lindbom** (COO & Development Vision Lead) - josef@nordicglobalsolutions.com
- **Craig Martin** (CTO) - craig@nordicglobalsolutions.com
- **Jonne Waselius** (Backend Developer) - Jonne@nordicglobalsolutions.com

**Developer Tracking**:
- All developers must be listed in `docs/Services/github/DEVELOPERS.md`
- Developer information must be kept up-to-date
- Access levels must be clearly defined
- Branch permissions must be documented

## Service-Specific Checklist

Before pushing to GitHub:
- [ ] Change documentation created
- [ ] Documentation saved in `docs/Services/github/push-docs/`
- [ ] Documentation included in commit
- [ ] Branch is not main (use feature branch)
- [ ] Pull Request created (if merging to main)

## CRITICAL Rules

- ✅ **Use feature branches** - Never push directly to main
- ✅ **Create change documentation** - Required for every push
- ✅ **CTO review required** - All PRs must be reviewed
- ✅ **Pass automated checks** - All PRs must pass CI/CD
- ✅ **Register developers** - All active developers must be in DEVELOPERS.md
- ❌ **Never push directly to main** - Always use Pull Requests
- ❌ **Never skip change documentation** - It's mandatory
- ❌ **Never skip developer registration** - Required for all developers

## Related Documentation

- **Version Control**: `docs/Services/github/VERSION_CONTROL.md`
- **Push Instructions**: `docs/Services/github/GITHUB_PUSH_INSTRUCTIONS.md`
- **Setup Guide**: `docs/Services/github/GITHUB_SETUP.md`
- **Change Documentation Template**: `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md`
- **Developer Registry**: `docs/Services/github/DEVELOPERS.md`
- **Complete Rules**: `docs/Services/github/SERVICE_RULES.md`

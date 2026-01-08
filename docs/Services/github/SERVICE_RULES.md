# GitHub Service Rules
## Critical Rules for GitHub Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

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

---

## 📋 Service-Specific Checklist

Before pushing to GitHub:
- [ ] Change documentation created
- [ ] Documentation saved in `docs/Services/github/push-docs/`
- [ ] Documentation included in commit
- [ ] Branch is not main (use feature branch)
- [ ] Pull Request created (if merging to main)

---

## 🔗 Related Documentation

- **Version Control**: `docs/Services/github/VERSION_CONTROL.md`
- **Push Instructions**: `docs/Services/github/GITHUB_PUSH_INSTRUCTIONS.md`
- **Setup Guide**: `docs/Services/github/GITHUB_SETUP.md`
- **Change Documentation Template**: `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md`

---

**These rules are CRITICAL and must be followed for all GitHub operations.**


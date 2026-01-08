# GitHub Service Rules

**Source**: `docs/Services/github/SERVICE_RULES.md`

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

## CRITICAL Rules

- ✅ **Use feature branches** - Never push directly to main
- ✅ **Create change documentation** - Required for every push
- ✅ **CTO review required** - All PRs must be reviewed
- ✅ **Pass automated checks** - All PRs must pass CI/CD
- ❌ **Never push directly to main** - Always use Pull Requests
- ❌ **Never skip change documentation** - It's mandatory

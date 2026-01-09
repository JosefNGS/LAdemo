# Rules TODO

This document tracks tasks and improvements needed for the rules directory.

## Framework Rules

### Agent OS Rules
- [ ] Review and update `agent-os/code-style.md` if Agent OS standards change
- [ ] Review and update `agent-os/best-practices.md` if Agent OS practices change
- [ ] Review and update `agent-os/security.md` if Agent OS security rules change
- [ ] Review and update `agent-os/deployment.md` if Agent OS deployment requirements change
- [ ] Sync with `instructions/.agent-os/` when framework is updated

### BMAD-METHOD Rules
- [ ] Review and update `bmad-method/workflow.md` if BMAD workflows change
- [ ] Review and update `bmad-method/structure.md` if BMAD structure changes
- [ ] Sync with `instructions/BMAD-METHOD/` when framework is updated

## Service Rules

### Admin Service
- [ ] Review `services/admin/rules.md` when Admin View features change
- [ ] Update rules if task synchronization requirements change
- [ ] Update rules if UI alignment requirements change

### Netlify Service
- [ ] Review `services/netlify/rules.md` when Netlify configuration changes
- [ ] Update rules if deployment process changes
- [ ] Update rules if function structure changes

### PostgreSQL Service
- [ ] Review `services/PostgreSQL/rules.md` when PostgreSQL is implemented
- [ ] Update rules when database schema is finalized
- [ ] Update rules when migration process is established

### GitHub Service
- [ ] Review `services/github/rules.md` when GitHub workflow changes
- [ ] Update rules if branch protection rules change
- [ ] Update rules if PR review process changes

### n8n Service
- [ ] Review `services/n8n/rules.md` when n8n is implemented
- [ ] Update rules when workflow structure is established
- [ ] Update rules when integration patterns are defined

### Discourse Service
- [ ] Review `services/discourse/rules.md` when Discourse is implemented
- [ ] Update rules when SSO setup is complete
- [ ] Update rules when theme customization is finalized

### Erlang/Elixir Ledger Service
- [ ] Review `services/erlang-ledger/rules.md` when ledger is implemented
- [ ] Update rules when block structure is finalized
- [ ] Update rules when consensus mechanism is chosen

### Golang API Service
- [ ] Review `services/golang-api/rules.md` when Go API is implemented
- [ ] Update rules when API structure is established
- [ ] Update rules when performance requirements are defined

## Folder Rules

### Frontend Rules
- [ ] Review `frontend/rules.md` when frontend architecture changes
- [ ] Update rules if component structure changes
- [ ] Update rules if styling guidelines change

### Backend Rules
- [ ] Review `backend/rules.md` when backend structure changes
- [ ] Update rules if new services are added
- [ ] Update rules if service organization changes

### Dev Server Rules
- [ ] Review `dev_server/rules.md` when Docker setup changes
- [ ] Update rules if Docker Compose configuration changes
- [ ] Update rules if new services are added to dev server

### Documentation Rules
- [ ] Review `docs/rules.md` when documentation structure changes
- [ ] Update rules if new documentation categories are added
- [ ] Update rules if documentation standards change

## General Tasks

### Maintenance
- [ ] Regularly sync rule files with source documentation
- [ ] Review all rule files quarterly for accuracy
- [ ] Update rule files when source documentation is updated
- [ ] Ensure all rule files reference their source documentation

### Documentation
- [ ] Keep `README.md` updated with current structure
- [ ] Document any new rule categories added
- [ ] Maintain consistency across all rule files

### Integration
- [ ] Ensure `.cursorrules` references all relevant rule files
- [ ] Update `.cursorrules` when new rule categories are added
- [ ] Verify rule file priority order is correct

## New Rule Categories (Future)

### Potential New Categories
- [ ] Create rules for `instructions/` folder structure
- [ ] Create rules for `.github/` folder structure
- [ ] Create rules for root-level files
- [ ] Create rules for build and deployment processes
- [ ] Create rules for testing and quality assurance

## Notes

- **Last Updated**: January 2026
- **Maintained By**: Development Team
- **Review Frequency**: Quarterly or when source documentation changes

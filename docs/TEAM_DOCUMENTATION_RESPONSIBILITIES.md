# Team Documentation Responsibilities
## Documentation Ownership & Maintenance Guide

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Active Documentation Guidelines

---

## Overview

This document defines documentation responsibilities for each team member. All documentation must be kept up-to-date and synchronized with the codebase and project structure.

**Main Structure Reference**: See `docs/STRUCTURE.md` for complete project structure.

---

## 👥 Team Documentation Responsibilities

### Josef Lindbom - COO & Development Vision Lead

**Primary Documentation Areas**:
- **UX/UI Documentation**
  - User interface design documentation
  - User experience flow documentation
  - Design system documentation
  - Component library documentation
  - Responsive design guidelines

- **User Flow Logic Documentation**
  - User journey mapping
  - Navigation flow documentation
  - User state management documentation
  - Conversion funnel documentation
  - User decision point documentation

- **Overall Platform Logic Documentation**
  - Platform architecture overview
  - System integration documentation
  - Feature interaction documentation
  - Business logic documentation
  - Platform workflow documentation

**Key Documents to Maintain**:
- `docs/Product docs/Technical Documentation/COMPLETE_UI_DOCUMENTATION.md`
- `docs/Product docs/Technical Documentation/USER_FLOW_LOGIC.md`
- `docs/Product docs/Technical Documentation/PLATFORM_OVERVIEW.md`
- `docs/STRUCTURE.md` (coordination)

**Contact**: josef@nordicglobalsolutions.com

---

### Craig Martin - CTO

**Primary Documentation Areas**:
- **Hosting Services Documentation**
  - Netlify deployment documentation
  - Server infrastructure documentation
  - CDN configuration documentation
  - Environment setup documentation
  - Production deployment guides

- **Discourse (Forum) Documentation**
  - Forum setup and configuration
  - SSO integration documentation
  - Custom theme documentation
  - Plugin configuration
  - Forum integration with main platform

- **n8n Automation Documentation**
  - Workflow configuration documentation
  - Integration setup guides
  - Automation process documentation
  - Webhook configuration
  - Data sync workflows

- **Technical Infrastructure Documentation**
  - System architecture documentation
  - Technology stack documentation
  - Security configuration
  - Performance optimization guides

**Key Documents to Maintain**:
- `docs/DEPLOYMENT.md`
- `docs/TECH_STACK.md`
- `docs/backend/n8n/` (when implemented)
- `docs/backend/discourse/` (when implemented)
- `docs/NETLIFY_*.md` (all Netlify-related docs)

**Contact**: craig@nordicglobalsolutions.com

---

### Jonne Waselius - Backend Developer

**Primary Documentation Areas**:
- **Hosting Real-Time Services Documentation**
  - Real-time service setup
  - WebSocket configuration
  - Live data synchronization
  - Real-time event handling

- **Authentication Documentation**
  - Authentication system setup
  - User authentication flows
  - Session management
  - Security protocols
  - Multi-factor authentication

- **Backend API Documentation**
  - API endpoint documentation
  - Request/response formats
  - Error handling
  - API versioning
  - Rate limiting

- **n8n Integration Documentation**
  - n8n workflow integration
  - API connections
  - Data transformation
  - Automation triggers

- **API Endpoints and Ports Documentation**
  - Endpoint mapping
  - Port configuration
  - Service communication
  - Network architecture

- **Google Services Sync Documentation**
  - Google API integration
  - Data synchronization
  - OAuth configuration
  - Service account setup

**Key Documents to Maintain**:
- `docs/API_SETUP.md`
- `docs/backend/netlify/functions/` (function documentation)
- `docs/backend/golang-api/` (when implemented)
- API endpoint documentation
- Authentication flow documentation
- Integration guides

**Contact**: Jonne@nordicglobalsolutions.com

---

## 📋 Documentation Maintenance Guidelines

### General Rules

1. **Keep Documentation Synchronized**
   - Update documentation when code changes
   - Update documentation when structure changes
   - Update documentation when features are added/removed

2. **Follow Structure Guidelines**
   - All documentation must follow `docs/STRUCTURE.md`
   - Product docs go in `docs/Product docs/`
   - System docs go in `docs/`
   - No random files in root

3. **Update Dates**
   - Always update "Last Updated" date when modifying documentation
   - Use format: "January 2026" (month and year only)

4. **Version Control**
   - All documentation is version controlled
   - Commit documentation changes with code changes
   - Use clear commit messages

### Documentation Standards

1. **File Naming**
   - Use UPPER_SNAKE_CASE for documentation files
   - Be descriptive and clear
   - Follow existing naming conventions

2. **Content Structure**
   - Include table of contents for long documents
   - Use clear headings and sections
   - Include code examples where relevant
   - Add diagrams for complex processes

3. **Cross-References**
   - Link to related documentation
   - Reference `docs/STRUCTURE.md` for structure questions
   - Keep links up-to-date

---

## 🔄 Documentation Sync Requirements

### Must Stay Synchronized

1. **Structure Documentation**
   - `docs/STRUCTURE.md` - Main structure reference
   - `README.md` - Project overview (must match structure)
   - `.cursorrules` - IDE rules (must reference structure)

2. **Team Information**
   - All Product docs must include team section
   - Contact information must be consistent
   - Roles and responsibilities must match

3. **Configuration Files**
   - `netlify.toml` - Must match deployment docs
   - `package.json` - Must match tech stack docs
   - Build scripts - Must match structure

---

## ✅ Documentation Checklist

Before committing documentation changes:

- [ ] Documentation follows `docs/STRUCTURE.md` structure
- [ ] "Last Updated" date is current
- [ ] Team section is included (for Product docs)
- [ ] Links are working and up-to-date
- [ ] Code examples are tested
- [ ] File is in correct location (not root)
- [ ] Related documentation is updated
- [ ] Structure reference is updated if needed

---

## 📞 Contact & Coordination

**For Structure Questions**: Refer to `docs/STRUCTURE.md`  
**For Documentation Coordination**: Contact Josef Lindbom  
**For Technical Documentation**: Contact Craig Martin  
**For Backend Documentation**: Contact Jonne Waselius

---

**This document defines documentation responsibilities. All team members must keep their assigned documentation up-to-date and synchronized with the codebase.**


# BitNexus Developer Documentation
## Team Responsibilities & Technical Documentation

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Active Development Guide

---

## 👥 Team Responsibilities

### Josef Lindbom - COO & Development Vision Lead

**Contact**: josef@nordicglobalsolutions.com

#### Primary Responsibilities:
- **UX/UI Design**: User experience and interface design
- **User Flow Logic**: Complete user journey mapping and flow logic
- **Overall Platform Logic**: Platform architecture, business logic, and system design
- **Strategic Direction**: Product vision and roadmap
- **Development Strategy**: Technical vision and development oversight

#### Key Documentation:
- **User Flow Logic**: `docs/Product docs/Technical Documentation/USER_FLOW_LOGIC.md`
- **UI Documentation**: `docs/Product docs/Technical Documentation/COMPLETE_UI_DOCUMENTATION.md`
- **Platform Overview**: `docs/Product docs/Technical Documentation/PLATFORM_OVERVIEW.md`

#### Focus Areas:
- User experience optimization
- Interface design consistency
- Navigation and flow logic
- Platform feature planning
- Business logic implementation

---

### Craig Martin - CTO

**Contact**: craig@nordicglobalsolutions.com

#### Primary Responsibilities:
- **Hosting Services**: Infrastructure, deployment, and hosting management
- **Discourse (Forum)**: Forum service setup, configuration, and integration
- **n8n**: Workflow automation platform setup, configuration, and integration
- **Technology Leadership**: Technical architecture and system design
- **Security Oversight**: Security architecture and compliance

#### Key Documentation:
- **Tech Stack**: `docs/TECH_STACK.md`
- **Deployment**: `docs/DEPLOYMENT.md`
- **Backend Services**: `backend/n8n/`, `backend/discourse/`

#### Focus Areas:
- Infrastructure and hosting
- Service integration (Discourse, n8n)
- System architecture
- Security and compliance
- Scalability planning

#### Service Ownership:
- **Discourse Forum**: `backend/discourse/`
  - Configuration files
  - SSO (Single Sign-On) setup
  - Custom themes and branding
  - Integration with main platform

- **n8n Automation**: `backend/n8n/`
  - Workflow configurations
  - Integration with Supabase, Gemini AI, payment gateways
  - Commission calculation workflows
  - Notification workflows
  - Data sync workflows

---

### Jonne Waselius - Backend Developer

**Contact**: Jonne@nordicglobalsolutions.com

#### Primary Responsibilities:
- **Hosting Real-Time**: Real-time data services and WebSocket implementations
- **Authentication**: User authentication, authorization, and session management
- **Backend Development**: API implementation, server-side logic, database integration
- **n8n Integration**: n8n workflow implementation and API integration
- **API Development**: RESTful API design and implementation
- **Ports & Services**: Service ports, endpoints, and API routing
- **Google Sync**: Google services integration and synchronization

#### Key Documentation:
- **Tech Stack**: `docs/TECH_STACK.md`
- **Backend Services**: `backend/netlify/functions/`, `backend/n8n/`
- **API Documentation**: (To be created)

#### Focus Areas:
- Real-time data processing
- Authentication and security
- API design and implementation
- Database integration
- Service integration
- Google services integration

#### Service Ownership:
- **Netlify Functions**: `backend/netlify/functions/`
  - Serverless function development
  - API endpoint implementation
  - Database integration

- **n8n API Integration**: `backend/n8n/`
  - API endpoint creation
  - Workflow API integration
  - Real-time data sync

- **Authentication System**: 
  - User authentication
  - Session management
  - Authorization logic

- **Real-Time Services**:
  - WebSocket implementations
  - Real-time data streaming
  - Live updates

- **Google Services**:
  - Google API integration
  - Google services synchronization
  - Google authentication

---

## 🔄 Synchronization with Domain Documentation

All developer responsibilities are synchronized with:
- **Platform Overview**: `docs/Product docs/Technical Documentation/PLATFORM_OVERVIEW.md`
- **Tech Stack**: `docs/TECH_STACK.md`
- **Project Structure**: `docs/STRUCTURE.md`
- **TODO**: `docs/TODO.md`

---

## 📋 Development Workflow

### When Working on Features:

1. **Josef (UX/UI/Logic)**:
   - Design user flows
   - Create UI mockups
   - Define business logic
   - Update user flow documentation

2. **Craig (Infrastructure/Services)**:
   - Set up hosting infrastructure
   - Configure services (Discourse, n8n)
   - Ensure deployment readiness
   - Update deployment documentation

3. **Jonne (Backend/API)**:
   - Implement backend APIs
   - Set up authentication
   - Integrate services
   - Update API documentation

### Communication:
- **Daily Standups**: Coordinate on current tasks
- **Documentation**: Keep all docs updated
- **Code Reviews**: Review each other's work
- **Issue Tracking**: Use TODO.md for task tracking

---

## 🛠️ Technical Stack by Responsibility

### Josef's Stack:
- React/TypeScript (frontend)
- Tailwind CSS (styling)
- User flow logic
- UI/UX design tools

### Craig's Stack:
- Netlify (hosting)
- Discourse (forum)
- n8n (automation)
- Infrastructure tools

### Jonne's Stack:
- Node.js (backend)
- Supabase (database)
- Netlify Functions (serverless)
- n8n API (automation)
- Google APIs (integration)

---

## 📝 Documentation Requirements

### All Developers Must:
- Update relevant documentation when making changes
- Keep `docs/STRUCTURE.md` accurate
- Update `docs/TODO.md` with progress
- Document new services in `docs/TECH_STACK.md`
- Update deployment docs when infrastructure changes

### Documentation Ownership:
- **Josef**: User flow, UI documentation, platform logic
- **Craig**: Deployment, infrastructure, service setup
- **Jonne**: API documentation, backend services, integration guides

---

## 🚀 Quick Reference

### File Locations:
- **Structure Reference**: `docs/STRUCTURE.md`
- **Tech Stack**: `docs/TECH_STACK.md`
- **Deployment**: `docs/DEPLOYMENT.md`
- **User Flows**: `docs/Product docs/Technical Documentation/USER_FLOW_LOGIC.md`
- **UI Docs**: `docs/Product docs/Technical Documentation/COMPLETE_UI_DOCUMENTATION.md`

### Service Locations:
- **Netlify Functions**: `backend/netlify/functions/`
- **n8n**: `backend/n8n/`
- **Discourse**: `backend/discourse/`
- **Frontend**: `frontend/src/`

---

**Last Updated**: January 2026  
**Maintained By**: BitNexus Development Team


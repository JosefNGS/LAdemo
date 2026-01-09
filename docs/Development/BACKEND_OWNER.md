# Backend Owner - Responsibilities & Task Tracking

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Active Role Documentation

**⚠️ SYNC**: This document is synchronized with `docs/Project Management/TODO.md`. All tasks marked with `[Owner: Backend]` should be tracked here.

**🔴 CRITICAL - BIDIRECTIONAL AUTO-UPDATE REQUIREMENT**:
- ✅ **MANDATORY**: When this document is updated, `docs/Project Management/TODO.md` MUST be automatically updated
- ✅ **MANDATORY**: When TODO.md is updated, this document MUST be automatically updated
- ✅ **MANDATORY**: This is a CRITICAL RULE - NO EXCEPTIONS
- ✅ **MANDATORY**: System MUST auto-update TODO.md when this document is updated
- ❌ **FORBIDDEN**: Making changes to this document without updating TODO.md
- ❌ **FORBIDDEN**: Manual sync only - MUST be automated

**📋 How to Sync**:
1. When completing a task, mark it complete in both this file AND `docs/Project Management/TODO.md`
2. When adding a new task, add it to both files with `[Owner: Backend]`
3. Weekly review: Compare this file with TODO.md to ensure synchronization
4. This file focuses on Backend-specific tasks; TODO.md contains all project tasks
5. **CRITICAL**: All changes to this file MUST trigger automatic updates to TODO.md

---

## ⚙️ Role & Responsibilities

### Primary Responsibilities:
- **Backend Development**: API development, server-side logic, and backend architecture
- **API Design**: RESTful API design, GraphQL (if applicable), and API documentation
- **Database Integration**: Database queries, migrations, and data modeling
- **Authentication & Authorization**: Backend authentication logic, JWT handling, and session management
- **Business Logic**: Server-side business rules and validation
- **Service Integration**: Integration with external services (n8n, Discourse, PostgreSQL, etc.)
- **Real-Time Features**: WebSocket implementations, real-time data streaming
- **Backend Testing**: API testing, integration testing, and backend unit tests
- **Performance Optimization**: Backend performance, query optimization, and caching

### Key Documentation to Maintain:
- `backend/README.md`
- `backend/CHANGELOG.md`
- `docs/Services/elixir/` (Elixir services)
- `docs/Services/phoenix/` (Phoenix framework)
- `docs/Services/golang-api/` (Golang API)
- `docs/Services/postgresql/` (PostgreSQL database)
- `rules/backend/rules.md`

### Service Ownership:
- **Backend Services**: `backend/`
  - Netlify Functions: `backend/netlify/`
  - n8n Integration: `backend/n8n/`
  - Discourse Integration: `backend/discourse/`
  - Elixir Services: (when implemented)
  - Phoenix Framework: (when implemented)
  - Golang API: (when implemented)

---

## 📋 Current Tasks (Synced with TODO.md)

### ✅ Completed Tasks

**⚠️ VERIFICATION REQUIRED**: All tasks below marked as completed must be verified before being considered fully complete.

#### Backend Infrastructure
- [ ] **VERIFY**: Netlify Functions setup (needs verification)
- [ ] **VERIFY**: API endpoint structure (needs verification)
- [ ] **VERIFY**: Database connection setup (needs verification)
- [ ] **VERIFY**: Authentication backend logic (needs verification)

#### API Development
- [ ] **VERIFY**: RESTful API endpoints (needs verification)
- [ ] **VERIFY**: API documentation (needs verification)
- [ ] **VERIFY**: Error handling and validation (needs verification)
- [ ] **VERIFY**: Rate limiting and security (needs verification)

---

### 🔄 In Progress

**Synced from TODO.md** - See `docs/Project Management/TODO.md` for all tasks marked with `[Owner: Backend]`.

**Backend-Specific In Progress Tasks**:
- [ ] Review all `[Owner: Backend]` tasks in TODO.md
- [ ] Implement Elixir/Phoenix backend services
- [ ] Set up PostgreSQL with vector extensions
- [ ] Implement multi-tenant authentication system

---

### 📝 Pending Tasks

**High Priority**:
- [ ] All tasks in TODO.md marked with `[Owner: Backend]` must be reviewed and tracked here
- [ ] Implement authentication backend (Elixir/Phoenix)
- [ ] Set up PostgreSQL database with vector search
- [ ] Create API documentation and OpenAPI specs
- [ ] Implement backend testing framework

**Medium Priority**:
- [ ] Document backend architecture patterns
- [ ] Create API usage guidelines
- [ ] Establish backend code review process
- [ ] Set up backend CI/CD pipeline
- [ ] Implement caching strategies

**Low Priority**:
- [ ] Backend performance monitoring
- [ ] Backend error tracking and logging
- [ ] Backend analytics integration
- [ ] API rate limiting and throttling

---

## 🔗 Related Documentation

- **Backend Rules**: `rules/backend/rules.md`
- **Elixir Services**: `docs/Services/elixir/`
- **Phoenix Framework**: `docs/Services/phoenix/`
- **PostgreSQL**: `docs/Services/postgresql/`
- **Tech Stack**: `docs/Core Documentation/TECH_STACK.md`
- **Project Structure**: `docs/Core Documentation/STRUCTURE.md`
- **Security Planning**: `docs/Project Management/SECURITY_PLANNING.md`

---

## 📝 Notes

- All backend tasks should be marked with `[Owner: Backend]` in TODO.md
- Backend owner is responsible for coordinating with Jonne (Backend Developer), Craig (CTO), and Security owner
- Backend changes must be tested and documented
- All backend code must follow security best practices and be reviewed by Security owner
- Authentication logic is split between Phoenix (HTTP layer) and Elixir (business logic) - see `docs/Services/phoenix/CAPABILITIES.md` and `docs/Services/elixir/CAPABILITIES.md`

---

**Last Updated**: January 2026  
**Next Review**: Weekly sync with TODO.md

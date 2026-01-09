# BitNexus Academy – Planning & Roadmap

**Last Updated**: January 2026  
**Status**: Draft – Planning in progress  

**Primary Owners**:  
- Learning Design & UX: [Owner: Josef]  
- Backend & Data: [Owner: Jonne]  
- Architecture & Security: [Owner: Craig]  

---

## 1. Vision & Scope

- **Goal**: Build BitNexus Academy as a structured, multi-tenant learning platform for affiliates, vendors, and partners to master the product, sales, compliance, and tech stack.
- **Scope (v1)**:
  - Course → Module → Lesson structure
  - Video/text content, quizzes, and basic progress tracking
  - Tenant-aware catalogs (different academies per partner / enterprise)
  - Integration hooks for Content Generator (summaries, quizzes) and n8n (reminders, drip sequences)

---

## 2. Phasing Overview

1. **Phase 0 – Information Architecture & UX**
   - Define hierarchy (course/module/lesson/quiz)
   - Map existing docs/content to Academy structure
2. **Phase 1 – Core Learning Model & Read-Only UI**
   - Basic course listing, enrollment, and lesson viewing
3. **Phase 2 – Progress Tracking & Quizzes**
   - Track completion, quiz results, and certificates (basic)
4. **Phase 3 – Multi-Tenant Academies**
   - Tenant-specific catalogs, roles, and permissions
5. **Phase 4 – Automation & Outreach**
   - n8n-powered reminders, drip campaigns, and progress emails
6. **Phase 5 – Analytics & Certification**
   - Learning analytics, completion stats, badges, and printable certificates

---

## 3. Domain Model & Data Design (PostgreSQL)

**Owner**: [Owner: Jonne], review by [Owner: Craig]  

### 3.1 Core Entities
- `academy_courses`
- `academy_modules`
- `academy_lessons`
- `academy_quizzes`
- `academy_quiz_questions`
- `academy_quiz_answers`
- `academy_enrollments`
- `academy_progress`

### 3.2 Multi-Tenant Fields
- Every Academy object MUST include:
  - `tenant_id`
  - `created_by_user_id`
  - `visibility` (e.g. `public`, `tenant`, `private`)

### 3.3 Relationships (high level)
- Course has many modules  
- Module has many lessons and optional quizzes  
- User has many enrollments; each enrollment has progress records  

---

## 4. Backend Services & Responsibilities

**Owners**:  
- Phoenix HTTP/API: [Owner: Backend]  
- Elixir services (business logic): [Owner: Backend]  

### 4.1 Phoenix (Academy API)
- Endpoints for:
  - Listing courses and modules by tenant
  - Getting lessons and quiz data
  - Submitting quiz attempts
  - Recording lesson completion

### 4.2 Elixir Services
- **AcademyService** responsibilities:
  - Enrollment rules (who can access what)
  - Completion logic (when a course counts as completed)
  - Quiz grading and pass/fail thresholds
  - Enforcing tenant and role permissions

---

## 5. Frontend & UX Plan (React)

**Owner**: [Owner: Josef]  

### 5.1 Key Views
- **Academy Home**
  - Featured courses, “Continue learning”, search and filters
- **Course Detail**
  - Syllabus, level, estimated time, prerequisites
  - Enrollment / “Continue” button
- **Lesson View**
  - Video/text/interactive content
  - “Mark as complete” or auto-complete on view
  - Linked quizzes and resources
- **Progress View**
  - User’s progress across courses
  - Completion badges and certificates (later)

### 5.2 Multi-Tenant UX
- Tenant-specific Academy branding:
  - Logo, color scheme, default catalog
- Role-based visibility:
  - Partner-only tracks
  - Internal-only trainings

---

## 6. Roles, Permissions & Auth

Tie into **Multi-Tenant System & User Roles** and **Authentication & Security (Multi-Tenant)**:

- Roles:
  - **Super Admin**: See all academies, manage curriculum at global level
  - **Tenant Admin**: Manage tenant-specific courses, instructors
  - **Instructor** (future): Manage content, create quizzes
  - **Member/User**: Consume content, take quizzes

Permissions enforced in Elixir service; Phoenix only exposes allowed data.

---

## 7. Integrations

### 7.1 Content Generator
- Generate:
  - Lesson summaries
  - Quiz questions and explanations
  - Study plans per course/module

### 7.2 n8n (Automation)
- Workflows for:
  - Reminder emails/messages for incomplete courses
  - Drip schedules (e.g. lesson per day)
  - “Re-engagement” sequences for inactive learners

### 7.3 Marketplace & Alliance
- Use Academy to:
  - Onboard partners (Alliance Arena) with dedicated learning paths
  - Educate affiliates about specific Marketplace products

---

## 8. Phased Task Breakdown (to sync into TODO.md)

> **Note**: Planning only – atomic tasks must be mirrored into `docs/Project Management/TODO.md` with `[Owner: …]`.

### Phase 0 – Design & IA
- [ ] Define full Academy IA (course/module/lesson/quiz) [Owner: Josef]
- [ ] Map existing docs to potential Academy content [Owner: Team]

### Phase 1 – Core Read-Only Academy
- [ ] Design PostgreSQL schema for core Academy tables [Owner: Jonne]
- [ ] Implement read-only Phoenix endpoints for course/module/lesson [Owner: Backend]
- [ ] Implement Academy UI (home, course detail, lesson) [Owner: Frontend]

### Phase 2 – Progress & Quizzes
- [ ] Add enrollment and progress tracking schema [Owner: Jonne]
- [ ] Implement quiz model and grading logic [Owner: Backend]
- [ ] Add quiz UI and progress indicators [Owner: Frontend]

### Phase 3 – Multi-Tenant Academies
- [ ] Add tenant_id and visibility to all Academy tables [Owner: Jonne]
- [ ] Enforce tenant isolation in AcademyService [Owner: Backend]
- [ ] Tenant-level Academy branding in UI [Owner: Josef]

### Phase 4 – Automation & Outreach
- [ ] Define n8n workflows for reminders and drips [Owner: Craig]
- [ ] Add webhook or polling endpoints for n8n [Owner: Backend]

---

## 9. Open Questions

- [ ] Minimal viable feature set for “Investor Ready” Academy demo? [Owner: Team]  
- [ ] How strict should prerequisites and certification be in early versions? [Owner: Craig]  
- [ ] Do we need SCORM/xAPI compatibility or stay simple initially? [Owner: Team]  


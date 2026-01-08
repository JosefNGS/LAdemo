# Admin View & Task Management Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/admin/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Code standards, security, deployment, best practices
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Workflow guidelines, structure, agent usage

**Framework References**:
- `instructions/.agent-os/standards/` - Code standards and best practices
- `instructions/.agent-os/standards/security-rules/` - Security guidelines
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Workflow guidelines
- `instructions/BMAD-METHOD/docs/explanation/` - Framework concepts

## Critical Rules

### Admin View UI and Database Synchronization
- **MANDATORY**: Admin View UI and database MUST always be synchronized
- **Auto-sync service** runs every 30 seconds when AdminView is active
- **Force sync** on tab switch to tasks tab
- **Sync on task file load** in TaskChecklistView
- **UI reflects database state** in real-time

### Task Markdown Files Auto-Sync
- **MANDATORY**: Task markdown files MUST automatically sync with database
- **Task File Locations**:
  - `docs/Development/JOSEF_TASKS.md`
  - `docs/Development/CRAIG_TASKS.md`
  - `docs/Development/JONNE_TASKS.md`
  - `docs/Development/SVEIN_TASKS.md`
  - `docs/Development/LEE_TASKS.md`
  - `docs/Development/CORY_TASKS.md`

### UI Alignment Rules
- **Button alignment**: All team member buttons must be aligned and consistent
- **Card layout**: All cards use flexbox with `flex flex-col h-full` for proper alignment
- **Button positioning**: All "View Task Checklist" buttons use `mt-auto` to align at bottom

### Implementation
- `taskSyncService.ts` handles automatic synchronization
- `autoSyncService` singleton manages periodic sync
- Changes in markdown files are detected and synced to database
- Verification status and completion metadata are preserved during sync

## CRITICAL Rules

- ✅ **Auto-sync runs every 30 seconds** when AdminView is active
- ✅ **Force sync on tab switch** to tasks tab
- ✅ **Sync on task file load** in TaskChecklistView
- ✅ **Database updates automatically** when markdown files change
- ✅ **UI reflects database state** in real-time
- ✅ **Button alignment** - All buttons must be aligned and consistent
- ❌ **Never skip auto-sync** - It's mandatory
- ❌ **Never modify database directly** - Use markdown files as source of truth

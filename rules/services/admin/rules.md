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

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### 🔴 MANDATORY: Admin View UI and Database MUST Always Be Synchronized

**CRITICAL RULE**: The Admin View UI and database MUST always be updated and aligned with user tasks. This is a **MANDATORY REQUIREMENT** with **NO EXCEPTIONS**.

### 🔴 MANDATORY: Task Markdown Files MUST Auto-Sync with Database

**CRITICAL RULE**: Task markdown files in `docs/Development/` MUST automatically sync with the database. When markdown files change, the database MUST be automatically updated. This is a **MANDATORY REQUIREMENT** with **NO EXCEPTIONS**.

**Task File Locations** (MUST be kept synchronized):
- `docs/Development/JOSEF_TASKS.md`
- `docs/Development/CRAIG_TASKS.md`
- `docs/Development/JONNE_TASKS.md`
- `docs/Development/SVEIN_TASKS.md`
- `docs/Development/LEE_TASKS.md`
- `docs/Development/CORY_TASKS.md`

**Auto-Sync Requirements**:
- ✅ **Auto-sync service runs every 30 seconds** when AdminView is active
- ✅ **Force sync on tab switch** to tasks tab
- ✅ **Sync on task file load** in TaskChecklistView
- ✅ **Database updates automatically** when markdown files change
- ✅ **UI reflects database state** in real-time
- ✅ **Button alignment** - All team member buttons must be aligned and consistent
- ✅ **Card layout** - All cards use flexbox with `flex flex-col h-full` for proper alignment
- ✅ **Button positioning** - All "View Task Checklist" buttons use `mt-auto` to align at bottom

**Implementation**:
- `taskSyncService.ts` handles automatic synchronization
- `autoSyncService` singleton manages periodic sync
- Changes in markdown files are detected and synced to database
- Verification status and completion metadata are preserved during sync

## Core Synchronization Requirements

### 1. Real-Time Data Synchronization

**MANDATORY RULES**:
- ✅ **Admin View UI MUST reflect the current state of user tasks in the database**
- ✅ **All task changes (completion, verification, updates) MUST be immediately reflected in Admin View**
- ✅ **Database changes MUST trigger UI updates automatically**
- ✅ **UI changes MUST be immediately persisted to the database**
- ✅ **NO manual refresh required** - System must auto-sync

**Implementation Requirements**:
- Use **real-time subscriptions** (Supabase Realtime) when Supabase is available
- Implement **automatic polling** (every 5-10 seconds) as fallback
- Use **event-driven updates** for immediate UI refresh after database operations
- Implement **optimistic UI updates** with rollback on failure

### 2. Data Consistency Rules

**MANDATORY RULES**:
- ✅ **Single Source of Truth**: Database (Supabase) is the authoritative source
- ✅ **UI MUST always match database state** - No stale data allowed
- ✅ **Conflict Resolution**: Database state takes precedence over UI state
- ✅ **Data Validation**: All task operations must validate against database schema
- ✅ **Transaction Integrity**: Task updates must be atomic (all-or-nothing)

### 3. Update Triggers and Refresh Mechanisms

**MANDATORY RULES**:
- ✅ **Auto-refresh on component mount** - Load latest data from database
- ✅ **Auto-refresh after task operations** - Reload data after create/update/delete
- ✅ **Auto-refresh on tab switch** - Reload when switching to Tasks tab
- ✅ **Auto-refresh on window focus** - Reload when browser window regains focus
- ✅ **Manual refresh button** - Always available for user-initiated refresh
- ✅ **Real-time updates** - Use Supabase Realtime subscriptions when available

### 4. Error Handling and Recovery

**MANDATORY RULES**:
- ✅ **Graceful Degradation**: Fallback to localStorage if Supabase unavailable
- ✅ **Error Notifications**: Display user-friendly error messages
- ✅ **Retry Logic**: Automatic retry on network failures (3 attempts)
- ✅ **Data Recovery**: Restore from localStorage if database sync fails
- ✅ **Conflict Resolution**: Handle concurrent updates gracefully
- ✅ **Logging**: Log all errors for debugging and monitoring

### 5. Task Service Integration

**MANDATORY RULES**:
- ✅ **All task operations MUST go through `taskService.ts`**
- ✅ **NO direct database access** from components
- ✅ **NO direct localStorage access** from components
- ✅ **Centralized task management** - Single service for all task operations
- ✅ **Consistent API** - Same interface for Supabase and localStorage

### 6. LocalStorage Fallback Rules

**MANDATORY RULES**:
- ✅ **LocalStorage MUST be used when Supabase unavailable**
- ✅ **LocalStorage data MUST sync to Supabase when connection restored**
- ✅ **LocalStorage keys MUST follow naming convention**: `bitnexus_tasks_{teamMember}`
- ✅ **LocalStorage data MUST be validated** before use
- ✅ **LocalStorage MUST be cleared** after successful Supabase sync

## CRITICAL Violations

**These actions are STRICTLY FORBIDDEN**:
- ❌ **CRITICAL**: Direct database access from components (bypass taskService)
- ❌ **CRITICAL**: Direct localStorage access from components (bypass taskService)
- ❌ **CRITICAL**: Stale data in UI (not refreshing from database)
- ❌ **CRITICAL**: UI state not matching database state
- ❌ **CRITICAL**: No error handling for sync failures
- ❌ **CRITICAL**: No fallback mechanism when Supabase unavailable
- ❌ **CRITICAL**: Manual refresh required for data updates
- ❌ **CRITICAL**: No real-time or polling updates
- ❌ **CRITICAL**: Task operations not going through taskService
- ❌ **CRITICAL**: No data consistency checks

## Related Documentation

- **Task Service**: `frontend/src/services/taskService.ts`
- **Admin View Component**: `frontend/src/pages/AdminView.tsx`
- **Task Checklist Component**: `frontend/src/components/TeamTaskChecklist.tsx`
- **Supabase Service**: `frontend/src/services/supabaseService.ts`
- **Complete Rules**: `docs/Services/admin/SERVICE_RULES.md`

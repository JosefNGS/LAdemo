# Admin View & Task Management Service Rules
## Critical Rules for Admin View UI and Database Synchronization

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules (Active)

**Service Owner**: Josef Lindbom (COO & Development Vision Lead)  
**Contact**: josef@nordicglobalsolutions.com

**Technical Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### 🔴 MANDATORY: Admin View UI and Database MUST Always Be Synchronized

**CRITICAL RULE**: The Admin View bot UI and database MUST always be updated and aligned with user tasks. This is a **MANDATORY REQUIREMENT** with **NO EXCEPTIONS**.

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

---

## 📋 Core Synchronization Requirements

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

**Consistency Checks**:
- Verify UI state matches database state on component mount
- Verify UI state matches database state after every operation
- Log inconsistencies for debugging and alerting
- Auto-correct UI state if database mismatch detected

### 3. Update Triggers and Refresh Mechanisms

**MANDATORY RULES**:
- ✅ **Auto-refresh on component mount** - Load latest data from database
- ✅ **Auto-refresh after task operations** - Reload data after create/update/delete
- ✅ **Auto-refresh on tab switch** - Reload when switching to Tasks tab
- ✅ **Auto-refresh on window focus** - Reload when browser window regains focus
- ✅ **Manual refresh button** - Always available for user-initiated refresh
- ✅ **Real-time updates** - Use Supabase Realtime subscriptions when available

**Refresh Triggers**:
1. **Component Mount**: `useEffect` hook on AdminView mount
2. **Task Operations**: After `toggleTask()`, `toggleVerification()`, `saveTask()`
3. **Tab Switch**: When switching to 'tasks' tab in AdminView
4. **Window Focus**: `window.addEventListener('focus')` event
5. **Polling Interval**: Every 5-10 seconds (configurable)
6. **Real-time Events**: Supabase Realtime subscription events
7. **Manual Refresh**: User clicks "Refresh" button

### 4. Error Handling and Recovery

**MANDATORY RULES**:
- ✅ **Graceful Degradation**: Fallback to localStorage if Supabase unavailable
- ✅ **Error Notifications**: Display user-friendly error messages
- ✅ **Retry Logic**: Automatic retry on network failures (3 attempts)
- ✅ **Data Recovery**: Restore from localStorage if database sync fails
- ✅ **Conflict Resolution**: Handle concurrent updates gracefully
- ✅ **Logging**: Log all errors for debugging and monitoring

**Error Handling Flow**:
1. **Try Supabase first** - Primary data source
2. **Fallback to localStorage** - If Supabase fails
3. **Show error notification** - Inform user of sync issues
4. **Retry automatically** - Attempt to reconnect/sync
5. **Log error details** - For debugging and monitoring

### 5. Task Service Integration

**MANDATORY RULES**:
- ✅ **All task operations MUST go through `taskService.ts`**
- ✅ **NO direct database access** from components
- ✅ **NO direct localStorage access** from components
- ✅ **Centralized task management** - Single service for all task operations
- ✅ **Consistent API** - Same interface for Supabase and localStorage

**Task Service Requirements**:
- `loadTasks()` - Load tasks from database/localStorage
- `saveTask()` - Save task to database/localStorage
- `toggleTask()` - Toggle task completion status
- `toggleVerification()` - Toggle task verification status
- `getTaskStatus()` - Get current task status

### 6. Admin View Component Requirements

**MANDATORY RULES**:
- ✅ **AdminView MUST load tasks on mount**
- ✅ **AdminView MUST refresh tasks when switching to Tasks tab**
- ✅ **AdminView MUST display real-time task status**
- ✅ **AdminView MUST show loading states during data fetch**
- ✅ **AdminView MUST show error states if sync fails**
- ✅ **AdminView MUST provide manual refresh option**

**Component Lifecycle**:
1. **Mount**: Load all team member tasks
2. **Tab Switch**: Reload tasks when switching to Tasks tab
3. **Task Update**: Refresh affected task after update
4. **Window Focus**: Reload tasks when window regains focus
5. **Polling**: Periodic refresh every 5-10 seconds

### 7. Database Schema Requirements

**MANDATORY RULES**:
- ✅ **`team_tasks` table MUST exist in Supabase**
- ✅ **Schema MUST match Task interface** in `taskService.ts`
- ✅ **Indexes MUST be created** for performance (team_member, task_key)
- ✅ **Timestamps MUST be tracked** (created_at, updated_at)
- ✅ **Foreign keys MUST be enforced** if applicable

**Required Database Fields**:
- `id` (UUID, Primary Key)
- `team_member` (String, Indexed)
- `task_key` (String, Indexed)
- `completed` (Boolean, Default: false)
- `verified` (Boolean, Default: false)
- `verified_by` (String, Nullable)
- `verified_at` (Timestamp, Nullable)
- `completed_by` (String, Nullable)
- `completed_at` (Timestamp, Nullable)
- `notes` (Text, Nullable)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### 8. LocalStorage Fallback Rules

**MANDATORY RULES**:
- ✅ **LocalStorage MUST be used when Supabase unavailable**
- ✅ **LocalStorage data MUST sync to Supabase when connection restored**
- ✅ **LocalStorage keys MUST follow naming convention**: `bitnexus_tasks_{teamMember}`
- ✅ **LocalStorage data MUST be validated** before use
- ✅ **LocalStorage MUST be cleared** after successful Supabase sync

**Fallback Behavior**:
1. **Try Supabase first** - Primary data source
2. **If Supabase fails** - Use localStorage
3. **When Supabase available** - Sync localStorage to Supabase
4. **After sync** - Clear localStorage for that team member
5. **Continue using Supabase** - Primary source going forward

---

## 🔄 Synchronization Flow Diagram

```
User Action (Task Update)
    ↓
Component calls taskService.toggleTask()
    ↓
taskService.saveTask() → Try Supabase
    ↓
    ├─ Success → Update UI immediately
    │   ↓
    │   Trigger real-time update event
    │   ↓
    │   AdminView refreshes affected task
    │
    └─ Failure → Fallback to localStorage
        ↓
        Save to localStorage
        ↓
        Show error notification
        ↓
        Retry Supabase sync (background)
        ↓
        When successful → Sync localStorage to Supabase
```

---

## 📋 Implementation Checklist

### Before Deploying Admin View Changes:
- [ ] Real-time subscriptions configured (Supabase Realtime)
- [ ] Polling fallback implemented (5-10 second interval)
- [ ] Auto-refresh on component mount working
- [ ] Auto-refresh on tab switch working
- [ ] Auto-refresh on window focus working
- [ ] Manual refresh button functional
- [ ] Error handling and notifications implemented
- [ ] LocalStorage fallback working
- [ ] Data consistency checks implemented
- [ ] Task service integration complete
- [ ] Database schema matches Task interface
- [ ] All task operations go through taskService
- [ ] Loading states displayed during fetch
- [ ] Error states displayed on failure
- [ ] Optimistic UI updates with rollback
- [ ] Conflict resolution implemented

### Testing Requirements:
- [ ] Test with Supabase connected
- [ ] Test with Supabase disconnected (localStorage fallback)
- [ ] Test concurrent updates (multiple users)
- [ ] Test network failures and recovery
- [ ] Test data consistency after operations
- [ ] Test real-time updates (if Supabase Realtime enabled)
- [ ] Test polling fallback mechanism
- [ ] Test manual refresh functionality
- [ ] Test error notifications
- [ ] Test localStorage sync to Supabase

---

## 🚨 Critical Violations

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

---

## 🔧 Code Examples

### AdminView Component - Auto-Refresh on Mount and Tab Switch

```typescript
useEffect(() => {
  if (activeTab === 'tasks' && isAuthenticated) {
    loadAllTeamTasks();
  }
}, [activeTab, isAuthenticated]);

useEffect(() => {
  const handleFocus = () => {
    if (activeTab === 'tasks' && isAuthenticated) {
      loadAllTeamTasks();
    }
  };
  
  window.addEventListener('focus', handleFocus);
  return () => window.removeEventListener('focus', handleFocus);
}, [activeTab, isAuthenticated]);
```

### Task Service - Real-time Sync with Fallback

```typescript
export const saveTask = async (task: Task): Promise<boolean> => {
  try {
    // Try Supabase first
    if (isSupabaseInitialized()) {
      const supabase = getSupabaseClient();
      // ... save to Supabase ...
      
      // Trigger UI update event
      window.dispatchEvent(new CustomEvent('task-updated', { detail: task }));
      return true;
    }
  } catch (error) {
    console.warn('Supabase save failed, falling back to localStorage:', error);
  }
  
  // Fallback to localStorage
  // ... save to localStorage ...
  
  // Trigger UI update event
  window.dispatchEvent(new CustomEvent('task-updated', { detail: task }));
  return true;
};
```

### AdminView - Listen for Task Update Events

```typescript
useEffect(() => {
  const handleTaskUpdate = (event: CustomEvent) => {
    const updatedTask = event.detail;
    // Refresh affected task in UI
    refreshTask(updatedTask);
  };
  
  window.addEventListener('task-updated', handleTaskUpdate as EventListener);
  return () => window.removeEventListener('task-updated', handleTaskUpdate as EventListener);
}, []);
```

---

## 📊 Monitoring and Alerts

**MANDATORY RULES**:
- ✅ **Log all sync operations** - Success and failure
- ✅ **Monitor sync latency** - Alert if sync takes > 2 seconds
- ✅ **Monitor error rates** - Alert if error rate > 5%
- ✅ **Monitor data consistency** - Alert on UI/database mismatches
- ✅ **Track fallback usage** - Monitor localStorage fallback frequency

**Metrics to Track**:
- Sync success rate
- Sync latency (p50, p95, p99)
- Error rate
- Fallback usage frequency
- Data consistency violations
- Real-time update delivery time

---

## 🔗 Related Documentation

- **Task Service**: `frontend/src/services/taskService.ts`
- **Admin View Component**: `frontend/src/pages/AdminView.tsx`
- **Task Checklist Component**: `frontend/src/components/TeamTaskChecklist.tsx`
- **Supabase Service**: `frontend/src/services/supabaseService.ts`
- **Supabase Setup**: `docs/Services/supabase/SUPABASE_SETUP.md`
- **Database Schema**: `docs/Services/supabase/supabase-migration.sql`

---

## 📝 Change Log

### Version 1.0 - January 2026
- Initial critical rules for Admin View and task synchronization
- Real-time sync requirements
- Fallback mechanisms
- Error handling rules
- Data consistency requirements

---

**These rules are CRITICAL and must be followed for all Admin View and task management work. Violations of these rules will result in data inconsistency and user experience degradation.**


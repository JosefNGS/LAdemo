# Admin View & Task Management Implementation Guide
## Complete Implementation Guide

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Implementation Documentation

**Service Owner**: Josef Lindbom (COO & Development Vision Lead)  
**Contact**: josef@nordicglobalsolutions.com

---

## Overview

This guide provides a complete implementation reference for Admin View & Task Management service, including components, services, and integration patterns.

---

## Implementation Components

### 1. AdminView Component

**File**: `frontend/src/pages/AdminView.tsx`

**Responsibilities**:
- Main admin interface
- Team member card display
- Tab navigation
- Auto-sync service management

**Key Features**:
- Team member cards with status indicators
- "View Task Checklist" buttons
- Auto-sync on mount/unmount
- Force sync on tab switch

### 2. TaskChecklistView Component

**File**: `frontend/src/pages/TaskChecklistView.tsx`

**Responsibilities**:
- Display task checklist for selected team member
- Load tasks from database
- Handle task completion/verification
- Show error messages

**Key Features**:
- Task list display
- Completion status indicators
- Verification workflow
- Source file display

### 3. TaskFileService

**File**: `frontend/src/services/taskFileService.ts`

**Responsibilities**:
- Load markdown task files
- Parse markdown to extract tasks
- Generate task keys
- Extract task metadata

**Key Functions**:
- `loadTaskFile(teamMemberId)` - Load and parse markdown file
- `parseTaskFile(content, teamMemberId)` - Parse markdown content
- `getTaskFileName(teamMemberId)` - Map team member to file name

### 4. TaskSyncService

**File**: `frontend/src/services/taskSyncService.ts`

**Responsibilities**:
- Synchronize markdown files with database
- Compare tasks and update database
- Preserve completion/verification status
- Handle sync errors

**Key Functions**:
- `syncTasksFromMarkdown(teamMemberId)` - Sync single team member
- `syncAllTasksFromMarkdown()` - Sync all team members
- `AutoSyncService` - Periodic synchronization

---

## Implementation Patterns

### Auto-Sync Pattern

```typescript
// Start auto-sync when AdminView mounts
useEffect(() => {
  AutoSyncService.start();
  return () => {
    AutoSyncService.stop();
  };
}, []);

// Force sync on tab switch
useEffect(() => {
  if (activeTab === 'tasks') {
    AutoSyncService.forceSync();
  }
}, [activeTab]);
```

### Task Loading Pattern

```typescript
// Load tasks with sync
useEffect(() => {
  const loadTasks = async () => {
    // Sync markdown to database first
    await syncTasksFromMarkdown(teamMember);
    // Then load from database
    const tasks = await loadTasks(teamMember);
    setTasks(tasks);
  };
  loadTasks();
}, [teamMember]);
```

---

## Database Schema

### team_tasks Table

```sql
CREATE TABLE team_tasks (
  id UUID PRIMARY KEY,
  team_member TEXT NOT NULL,
  task_key TEXT NOT NULL,
  label TEXT NOT NULL,
  category TEXT,
  completed BOOLEAN DEFAULT FALSE,
  verified BOOLEAN DEFAULT FALSE,
  completed_by TEXT,
  verified_by TEXT,
  completed_at TIMESTAMP,
  verified_at TIMESTAMP,
  requires_verification BOOLEAN DEFAULT FALSE,
  UNIQUE(team_member, task_key)
);
```

---

## Markdown File Format

### Task File Structure

```markdown
# Team Member Name - Task Tracking

## Category Name
- [ ] Task label
- [x] Completed task
- [ ] **VERIFY**: Task requiring verification
```

### Parsing Rules

- Category headers: `## Category Name` or `#### Category Name`
- Task items: `- [ ]` or `- [x]`
- Verification prefix: `**VERIFY**:` in task label
- Nested items: Skipped (only top-level tasks parsed)

---

## Error Handling

### File Loading Errors

- Display error message in UI
- Log error to console
- Fallback to empty task list
- Show expected file path in error

### Sync Errors

- Log errors but don't block UI
- Continue with existing database data
- Retry sync on next cycle
- Graceful degradation

---

## Performance Considerations

### Auto-Sync Frequency

- **Default**: Every 30 seconds
- **On Tab Switch**: Force sync immediately
- **On File Load**: Sync before loading

### Optimization

- Cache parsed markdown content
- Batch database updates
- Debounce rapid changes
- Lazy load task details

---

**This guide provides implementation reference. For architecture details, see ARCHITECTURE.md.**

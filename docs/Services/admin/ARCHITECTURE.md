# Admin View & Task Management Architecture
## System Architecture for Admin Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Josef Lindbom (COO & Development Vision Lead)  
**Contact**: josef@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for Admin View & Task Management service, including UI components, database synchronization, and task file management.

---

## System Architecture

### Component Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Admin View & Task Management                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         UI Layer (React Components)                │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ AdminView    │  │ TaskChecklist │             │   │
│  │  │ • Team cards │  │ • Task list  │             │   │
│  │  │ • Tabs       │  │ • Status     │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Service Layer                             │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ TaskFile     │  │ TaskSync     │             │   │
│  │  │ Service      │  │ Service      │             │   │
│  │  │ • Load files │  │ • Auto-sync │             │   │
│  │  │ • Parse MD   │  │ • DB update │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Data Layer                                 │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ PostgreSQL   │  │ Markdown     │             │   │
│  │  │ • Task data  │  │ • Task files │             │   │
│  │  │ • Status     │  │ • Definitions│             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Data Flow

### Task Loading Flow

```
1. User opens AdminView
   │
   ▼
2. AdminView loads team member list
   │
   ▼
3. User clicks "View Task Checklist"
   │
   ▼
4. TaskChecklistView calls taskSyncService
   │
   ▼
5. TaskSyncService syncs markdown → database
   │
   ▼
6. TaskFileService loads markdown file
   │
   ▼
7. Parse markdown to extract tasks
   │
   ▼
8. Display tasks in UI
```

### Auto-Sync Flow

```
1. AutoSyncService starts (every 30 seconds)
   │
   ▼
2. For each team member:
   │
   ▼
3. Load markdown file
   │
   ▼
4. Compare with database tasks
   │
   ▼
5. Add new tasks to database
   │
   ▼
6. Update existing tasks
   │
   ▼
7. Remove deleted tasks
   │
   ▼
8. Preserve completion/verification status
```

---

## Component Responsibilities

### AdminView Component
- **Purpose**: Main admin interface
- **Responsibilities**:
  - Display team member cards
  - Handle tab navigation
  - Manage selected team member state
  - Start/stop auto-sync service

### TaskChecklistView Component
- **Purpose**: Display task checklist for selected team member
- **Responsibilities**:
  - Load tasks from database
  - Display task list with status
  - Handle task completion/verification
  - Show error messages

### TaskFileService
- **Purpose**: Load and parse markdown task files
- **Responsibilities**:
  - Fetch markdown files from `/docs/Development/`
  - Parse markdown to extract tasks
  - Generate task keys
  - Extract task metadata

### TaskSyncService
- **Purpose**: Synchronize markdown files with database
- **Responsibilities**:
  - Compare markdown tasks with database
  - Add/update/remove tasks
  - Preserve user-made changes
  - Handle sync errors

---

## Integration Points

### PostgreSQL Integration
- **Task Storage**: All task data stored in PostgreSQL
- **Status Persistence**: Completion and verification status preserved
- **Real-Time Updates**: Database changes reflect in UI

### Markdown File Integration
- **Source of Truth**: Markdown files define task structure
- **Auto-Detection**: Changes detected and synced automatically
- **File Location**: `docs/Development/*_TASKS.md`

---

**This architecture focuses on Admin View & Task Management. For related services, see individual service documentation.**

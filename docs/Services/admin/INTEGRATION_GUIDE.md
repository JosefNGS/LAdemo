# Admin View & Task Management Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Josef Lindbom (COO & Development Vision Lead)  
**Contact**: josef@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Admin View & Task Management service into the existing BitNexus system.

---

## Integration Strategy

### Current Integration

**Admin View is already integrated**:
- ✅ React component in `frontend/src/pages/AdminView.tsx`
- ✅ Task checklist component in `frontend/src/components/TeamTaskChecklist.tsx`
- ✅ Task file service in `frontend/src/services/taskFileService.ts`
- ✅ Task sync service in `frontend/src/services/taskSyncService.ts`
- ✅ PostgreSQL integration via `postgresqlService.ts`

---

## Frontend Integration

### AdminView Component

**File**: `frontend/src/pages/AdminView.tsx`

**Integration Points**:
- Uses `AutoSyncService` for automatic synchronization
- Calls `taskSyncService` on tab switch
- Displays team member cards with task status
- Routes to TaskChecklistView on button click

### TaskChecklistView Component

**File**: `frontend/src/pages/TaskChecklistView.tsx`

**Integration Points**:
- Loads tasks from database via `taskService`
- Syncs markdown files before loading
- Displays task list with completion status
- Handles task verification workflow

---

## Database Integration

### PostgreSQL Schema

**Required Tables**:
- `team_tasks` - Task data with completion/verification status
- Columns: `id`, `team_member`, `task_key`, `label`, `category`, `completed`, `verified`, etc.

**Integration**:
- Task data stored in PostgreSQL
- Status preserved during markdown sync
- Real-time updates reflect in UI

---

## Markdown File Integration

### Task File Locations

**Files**:
- `docs/Development/JOSEF_TASKS.md`
- `docs/Development/CRAIG_TASKS.md`
- `docs/Development/JONNE_TASKS.md`
- `docs/Development/SVEIN_TASKS.md`
- `docs/Development/LEE_TASKS.md`
- `docs/Development/CORY_TASKS.md`

**Integration**:
- Files served via development server (`frontend/server.js`)
- Auto-sync service reads files and updates database
- Changes in markdown files automatically sync to database

---

## Service Integration

### TaskFileService

**Purpose**: Load and parse markdown task files

**Integration**:
- Fetches files from `/docs/Development/` endpoint
- Parses markdown to extract tasks
- Generates unique task keys
- Returns structured task data

### TaskSyncService

**Purpose**: Synchronize markdown files with database

**Integration**:
- Compares markdown tasks with database
- Adds new tasks
- Updates existing tasks
- Removes deleted tasks
- Preserves completion/verification status

### AutoSyncService

**Purpose**: Automatic periodic synchronization

**Integration**:
- Runs every 30 seconds when AdminView is active
- Forces sync on tab switch
- Handles sync errors gracefully
- Stops when AdminView unmounts

---

## Authentication Integration

### Current State

**Mock Authentication**:
- Username: `admin`
- Password: `bnadmin`
- Implemented in `AdminLoginModal.tsx`

### Future Integration

**Planned**:
- Integrate with Phoenix/Elixir authentication
- Use JWT tokens for admin access
- Role-based access control (Super Admin, Admin roles)
- Tenant-aware admin access

---

## Deployment Integration

### Development Server

**File**: `frontend/server.js`

**Integration**:
- Serves markdown files from `docs/Development/`
- Sets `Content-Type: text/markdown` for `.md` files
- Handles file path resolution

### Production Deployment

**Planned**:
- Markdown files served via CDN or static hosting
- Database synchronization via API endpoints
- Real-time updates via WebSocket (future)

---

**This guide focuses on Admin View integration. For related services, see individual service documentation.**

# Admin View & Task Management Service Capabilities

**Last Updated**: January 2026  
**Status**: Active Service

## Overview
Admin View & Task Management service provides **UI for team task tracking**, **task verification**, and **database synchronization** with markdown task files.

## What Admin Service Can Manage
- **Task Management UI**:
  - Team member task lists display
  - Task completion status tracking
  - Task verification workflow
  - Team member profiles and roles
- **Database Synchronization**:
  - Auto-sync markdown task files to database
  - Real-time UI updates from database
  - Task status persistence (completed, verified, metadata)
  - Markdown file change detection
- **Task File Management**:
  - Loading and parsing markdown task files
  - Task category organization
  - Task key generation and tracking
  - Verification requirement detection

## What Admin Service Should NOT Manage
- ❌ Core business logic (owned by **Elixir services**)
- ❌ Authentication/authorization (owned by **Phoenix/Elixir auth**)
- ❌ Database schema changes (owned by **PostgreSQL service**)
- ❌ Task file content editing (owned by **developers**)

## Integrations
- **PostgreSQL**: Task data storage and retrieval
- **Markdown Files**: Task definitions in `docs/Development/*_TASKS.md`
- **Frontend**: React components for UI display
- **Task Sync Service**: Automatic synchronization service

## Typical Use Cases
- Viewing team member task lists
- Verifying completed tasks
- Tracking task completion status
- Monitoring team progress

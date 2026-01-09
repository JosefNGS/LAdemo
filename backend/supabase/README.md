# Supabase Database Service

**Last Updated**: January 2026  
**Status**: Active Service

## Overview

The Supabase database service provides PostgreSQL database infrastructure for the BitNexus platform, with a focus on Team Task Management. This service handles task tracking, verification workflows, and synchronization with markdown task files.

## Purpose

- **Team Task Management**: Store and manage tasks for all team members
- **Task Verification**: Track task completion and verification status
- **Markdown Sync**: Synchronize tasks between markdown files and database
- **Task History**: Maintain audit trail of task changes and verifications
- **Real-time Updates**: Support real-time task status updates

## Service Structure

```
backend/supabase/
├── README.md                    # This file
├── CHANGELOG.md                 # Change history
├── migrations/                  # SQL migration files
│   ├── 001_initial_schema.sql  # Initial database schema
│   ├── 002_team_members.sql    # Team members table
│   ├── 003_team_tasks.sql      # Team tasks table
│   ├── 004_indexes.sql         # Performance indexes
│   └── 005_rls_policies.sql    # Row Level Security policies
├── schema/                      # Database schema definitions
│   ├── team_members.sql        # Team members schema
│   ├── team_tasks.sql          # Team tasks schema
│   └── types.sql               # Custom types and enums
├── functions/                   # Database functions (if needed)
│   └── README.md
└── config/                      # Configuration files
    ├── supabase.config.json    # Supabase configuration
    └── .env.example            # Environment variables template
```

## Database Schema

### Team Members Table
Stores team member information and roles.

**Fields**:
- `id` (uuid, primary key)
- `member_id` (text, unique) - e.g., 'josef', 'craig', 'jonne'
- `name` (text) - Full name
- `email` (text) - Email address
- `role` (text) - Role/title
- `avatar` (text) - Avatar emoji or identifier
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Team Tasks Table
Stores task information, completion status, and verification data.

**Fields**:
- `id` (uuid, primary key)
- `team_member` (text) - References team member ID
- `task_key` (text) - Unique task identifier
- `completed` (boolean) - Task completion status
- `verified` (boolean) - Verification status
- `verified_by` (text, nullable) - Who verified the task
- `verified_at` (timestamp, nullable) - When task was verified
- `completed_by` (text, nullable) - Who completed the task
- `completed_at` (timestamp, nullable) - When task was completed
- `notes` (text, nullable) - Additional notes
- `created_at` (timestamp)
- `updated_at` (timestamp)

**Indexes**:
- `idx_team_tasks_member` - On `team_member`
- `idx_team_tasks_key` - On `team_member, task_key` (unique)
- `idx_team_tasks_completed` - On `completed`
- `idx_team_tasks_verified` - On `verified`

## Key Features

### Task Management
- Store tasks for all team members
- Track completion and verification status
- Maintain task history and audit trail
- Support task notes and metadata

### Verification Workflow
- Tasks completed by Josef must be verified by task owners
- Track who verified each task and when
- Support verification requirements per task

### Markdown Synchronization
- Auto-sync tasks from markdown files to database
- Preserve verification status during sync
- Handle task additions, updates, and deletions

### Real-time Updates
- Support real-time task status changes
- Database triggers for automatic updates
- Timestamp tracking for all changes

## Integration Points

- **Frontend**: Task management UI (AdminView, TaskChecklistView)
- **Task Sync Service**: `frontend/src/services/taskSyncService.ts`
- **Task Service**: `frontend/src/services/taskService.ts`
- **PostgreSQL Service**: `frontend/src/services/postgresqlService.ts`
- **Markdown Files**: `docs/Development/*_TASKS.md`

## Usage

### Running Migrations

1. **Using Supabase CLI**:
```bash
supabase db push
```

2. **Using SQL Editor**:
   - Open Supabase Dashboard
   - Navigate to SQL Editor
   - Run migration files in order

3. **Manual Setup**:
   - Run `migrations/001_initial_schema.sql` first
   - Then run remaining migrations in order

### Environment Variables

```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Team Members

The system supports the following team members:
- **josef** - Josef Lindbom (COO & Development Vision Lead)
- **craig** - Craig Martin (CTO - Main Branch Maintainer)
- **jonne** - Jonne Waselius (Backend Developer)
- **svein** - Svein Nilsen (Investor/Vision - Sales)
- **lee** - Lee (Office Manager - Sales)
- **cory** - Cory (Junior Developer)

## Related Documentation

- **Service Rules**: `docs/Services/supabase/SERVICE_RULES.md`
- **Admin Service**: `docs/Services/admin/SERVICE_RULES.md`
- **Task Management**: `docs/Services/admin/ARCHITECTURE.md`

---

**Maintained by**: Development Team  
**Version**: 1.0.0

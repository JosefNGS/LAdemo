# Supabase Database Quick Start

**Last Updated**: January 2026

## Quick Setup (5 Minutes)

### 1. Get Supabase Credentials
- Go to [Supabase Dashboard](https://app.supabase.com)
- Create or select your project
- Copy your project URL and API keys

### 2. Run Migrations
Open Supabase SQL Editor and run these files **in order**:

1. `migrations/001_initial_schema.sql` - Extensions and functions
2. `migrations/002_team_members.sql` - Team members table
3. `migrations/003_team_tasks.sql` - Team tasks table
4. `migrations/004_indexes.sql` - Performance indexes
5. `migrations/005_rls_policies.sql` - Security policies

### 3. Verify Setup

```sql
-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('team_members', 'team_tasks');

-- Check team members
SELECT * FROM team_members;

-- Test task insertion
INSERT INTO team_tasks (team_member, task_key, completed) 
VALUES ('josef', 'test-task', false);
```

## Database Tables

### `team_members`
- Stores team member information
- Pre-populated with: josef, craig, jonne, svein, lee, cory

### `team_tasks`
- Stores tasks for each team member
- Tracks completion and verification status
- Syncs with markdown files in `docs/Development/*_TASKS.md`

## Key Features

✅ **Task Completion Tracking** - Track which tasks are completed  
✅ **Verification Workflow** - Tasks completed by Josef must be verified  
✅ **Audit Trail** - Timestamps for all changes  
✅ **Markdown Sync** - Auto-syncs with markdown task files  
✅ **Performance Optimized** - Indexes for fast queries  
✅ **Secure Access** - Row Level Security policies  

## Integration

The database integrates with:
- `frontend/src/services/taskService.ts` - Task CRUD operations
- `frontend/src/services/taskSyncService.ts` - Markdown file sync
- `frontend/src/services/postgresqlService.ts` - Database connection

## Need Help?

See `SETUP.md` for detailed setup instructions.

---

**Maintained by**: Development Team

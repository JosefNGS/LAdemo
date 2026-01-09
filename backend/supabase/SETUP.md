# Supabase Database Setup Guide

**Last Updated**: January 2026

## Overview

This guide will help you set up the Supabase database for Team Task Management.

## Prerequisites

- Supabase account and project
- Supabase CLI (optional, for local development)
- Access to Supabase Dashboard

## Setup Steps

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project
3. Note your project URL and API keys

### 2. Configure Environment Variables

1. Copy `config/.env.example` to `config/.env`
2. Fill in your Supabase credentials:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

### 3. Run Migrations

#### Option A: Using Supabase Dashboard (Recommended)

1. Open Supabase Dashboard
2. Navigate to SQL Editor
3. Run migrations in order:
   - `migrations/001_initial_schema.sql`
   - `migrations/002_team_members.sql`
   - `migrations/003_team_tasks.sql`
   - `migrations/004_indexes.sql`
   - `migrations/005_rls_policies.sql`

#### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

#### Option C: Using psql (Direct PostgreSQL)

```bash
# Connect to your database
psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run migrations in order
\i migrations/001_initial_schema.sql
\i migrations/002_team_members.sql
\i migrations/003_team_tasks.sql
\i migrations/004_indexes.sql
\i migrations/005_rls_policies.sql
```

### 4. Verify Setup

Run this query in SQL Editor to verify tables were created:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('team_members', 'team_tasks');
```

You should see both tables listed.

### 5. Verify Team Members

Check that team members were inserted:

```sql
SELECT * FROM team_members ORDER BY member_id;
```

You should see 6 team members: josef, craig, jonne, svein, lee, cory.

### 6. Test Task Insertion

Test inserting a task:

```sql
INSERT INTO team_tasks (team_member, task_key, completed, verified)
VALUES ('josef', 'test-task', false, false)
RETURNING *;
```

## Database Schema

### Team Members Table

```sql
CREATE TABLE team_members (
    id UUID PRIMARY KEY,
    member_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    role TEXT NOT NULL,
    avatar TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE
);
```

### Team Tasks Table

```sql
CREATE TABLE team_tasks (
    id UUID PRIMARY KEY,
    team_member TEXT NOT NULL,
    task_key TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    verified BOOLEAN DEFAULT FALSE,
    verified_by TEXT,
    verified_at TIMESTAMP WITH TIME ZONE,
    completed_by TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(team_member, task_key),
    FOREIGN KEY (team_member) REFERENCES team_members(member_id)
);
```

## Indexes

The following indexes are created for performance:
- `idx_team_members_member_id` - On team_members.member_id
- `idx_team_tasks_team_member` - On team_tasks.team_member
- `idx_team_tasks_task_key` - On team_tasks.task_key
- `idx_team_tasks_completed` - Partial index on completed = TRUE
- `idx_team_tasks_verified` - Partial index on verified = TRUE
- Plus additional indexes for verified_by, completed_by, timestamps

## Row Level Security (RLS)

RLS is enabled on both tables with the following policies:
- Authenticated users can read all team members and tasks
- Authenticated users can insert, update, and delete tasks
- Service role has full access to all tables

## Troubleshooting

### Migration Errors

If you encounter errors:
1. Check that extensions are enabled (uuid-ossp, pgcrypto)
2. Ensure migrations are run in order
3. Check that foreign key constraints are satisfied

### Connection Issues

If you can't connect:
1. Verify SUPABASE_URL is correct
2. Check that API keys are valid
3. Ensure database is accessible from your IP

### RLS Policy Issues

If RLS blocks operations:
1. Check that you're using the correct API key (anon vs service role)
2. Verify policies are correctly applied
3. Check that user is authenticated

## Next Steps

After setup:
1. Configure frontend to use Supabase credentials
2. Test task sync from markdown files
3. Verify task completion and verification workflows
4. Monitor database performance

## Related Documentation

- **Service Rules**: `docs/Services/supabase/SERVICE_RULES.md`
- **Admin Service**: `docs/Services/admin/SERVICE_RULES.md`
- **Task Management**: `docs/Services/admin/ARCHITECTURE.md`

---

**Maintained by**: Development Team

-- Performance Indexes for Team Tasks
-- Migration: 004_indexes.sql
-- Created: January 2026
-- Description: Creates indexes to optimize query performance

-- Index on team_member for faster lookups by team member
CREATE INDEX IF NOT EXISTS idx_team_tasks_team_member ON team_tasks(team_member);

-- Index on task_key for faster lookups by task key
CREATE INDEX IF NOT EXISTS idx_team_tasks_task_key ON team_tasks(task_key);

-- Composite index on team_member and task_key (already covered by UNIQUE constraint, but explicit for clarity)
-- Note: The UNIQUE constraint on (team_member, task_key) already creates an index

-- Index on completed status for filtering completed tasks
CREATE INDEX IF NOT EXISTS idx_team_tasks_completed ON team_tasks(completed) WHERE completed = TRUE;

-- Index on verified status for filtering verified tasks
CREATE INDEX IF NOT EXISTS idx_team_tasks_verified ON team_tasks(verified) WHERE verified = TRUE;

-- Index on verified_by for filtering tasks by verifier
CREATE INDEX IF NOT EXISTS idx_team_tasks_verified_by ON team_tasks(verified_by) WHERE verified_by IS NOT NULL;

-- Index on completed_by for filtering tasks by completer
CREATE INDEX IF NOT EXISTS idx_team_tasks_completed_by ON team_tasks(completed_by) WHERE completed_by IS NOT NULL;

-- Index on created_at for sorting by creation date
CREATE INDEX IF NOT EXISTS idx_team_tasks_created_at ON team_tasks(created_at DESC);

-- Index on updated_at for sorting by update date
CREATE INDEX IF NOT EXISTS idx_team_tasks_updated_at ON team_tasks(updated_at DESC);

-- Comments
COMMENT ON INDEX idx_team_tasks_team_member IS 'Optimizes queries filtering by team member';
COMMENT ON INDEX idx_team_tasks_task_key IS 'Optimizes queries filtering by task key';
COMMENT ON INDEX idx_team_tasks_completed IS 'Optimizes queries filtering completed tasks';
COMMENT ON INDEX idx_team_tasks_verified IS 'Optimizes queries filtering verified tasks';
COMMENT ON INDEX idx_team_tasks_verified_by IS 'Optimizes queries filtering by verifier';
COMMENT ON INDEX idx_team_tasks_completed_by IS 'Optimizes queries filtering by completer';
COMMENT ON INDEX idx_team_tasks_created_at IS 'Optimizes queries sorting by creation date';
COMMENT ON INDEX idx_team_tasks_updated_at IS 'Optimizes queries sorting by update date';

-- Team Tasks Table
-- Migration: 003_team_tasks.sql
-- Created: January 2026
-- Description: Creates team_tasks table to store task information, completion status, and verification data

CREATE TABLE IF NOT EXISTS team_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_member TEXT NOT NULL,
    task_key TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    verified BOOLEAN DEFAULT FALSE,
    verified_by TEXT,
    verified_at TIMESTAMP WITH TIME ZONE,
    completed_by TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure unique task per team member
    UNIQUE(team_member, task_key),
    
    -- Foreign key constraint to team_members table
    CONSTRAINT fk_team_member FOREIGN KEY (team_member) REFERENCES team_members(member_id) ON DELETE CASCADE
);

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_team_tasks_updated_at
    BEFORE UPDATE ON team_tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comments
COMMENT ON TABLE team_tasks IS 'Stores task information, completion status, and verification data for team members';
COMMENT ON COLUMN team_tasks.team_member IS 'Team member ID (e.g., josef, craig, jonne)';
COMMENT ON COLUMN team_tasks.task_key IS 'Unique task identifier (e.g., netlify-deployment-setup)';
COMMENT ON COLUMN team_tasks.completed IS 'Whether the task is completed';
COMMENT ON COLUMN team_tasks.verified IS 'Whether the task has been verified by task owner';
COMMENT ON COLUMN team_tasks.verified_by IS 'Who verified the task (team member ID)';
COMMENT ON COLUMN team_tasks.verified_at IS 'When the task was verified';
COMMENT ON COLUMN team_tasks.completed_by IS 'Who completed the task (team member ID)';
COMMENT ON COLUMN team_tasks.completed_at IS 'When the task was completed';
COMMENT ON COLUMN team_tasks.notes IS 'Additional notes or comments about the task';

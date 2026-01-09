-- Row Level Security (RLS) Policies for Team Tasks
-- Migration: 005_rls_policies.sql
-- Created: January 2026
-- Description: Creates RLS policies for secure access to team tasks

-- Enable RLS on team_members table
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Enable RLS on team_tasks table
ALTER TABLE team_tasks ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users to read all team members
CREATE POLICY "Allow authenticated users to read team members"
    ON team_members
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Allow authenticated users to read all team tasks
CREATE POLICY "Allow authenticated users to read team tasks"
    ON team_tasks
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Allow authenticated users to insert team tasks
CREATE POLICY "Allow authenticated users to insert team tasks"
    ON team_tasks
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Policy: Allow authenticated users to update team tasks
CREATE POLICY "Allow authenticated users to update team tasks"
    ON team_tasks
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Policy: Allow authenticated users to delete team tasks
CREATE POLICY "Allow authenticated users to delete team tasks"
    ON team_tasks
    FOR DELETE
    TO authenticated
    USING (true);

-- Policy: Allow service role to perform all operations (for backend operations)
CREATE POLICY "Allow service role full access to team_members"
    ON team_members
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow service role full access to team_tasks"
    ON team_tasks
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Comments
COMMENT ON POLICY "Allow authenticated users to read team members" ON team_members IS 'Allows authenticated users to read all team member information';
COMMENT ON POLICY "Allow authenticated users to read team tasks" ON team_tasks IS 'Allows authenticated users to read all team tasks';
COMMENT ON POLICY "Allow authenticated users to insert team tasks" ON team_tasks IS 'Allows authenticated users to create new tasks';
COMMENT ON POLICY "Allow authenticated users to update team tasks" ON team_tasks IS 'Allows authenticated users to update existing tasks';
COMMENT ON POLICY "Allow authenticated users to delete team tasks" ON team_tasks IS 'Allows authenticated users to delete tasks';
COMMENT ON POLICY "Allow service role full access to team_members" ON team_members IS 'Allows service role to perform all operations on team_members';
COMMENT ON POLICY "Allow service role full access to team_tasks" ON team_tasks IS 'Allows service role to perform all operations on team_tasks';

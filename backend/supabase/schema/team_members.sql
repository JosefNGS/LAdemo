-- Team Members Schema Definition
-- File: schema/team_members.sql
-- Description: Complete schema definition for team_members table

CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    role TEXT NOT NULL,
    avatar TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_team_members_member_id ON team_members(member_id);

CREATE TRIGGER update_team_members_updated_at
    BEFORE UPDATE ON team_members
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE team_members IS 'Stores team member information and roles';
COMMENT ON COLUMN team_members.member_id IS 'Unique identifier for team member (e.g., josef, craig, jonne)';
COMMENT ON COLUMN team_members.name IS 'Full name of team member';
COMMENT ON COLUMN team_members.email IS 'Email address of team member';
COMMENT ON COLUMN team_members.role IS 'Role or title of team member';
COMMENT ON COLUMN team_members.avatar IS 'Avatar emoji or identifier';

-- Team Members Table
-- Migration: 002_team_members.sql
-- Created: January 2026
-- Description: Creates team_members table to store team member information

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

-- Create index on member_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_team_members_member_id ON team_members(member_id);

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_team_members_updated_at
    BEFORE UPDATE ON team_members
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert initial team members
INSERT INTO team_members (member_id, name, email, role, avatar) VALUES
    ('josef', 'Josef Lindbom', 'josef@nordicglobalsolutions.com', 'COO & Development Vision Lead', 'JL'),
    ('craig', 'Craig Martin', 'craig@nordicglobalsolutions.com', 'CTO - Main Branch Maintainer', 'CM'),
    ('jonne', 'Jonne Waselius', 'Jonne@nordicglobalsolutions.com', 'Backend Developer', 'JW'),
    ('svein', 'Svein Nilsen', NULL, 'Investor/Vision - Sales', 'SN'),
    ('lee', 'Lee', NULL, 'Office Manager - Sales', 'L'),
    ('cory', 'Cory', NULL, 'Junior Developer', 'C')
ON CONFLICT (member_id) DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    avatar = EXCLUDED.avatar,
    updated_at = NOW();

-- Comments
COMMENT ON TABLE team_members IS 'Stores team member information and roles';
COMMENT ON COLUMN team_members.member_id IS 'Unique identifier for team member (e.g., josef, craig, jonne)';
COMMENT ON COLUMN team_members.name IS 'Full name of team member';
COMMENT ON COLUMN team_members.email IS 'Email address of team member';
COMMENT ON COLUMN team_members.role IS 'Role or title of team member';
COMMENT ON COLUMN team_members.avatar IS 'Avatar emoji or identifier';

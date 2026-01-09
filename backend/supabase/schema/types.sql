-- Custom Types and Enums
-- File: schema/types.sql
-- Description: Custom PostgreSQL types and enums for Team Task Management

-- Team Member ID Enum
DO $$ BEGIN
    CREATE TYPE team_member_id AS ENUM ('josef', 'craig', 'jonne', 'svein', 'lee', 'cory');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

COMMENT ON TYPE team_member_id IS 'Enumeration of valid team member IDs';

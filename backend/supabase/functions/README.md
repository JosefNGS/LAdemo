# Supabase Database Functions

**Last Updated**: January 2026

## Overview

This folder contains database functions, triggers, and stored procedures for the Supabase database service.

## Functions

Currently, the following functions are defined in migrations:

### `update_updated_at_column()`
- **Purpose**: Automatically updates the `updated_at` timestamp when a row is updated
- **Type**: Trigger function
- **Used by**: 
  - `team_members` table
  - `team_tasks` table

## Future Functions

Potential functions that may be added:
- Task verification workflow functions
- Task statistics aggregation functions
- Task sync status functions
- Notification triggers for task changes

---

**Maintained by**: Development Team

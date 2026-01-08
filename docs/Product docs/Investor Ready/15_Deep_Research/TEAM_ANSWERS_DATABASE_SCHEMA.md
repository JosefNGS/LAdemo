# Team Answers Database Schema
## Database Structure for Research Questions Answers

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Design Phase  
**Purpose**: Store and manage team member answers to research questions

---

## 📋 Overview

This document defines the database schema for storing team member answers to questions from `Team_Questions_From_Research.md`. The database will be integrated into the admin view for easy management and tracking.

---

## 🗄️ Database Schema

### Table: `team_answers`

**Purpose**: Store answers from team members for research questions

**Columns**:

| Column Name | Type | Constraints | Description |
|------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | Unique identifier for each answer |
| `team_member_id` | VARCHAR(50) | NOT NULL, FOREIGN KEY | Team member identifier (josef, craig, jonne, svein, lee) |
| `question_category` | VARCHAR(100) | NOT NULL | Question category (e.g., "Brand Identity", "MiCA Authorization") |
| `question_number` | VARCHAR(20) | NOT NULL | Question number from source document (e.g., "1.1", "3.2") |
| `question_text` | TEXT | NOT NULL | Full question text |
| `answer_text` | TEXT | NULL | Answer text provided by team member |
| `status` | VARCHAR(20) | NOT NULL, DEFAULT 'pending' | Status: 'pending', 'in_progress', 'completed' |
| `priority` | VARCHAR(20) | NOT NULL | Priority: 'urgent', 'high', 'medium', 'low' |
| `due_date` | DATE | NULL | Due date for completing the answer |
| `assigned_date` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date when question was assigned |
| `completed_date` | TIMESTAMP | NULL | Date when answer was completed |
| `last_updated` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Last update timestamp |
| `updated_by` | VARCHAR(50) | NOT NULL | Who last updated this record |
| `notes` | TEXT | NULL | Additional notes or comments |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Record creation timestamp |

**Indexes**:
- `idx_team_member_id` on `team_member_id`
- `idx_question_category` on `question_category`
- `idx_status` on `status`
- `idx_priority` on `priority`
- `idx_due_date` on `due_date`
- `idx_team_member_status` on `team_member_id, status`

---

### Table: `team_members`

**Purpose**: Store team member information

**Columns**:

| Column Name | Type | Constraints | Description |
|------------|------|-------------|-------------|
| `id` | VARCHAR(50) | PRIMARY KEY | Team member identifier (josef, craig, jonne, svein, lee) |
| `name` | VARCHAR(100) | NOT NULL | Full name |
| `email` | VARCHAR(255) | NOT NULL, UNIQUE | Email address |
| `role` | VARCHAR(100) | NOT NULL | Role/title |
| `status` | VARCHAR(20) | NOT NULL, DEFAULT 'active' | Status: 'active', 'inactive' |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Record creation timestamp |
| `updated_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Last update timestamp |

---

### Table: `answer_history`

**Purpose**: Track changes to answers (audit trail)

**Columns**:

| Column Name | Type | Constraints | Description |
|------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | Unique identifier |
| `answer_id` | UUID | NOT NULL, FOREIGN KEY | Reference to team_answers.id |
| `changed_field` | VARCHAR(50) | NOT NULL | Field that was changed |
| `old_value` | TEXT | NULL | Previous value |
| `new_value` | TEXT | NULL | New value |
| `changed_by` | VARCHAR(50) | NOT NULL | Who made the change |
| `changed_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | When the change was made |
| `change_reason` | TEXT | NULL | Reason for the change |

**Indexes**:
- `idx_answer_id` on `answer_id`
- `idx_changed_at` on `changed_at`

---

## 📊 Relationships

```
team_members (1) ──< (many) team_answers
team_answers (1) ──< (many) answer_history
```

---

## 🔍 Query Examples

### Get all pending answers for a team member
```sql
SELECT * FROM team_answers 
WHERE team_member_id = 'josef' 
AND status = 'pending'
ORDER BY priority DESC, due_date ASC;
```

### Get all answers by category
```sql
SELECT * FROM team_answers 
WHERE question_category = 'Brand Identity'
ORDER BY team_member_id, question_number;
```

### Get completion statistics
```sql
SELECT 
    team_member_id,
    COUNT(*) as total_questions,
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
    SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress
FROM team_answers
GROUP BY team_member_id;
```

---

## 🚀 Implementation Notes

1. **Database**: Use Supabase PostgreSQL database
2. **Location**: `backend/supabase/migrations/` - Create migration file
3. **API Endpoints**: Create REST API endpoints for CRUD operations
4. **Admin View**: Integrate into AdminView component
5. **Sync**: Sync with answer documents in `docs/Product docs/Investor Ready/15_Deep_Research/`

---

## 📝 Next Steps

1. Create database migration file
2. Set up API endpoints
3. Create admin view interface
4. Implement data sync between documents and database
5. Add reporting and analytics

---

**Last Updated**: January 2026


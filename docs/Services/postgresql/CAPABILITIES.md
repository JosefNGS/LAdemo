# PostgreSQL Service Capabilities

**Last Updated**: January 2026  
**Status**: Active Database Service

## Overview
PostgreSQL is the **primary database** for BitNexus. It provides relational data storage, real-time capabilities, and vector search support (planned).

## What PostgreSQL Can Manage
- **Relational Data Storage**:
  - User accounts and profiles
  - Product catalog data
  - Transaction records
  - Task management data
  - Email submissions
  - All structured application data
- **Database Operations**:
  - Schema management (tables, indexes, constraints)
  - Migrations and versioning
  - Query optimization
  - Connection pooling
  - Transaction management
- **Advanced Features** (Planned):
  - Vector search (pgvector extension)
  - Full-text search
  - JSON/JSONB data types
  - Real-time subscriptions

## What PostgreSQL Should NOT Manage
- ❌ Business logic (owned by **Elixir services**)
- ❌ HTTP routing (owned by **Phoenix**)
- ❌ File storage (use object storage)
- ❌ Authentication logic (uses database, but logic in **Elixir**)

## Integrations
- **Elixir Services**: Access via Ecto ORM
- **Phoenix**: Database access through Elixir services
- **Netlify Functions**: Direct PostgreSQL client access
- **n8n**: Database connectors for workflows

## Typical Use Cases
- Storing user accounts and authentication data
- Product catalog and marketplace data
- Transaction and commission records
- Task management and tracking
- Email submissions and lead data

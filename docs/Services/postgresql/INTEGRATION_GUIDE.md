# PostgreSQL Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating PostgreSQL database into the existing BitNexus system.

---

## Integration Strategy

### Current Integration

**PostgreSQL is already integrated**:
- ✅ Netlify functions use PostgreSQL client
- ✅ Email submissions stored in PostgreSQL
- ✅ Task management uses PostgreSQL (or localStorage fallback)

### Planned Integration

**Future Integration**:
- Elixir services via Ecto
- Phoenix via Elixir services
- Vector search capabilities

---

## Elixir Services Integration

### Ecto Configuration

**Pattern**: Elixir services use Ecto for database access

**Configuration**:
```elixir
# config/dev.exs
config :accounts_service, AccountsService.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

---

## Netlify Functions Integration

### PostgreSQL Client

**Pattern**: Direct PostgreSQL client in Netlify functions

**Configuration**:
```javascript
import { createClient } from '@supabase/supabase-js';

const client = createClient(
  process.env.POSTGRESQL_URL,
  process.env.POSTGRESQL_ANON_KEY
);
```

---

## Multi-Tenant Integration

### Tenant Isolation

**Pattern**: All queries filtered by tenant_id

**Implementation**:
- Add tenant_id to all tables
- Filter queries by tenant_id
- Enforce tenant isolation at database level

---

**This guide focuses on PostgreSQL integration. For related services, see individual service documentation.**

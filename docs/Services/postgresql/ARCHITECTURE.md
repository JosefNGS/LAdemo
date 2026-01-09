# PostgreSQL Architecture
## System Architecture for PostgreSQL Database

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for PostgreSQL database integration into the BitNexus platform.

---

## System Architecture

### Database Architecture

```
┌─────────────────────────────────────────────────────────┐
│              PostgreSQL Database                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Core Tables                               │   │
│  │  • users (with tenant_id)                        │   │
│  │  • products                                       │   │
│  │  • transactions                                  │   │
│  │  • team_tasks                                    │   │
│  │  • email_submissions                             │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Indexes & Performance                     │   │
│  │  • Primary keys                                   │   │
│  │  • Foreign keys                                   │   │
│  │  • Indexes for queries                           │   │
│  │  • Query optimization                             │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Access Layer                              │   │
│  │  • Ecto (Elixir)                                  │   │
│  │  • Direct SQL (Netlify Functions)                 │   │
│  │  • Connection pooling                             │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Schema Design

### Multi-Tenant Schema

**Key Pattern**: All tables include `tenant_id` for isolation

**Example**:
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL,
  UNIQUE(tenant_id, email)
);
```

---

## Integration Points

### Elixir Services Integration

**Pattern**: Ecto ORM for database access

```elixir
# In Elixir service
defmodule AccountsService.Repo do
  use Ecto.Repo, otp_app: :accounts_service
end
```

### Netlify Functions Integration

**Pattern**: Direct PostgreSQL client

```javascript
// In Netlify function
import { createClient } from '@supabase/supabase-js';
const client = createClient(url, key);
```

---

**This architecture focuses on PostgreSQL. For related services, see individual service documentation.**

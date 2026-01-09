# Phoenix & Elixir Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Phoenix and Elixir into the existing BitNexus system. The integration must be gradual, non-breaking, and maintain backward compatibility with existing services.

---

## Integration Strategy

### Phase 1: Foundation (Weeks 1-2)
- Set up Phoenix application alongside existing services
- Implement health check endpoints
- Set up database connections
- No frontend changes required

### Phase 2: New Features (Weeks 3-4)
- Route new features to Phoenix endpoints
- Implement new API endpoints in Phoenix
- Frontend uses Phoenix for new features
- Existing features continue using Netlify functions

### Phase 3: Migration (Weeks 5-8)
- Migrate existing endpoints one by one
- Update frontend to use Phoenix endpoints
- Maintain API compatibility
- Deprecate Netlify functions gradually

### Phase 4: Consolidation (Weeks 9-12)
- Complete migration to Phoenix
- Remove Netlify function dependencies
- Optimize Phoenix endpoints
- Full production deployment

---

## Frontend Integration

### 1. Update API Service

**File**: `frontend/src/services/apiService.ts`

```typescript
// API Configuration
const NETLIFY_API_URL = '/.netlify/functions';
const PHOENIX_API_URL = process.env.PHOENIX_API_URL || 'http://localhost:4000/api/v1';

// Feature flag for gradual migration
const USE_PHOENIX_API = process.env.USE_PHOENIX_API === 'true';

export const apiClient = {
  async get(endpoint: string) {
    const baseUrl = USE_PHOENIX_API ? PHOENIX_API_URL : NETLIFY_API_URL;
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  },

  async post(endpoint: string, data: any) {
    const baseUrl = USE_PHOENIX_API ? PHOENIX_API_URL : NETLIFY_API_URL;
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

### 2. WebSocket Integration

**File**: `frontend/src/services/phoenixService.ts`

```typescript
import { Socket } from 'phoenix';

let socket: Socket | null = null;

export const connectPhoenixSocket = () => {
  const socketUrl = process.env.PHOENIX_SOCKET_URL || 'ws://localhost:4000/socket';
  
  socket = new Socket(socketUrl, {
    params: { token: getAuthToken() }
  });

  socket.connect();

  socket.onError(() => {
    console.error('Phoenix socket connection error');
  });

  return socket;
};

export const joinTransactionChannel = (userId: string, callback: (payload: any) => void) => {
  if (!socket) {
    socket = connectPhoenixSocket();
  }

  const channel = socket.channel(`transaction:${userId}`, {});

  channel.join()
    .receive('ok', () => {
      console.log('Joined transaction channel');
    })
    .receive('error', (error) => {
      console.error('Failed to join channel:', error);
    });

  channel.on('new_transaction', callback);

  return channel;
};
```

### 3. Update Task Service

**File**: `frontend/src/services/taskService.ts`

```typescript
// Update imports
import { isPostgreSQLInitialized, getPostgreSQLClient } from './postgresqlService';
import { apiClient } from './apiService';

// Use Phoenix API when available
const USE_PHOENIX_TASKS = process.env.USE_PHOENIX_TASKS === 'true';

export const loadTasks = async (teamMember: string): Promise<Task[]> => {
  if (USE_PHOENIX_TASKS) {
    // Use Phoenix API
    const data = await apiClient.get(`/tasks?team_member=${teamMember}`);
    return data.tasks;
  } else {
    // Fallback to existing PostgreSQL service
    // ... existing code ...
  }
};
```

---

## Database Integration

### 1. Shared PostgreSQL Database

**Configuration**: Both Netlify functions and Phoenix use the same PostgreSQL database

**Phoenix Config**: `config/dev.exs`
```elixir
config :bitnexus_api, BitnexusApi.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

**Netlify Functions**: Continue using existing PostgreSQL connection

### 2. Database Migrations

**Strategy**: Phoenix migrations manage schema, Netlify functions read-only

**Migration Process**:
1. Create migration in Phoenix: `mix ecto.gen.migration add_new_table`
2. Run migration: `mix ecto.migrate`
3. Netlify functions automatically see new schema
4. Update Netlify functions to use new schema

### 3. Data Synchronization

**No Synchronization Needed**: Both services use the same database

**Consistency**: Database transactions ensure consistency

---

## Erlang Ledger Integration

### 1. Shared BEAM VM

**Architecture**: Phoenix and Erlang ledger run in the same BEAM VM

**Benefits**:
- Direct process communication
- Shared supervision tree
- No network overhead
- Atomic operations

### 2. Ledger Client Implementation

**File**: `lib/bitnexus_api/ledger/ledger_client.ex`

```elixir
defmodule BitnexusApi.Ledger.LedgerClient do
  @moduledoc """
  Client for interacting with Erlang/Elixir ledger.
  """

  def record_transaction(transaction_data) do
    # Call Erlang GenServer directly
    :ledger_server.record_transaction(transaction_data)
  end

  def get_transaction_history(user_id) do
    :ledger_server.get_history(user_id)
  end

  def verify_transaction(transaction_id) do
    :ledger_server.verify(transaction_id)
  end
end
```

### 3. Transaction Flow

```
1. Phoenix API receives transaction
   │
   ▼
2. Save to PostgreSQL (Ecto)
   │
   ▼
3. Record in Erlang ledger (LedgerClient)
   │
   ▼
4. Broadcast via PubSub
   │
   ▼
5. WebSocket channels notify clients
```

---

## Netlify Functions Migration

### 1. Endpoint Mapping

**Mapping Table**:

| Netlify Function | Phoenix Endpoint | Status |
|-----------------|------------------|--------|
| `submit-email.js` | `POST /api/v1/emails` | To migrate |
| `submit-email-postgresql.js` | `POST /api/v1/emails` | To migrate |
| (Future endpoints) | `POST /api/v1/*` | New in Phoenix |

### 2. Migration Process

**Step-by-Step**:
1. **Implement Phoenix endpoint** with same interface
2. **Test Phoenix endpoint** thoroughly
3. **Update frontend** to use Phoenix endpoint (feature flag)
4. **Monitor** both endpoints for errors
5. **Switch** all traffic to Phoenix endpoint
6. **Deprecate** Netlify function
7. **Remove** Netlify function after verification

### 3. Backward Compatibility

**API Compatibility**:
- Same request format
- Same response format
- Same error format
- Same authentication

**Example**:
```elixir
# Phoenix endpoint matches Netlify function interface
def create(conn, %{"email" => email, "name" => name}) do
  # Same business logic
  # Same response format
end
```

---

## Go Services Integration

### 1. Service Communication

**Pattern**: Phoenix calls Go services via HTTP

**Implementation**:
```elixir
defmodule BitnexusApi.External.GoServiceClient do
  def call_go_service(endpoint, data) do
    HTTPoison.post("http://go-service:8080#{endpoint}", Jason.encode!(data))
  end
end
```

### 2. Service Discovery

**Configuration**: Service URLs in environment variables

**Config**: `config/prod.exs`
```elixir
config :bitnexus_api, :go_services,
  api_url: System.get_env("GO_API_URL")
```

---

## Authentication Integration

### 1. Shared Authentication

**Strategy**: JWT tokens work across all services

**Token Generation**: Phoenix generates tokens
**Token Validation**: All services validate tokens

### 2. Authentication Flow

```
1. User logs in via Phoenix API
   │
   ▼
2. Phoenix generates JWT token
   │
   ▼
3. Frontend stores token
   │
   ▼
4. Frontend sends token with requests
   │
   ▼
5. Phoenix validates token
   │
   ▼
6. Request processed
```

### 3. Token Validation

**Phoenix Plug**: `lib/bitnexus_api_web/plugs/authenticate.ex`

```elixir
defmodule BitnexusApiWeb.Plugs.Authenticate do
  import Plug.Conn

  def init(opts), do: opts

  def call(conn, _opts) do
    case get_token(conn) do
      nil -> conn |> put_status(:unauthorized) |> halt()
      token -> validate_token(conn, token)
    end
  end

  defp get_token(conn) do
    conn
    |> get_req_header("authorization")
    |> List.first()
    |> extract_token()
  end

  defp extract_token("Bearer " <> token), do: token
  defp extract_token(_), do: nil

  defp validate_token(conn, token) do
    # Validate JWT token
    # Set current_user in conn.assigns
    conn
  end
end
```

---

## Real-Time Features Integration

### 1. WebSocket Setup

**Frontend**: Connect to Phoenix WebSocket

**Implementation**: See Frontend Integration section

### 2. Channel Topics

**Transaction Channel**: `transaction:{user_id}`
**Notification Channel**: `notification:{user_id}`
**Admin Channel**: `admin:*`

### 3. Real-Time Updates

**Flow**:
1. Database change occurs
2. Phoenix publishes event via PubSub
3. Channel broadcasts to connected clients
4. Frontend receives update
5. UI updates automatically

---

## Testing Integration

### 1. Integration Tests

**Test Phoenix + Frontend**:
```elixir
defmodule BitnexusApiWeb.IntegrationTest do
  use BitnexusApiWeb.ConnCase

  test "frontend can call Phoenix API" do
    conn = build_conn()
      |> put_req_header("authorization", "Bearer #{token}")
      |> get("/api/v1/users")

    assert json_response(conn, 200)
  end
end
```

### 2. End-to-End Tests

**Test Complete Flow**:
- Frontend → Phoenix API → Database → Response

---

## Deployment Integration

### 1. Docker Compose

**File**: `dev_server/docker-compose.yml`

```yaml
services:
  phoenix_api:
    build: ./backend/phoenix-elixir
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/bitnexus_dev
    depends_on:
      - db

  frontend:
    # Existing frontend service
    # Connects to phoenix_api

  db:
    # Shared PostgreSQL database
```

### 2. Environment Variables

**Frontend**:
```bash
PHOENIX_API_URL=http://localhost:4000/api/v1
USE_PHOENIX_API=true
```

**Phoenix**:
```bash
DATABASE_URL=postgresql://postgres:postgres@db:5432/bitnexus_dev
SECRET_KEY_BASE=your_secret_key
```

---

## Rollback Strategy

### 1. Feature Flags

**Use feature flags** to switch between services:

```typescript
const USE_PHOENIX_API = process.env.USE_PHOENIX_API === 'true';
```

### 2. Gradual Rollout

**Phases**:
1. 10% traffic to Phoenix
2. 50% traffic to Phoenix
3. 100% traffic to Phoenix
4. Remove Netlify functions

### 3. Monitoring

**Monitor**:
- Error rates
- Response times
- Database connections
- Process health

---

## Troubleshooting

### Common Issues

**1. Connection Refused**:
- Check Phoenix server is running
- Check port 4000 is accessible
- Check firewall rules

**2. Authentication Errors**:
- Verify JWT token format
- Check token expiration
- Verify secret key

**3. Database Connection Errors**:
- Check PostgreSQL is running
- Verify connection string
- Check database exists

---

**This integration guide is CRITICAL for successful Phoenix/Elixir integration. Follow it step-by-step.**

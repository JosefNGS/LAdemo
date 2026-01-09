# Phoenix Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Phoenix web framework into the existing BitNexus system. Phoenix handles HTTP API and WebSocket connections, while Elixir services handle business logic.

---

## Integration Strategy

### Phase 1: Foundation (Weeks 1-2)
- Set up Phoenix application alongside existing services
- Implement health check endpoints
- Set up routing
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
const PHOENIX_API_URL = process.env.PHOENIX_API_URL || 'http://localhost:4000/api/v1';

export const apiClient = {
  async get(endpoint: string) {
    const response = await fetch(`${PHOENIX_API_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
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
  return socket;
};

export const joinTransactionChannel = (userId: string, callback: (payload: any) => void) => {
  if (!socket) {
    socket = connectPhoenixSocket();
  }

  const channel = socket.channel(`transaction:${userId}`, {});
  channel.join();
  channel.on('new_transaction', callback);
  return channel;
};
```

---

## Elixir Services Integration

### Calling Elixir Services

**Pattern**: Phoenix controllers call Elixir services

```elixir
# Phoenix Controller
defmodule BitnexusApiWeb.Api.V1.UserController do
  alias AccountsService.Accounts
  
  def create(conn, %{"user" => user_params}) do
    case Accounts.create_user(user_params) do
      {:ok, user} -> render(conn, "show.json", user: user)
      {:error, changeset} -> render_error(conn, changeset)
    end
  end
end
```

---

## Database Integration

### Shared PostgreSQL Database

**Configuration**: Both Netlify functions and Phoenix use the same PostgreSQL database

**Phoenix Config**: `config/dev.exs`
```elixir
config :bitnexus_api, BitnexusApi.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

---

## Real-Time Features Integration

### WebSocket Setup

**Frontend**: Connect to Phoenix WebSocket

**Implementation**: See Frontend Integration section

### Channel Topics

**Transaction Channel**: `transaction:{user_id}`
**Notification Channel**: `notification:{user_id}`

---

## Deployment Integration

### Docker Compose

**File**: `dev_server/docker-compose.yml`

```yaml
services:
  phoenix_api:
    build: ./backend/phoenix
    ports:
      - "4000:4000"
    depends_on:
      - db

  db:
    image: postgres:14-alpine
```

---

**This guide focuses on Phoenix integration. For Elixir services integration, see `docs/Services/elixir/INTEGRATION_GUIDE.md`.**

# Phoenix Architecture
## System Architecture for Phoenix Web Framework

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for Phoenix web framework integration into the BitNexus platform. Phoenix handles HTTP API endpoints, WebSocket channels, and real-time features.

---

## System Architecture

### Phoenix Layer Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Phoenix Web Framework Layer                 │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         HTTP API Layer                            │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ Controllers  │  │  Views       │             │   │
│  │  │ • REST API   │  │ • JSON       │             │   │
│  │  │ • Routing    │  │ • Serialize  │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│                          │                               │
│                          ▼                               │
│  ┌───────────────────────────────────────────────────┐   │
│  │         WebSocket Layer                           │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ Channels     │  │  UserSocket  │             │   │
│  │  │ • Real-time  │  │ • Connection │             │   │
│  │  │ • Broadcast  │  │ • Auth       │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│                          │                               │
│                          ▼                               │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Elixir Services Layer                      │   │
│  │  • AccountsService                                │   │
│  │  • ProductsService                                │   │
│  │  • TransactionsService                            │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Request Flow

### HTTP Request Flow

```
1. Frontend Request
   │
   ▼
2. Phoenix Router
   │
   ▼
3. Controller Pipeline
   │  • Authentication
   │  • Authorization
   │  • Rate Limiting
   │
   ▼
4. Controller Action
   │
   ▼
5. Elixir Service (Business Logic)
   │
   ▼
6. Response Serialization (View)
   │
   ▼
7. JSON Response to Frontend
```

### WebSocket Connection Flow

```
1. Frontend WebSocket Connection
   │
   ▼
2. UserSocket
   │  • Connection Authorization
   │
   ▼
3. Channel Join
   │  • Channel Authorization
   │
   ▼
4. Channel Process (GenServer)
   │  • Message Handling
   │  • State Management
   │
   ▼
5. PubSub Broadcasting
   │
   ▼
6. Real-time Updates to Clients
```

---

## Component Architecture

### Controllers

**Purpose**: Handle HTTP requests

**Responsibilities**:
- Request validation
- Authentication/authorization
- Call Elixir services
- Response formatting

### Views

**Purpose**: JSON serialization

**Responsibilities**:
- Transform data to JSON
- Format responses
- Handle errors

### Channels

**Purpose**: WebSocket connections

**Responsibilities**:
- Real-time communication
- Message broadcasting
- Connection management

### Router

**Purpose**: Route requests

**Responsibilities**:
- Define routes
- Apply pipelines
- Route to controllers

---

## Integration Points

### 1. Frontend Integration

**HTTP API**:
- Base URL: `http://localhost:4000/api/v1`
- Authentication: JWT tokens
- Content-Type: `application/json`

**WebSocket**:
- URL: `ws://localhost:4000/socket`
- Protocol: Phoenix Channels
- Topics: `transaction:*`, `notification:*`

### 2. Elixir Services Integration

**Pattern**: Phoenix controllers call Elixir services

```elixir
# Phoenix Controller
alias AccountsService.Accounts

def create(conn, %{"user" => user_params}) do
  case Accounts.create_user(user_params) do
    {:ok, user} -> render(conn, "show.json", user: user)
    {:error, changeset} -> render_error(conn, changeset)
  end
end
```

---

## Security Architecture

### Authentication

**JWT Tokens**:
- Token generation on login
- Token validation on each request
- Token expiration handling

### Authorization

**Role-Based Access Control (RBAC)**:
- User roles: `admin`, `user`, `affiliate`
- Permission checking in controllers
- Resource-level authorization

---

## Scalability Architecture

### Horizontal Scaling

**Multi-Node Deployment**:
- Multiple Phoenix nodes
- Shared PostgreSQL database
- Distributed PubSub
- Load balancer

### Vertical Scaling

**Process Optimization**:
- Connection pooling
- Query optimization
- Caching strategies

---

**This architecture focuses on Phoenix web framework. For Elixir services architecture, see `docs/Services/elixir/ARCHITECTURE.md`.**

# Elixir Architecture
## System Architecture for Elixir Services & BEAM VM

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for Elixir services in the BitNexus platform. Elixir services handle business logic, concurrency, and integration with the Erlang/Elixir blockchain ledger using BEAM VM processes.

---

## System Architecture

### Elixir Services Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Elixir Services Layer                      │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Domain Services                            │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ Accounts     │  │ Products     │             │   │
│  │  │ Service      │  │ Service      │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ Transactions │  │ Ledger       │             │   │
│  │  │ Service      │  │ Client        │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│                          │                               │
│                          ▼                               │
│  ┌───────────────────────────────────────────────────┐   │
│  │         BEAM VM Processes                         │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ GenServers   │  │ Agents        │             │   │
│  │  │ • Stateful   │  │ • Shared      │             │   │
│  │  │ • Processes  │  │   State      │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │ Tasks        │  │ Supervisors  │             │   │
│  │  │ • Concurrent │  │ • Fault      │             │   │
│  │  │ • Async      │  │   Tolerance │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  └───────────────────────────────────────────────────┘   │
│                          │                               │
│                          ▼                               │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Data Access Layer (Ecto)                 │   │
│  │  • Repositories                                   │   │
│  │  • Migrations                                     │   │
│  │  • Queries                                        │   │
│  └───────────────────────────────────────────────────┘   │
│                          │                               │
│                          ▼                               │
│  ┌───────────────────────────────────────────────────┐   │
│  │         PostgreSQL Database                       │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Concurrency Model

### BEAM VM Processes

**Process Architecture**:
- **One process per request** - Isolated request handling
- **One process per operation** - Isolated business logic
- **Supervisor trees** - Fault tolerance and recovery
- **Process pools** - Database connection pooling

**Benefits**:
- **Isolation**: One process failure doesn't affect others
- **Concurrency**: Millions of lightweight processes
- **Fault Tolerance**: Automatic process restart
- **Scalability**: Horizontal scaling across nodes

### Process Supervision Tree

```
Application Supervisor
│
├── Repo Supervisor
│   └── Database Connection Pool
│
├── Task Supervisor
│   └── Background Tasks
│
└── Service Supervisors
    ├── AccountsService Supervisor
    ├── ProductsService Supervisor
    └── TransactionsService Supervisor
```

---

## Domain Architecture

### Domain-Driven Design (DDD)

#### 1. Accounts Domain

**Service**: `AccountsService`

**Components**:
- `AccountsService.Accounts` - Business logic
- `AccountsService.User` - Schema
- `AccountsService.Repo` - Database access

**Responsibilities**:
- User management
- Authentication logic
- User profile management

#### 2. Products Domain

**Service**: `ProductsService`

**Components**:
- `ProductsService.Products` - Business logic
- `ProductsService.Product` - Schema

**Responsibilities**:
- Product management
- Product search
- Product categorization

#### 3. Transactions Domain

**Service**: `TransactionsService`

**Components**:
- `TransactionsService.Transactions` - Business logic
- `TransactionsService.Transaction` - Schema
- `TransactionsService.LedgerClient` - Ledger integration

**Responsibilities**:
- Transaction recording
- Transaction history
- Ledger synchronization

---

## Data Flow

### Transaction Recording Flow

```
1. Phoenix API: POST /api/v1/transactions
   │
   ▼
2. TransactionsService: create_transaction()
   │
   ▼
3. Ecto Repository: save to PostgreSQL
   │
   ▼
4. LedgerClient: record in Erlang ledger
   │
   ▼
5. PubSub: broadcast transaction event
   │
   ▼
6. Phoenix Channels: notify connected clients
```

---

## Integration Points

### 1. Phoenix Integration

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

### 2. Erlang Ledger Integration

**Shared BEAM VM**:
- Same Erlang/OTP runtime
- Direct GenServer communication
- Shared process supervision

**Communication Pattern**:
```elixir
# Call Erlang GenServer from Elixir
:ledger_server.record_transaction(transaction_data)
```

### 3. PostgreSQL Integration

**Ecto ORM**:
- Schema definitions
- Migrations
- Query building
- Connection pooling

---

## Process Patterns

### GenServer Pattern

**Use Case**: Stateful processes

**Example**: User cache, session management

### Agent Pattern

**Use Case**: Simple shared state

**Example**: Counters, configuration

### Task Pattern

**Use Case**: Concurrent computations

**Example**: Background jobs, parallel processing

### Supervisor Pattern

**Use Case**: Process supervision

**Example**: Service supervision, fault tolerance

---

## Performance Considerations

### Concurrency

**BEAM VM Advantages**:
- Millions of lightweight processes
- Preemptive scheduling
- Message passing concurrency
- No shared mutable state

### Database Optimization

**Query Optimization**:
- Database indexes
- Query planning
- Connection pooling
- Read replicas (future)

---

**This architecture focuses on Elixir services and BEAM VM. For Phoenix web framework architecture, see `docs/Services/phoenix/ARCHITECTURE.md`.**

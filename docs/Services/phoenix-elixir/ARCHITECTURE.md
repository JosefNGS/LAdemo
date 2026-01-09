# Phoenix & Elixir Architecture
## System Architecture for BitNexus Backend

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the complete architecture for Phoenix and Elixir integration into the BitNexus platform. Phoenix/Elixir will serve as the core backend framework, providing high-concurrency APIs, real-time features, and seamless integration with the Erlang/Elixir blockchain ledger.

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      BitNexus Platform                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────┐                                        │
│  │   Frontend Layer     │                                        │
│  │   React + TypeScript │                                        │
│  │   (Port 8000)        │                                        │
│  └──────────┬───────────┘                                        │
│             │                                                     │
│             │ HTTP/REST + WebSocket                              │
│             │                                                     │
│  ┌──────────▼──────────────────────────────────────────┐         │
│  │         Phoenix API Layer (Elixir)                 │         │
│  │  ┌──────────────────────────────────────────────┐   │         │
│  │  │  Phoenix Framework                           │   │         │
│  │  │  • HTTP Endpoints (REST API)                 │   │         │
│  │  │  • WebSocket Channels                        │   │         │
│  │  │  • LiveView (Admin Dashboards)               │   │         │
│  │  └──────────────────────────────────────────────┘   │         │
│  │  ┌──────────────────────────────────────────────┐   │         │
│  │  │  Business Logic Layer                         │   │         │
│  │  │  • Accounts Domain                            │   │         │
│  │  │  • Products Domain                            │   │         │
│  │  │  • Transactions Domain                        │   │         │
│  │  │  • Ledger Integration                         │   │         │
│  │  └──────────────────────────────────────────────┘   │         │
│  └──────────────────────────────────────────────────────┘         │
│             │                                                     │
│             │                                                     │
│  ┌──────────┴──────────────────────────────────────────┐         │
│  │         Data & Storage Layer                         │         │
│  │  ┌──────────────┐  ┌──────────────┐                │         │
│  │  │  PostgreSQL  │  │ Erlang Ledger│                │         │
│  │  │  (Ecto ORM)  │  │ (BEAM VM)    │                │         │
│  │  └──────────────┘  └──────────────┘                │         │
│  └──────────────────────────────────────────────────────┘         │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │         External Services Integration                     │     │
│  │  • Netlify Functions (gradual migration)                 │     │
│  │  • Go Services (high-performance endpoints)             │     │
│  │  • n8n Automation                                        │     │
│  └──────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│              Phoenix Application (bitnexus_api)               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────────────────────────────────────────┐     │
│  │           Web Layer (bitnexus_api_web)             │     │
│  │  ┌──────────────┐  ┌──────────────┐               │     │
│  │  │ Controllers  │  │  Channels    │               │     │
│  │  │ • REST API   │  │ • WebSocket  │               │     │
│  │  │ • JSON Views │  │ • Real-time  │               │     │
│  │  └──────────────┘  └──────────────┘               │     │
│  └─────────────────────────────────────────────────────┘     │
│                          │                                    │
│                          ▼                                    │
│  ┌─────────────────────────────────────────────────────┐     │
│  │         Business Logic Layer                        │     │
│  │  ┌──────────────┐  ┌──────────────┐               │     │
│  │  │  Accounts     │  │  Products     │               │     │
│  │  │  • User CRUD  │  │  • Product   │               │     │
│  │  │  • Auth       │  │    CRUD      │               │     │
│  │  └──────────────┘  └──────────────┘               │     │
│  │  ┌──────────────┐  ┌──────────────┐               │     │
│  │  │ Transactions │  │  Ledger       │               │     │
│  │  │ • Record     │  │  • Integration│               │     │
│  │  │ • Query      │  │  • Sync       │               │     │
│  │  └──────────────┘  └──────────────┘               │     │
│  └─────────────────────────────────────────────────────┘     │
│                          │                                    │
│                          ▼                                    │
│  ┌─────────────────────────────────────────────────────┐     │
│  │         Data Access Layer (Ecto)                     │     │
│  │  • Repositories                                      │     │
│  │  • Migrations                                        │     │
│  │  • Queries                                          │     │
│  └─────────────────────────────────────────────────────┘     │
│                          │                                    │
│                          ▼                                    │
│  ┌─────────────────────────────────────────────────────┐     │
│  │         Database Layer                               │     │
│  │  • PostgreSQL (Primary)                              │     │
│  │  • Erlang Ledger (BEAM VM)                           │     │
│  └─────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

---

## Domain Architecture

### Domain-Driven Design (DDD)

The Phoenix application follows Domain-Driven Design principles:

#### 1. Accounts Domain

**Purpose**: User management and authentication

**Components**:
- `BitnexusApi.Accounts.User` - User schema
- `BitnexusApi.Accounts` - User context (business logic)
- `BitnexusApiWeb.Api.V1.UserController` - HTTP API
- `BitnexusApiWeb.Api.V1.UserView` - JSON serialization

**Responsibilities**:
- User registration and authentication
- User profile management
- Password hashing and security
- Session management

#### 2. Products Domain

**Purpose**: Product catalog management

**Components**:
- `BitnexusApi.Products.Product` - Product schema
- `BitnexusApi.Products` - Product context
- `BitnexusApiWeb.Api.V1.ProductController` - HTTP API
- `BitnexusApiWeb.Api.V1.ProductView` - JSON serialization

**Responsibilities**:
- Product CRUD operations
- Product search and filtering
- Product categorization
- Product metadata management

#### 3. Transactions Domain

**Purpose**: Transaction recording and management

**Components**:
- `BitnexusApi.Transactions.Transaction` - Transaction schema
- `BitnexusApi.Transactions` - Transaction context
- `BitnexusApiWeb.Api.V1.TransactionController` - HTTP API
- `BitnexusApiWeb.TransactionChannel` - Real-time updates

**Responsibilities**:
- Transaction recording
- Transaction history
- Transaction validation
- Real-time transaction updates

#### 4. Ledger Domain

**Purpose**: Integration with Erlang/Elixir blockchain ledger

**Components**:
- `BitnexusApi.Ledger.LedgerClient` - Ledger client
- `BitnexusApi.Ledger.LedgerService` - Ledger service

**Responsibilities**:
- Communication with Erlang ledger
- Transaction synchronization
- Ledger state queries
- Consensus participation

---

## Request Flow

### HTTP Request Flow

```
1. Frontend Request
   │
   ▼
2. Phoenix Router (router.ex)
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
5. Context (Business Logic)
   │
   ▼
6. Repository (Ecto)
   │
   ▼
7. PostgreSQL Database
   │
   ▼
8. Response Serialization (View)
   │
   ▼
9. JSON Response to Frontend
```

### WebSocket Connection Flow

```
1. Frontend WebSocket Connection
   │
   ▼
2. UserSocket (user_socket.ex)
   │  • Connection Authorization
   │
   ▼
3. Channel Join (transaction_channel.ex)
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

## Concurrency Model

### BEAM VM Processes

**Process Architecture**:
- **One process per request** - Isolated request handling
- **One process per channel** - Isolated WebSocket connections
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
├── PubSub Supervisor
│   └── PubSub Processes
│
└── Endpoint Supervisor
    └── HTTP/WebSocket Handlers
        ├── Request Processes (per request)
        └── Channel Processes (per connection)
```

---

## Data Flow

### Transaction Recording Flow

```
1. Frontend: User creates transaction
   │
   ▼
2. Phoenix API: POST /api/v1/transactions
   │
   ▼
3. Transaction Controller: validate and authorize
   │
   ▼
4. Transactions Context: business logic validation
   │
   ▼
5. Ecto Repository: save to PostgreSQL
   │
   ▼
6. Ledger Client: record in Erlang ledger
   │
   ▼
7. PubSub: broadcast transaction event
   │
   ▼
8. WebSocket Channels: notify connected clients
   │
   ▼
9. Frontend: receive real-time update
```

### Real-Time Update Flow

```
1. Database Change Event
   │
   ▼
2. Ecto Changeset Callback
   │
   ▼
3. PubSub Publish
   │
   ▼
4. Channel Process Receives Event
   │
   ▼
5. Channel Broadcasts to Clients
   │
   ▼
6. Frontend Receives Update
```

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

**Database Schema**:
- Users table
- Products table
- Transactions table
- Ledger sync table

### 4. Netlify Functions Integration

**Gradual Migration**:
- Phase 1: Coexistence
- Phase 2: Feature-by-feature migration
- Phase 3: Complete migration

**API Compatibility**:
- Maintain same endpoint structure
- Maintain same response format
- Maintain same authentication

---

## Security Architecture

### Authentication

**JWT Tokens**:
- Token generation on login
- Token validation on each request
- Token expiration handling
- Refresh token support

### Authorization

**Role-Based Access Control (RBAC)**:
- User roles: `admin`, `user`, `affiliate`
- Permission checking in controllers
- Resource-level authorization

### Data Protection

**Encryption**:
- Password hashing (bcrypt)
- Sensitive data encryption
- TLS/SSL for transport

**Validation**:
- Input validation (Ecto changesets)
- SQL injection prevention (Ecto)
- XSS prevention (Phoenix)

---

## Scalability Architecture

### Horizontal Scaling

**Multi-Node Deployment**:
- Multiple Phoenix nodes
- Shared PostgreSQL database
- Distributed PubSub
- Load balancer (Nginx/HAProxy)

### Vertical Scaling

**Process Optimization**:
- Connection pooling
- Query optimization
- Caching strategies
- Resource monitoring

### Caching Strategy

**Cache Layers**:
- Application-level caching (ETS)
- Database query caching
- CDN caching (static assets)

---

## Monitoring & Observability

### Health Checks

**Endpoints**:
- `/health` - Service health
- `/metrics` - Prometheus metrics
- `/ready` - Readiness check

### Logging

**Structured Logging**:
- Request logging
- Error logging
- Performance logging
- Audit logging

### Metrics

**Key Metrics**:
- Request rate
- Response time
- Error rate
- Database connection pool
- Process count
- Memory usage

---

## Deployment Architecture

### Container Architecture

```
┌─────────────────────────────────────────┐
│         Docker Container                │
│  ┌───────────────────────────────────┐  │
│  │   Phoenix Application             │  │
│  │   • HTTP Server (Port 4000)       │  │
│  │   • WebSocket Server              │  │
│  │   • BEAM VM Processes             │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Production Deployment

**Infrastructure**:
- Docker containers
- Kubernetes orchestration (future)
- Load balancer
- PostgreSQL cluster
- Monitoring stack

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

### Real-Time Performance

**WebSocket Optimization**:
- Channel process pooling
- Message batching
- Compression
- Connection monitoring

---

## Future Enhancements

### Planned Features

1. **Phoenix LiveView** - Server-rendered reactive UI
2. **Distributed Phoenix** - Multi-node clustering
3. **GraphQL API** - Alternative to REST
4. **Event Sourcing** - Event-driven architecture
5. **CQRS** - Command Query Responsibility Segregation

---

**This architecture document is CRITICAL for understanding the Phoenix/Elixir implementation. Refer to it when making architectural decisions.**

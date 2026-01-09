# Elixir Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Elixir services into the existing BitNexus system. Elixir services handle business logic and integrate with Phoenix, Erlang ledger, and PostgreSQL.

---

## Integration Strategy

### Phase 1: Foundation (Weeks 1-2)
- Set up Elixir service structure
- Configure development environment
- Set up PostgreSQL connection (Ecto)
- Create supervision trees
- No frontend changes required

### Phase 2: Core Services (Weeks 3-4)
- Implement Accounts service
- Implement Products service
- Implement Transactions service
- Set up database migrations
- Integrate with Phoenix

### Phase 3: Integration (Weeks 5-6)
- Integrate with Phoenix (web layer)
- Integrate with Erlang ledger
- Set up inter-service communication
- Implement process monitoring

### Phase 4: Optimization (Weeks 7-8)
- Performance optimization
- Process pool tuning
- Database query optimization
- Production deployment

---

## Phoenix Integration

### Calling from Phoenix

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

## Erlang Ledger Integration

### Shared BEAM VM

**Architecture**: Elixir services and Erlang ledger run in the same BEAM VM

**Benefits**:
- Direct process communication
- Shared supervision tree
- No network overhead
- Atomic operations

### Ledger Client Implementation

**File**: `lib/transactions_service/ledger_client.ex`

```elixir
defmodule TransactionsService.LedgerClient do
  def record_transaction(transaction_data) do
    # Call Erlang GenServer directly (shared BEAM VM)
    :ledger_server.record_transaction(transaction_data)
  end

  def get_transaction_history(user_id) do
    :ledger_server.get_history(user_id)
  end
end
```

---

## Database Integration

### Shared PostgreSQL Database

**Configuration**: Elixir services use same PostgreSQL database

**Ecto Config**: `config/dev.exs`
```elixir
config :accounts_service, AccountsService.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

---

## Inter-Service Communication

### Service-to-Service Calls

**Pattern**: Services call each other via GenServer or direct function calls

```elixir
# AccountsService calls ProductsService
defmodule AccountsService.Accounts do
  alias ProductsService.Products
  
  def get_user_products(user_id) do
    Products.list_products_by_user(user_id)
  end
end
```

---

## Deployment Integration

### Docker Compose

**File**: `dev_server/docker-compose.yml`

```yaml
services:
  accounts_service:
    build: ./backend/elixir/accounts_service
    depends_on:
      - db

  products_service:
    build: ./backend/elixir/products_service
    depends_on:
      - db

  db:
    image: postgres:14-alpine
```

---

**This guide focuses on Elixir services integration. For Phoenix integration, see `docs/Services/phoenix/INTEGRATION_GUIDE.md`.**

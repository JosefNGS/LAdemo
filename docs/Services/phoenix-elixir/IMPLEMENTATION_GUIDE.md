# Phoenix & Elixir Implementation Guide
## Complete Implementation Guide for BitNexus Backend

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Implementation Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides a complete implementation roadmap for integrating Phoenix and Elixir into the BitNexus platform. Phoenix/Elixir will serve as the core backend framework for high-concurrency APIs, real-time features, and integration with the Erlang/Elixir blockchain ledger.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Architecture Overview](#architecture-overview)
3. [Setup & Installation](#setup--installation)
4. [Project Structure](#project-structure)
5. [Core Implementation](#core-implementation)
6. [API Development](#api-development)
7. [Database Integration](#database-integration)
8. [Real-Time Features](#real-time-features)
9. [Integration with Existing System](#integration-with-existing-system)
10. [Testing Strategy](#testing-strategy)
11. [Deployment](#deployment)
12. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

### Required Knowledge
- **Elixir** programming language
- **Phoenix** web framework
- **BEAM VM** concurrency model
- **PostgreSQL** database
- **RESTful API** design
- **WebSocket** protocols

### Required Tools
- **Elixir** (1.15+)
- **Erlang/OTP** (26+)
- **Phoenix** (1.7+)
- **PostgreSQL** (14+)
- **Docker** (for containerization)
- **Git** (for version control)

### Development Environment
- **Operating System**: Linux, macOS, or Windows (WSL)
- **Code Editor**: VS Code with ElixirLS extension
- **Database**: PostgreSQL instance (local or remote)
- **Container Runtime**: Docker Desktop

---

## Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    BitNexus Platform                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────┐      ┌──────────────────┐         │
│  │   Frontend       │      │   Phoenix API     │         │
│  │   (React App)    │◄─────┤   (Elixir)       │         │
│  │                  │      │                  │         │
│  └──────────────────┘      └──────────────────┘         │
│         │                          │                     │
│         │                          │                     │
│  ┌──────┴──────────┐      ┌───────┴──────────┐         │
│  │  CDN Services   │      │  Backend Stack   │         │
│  │  • React ESM    │      │  • Phoenix API   │         │
│  │  • Tailwind CSS │      │  • Erlang Ledger │         │
│  │  • Recharts     │      │  • PostgreSQL    │         │
│  └─────────────────┘      │  • Go Services   │         │
│                            └──────────────────┘         │
│                                                           │
│  ┌──────────────────────────────────────────────┐       │
│  │         Real-Time Features                     │       │
│  │  • Phoenix Channels (WebSocket)               │       │
│  │  • LiveView (Admin Dashboards)                │       │
│  └──────────────────────────────────────────────┘       │
│                                                           │
│  ┌──────────────────────────────────────────────┐       │
│  │         Blockchain Integration                │       │
│  │  • Erlang/Elixir Ledger (BEAM VM)            │       │
│  │  • Shared Process Architecture               │       │
│  └──────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Framework**: Phoenix 1.7+
- **Language**: Elixir 1.15+
- **Runtime**: BEAM VM (Erlang/OTP 26+)
- **Database**: PostgreSQL 14+
- **ORM**: Ecto 3.10+
- **Testing**: ExUnit
- **Code Quality**: Credo, Dialyxir
- **Deployment**: Docker, Kubernetes (future)

---

## Setup & Installation

### Step 1: Install Elixir and Erlang

**macOS (Homebrew)**:
```bash
brew install elixir
```

**Linux (Ubuntu/Debian)**:
```bash
# Install Erlang
sudo apt-get update
sudo apt-get install erlang erlang-dev

# Install Elixir
sudo apt-get install elixir
```

**Windows (WSL)**:
```bash
# Use same commands as Linux
```

**Verify Installation**:
```bash
elixir --version
iex --version
```

### Step 2: Install Phoenix

```bash
mix archive.install hex phx_new
```

**Verify Installation**:
```bash
mix phx.new --version
```

### Step 3: Create Phoenix Application

```bash
cd backend
mix phx.new phoenix-elixir/bitnexus_api --app bitnexus_api --database postgres
cd phoenix-elixir/bitnexus_api
```

### Step 4: Configure Database

Edit `config/dev.exs`:
```elixir
config :bitnexus_api, BitnexusApi.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev",
  stacktrace: true,
  show_sent_queries: :query
```

### Step 5: Create Database

```bash
mix ecto.create
mix ecto.migrate
```

### Step 6: Start Phoenix Server

```bash
mix phx.server
```

**Server will start at**: `http://localhost:4000`

---

## Project Structure

### Standard Phoenix Structure

```
backend/phoenix-elixir/bitnexus_api/
├── lib/
│   ├── bitnexus_api/              # Application module
│   │   ├── application.ex         # Application supervisor
│   │   └── repo.ex                 # Database repository
│   ├── bitnexus_api_web/          # Web layer
│   │   ├── controllers/           # HTTP controllers
│   │   │   ├── page_controller.ex
│   │   │   ├── api/                # API controllers
│   │   │   │   ├── v1/             # API version 1
│   │   │   │   │   ├── auth_controller.ex
│   │   │   │   │   ├── user_controller.ex
│   │   │   │   │   ├── product_controller.ex
│   │   │   │   │   └── transaction_controller.ex
│   │   ├── channels/              # WebSocket channels
│   │   │   ├── user_socket.ex
│   │   │   ├── transaction_channel.ex
│   │   │   └── notification_channel.ex
│   │   ├── views/                 # JSON views
│   │   │   ├── error_view.ex
│   │   │   └── api/
│   │   │       └── v1/
│   │   │           ├── user_view.ex
│   │   │           └── product_view.ex
│   │   ├── router.ex              # Routes
│   │   └── endpoint.ex            # Endpoint configuration
│   └── bitnexus_api/              # Business logic
│       ├── accounts/              # Account domain
│       │   ├── user.ex
│       │   └── account.ex
│       ├── products/              # Product domain
│       │   ├── product.ex
│       │   └── product_service.ex
│       ├── transactions/          # Transaction domain
│       │   ├── transaction.ex
│       │   └── transaction_service.ex
│       └── ledger/                # Ledger integration
│           ├── ledger_client.ex
│           └── ledger_service.ex
├── config/                        # Configuration
│   ├── config.ex
│   ├── dev.exs
│   ├── test.exs
│   └── prod.exs
├── priv/
│   └── repo/
│       └── migrations/           # Database migrations
│           ├── 20260101000000_create_users.exs
│           └── 20260101000001_create_products.exs
├── test/                          # Tests
│   ├── bitnexus_api_web/
│   │   ├── controllers/
│   │   └── channels/
│   └── support/
│       └── conn_case.ex
├── mix.exs                        # Mix configuration
└── README.md                      # Project documentation
```

---

## Core Implementation

### 1. Application Module

**File**: `lib/bitnexus_api/application.ex`

```elixir
defmodule BitnexusApi.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      BitnexusApi.Repo,
      {Phoenix.PubSub, name: BitnexusApi.PubSub},
      BitnexusApiWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: BitnexusApi.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    BitnexusApiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
```

### 2. Router Configuration

**File**: `lib/bitnexus_api_web/router.ex`

```elixir
defmodule BitnexusApiWeb.Router do
  use BitnexusApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :protect_from_forgery
  end

  pipeline :authenticated do
    plug BitnexusApiWeb.Plugs.Authenticate
  end

  scope "/api/v1", BitnexusApiWeb.Api.V1, as: :api_v1 do
    pipe_through :api

    # Public endpoints
    post "/auth/login", AuthController, :login
    post "/auth/register", AuthController, :register

    # Authenticated endpoints
    pipe_through :authenticated

    resources "/users", UserController, except: [:new, :edit]
    resources "/products", ProductController, except: [:new, :edit]
    resources "/transactions", TransactionController, except: [:new, :edit]
  end

  scope "/", BitnexusApiWeb do
    pipe_through :api

    get "/health", HealthController, :check
    get "/metrics", MetricsController, :index
  end

  # WebSocket channels
  channel "/socket", BitnexusApiWeb.UserSocket
end
```

### 3. Health Check Endpoint

**File**: `lib/bitnexus_api_web/controllers/health_controller.ex`

```elixir
defmodule BitnexusApiWeb.HealthController do
  use BitnexusApiWeb, :controller

  def check(conn, _params) do
    case BitnexusApi.Repo.query("SELECT 1") do
      {:ok, _} ->
        json(conn, %{
          status: "healthy",
          timestamp: DateTime.utc_now(),
          database: "connected"
        })
      {:error, _} ->
        conn
        |> put_status(:service_unavailable)
        |> json(%{
          status: "unhealthy",
          timestamp: DateTime.utc_now(),
          database: "disconnected"
        })
    end
  end
end
```

---

## API Development

### 1. Controller Pattern

**File**: `lib/bitnexus_api_web/controllers/api/v1/user_controller.ex`

```elixir
defmodule BitnexusApiWeb.Api.V1.UserController do
  use BitnexusApiWeb, :controller

  alias BitnexusApi.Accounts
  alias BitnexusApiWeb.Api.V1.UserView

  action_fallback BitnexusApiWeb.FallbackController

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> render("show.json", user: user)
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, _user} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
```

### 2. View Pattern

**File**: `lib/bitnexus_api_web/views/api/v1/user_view.ex`

```elixir
defmodule BitnexusApiWeb.Api.V1.UserView do
  use BitnexusApiWeb, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, __MODULE__, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, __MODULE__, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      name: user.name,
      inserted_at: user.inserted_at,
      updated_at: user.updated_at
    }
  end
end
```

### 3. Context Pattern (Business Logic)

**File**: `lib/bitnexus_api/accounts.ex`

```elixir
defmodule BitnexusApi.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias BitnexusApi.Repo
  alias BitnexusApi.Accounts.User

  def list_users do
    Repo.all(User)
  end

  def get_user!(id), do: Repo.get!(User, id)

  def get_user(id), do: Repo.get(User, id)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end
end
```

---

## Database Integration

### 1. Schema Definition

**File**: `lib/bitnexus_api/accounts/user.ex`

```elixir
defmodule BitnexusApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :name, :password_hash])
    |> validate_required([:email, :name])
    |> validate_format(:email, ~r/^[^\s]+@[^\s]+$/)
    |> unique_constraint(:email)
  end
end
```

### 2. Migration

**File**: `priv/repo/migrations/20260101000000_create_users.exs`

```elixir
defmodule BitnexusApi.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :name, :string, null: false
      add :password_hash, :string, null: false

      timestamps()
    end

    create unique_index(:users, [:email])
    create index(:users, [:email])
  end
end
```

### 3. Run Migrations

```bash
mix ecto.migrate
```

---

## Real-Time Features

### 1. User Socket

**File**: `lib/bitnexus_api_web/channels/user_socket.ex`

```elixir
defmodule BitnexusApiWeb.UserSocket do
  use Phoenix.Socket

  channel "transaction:*", BitnexusApiWeb.TransactionChannel
  channel "notification:*", BitnexusApiWeb.NotificationChannel

  @impl true
  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end

  @impl true
  def id(_socket), do: nil
end
```

### 2. Transaction Channel

**File**: `lib/bitnexus_api_web/channels/transaction_channel.ex`

```elixir
defmodule BitnexusApiWeb.TransactionChannel do
  use BitnexusApiWeb, :channel

  def join("transaction:" <> user_id, _payload, socket) do
    if authorized?(socket, user_id) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("new_transaction", payload, socket) do
    broadcast(socket, "new_transaction", payload)
    {:noreply, socket}
  end

  defp authorized?(socket, user_id) do
    # Implement authorization logic
    true
  end
end
```

---

## Integration with Existing System

### 1. Frontend Integration

**Update Frontend API Client**:
```typescript
// frontend/src/services/apiService.ts
const API_BASE_URL = process.env.PHOENIX_API_URL || 'http://localhost:4000/api/v1';

export const apiClient = {
  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

### 2. Erlang Ledger Integration

**File**: `lib/bitnexus_api/ledger/ledger_client.ex`

```elixir
defmodule BitnexusApi.Ledger.LedgerClient do
  @moduledoc """
  Client for interacting with Erlang/Elixir ledger service.
  """

  def record_transaction(transaction_data) do
    # Call Erlang/Elixir ledger GenServer
    :ledger_server.record_transaction(transaction_data)
  end

  def get_transaction_history(user_id) do
    :ledger_server.get_history(user_id)
  end
end
```

### 3. Migration from Netlify Functions

**Gradual Migration Strategy**:
1. **Phase 1**: Implement Phoenix endpoints alongside Netlify functions
2. **Phase 2**: Route new features to Phoenix endpoints
3. **Phase 3**: Migrate existing endpoints one by one
4. **Phase 4**: Deprecate Netlify functions

---

## Testing Strategy

### 1. Unit Tests

**File**: `test/bitnexus_api/accounts_test.exs`

```elixir
defmodule BitnexusApi.AccountsTest do
  use BitnexusApi.DataCase

  alias BitnexusApi.Accounts

  describe "users" do
    test "create_user/1 creates a user" do
      assert {:ok, user} = Accounts.create_user(%{
        email: "test@example.com",
        name: "Test User",
        password_hash: "hashed_password"
      })
      assert user.email == "test@example.com"
    end
  end
end
```

### 2. Controller Tests

**File**: `test/bitnexus_api_web/controllers/api/v1/user_controller_test.exs`

```elixir
defmodule BitnexusApiWeb.Api.V1.UserControllerTest do
  use BitnexusApiWeb.ConnCase

  test "GET /api/v1/users", %{conn: conn} do
    conn = get(conn, ~p"/api/v1/users")
    assert json_response(conn, 200)["data"] != []
  end
end
```

### 3. Channel Tests

**File**: `test/bitnexus_api_web/channels/transaction_channel_test.exs`

```elixir
defmodule BitnexusApiWeb.TransactionChannelTest do
  use BitnexusApiWeb.ChannelCase

  test "broadcasts are pushed to the client", %{socket: socket} do
    push(socket, "new_transaction", %{"amount" => 100})
    assert_broadcast "new_transaction", %{"amount" => 100}
  end
end
```

---

## Deployment

### 1. Docker Configuration

**File**: `backend/phoenix-elixir/docker/Dockerfile`

```dockerfile
FROM elixir:1.15-alpine AS build

WORKDIR /app

RUN mix local.hex --force && \
    mix local.rebar --force

COPY mix.exs mix.lock ./
RUN mix deps.get --only prod

COPY . .
RUN mix compile && \
    mix release

FROM alpine:latest

RUN apk add --no-cache openssl ncurses-libs

WORKDIR /app

COPY --from=build /app/_build/prod/rel/bitnexus_api ./

CMD ["./bin/bitnexus_api", "start"]
```

### 2. Docker Compose

**File**: `backend/phoenix-elixir/docker/docker-compose.yml`

```yaml
version: '3.8'

services:
  phoenix_api:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/bitnexus_prod
      - SECRET_KEY_BASE=${SECRET_KEY_BASE}
    depends_on:
      - db

  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=bitnexus_prod
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 3. Production Configuration

**File**: `config/prod.exs`

```elixir
config :bitnexus_api, BitnexusApiWeb.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [host: System.get_env("HOST"), port: 443, scheme: "https"],
  secret_key_base: System.get_env("SECRET_KEY_BASE")

config :bitnexus_api, BitnexusApi.Repo,
  url: System.get_env("DATABASE_URL"),
  pool_size: 10
```

---

## Monitoring & Maintenance

### 1. Health Checks

**Endpoint**: `GET /health`

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2026-01-01T00:00:00Z",
  "database": "connected",
  "version": "1.0.0"
}
```

### 2. Metrics Endpoint

**Endpoint**: `GET /metrics`

**Response**: Prometheus format metrics

### 3. Logging

**Structured Logging**:
```elixir
require Logger

Logger.info("User created", user_id: user.id, email: user.email)
```

### 4. Error Tracking

**Integration with Sentry** (optional):
```elixir
config :sentry,
  dsn: System.get_env("SENTRY_DSN"),
  environment_name: Mix.env()
```

---

## Next Steps

1. **Set up development environment**
2. **Create initial Phoenix application**
3. **Implement core API endpoints**
4. **Set up database migrations**
5. **Implement authentication**
6. **Add real-time features**
7. **Integrate with Erlang ledger**
8. **Set up deployment pipeline**
9. **Performance testing**
10. **Production deployment**

---

**This guide is CRITICAL for Phoenix/Elixir implementation. Follow it step-by-step for successful integration.**

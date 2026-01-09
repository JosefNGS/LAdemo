# Phoenix Implementation Guide
## Complete Implementation Guide for Phoenix Web Framework

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Implementation Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides a complete implementation roadmap for integrating Phoenix web framework into the BitNexus platform. Phoenix will serve as the HTTP API and WebSocket layer, handling all web requests and real-time features.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Architecture Overview](#architecture-overview)
3. [Setup & Installation](#setup--installation)
4. [Project Structure](#project-structure)
5. [Core Implementation](#core-implementation)
6. [API Development](#api-development)
7. [Real-Time Features](#real-time-features)
8. [Integration with Elixir Services](#integration-with-elixir-services)
9. [Testing Strategy](#testing-strategy)
10. [Deployment](#deployment)

---

## Prerequisites

### Required Knowledge
- **Phoenix** web framework
- **Elixir** programming language (basic)
- **RESTful API** design
- **WebSocket** protocols
- **HTTP** protocols

### Required Tools
- **Elixir** (1.15+)
- **Erlang/OTP** (26+)
- **Phoenix** (1.7+)
- **PostgreSQL** (14+)
- **Docker** (for containerization)

---

## Architecture Overview

### Phoenix Layer Architecture

```
┌─────────────────────────────────────────┐
│         Phoenix Web Framework           │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   HTTP Layer                      │ │
│  │   • Controllers                   │ │
│  │   • Views (JSON)                  │ │
│  │   • Router                        │ │
│  └───────────────────────────────────┘ │
│              │                          │
│              ▼                          │
│  ┌───────────────────────────────────┐ │
│  │   WebSocket Layer                 │ │
│  │   • Channels                      │ │
│  │   • UserSocket                    │ │
│  │   • Real-time Updates             │ │
│  └───────────────────────────────────┘ │
│              │                          │
│              ▼                          │
│  ┌───────────────────────────────────┐ │
│  │   Elixir Services Layer            │ │
│  │   • Business Logic                │ │
│  │   • Domain Services               │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## Setup & Installation

### Step 1: Install Phoenix

```bash
mix archive.install hex phx_new
```

### Step 2: Create Phoenix Application

```bash
cd backend
mix phx.new phoenix/bitnexus_api \
  --app bitnexus_api \
  --database postgres \
  --no-html \
  --no-assets
```

### Step 3: Configure Database

Edit `config/dev.exs`:
```elixir
config :bitnexus_api, BitnexusApi.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

### Step 4: Create Database

```bash
mix ecto.create
mix ecto.migrate
```

### Step 5: Start Server

```bash
mix phx.server
```

**Server running at**: `http://localhost:4000`

---

## Project Structure

```
backend/phoenix/bitnexus_api/
├── lib/
│   ├── bitnexus_api/              # Application module
│   │   ├── application.ex
│   │   └── repo.ex
│   └── bitnexus_api_web/          # Web layer
│       ├── controllers/           # HTTP controllers
│       │   └── api/
│       │       └── v1/
│       │           ├── auth_controller.ex
│       │           ├── user_controller.ex
│       │           └── product_controller.ex
│       ├── channels/              # WebSocket channels
│       │   ├── user_socket.ex
│       │   └── transaction_channel.ex
│       ├── views/                 # JSON views
│       │   └── api/
│       │       └── v1/
│       │           └── user_view.ex
│       └── router.ex              # Routes
├── config/
├── priv/repo/migrations/
└── test/
```

---

## Core Implementation

### 1. Router Configuration

**File**: `lib/bitnexus_api_web/router.ex`

```elixir
defmodule BitnexusApiWeb.Router do
  use BitnexusApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :authenticated do
    plug BitnexusApiWeb.Plugs.Authenticate
  end

  scope "/api/v1", BitnexusApiWeb.Api.V1, as: :api_v1 do
    pipe_through :api

    # Public endpoints
    post "/auth/login", AuthController, :login

    # Authenticated endpoints
    pipe_through :authenticated
    resources "/users", UserController, except: [:new, :edit]
  end

  scope "/", BitnexusApiWeb do
    pipe_through :api
    get "/health", HealthController, :check
  end

  # WebSocket channels
  channel "/socket", BitnexusApiWeb.UserSocket
end
```

### 2. Controller Pattern

**File**: `lib/bitnexus_api_web/controllers/api/v1/user_controller.ex`

```elixir
defmodule BitnexusApiWeb.Api.V1.UserController do
  use BitnexusApiWeb, :controller

  alias BitnexusApi.Elixir.AccountsService
  alias BitnexusApiWeb.Api.V1.UserView

  def index(conn, _params) do
    users = AccountsService.list_users()
    render(conn, "index.json", users: users)
  end

  def show(conn, %{"id" => id}) do
    user = AccountsService.get_user!(id)
    render(conn, "show.json", user: user)
  end
end
```

### 3. View Pattern

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
      name: user.name
    }
  end
end
```

---

## Real-Time Features

### 1. User Socket

**File**: `lib/bitnexus_api_web/channels/user_socket.ex`

```elixir
defmodule BitnexusApiWeb.UserSocket do
  use Phoenix.Socket

  channel "transaction:*", BitnexusApiWeb.TransactionChannel

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
    {:ok, socket}
  end

  def handle_in("new_transaction", payload, socket) do
    broadcast(socket, "new_transaction", payload)
    {:noreply, socket}
  end
end
```

---

## Integration with Elixir Services

### Calling Elixir Services from Phoenix

**Pattern**: Phoenix controllers call Elixir services for business logic

```elixir
# In Phoenix Controller
defmodule BitnexusApiWeb.Api.V1.UserController do
  # Call Elixir service
  alias BitnexusApi.Elixir.AccountsService
  
  def create(conn, %{"user" => user_params}) do
    case AccountsService.create_user(user_params) do
      {:ok, user} -> render(conn, "show.json", user: user)
      {:error, changeset} -> render_error(conn, changeset)
    end
  end
end
```

---

## Testing Strategy

### Controller Tests

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

---

## Deployment

### Docker Configuration

**File**: `backend/phoenix/docker/Dockerfile`

```dockerfile
FROM elixir:1.15-alpine AS build

WORKDIR /app

RUN mix local.hex --force && mix local.rebar --force

COPY mix.exs mix.lock ./
RUN mix deps.get --only prod

COPY . .
RUN mix compile && mix release

FROM alpine:latest

RUN apk add --no-cache openssl ncurses-libs

WORKDIR /app

COPY --from=build /app/_build/prod/rel/bitnexus_api ./

CMD ["./bin/bitnexus_api", "start"]
```

---

**This guide focuses on Phoenix web framework. For Elixir business logic, see `docs/Services/elixir/IMPLEMENTATION_GUIDE.md`.**

# Phoenix Setup Guide
## Quick Start Guide for Phoenix Development

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Setup Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Quick Start

### Prerequisites Check

```bash
# Check Elixir version (1.15+ required)
elixir --version

# Check Erlang version (26+ required)
erl -version

# Check Phoenix installation
mix phx.new --version
```

### 5-Minute Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Create Phoenix application
mix phx.new phoenix/bitnexus_api --app bitnexus_api --database postgres --no-html --no-assets

# 3. Navigate to application
cd phoenix/bitnexus_api

# 4. Install dependencies
mix deps.get

# 5. Create database
mix ecto.create

# 6. Run migrations
mix ecto.migrate

# 7. Start server
mix phx.server
```

**Server running at**: `http://localhost:4000`

---

## Detailed Setup

### Step 1: Install Phoenix

```bash
mix archive.install hex phx_new
```

### Step 2: Create Application

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

---

## Development Tools

### Recommended VS Code Extensions

1. **ElixirLS** - Elixir language server
2. **Phoenix Framework** - Phoenix snippets

### Useful Mix Tasks

```bash
# Generate new controller
mix phx.gen.json Api V1 User users email:string name:string

# Run tests
mix test

# Format code
mix format
```

---

## Next Steps

1. **Read Implementation Guide**: `IMPLEMENTATION_GUIDE.md`
2. **Read Architecture Doc**: `ARCHITECTURE.md`
3. **Read Integration Guide**: `INTEGRATION_GUIDE.md`
4. **Start Development**: Follow implementation guide

---

**This setup guide gets you started with Phoenix. For Elixir services setup, see `docs/Services/elixir/SETUP_GUIDE.md`.**

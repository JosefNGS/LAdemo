# Elixir Setup Guide
## Quick Start Guide for Elixir Services Development

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
```

### 5-Minute Setup

```bash
# 1. Navigate to backend/elixir directory
cd backend/elixir

# 2. Create Elixir service
mix new accounts_service --sup

# 3. Navigate to service
cd accounts_service

# 4. Add Ecto dependency to mix.exs
# Edit mix.exs and add: {:ecto_sql, "~> 3.10"}, {:postgrex, "~> 0.17"}

# 5. Install dependencies
mix deps.get

# 6. Configure database (edit config/dev.exs)
# 7. Create database
mix ecto.create

# 8. Run migrations
mix ecto.migrate

# 9. Start service
mix run --no-halt
```

---

## Detailed Setup

### Step 1: Install Elixir

**macOS**:
```bash
brew install elixir
```

**Linux**:
```bash
sudo apt-get install elixir
```

### Step 2: Create Service

```bash
cd backend/elixir
mix new accounts_service --sup
cd accounts_service
```

### Step 3: Add Dependencies

**File**: `mix.exs`

```elixir
defp deps do
  [
    {:ecto_sql, "~> 3.10"},
    {:postgrex, "~> 0.17"}
  ]
end
```

### Step 4: Install Dependencies

```bash
mix deps.get
```

### Step 5: Configure Database

**File**: `config/dev.exs`

```elixir
config :accounts_service, AccountsService.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "bitnexus_dev"
```

### Step 6: Create Database

```bash
mix ecto.create
mix ecto.migrate
```

---

## Development Tools

### Recommended VS Code Extensions

1. **ElixirLS** - Elixir language server
2. **Credo** - Code quality

### Useful Mix Tasks

```bash
# Generate new migration
mix ecto.gen.migration add_users_table

# Run tests
mix test

# Check code quality
mix credo

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

**This setup guide gets you started with Elixir services. For Phoenix setup, see `docs/Services/phoenix/SETUP_GUIDE.md`.**

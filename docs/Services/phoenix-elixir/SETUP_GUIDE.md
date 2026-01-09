# Phoenix & Elixir Setup Guide
## Quick Start Guide for Phoenix/Elixir Development

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
mix phx.new phoenix-elixir/bitnexus_api --app bitnexus_api --database postgres

# 3. Navigate to application
cd phoenix-elixir/bitnexus_api

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

### Step 1: Install Elixir and Erlang

**macOS**:
```bash
brew install elixir
```

**Linux (Ubuntu/Debian)**:
```bash
sudo apt-get update
sudo apt-get install erlang erlang-dev elixir
```

**Windows (WSL)**:
```bash
# Same as Linux
```

**Verify**:
```bash
elixir --version
# Should show: Elixir 1.15.x
```

### Step 2: Install Phoenix

```bash
mix archive.install hex phx_new
```

**Verify**:
```bash
mix phx.new --version
# Should show: Phoenix installer v1.7.x
```

### Step 3: Create Application

```bash
cd backend
mix phx.new phoenix-elixir/bitnexus_api \
  --app bitnexus_api \
  --database postgres \
  --no-html \
  --no-assets
```

**Options Explained**:
- `--app bitnexus_api`: Application name
- `--database postgres`: Use PostgreSQL
- `--no-html`: API-only (no HTML views)
- `--no-assets`: No asset pipeline (API-only)

### Step 4: Configure Database

**Edit**: `config/dev.exs`

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
```

**Expected Output**:
```
The database for BitnexusApi.Repo has been created
```

### Step 6: Run Migrations

```bash
mix ecto.migrate
```

### Step 7: Start Development Server

```bash
mix phx.server
```

**Expected Output**:
```
[info] Running BitnexusApiWeb.Endpoint with cowboy 2.9.0 at 0.0.0.0:4000 (http)
[info] Access BitnexusApiWeb.Endpoint at http://localhost:4000
```

### Step 8: Verify Installation

**Open Browser**: `http://localhost:4000`

**Expected**: JSON response or API documentation

---

## Development Tools

### Recommended VS Code Extensions

1. **ElixirLS** - Elixir language server
2. **Phoenix Framework** - Phoenix snippets
3. **Credo** - Code quality

### Useful Mix Tasks

```bash
# Generate new controller
mix phx.gen.json Api V1 User users email:string name:string

# Generate new migration
mix ecto.gen.migration add_users_table

# Run tests
mix test

# Check code quality
mix credo

# Format code
mix format

# Static analysis
mix dialyzer
```

---

## Project Structure

```
backend/phoenix-elixir/bitnexus_api/
├── lib/
│   ├── bitnexus_api/              # Application code
│   └── bitnexus_api_web/          # Web layer
├── config/                        # Configuration
├── priv/repo/migrations/          # Database migrations
├── test/                          # Tests
├── mix.exs                        # Project file
└── README.md                      # Documentation
```

---

## Common Issues

### Issue: Database Connection Error

**Error**: `(Postgrex.Error) FATAL: database "bitnexus_dev" does not exist`

**Solution**:
```bash
mix ecto.create
```

### Issue: Port Already in Use

**Error**: `(Port) :eaddrinuse`

**Solution**:
```bash
# Find process using port 4000
lsof -i :4000

# Kill process
kill -9 <PID>

# Or change port in config/dev.exs
```

### Issue: Dependencies Not Found

**Error**: `Could not find Hex`

**Solution**:
```bash
mix local.hex --force
mix deps.get
```

---

## Next Steps

1. **Read Implementation Guide**: `IMPLEMENTATION_GUIDE.md`
2. **Read Architecture Doc**: `ARCHITECTURE.md`
3. **Read Integration Guide**: `INTEGRATION_GUIDE.md`
4. **Start Development**: Follow implementation guide

---

**This setup guide gets you started quickly. For detailed implementation, see IMPLEMENTATION_GUIDE.md.**

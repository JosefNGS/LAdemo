# Development Server Rules

**Source**: `docs/Core Documentation/STRUCTURE.md` and `docs/Setup & Configuration/DOCKER_SETUP.md`

## Critical Rules

### Development Server Location
- **ALL development server files MUST be in**: `dev_server/` folder
- **Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\dev_server\`
- **NO development server files in root or other locations**

### File Organization
- **Dockerfile**: `dev_server/Dockerfile` - Docker container definition
- **docker-compose.yml**: `dev_server/docker-compose.yml` - Multi-service configuration
- **.dockerignore**: `dev_server/.dockerignore` - Files to exclude
- **docker-entrypoint.sh**: `dev_server/docker-entrypoint.sh` - Container entrypoint
- **Configuration**: `dev_server/config/` - Server configuration
- **Start/Stop Scripts**: `dev_server/start_dev_server.bat` / `.sh` and `stop_dev_server.bat` / `.sh`

### Docker Setup
- **Docker Compose** for multi-service development environment
- **All services** started with Docker Compose
- **Configuration** in `dev_server/config/`
- **Environment variables** in `dev_server/config/env.example`

### Start/Stop Scripts
- **Windows**: `start_dev_server.bat` / `stop_dev_server.bat`
- **Mac/Linux**: `start_dev_server.sh` / `stop_dev_server.sh`
- **Both platforms** must have identical functionality

## CRITICAL Rules

- ✅ **All dev server files in `dev_server/`** - Correct location
- ✅ **Docker Compose** - Use for multi-service environment
- ✅ **Cross-platform scripts** - Both Windows and Unix versions
- ✅ **Configuration in `config/`** - Keep config organized
- ❌ **Never place dev server files in root** - Must be in `dev_server/`
- ❌ **Never skip Docker setup** - Required for full dev environment
- ❌ **Never create platform-specific only scripts** - Must support both platforms

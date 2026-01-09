# Development Server Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Core Documentation/STRUCTURE.md`, `docs/Setup & Configuration/DOCKER_SETUP.md`, and `docs/Setup & Configuration/START_FILES_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Deployment requirements, Docker guidelines, container security
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Development environment setup workflows

**Framework References**:
- `instructions/.agent-os/standards/deployment-requirements.md` - Complete deployment guidelines
- `instructions/.agent-os/standards/security-rules/` - Container security guidelines
- `instructions/BMAD-METHOD/docs/how-to/installation/` - Installation and setup guides
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Development workflow guidelines

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### 🔴 MANDATORY: System MUST NOT Have Multiple Start Files

**CRITICAL RULE**: The system MUST NOT have several start files. There are exactly **FOUR** files allowed (two start files and two stop files):

**Start Files**:
1. **`start.bat`** / **`start.sh`** (Root directory) - Simple start (basic development server)
2. **`dev_server/start_dev_server.bat`** / **`dev_server/start_dev_server.sh`** - Full development server (starts EVERYTHING with Docker)

**Stop Files** (MANDATORY - Every start file must have a corresponding stop file):
1. **`stop.bat`** / **`stop.sh`** (Root directory) - Stop simple server
2. **`dev_server/stop_dev_server.bat`** / **`dev_server/stop_dev_server.sh`** - Stop full dev server

**NO OTHER START/STOP FILES ARE ALLOWED** - This is a **MANDATORY REQUIREMENT** with **NO EXCEPTIONS**.

### Development Server Location
- **ALL development server files MUST be in**: `dev_server/` folder
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

### Start File Definitions

**1. `start.bat` (Root Directory)**:
- **Purpose**: Simple start - Basic development server without Docker
- **Functionality**: Detects and uses best available server (Node.js → Python → PHP)
- **TypeScript support** when Node.js is available
- **Does NOT use Docker** or start backend services

**2. `start_dev_server.bat` (dev_server Folder)**:
- **Purpose**: Full development server - Starts EVERYTHING with Docker Compose
- **Functionality**: Starts ALL development services using Docker Compose
- **Requires Docker Desktop** to be installed and running
- **Full development environment** with hot reload

### Cross-Platform Requirements
- **Windows**: `.bat` files for batch scripts
- **Mac/Linux**: `.sh` files for shell scripts
- **Both platforms** must have identical functionality
- **Start scripts** must detect platform and use appropriate commands

## 🚫 Forbidden Actions

**These actions are STRICTLY FORBIDDEN**:
- ❌ **CRITICAL**: Creating additional start files (e.g., `start_frontend.bat`, `start_backend.bat`)
- ❌ **CRITICAL**: Creating start files in other locations
- ❌ **CRITICAL**: Creating start scripts with different names (e.g., `run.bat`, `launch.bat`)
- ❌ **CRITICAL**: Creating service-specific start files (e.g., `start_PostgreSQL.bat`)
- ❌ **CRITICAL**: Creating start files without corresponding stop files
- ❌ **CRITICAL**: Creating stop files without corresponding start files

## CRITICAL Rules

- ✅ **All dev server files in `dev_server/`** - Correct location
- ✅ **Exactly TWO start files** - `start.bat` (simple) and `start_dev_server.bat` (full)
- ✅ **Every start file has stop file** - Mandatory pairing
- ✅ **Docker Compose** - Use for multi-service environment
- ✅ **Cross-platform scripts** - Both Windows and Unix versions
- ✅ **Configuration in `config/`** - Keep config organized
- ❌ **Never place dev server files in root** - Must be in `dev_server/`
- ❌ **Never create additional start files** - Only two allowed
- ❌ **Never skip Docker setup** - Required for full dev environment
- ❌ **Never create platform-specific only scripts** - Must support both platforms

## Related Documentation

- **Start Files Rules**: `docs/Setup & Configuration/START_FILES_RULES.md`
- **Docker Setup**: `docs/Setup & Configuration/DOCKER_SETUP.md`
- **Development Server**: `dev_server/README.md`
- **Project Structure**: `docs/Core Documentation/STRUCTURE.md`

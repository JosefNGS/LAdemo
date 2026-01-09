# Start Files - Critical Rules
## Mandatory Rules for Development Server Start Files

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Strictly Enforced

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### 🔴 MANDATORY: System MUST NOT Have Multiple Start Files

**CRITICAL RULE**: The system MUST NOT have several start files. There are exactly **FOUR** files allowed (two start files and two stop files), and they serve distinct purposes:

**Start Files**:
1. **`start.bat`** / **`start.sh`** (Root directory) - Simple start (basic development server)
2. **`dev_server/start_dev_server.bat`** / **`dev_server/start_dev_server.sh`** - Full development server (starts EVERYTHING with Docker)

**Stop Files** (MANDATORY - Every start file must have a corresponding stop file):
1. **`stop.bat`** / **`stop.sh`** (Root directory) - Stop simple server
2. **`dev_server/stop_dev_server.bat`** / **`dev_server/stop_dev_server.sh`** - Stop full dev server

**NO OTHER START/STOP FILES ARE ALLOWED** - This is a **MANDATORY REQUIREMENT** with **NO EXCEPTIONS**.

---

## 📋 Start File Definitions

### 1. `start.bat` (Root Directory)

**Purpose**: Simple start - Basic development server without Docker

**Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\start.bat`

**Functionality**:
- Starts a simple development server
- Detects and uses best available server (Node.js → Python → PHP)
- TypeScript support when Node.js is available
- Fallback to static file server if TypeScript unavailable
- Opens browser automatically
- **Does NOT use Docker**
- **Does NOT start backend services**
- **Does NOT start database services**

**Use Case**: Quick development, simple testing, when Docker is not needed

**Command**: Double-click `start.bat` (Windows) or run `start.sh` (Mac/Linux) from root directory

**Stop Command**: Double-click `stop.bat` (Windows) or run `stop.sh` (Mac/Linux) to stop the server

---

### 2. `start_dev_server.bat` (dev_server Folder)

**Purpose**: Full development server - Starts EVERYTHING with Docker Compose

**Location**: `C:\Users\josef\OneDrive\Skrivbord\BitNexus Landing Page\dev_server\start_dev_server.bat`

**Functionality**:
- Starts ALL development services using Docker Compose
- Starts frontend development server
- Starts backend services (when configured)
- Starts database services (when configured)
- Starts all Docker containers defined in `docker-compose.yml`
- Hot reload enabled via Docker volumes
- Full development environment
- **Requires Docker Desktop to be installed and running**

**Use Case**: Full development environment, testing with all services, production-like local setup

**Command**: Double-click `start_dev_server.bat` (Windows) or run `start_dev_server.sh` (Mac/Linux) from `dev_server/` directory

**Stop Command**: Double-click `stop_dev_server.bat` (Windows) or run `stop_dev_server.sh` (Mac/Linux) to stop all services

---

## 🚫 Forbidden Actions

**These actions are STRICTLY FORBIDDEN**:

- ❌ **CRITICAL**: Creating additional start files (e.g., `start_frontend.bat`, `start_backend.bat`, `start_docker.bat`)
- ❌ **CRITICAL**: Creating start files in other locations
- ❌ **CRITICAL**: Modifying start files to do more than their defined purpose
- ❌ **CRITICAL**: Creating start scripts with different names (e.g., `run.bat`, `launch.bat`, `dev.bat`)
- ❌ **CRITICAL**: Duplicating start functionality in multiple files
- ❌ **CRITICAL**: Creating service-specific start files (e.g., `start_PostgreSQL.bat`, `start_n8n.bat`)

**If you need to start a specific service**:
- Use `start_dev_server.bat` and configure `docker-compose.yml` to start only needed services
- Or use Docker Compose commands directly: `docker compose up <service-name>`

---

## 📁 File Locations

### Allowed Start/Stop Files:

1. **Root Directory**:
   - ✅ `start.bat` / `start.sh` - Simple start (Windows/Mac-Linux)
   - ✅ `stop.bat` / `stop.sh` - Stop simple server (Windows/Mac-Linux)

2. **dev_server Directory**:
   - ✅ `start_dev_server.bat` / `start_dev_server.sh` - Full development server (Windows/Mac-Linux)
   - ✅ `stop_dev_server.bat` / `stop_dev_server.sh` - Stop full dev server (Windows/Mac-Linux)

### Forbidden Locations:

- ❌ **NO start files in `frontend/`**
- ❌ **NO start files in `backend/`**
- ❌ **NO start files in `docs/`**
- ❌ **NO start files in service folders** (e.g., `backend/netlify/`, `backend/PostgreSQL/`)
- ❌ **NO start files in any other location**

---

## 🔧 Implementation Rules

### start.bat Rules:

- ✅ **MUST be in root directory** - No exceptions
- ✅ **MUST detect best available server** (Node.js → Python → PHP)
- ✅ **MUST provide TypeScript support** when Node.js available
- ✅ **MUST fallback gracefully** when TypeScript unavailable
- ✅ **MUST open browser automatically**
- ✅ **MUST NOT require Docker**
- ✅ **MUST NOT start backend services**
- ✅ **MUST NOT start database services**

### start_dev_server.bat Rules:

- ✅ **MUST be in `dev_server/` directory** - No exceptions
- ✅ **MUST check for Docker** before starting
- ✅ **MUST check for Docker Compose** before starting
- ✅ **MUST start ALL services** defined in `docker-compose.yml`
- ✅ **MUST build containers** if needed (`--build` flag)
- ✅ **MUST provide clear error messages** if Docker unavailable
- ✅ **MUST show what services are starting**
- ✅ **MUST handle both `docker compose` and `docker-compose` commands**

---

## 📋 Verification Checklist

Before creating or modifying any start file:

- [ ] Is this file one of the two allowed start files?
- [ ] Is the file in the correct location (root or dev_server)?
- [ ] Does the file serve its defined purpose (simple or full)?
- [ ] Are there any other start files in the system?
- [ ] Have all other start files been removed?
- [ ] Does the file follow the implementation rules?
- [ ] Is the file documented in this document?

---

## 🔄 Migration Guide

If you find additional start files in the system:

1. **Identify the file's purpose**:
   - If it's a simple start → Merge into `start.bat`
   - If it's a full start → Merge into `start_dev_server.bat`
   - If it's service-specific → Remove and use Docker Compose commands

2. **Remove the file**:
   - Delete the unauthorized start file
   - Update any documentation referencing it
   - Update this document if needed

3. **Update documentation**:
   - Update `docs/Core Documentation/STRUCTURE.md`
   - Update `docs/Setup & Configuration/START_FILES_RULES.md`
   - Update `CHANGELOG.md`

---

## 🚨 Critical Violations

**If you find violations of these rules**:

1. **Immediately report** to Craig Martin (CTO)
2. **Remove unauthorized start files**
3. **Update documentation** to reflect changes
4. **Update CHANGELOG.md** with the fix

**Violations are considered critical** because they:
- Create confusion about how to start the development server
- Make it unclear which start method to use
- Lead to inconsistent development environments
- Make onboarding difficult for new developers

---

## 📚 Related Documentation

- **Development Server Setup**: `dev_server/README.md`
- **Docker Setup**: `docs/Setup & Configuration/DOCKER_SETUP.md`
- **Project Structure**: `docs/Core Documentation/STRUCTURE.md`
- **Docker Compose Config**: `dev_server/docker-compose.yml`

---

## 📝 Change Log

### Version 1.0 - January 2026
- Initial critical rules for start files
- Defined two allowed start files
- Established forbidden actions
- Created verification checklist

---

**These rules are CRITICAL and must be followed for all start file work. Violations will result in confusion, inconsistent environments, and onboarding difficulties.**


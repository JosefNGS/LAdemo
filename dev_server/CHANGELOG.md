# Development Server - Changelog

All notable changes to the Development Server configuration and setup will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**⚠️ CRITICAL - MANDATORY DEVELOPER TRACKING**:
Every changelog entry MUST track who made the change:
- **Developer entries**: `[Developer: Full Name]` - e.g., `[Developer: Josef Lindbom]`, `[Developer: Craig Martin]`, `[Developer: Jonne Waselius]`, `[Developer: Cory]`
- **Cursor/AI entries**: `[Cursor]` - e.g., `[Cursor]`
- **Format**: `- Description of change [Developer: Full Name]` or `- Description of change [Cursor]`
- **Purpose**: Accountability, tracking, audit trail, and responsibility assignment
- **NO EXCEPTIONS** - All entries must include developer/Cursor tracking
- **This is MANDATORY and STRICTLY ENFORCED**

---

## [1.2.0] - January 2026

### Added
- **Stop Scripts**: Created stop scripts for development server [Developer: Josef Lindbom]
  - `stop_dev_server.bat` (Windows) - Stops all Docker Compose services
  - `stop_dev_server.sh` (Mac/Linux) - Stops all Docker Compose services
  - Cross-platform support for stopping development server
- **CHANGELOG.md**: Created changelog file for development server changes [Developer: Josef Lindbom]

### Changed
- **Start Scripts**: Updated to work with corresponding stop scripts [Developer: Josef Lindbom]

---

## [1.1.0] - January 2026

### Added
- **Start Scripts**: Created start scripts for full development server [Developer: Josef Lindbom]
  - `start_dev_server.bat` (Windows) - Starts all services with Docker Compose
  - `start_dev_server.sh` (Mac/Linux) - Starts all services with Docker Compose
  - Cross-platform support for starting development server
  - Docker and Docker Compose detection and validation
  - Support for both `docker compose` and `docker-compose` commands

---

## [1.0.0] - January 2026

### Added
- **Initial Development Server Setup**: Created development server folder structure [Developer: Josef Lindbom]
  - `Dockerfile` - Docker container definition for development
  - `docker-compose.yml` - Multi-service Docker Compose configuration
  - `.dockerignore` - Files to exclude from Docker build
  - `docker-entrypoint.sh` - Container entrypoint script
  - `config/` folder with server configuration files
    - `config/server.config.js` - Server configuration
    - `config/env.example` - Example environment variables
    - `config/README.md` - Configuration documentation
  - `README.md` - Comprehensive development server documentation

### Features
- Docker-based development environment
- Hot reload support via Docker volumes
- Multi-service architecture ready
- Cross-platform compatibility (Windows, Mac, Linux)
- Environment variable configuration
- Port configuration (default: 8000)

---

**This changelog tracks all changes to the Development Server configuration, scripts, and Docker setup.**


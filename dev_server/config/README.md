# Development Server Configuration
## Configuration Files for Development Environment

**Last Updated**: January 2026  
**Purpose**: Configuration files for development server setup

---

## 📁 Configuration Files

This folder contains configuration files for the development server:

- **server.config.js** - Server configuration (port, paths, etc.)
- **env.example** - Example environment variables
- **nginx.conf** - Nginx configuration (if using Nginx reverse proxy)
- **Other config files** - Additional configuration as needed

---

## 🔧 Usage

Configuration files in this folder are used by:
- Docker containers
- Development server scripts
- Local development setup

---

## 📝 Notes

- Configuration files should be environment-specific
- Never commit sensitive data (API keys, passwords)
- Use `.env` files for environment variables (not committed to git)
- See `.dockerignore` for excluded files

---

**For Docker setup**: See `../DOCKER_SETUP.md` in `docs/Setup & Configuration/`


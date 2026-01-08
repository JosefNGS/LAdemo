# Development Server
## Docker & Development Environment Setup

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Active Development Server Configuration

**⚠️ CRITICAL**: All development server files MUST be in this folder (`dev_server/`)

---

## 📁 Folder Contents

This folder contains all files related to running the development server:

- **Dockerfile** - Docker container definition for development
- **docker-compose.yml** - Multi-service Docker Compose configuration
- **.dockerignore** - Files to exclude from Docker build
- **config/** - Development server configuration files
- **README.md** - This file

---

## 🚀 Quick Start

### Using Docker Compose (Recommended)

```bash
# Navigate to dev_server directory
cd dev_server

# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

### Using Docker Directly

```bash
# Build Docker image
docker build -f Dockerfile -t bitnexus-dev ..

# Run container
docker run -p 8000:8000 -v ../frontend:/app/frontend -v ../backend:/app/backend bitnexus-dev
```

### Using Local Server (No Docker)

```bash
# From project root
npm start
# or
node frontend/server.js
```

---

## 📋 Configuration

### Environment Variables

Create `.env` file in this folder (optional):

```env
NODE_ENV=development
PORT=8000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
GEMINI_API_KEY=your_gemini_key
```

### Port Configuration

Default port: **8000**

To change port, update:
- `docker-compose.yml` (ports section)
- `frontend/server.js` (PORT constant)

---

## 🔧 Development Workflow

### Hot Reload

Docker volumes enable hot reload:
- Frontend changes reflect immediately
- Backend changes reflect immediately
- No need to rebuild container

### Accessing Services

- **Frontend**: http://localhost:8000
- **Backend API**: http://localhost:8000/api (if configured)

---

## 📚 Documentation

For detailed Docker setup instructions, see:
- `docs/Setup & Configuration/DOCKER_SETUP.md` - Complete Docker setup guide

For project structure, see:
- `docs/Core Documentation/STRUCTURE.md` - Project structure reference

---

## 🛠️ Troubleshooting

### Port Already in Use

Change port in `docker-compose.yml`:
```yaml
ports:
  - "8001:8000"  # Use port 8001 instead
```

### Container Won't Start

```bash
# Check logs
docker-compose logs

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Permission Issues

```bash
# Fix file permissions (Linux/Mac)
sudo chown -R $USER:$USER ../frontend
sudo chown -R $USER:$USER ../backend
```

---

## 📞 Support

**For Development Server Issues**: Contact Craig Martin (CTO) - craig@nordicglobalsolutions.com

---

**This Docker setup is for development only. Production deployment uses Netlify.**


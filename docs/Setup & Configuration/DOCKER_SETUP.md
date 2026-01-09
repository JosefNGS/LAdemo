# Docker Setup for Development Server
## Containerized Development Environment

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Development Setup Guide

**Location**: `Dev server/` folder  
**Critical**: All Docker-related files MUST be in `Dev server/` folder

---

## 📋 Overview

Docker setup provides a containerized development environment for the BitNexus project, ensuring consistent development environments across all team members.

---

## 📁 File Structure

```
Dev server/
├── Dockerfile              # Frontend/backend container definition
├── docker-compose.yml      # Multi-service Docker Compose configuration
├── .dockerignore           # Files to exclude from Docker build
└── docker-entrypoint.sh    # Container entrypoint script (optional)
```

---

## 🐳 Dockerfile

### Frontend/Backend Container

Create `Dev server/Dockerfile`:

```dockerfile
# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY frontend/ ./frontend/
COPY backend/ ./backend/
COPY netlify.toml ./
COPY .cursorrules ./

# Expose development server port
EXPOSE 8000

# Start development server
CMD ["node", "frontend/server.js"]
```

---

## 🐙 Docker Compose

### Multi-Service Setup

Create `Dev server/docker-compose.yml`:

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ..
      dockerfile: Dev server/Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - ../frontend:/app/frontend
      - ../backend:/app/backend
    environment:
      - NODE_ENV=development
    command: node frontend/server.js

  # Future services can be added here:
  # PostgreSQL:
  #   image: PostgreSQL/postgres:latest
  #   ports:
  #     - "5432:5432"
  #   environment:
  #     - POSTGRES_PASSWORD=your_password
```

---

## 🚀 Usage

### Build and Run

```bash
# Navigate to Dev server directory
cd "Dev server"

# Build Docker image
docker build -f Dockerfile -t bitnexus-dev ..

# Run container
docker run -p 8000:8000 -v ../frontend:/app/frontend -v ../backend:/app/backend bitnexus-dev
```

### Using Docker Compose

```bash
# Navigate to Dev server directory
cd "Dev server"

# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build
```

---

## 📝 Environment Variables

Create `Dev server/.env` (optional):

```env
NODE_ENV=development
PORT=8000
PostgreSQL_URL=your_PostgreSQL_url
PostgreSQL_ANON_KEY=your_PostgreSQL_key
GEMINI_API_KEY=your_gemini_key
```

Load in `docker-compose.yml`:

```yaml
services:
  frontend:
    env_file:
      - .env
```

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

## 🛠️ Troubleshooting

### Port Already in Use

```bash
# Change port in docker-compose.yml
ports:
  - "8001:8000"  # Use port 8001 instead
```

### Permission Issues

```bash
# Fix file permissions
sudo chown -R $USER:$USER ../frontend
sudo chown -R $USER:$USER ../backend
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

### Clear Docker Cache

```bash
# Remove unused containers, networks, images
docker system prune -a
```

---

## 📋 Docker Commands Reference

### Container Management

```bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# View container logs
docker logs <container-id>

# Execute command in container
docker exec -it <container-id> sh
```

### Image Management

```bash
# List images
docker images

# Remove image
docker rmi <image-id>

# Build image
docker build -t bitnexus-dev .

# Tag image
docker tag bitnexus-dev bitnexus-dev:v1.0
```

### Docker Compose

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build

# View logs
docker-compose logs -f frontend

# Execute command in service
docker-compose exec frontend sh
```

---

## 🔐 Security Considerations

1. **Never commit `.env` files** - Use `.dockerignore`
2. **Use secrets management** for production
3. **Limit exposed ports** - Only expose necessary ports
4. **Use non-root user** in containers (if possible)
5. **Keep images updated** - Regularly update base images

---

## 📚 Additional Resources

- **Docker Documentation**: https://docs.docker.com/
- **Docker Compose Documentation**: https://docs.docker.com/compose/
- **Node.js Docker Best Practices**: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

---

## 🎯 Next Steps

1. **Create Dockerfile** in `Dev server/` folder
2. **Create docker-compose.yml** in `Dev server/` folder
3. **Test Docker setup** locally
4. **Document any custom configurations**
5. **Update team on Docker usage**

---

**This Docker setup is for development only. Production deployment uses Netlify.**


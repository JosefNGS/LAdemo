# Agent OS Deployment Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` for complete Agent OS documentation and guidelines.

**Source**: `instructions/.agent-os/standards/deployment-requirements.md`

**Complete Documentation**: See `instructions/.agent-os/standards/deployment-requirements.md` for complete deployment requirements and guidelines.

## Overview

Deployment requirements focus on containerization, multi-platform support, and infrastructure compatibility.

## Container Requirements

### Docker Image Specifications
- **Base Image**: Use official Node.js images (`node:18-alpine` or `node:18-slim`)
- **Multi-Stage Builds**: Optimize image size with multi-stage builds
- **Layer Caching**: Structure Dockerfile for efficient layer caching
- **No Root User**: Run as non-root user for security
- **Health Checks**: Include Docker health check instructions

### Dockerfile Best Practices
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER node
EXPOSE 8080 8081
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node healthcheck.js || exit 1
CMD ["npm", "start"]
```

### Docker Compose Support
- Provide `docker-compose.yml` for multi-service deployments
- Define all services and their dependencies
- Configure environment variables properly
- Set up volumes for persistent data

## Environment Configuration

### Environment Variables
- Use environment variables for all configuration
- Never hardcode environment-specific values
- Document all required environment variables
- Provide `.env.example` file with required variables

### Required Environment Variables
```bash
# Application
NODE_ENV=production
PORT=8080

# Database
DATABASE_URL=postgresql://...

# Secrets (use secret management)
API_KEY=${API_KEY}
SECRET_KEY=${SECRET_KEY}
```

## Performance Requirements

### Optimization Targets
- **Startup Time**: < 5 seconds for application ready state
- **Memory Usage**: < 512MB for basic operation
- **CPU Usage**: Minimal CPU footprint for idle state
- **Image Size**: < 500MB for Docker images

### Optimization Strategies
- Use Alpine Linux base images
- Multi-stage builds to reduce final image size
- Remove development dependencies in production
- Compress layers where possible

## Security Requirements

### Container Security
- Execute in separated and isolated runtime
- Zero risk to host infrastructure
- No privileged container access
- Sandboxed file system access
- Network isolation options

### Credential Management
- Secure API key storage
- Environment variable injection
- Secrets management (no hardcoded credentials)
- Use secret management services (AWS Secrets Manager, etc.)

## Monitoring & Logging

### Observability Requirements
- **Structured JSON logging**
- **Health check endpoints** (`/health`, `/ready`)
- **Metrics exposure** (Prometheus format)
- **Error tracking and reporting**
- **Performance monitoring**

### Health Checks
- Implement health check endpoints
- Configure Docker health checks
- Monitor application state
- Provide readiness and liveness probes

## Deployment Modes

### Supported Deployment Scenarios
1. **Container Orchestration** (Kubernetes, Docker Swarm)
2. **Cloud Platforms** (AWS, GCP, Azure)
3. **Platform as a Service** (Heroku, Vercel, Netlify)
4. **Self-Hosted** (Docker Compose, traditional hosting)

## Build & Distribution

### Container Registry
- Push images to Docker Hub or GitHub Container Registry
- Use semantic versioning for images
- Multi-architecture builds (amd64, arm64)
- Automated builds via CI/CD

### CI/CD Requirements
- Run tests before deployment
- Build Docker images in CI
- Push to container registry
- Deploy to staging before production
- Automated rollback on failure

## Deployment Checklist

Before deploying:
- [ ] Application builds successfully in Docker
- [ ] Docker image < 500MB
- [ ] Health check endpoint responds
- [ ] Environment variables documented
- [ ] Secrets management configured
- [ ] State persistence working
- [ ] API endpoints tested
- [ ] Logging configured properly
- [ ] Monitoring endpoints exposed
- [ ] Security scan passed
- [ ] Documentation updated
- [ ] Backup strategy defined

## CRITICAL Rules

- ✅ **Use multi-stage Docker builds** for optimized images
- ✅ **Run as non-root user** in containers
- ✅ **Include health checks** in Dockerfile
- ✅ **Use environment variables** for all configuration
- ✅ **Implement structured logging** and monitoring
- ✅ **Test Docker builds** before deployment
- ❌ **Never hardcode** environment-specific values
- ❌ **Never run as root** in production containers
- ❌ **Never skip health checks** or monitoring
- ❌ **Never expose secrets** in Docker images or code

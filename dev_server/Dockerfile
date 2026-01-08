# BitNexus Development Server Dockerfile
# Containerized development environment

# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY frontend/ ./frontend/
COPY backend/ ./backend/
COPY netlify.toml ./
COPY .cursorrules ./

# Create config directory
RUN mkdir -p ./dev_server/config

# Expose development server port
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=development
ENV PORT=8000

# Start development server
# Using frontend/server.js which handles TypeScript transpilation
CMD ["node", "frontend/server.js"]


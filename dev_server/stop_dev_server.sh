#!/bin/bash
# BitNexus Landing Page - Stop Dev Server
# Docker Compose - Stop ALL Services
# Cross-platform stop script for Mac/Linux

echo "========================================"
echo "  BitNexus Landing Page - Stop Dev Server"
echo "  Docker Compose - Stop ALL Services"
echo "========================================"
echo ""

# Check for Docker
if ! command -v docker >/dev/null 2>&1; then
    echo "[ERROR] Docker is not installed or not in PATH!"
    echo ""
    echo "Please install Docker Desktop:"
    echo "  https://www.docker.com/products/docker-desktop"
    echo ""
    exit 1
fi

# Check for Docker Compose
if docker compose version >/dev/null 2>&1; then
    COMPOSE_CMD="docker compose"
elif docker-compose version >/dev/null 2>&1; then
    COMPOSE_CMD="docker-compose"
else
    echo "[ERROR] Docker Compose is not available!"
    echo ""
    echo "Please ensure Docker Desktop is installed and running."
    echo ""
    exit 1
fi

echo "[*] Stopping ALL development services with Docker Compose..."
echo "[*] This will stop:"
echo "[*]   - Frontend development server"
echo "[*]   - Backend services"
echo "[*]   - All Docker containers"
echo ""

# Stop and remove containers
echo "[*] Stopping containers..."
$COMPOSE_CMD down

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Failed to stop Docker Compose services!"
    echo ""
    echo "Troubleshooting:"
    echo "  1. Ensure Docker Desktop is running"
    echo "  2. Try: docker compose down --remove-orphans"
    echo "  3. Check Docker Desktop for running containers"
    echo ""
    exit 1
fi

echo ""
echo "[*] All development services stopped."
echo "[*] Containers have been removed."
echo ""


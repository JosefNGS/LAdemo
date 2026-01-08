#!/bin/sh
# BitNexus Development Server - Docker Entrypoint Script
# Optional entrypoint script for Docker container

set -e

echo "========================================"
echo "   BitNexus Development Server"
echo "========================================"
echo ""

# Wait for dependencies (if any)
# Example: wait-for-it.sh postgres:5432 --timeout=30

# Run database migrations (if needed)
# Example: npm run migrate

# Start the development server
echo "[*] Starting development server..."
echo "[*] Server will be available at: http://localhost:8000"
echo "[*] Press Ctrl+C to stop the server"
echo ""

# Execute the main command
exec "$@"


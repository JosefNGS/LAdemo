#!/bin/bash

# BitNexus Landing Page - Development Server Launcher (macOS/Linux)
# This script automatically starts a development server and opens the browser

echo "========================================"
echo "   BitNexus Landing Page - Dev Server"
echo "========================================"
echo ""

# Change to script directory
cd "$(dirname "$0")"

# Function to open browser
open_browser() {
    sleep 2
    if command -v open >/dev/null 2>&1; then
        # macOS
        open http://localhost:8000
    elif command -v xdg-open >/dev/null 2>&1; then
        # Linux
        xdg-open http://localhost:8000
    fi
}

# Try Node.js with TypeScript support (server.js)
if command -v node >/dev/null 2>&1; then
    if [ -f "frontend/server.js" ]; then
        echo "[*] Starting server with TypeScript support..."
        echo "[*] Server running at: http://localhost:8000"
        echo "[*] TypeScript files will be transpiled on the fly"
        echo "[*] Opening browser..."
        echo "[*] Press Ctrl+C to stop the server"
        echo ""
        open_browser &
        node frontend/server.js
        exit 0
    elif [ -f "server.js" ]; then
        echo "[*] Starting server with TypeScript support..."
        echo "[*] Server running at: http://localhost:8000"
        echo "[*] TypeScript files will be transpiled on the fly"
        echo "[*] Opening browser..."
        echo "[*] Press Ctrl+C to stop the server"
        echo ""
        open_browser &
        node server.js
        exit 0
    fi
fi

# Try Node.js http-server
if command -v node >/dev/null 2>&1; then
    if command -v npx >/dev/null 2>&1; then
        echo "[*] Starting server with Node.js http-server..."
        echo "[*] Server running at: http://localhost:8000"
        echo "[*] Opening browser..."
        echo "[*] Press Ctrl+C to stop the server"
        echo ""
        open_browser &
        if [ -d "frontend" ]; then
            npx --yes http-server frontend -p 8000
        else
            npx --yes http-server -p 8000
        fi
        exit 0
    fi
fi

# Try Python 3
if command -v python3 >/dev/null 2>&1; then
    echo "[*] Starting server with Python 3..."
    echo "[*] Server running at: http://localhost:8000"
    echo "[*] Note: TypeScript files won't be transpiled (use Node.js for TypeScript support)"
    echo "[*] Opening browser..."
    echo "[*] Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    if [ -d "frontend" ]; then
        cd frontend
        python3 -m http.server 8000
    else
        python3 -m http.server 8000
    fi
    exit 0
fi

# Try Python 2
if command -v python >/dev/null 2>&1 && python --version 2>&1 | grep -q "Python 2"; then
    echo "[*] Starting server with Python 2..."
    echo "[*] Server running at: http://localhost:8000"
    echo "[*] Note: TypeScript files won't be transpiled (use Node.js for TypeScript support)"
    echo "[*] Opening browser..."
    echo "[*] Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    if [ -d "frontend" ]; then
        cd frontend
        python -m SimpleHTTPServer 8000
    else
        python -m SimpleHTTPServer 8000
    fi
    exit 0
fi

# Try PHP
if command -v php >/dev/null 2>&1; then
    echo "[*] Starting server with PHP..."
    echo "[*] Server running at: http://localhost:8000"
    echo "[*] Note: TypeScript files won't be transpiled (use Node.js for TypeScript support)"
    echo "[*] Opening browser..."
    echo "[*] Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    if [ -d "frontend" ]; then
        cd frontend
        php -S localhost:8000
    else
        php -S localhost:8000
    fi
    exit 0
fi

# No server found
echo "[ERROR] No suitable server found!"
echo ""
echo "Please install one of the following:"
echo "  1. Node.js (recommended for TypeScript support): https://nodejs.org/"
echo "  2. Python 3: Usually pre-installed on macOS"
echo "  3. PHP: Usually pre-installed on macOS"
echo ""
echo "Or use VS Code Live Server extension"
echo ""
exit 1


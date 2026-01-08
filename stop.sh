#!/bin/bash
# BitNexus Landing Page - Stop Server
# Cross-platform stop script for Mac/Linux

echo "========================================"
echo "  BitNexus Landing Page - Stop Server"
echo "========================================"
echo ""

# Find and kill processes on port 8000
echo "[*] Stopping server on port 8000..."
echo ""

# Check if lsof is available (Mac/Linux)
if command -v lsof >/dev/null 2>&1; then
    PID=$(lsof -ti:8000)
    if [ -n "$PID" ]; then
        echo "[*] Found process on port 8000 (PID: $PID)"
        echo "[*] Stopping process..."
        kill -9 $PID 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "[*] Successfully stopped process $PID"
        else
            echo "[WARNING] Could not stop process $PID - may require sudo"
        fi
    else
        echo "[*] No process found on port 8000"
    fi
# Fallback to netstat if lsof is not available
elif command -v netstat >/dev/null 2>&1; then
    PID=$(netstat -tlnp 2>/dev/null | grep :8000 | awk '{print $7}' | cut -d'/' -f1 | head -n1)
    if [ -n "$PID" ]; then
        echo "[*] Found process on port 8000 (PID: $PID)"
        echo "[*] Stopping process..."
        kill -9 $PID 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "[*] Successfully stopped process $PID"
        else
            echo "[WARNING] Could not stop process $PID - may require sudo"
        fi
    else
        echo "[*] No process found on port 8000"
    fi
else
    echo "[WARNING] Could not find lsof or netstat - cannot detect processes"
    echo "[*] Please manually stop the server (Ctrl+C in the terminal running it)"
fi

echo ""
echo "[*] Server stopped."
echo "[*] Port 8000 should now be free."
echo ""


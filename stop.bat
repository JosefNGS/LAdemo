@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo ========================================
echo   BitNexus Landing Page - Stop Server
echo ========================================
echo.

REM Find and kill processes on port 8000
echo [*] Stopping server on port 8000...
echo.

REM Check for Node.js processes
for /f "tokens=2" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do (
    set PID=%%a
    echo [*] Found process on port 8000 (PID: !PID!)
    echo [*] Stopping process...
    taskkill /F /PID !PID! >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Could not stop process !PID! - may require admin rights
    ) else (
        echo [*] Successfully stopped process !PID!
    )
)

REM Try alternative method using PowerShell
powershell -Command "Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" >nul 2>&1

echo.
echo [*] Server stopped.
echo [*] Port 8000 should now be free.
echo.
pause


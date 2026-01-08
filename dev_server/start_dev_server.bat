@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo ========================================
echo   BitNexus Landing Page - Full Dev Server
echo   Docker Compose - ALL Services
echo ========================================
echo.

REM Check for Docker
where docker >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed or not in PATH!
    echo.
    echo Please install Docker Desktop:
    echo   https://www.docker.com/products/docker-desktop
    echo.
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
)

REM Check for Docker Compose
docker compose version >nul 2>&1
if errorlevel 1 (
    docker-compose version >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Docker Compose is not available!
        echo.
        echo Please ensure Docker Desktop is installed and running.
        echo.
        pause
        exit /b 1
    )
    set COMPOSE_CMD=docker-compose
) else (
    set COMPOSE_CMD=docker compose
)

echo [*] Starting ALL development services with Docker Compose...
echo [*] This will start:
echo [*]   - Frontend development server
echo [*]   - Backend services (when configured)
echo [*]   - All Docker containers
echo.
echo [*] Server will be available at: http://localhost:8000
echo [*] Press Ctrl+C to stop all services
echo.
echo [*] Building and starting containers...
echo.

REM Try docker compose first (newer syntax)
%COMPOSE_CMD% up --build

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to start Docker Compose services!
    echo.
    echo Troubleshooting:
    echo   1. Ensure Docker Desktop is running
    echo   2. Check if port 8000 is already in use
    echo   3. Try: docker compose down
    echo   4. Then run this script again
    echo.
    pause
    exit /b 1
)

goto :end

:end
echo.
echo [*] Development server stopped.
pause


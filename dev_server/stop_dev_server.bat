@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo ========================================
echo   BitNexus Landing Page - Stop Dev Server
echo   Docker Compose - Stop ALL Services
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

echo [*] Stopping ALL development services with Docker Compose...
echo [*] This will stop:
echo [*]   - Frontend development server
echo [*]   - Backend services
echo [*]   - All Docker containers
echo.

REM Stop and remove containers
echo [*] Stopping containers...
%COMPOSE_CMD% down

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to stop Docker Compose services!
    echo.
    echo Troubleshooting:
    echo   1. Ensure Docker Desktop is running
    echo   2. Try: docker compose down --remove-orphans
    echo   3. Check Docker Desktop for running containers
    echo.
    pause
    exit /b 1
)

echo.
echo [*] All development services stopped.
echo [*] Containers have been removed.
echo.
pause


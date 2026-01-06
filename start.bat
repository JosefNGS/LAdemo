@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo ========================================
echo   BitNexus Landing Page - Dev Server
echo ========================================
echo.

REM Check for Node.js first (best for TypeScript)
where node >nul 2>&1
if errorlevel 1 goto check_python3
echo [*] Starting server with TypeScript support...
echo [*] Server running at: http://localhost:8000
echo [*] TypeScript files will be transpiled on the fly
echo [*] Opening browser...
echo [*] Press Ctrl+C to stop the server
echo.
node server.js 2>&1
if errorlevel 1 (
    echo.
    echo [WARNING] TypeScript server failed!
    echo [*] Trying http-server as fallback (TypeScript won't work)...
    echo [*] Note: React app may not load without TypeScript support
    echo.
    timeout /t 2 /nobreak >nul
    start http://localhost:8000
    timeout /t 1 /nobreak >nul
    npx --yes http-server -p 8000
)
goto :end

:check_python3
REM Check for Python 3
python --version >nul 2>&1
if errorlevel 1 goto check_python2
echo [*] Starting server with Python 3...
echo [*] Server running at: http://localhost:8000
echo [*] WARNING: TypeScript files will NOT be transpiled
echo [*] React app may not work - Node.js recommended
echo [*] Opening browser...
echo [*] Press Ctrl+C to stop the server
echo.
start http://localhost:8000
timeout /t 2 /nobreak >nul
python -m http.server 8000
goto :end

:check_python2
REM Check for Python 2
python2 --version >nul 2>&1
if errorlevel 1 goto check_npx
echo [*] Starting server with Python 2...
echo [*] Server running at: http://localhost:8000
echo [*] WARNING: TypeScript files will NOT be transpiled
echo [*] React app may not work - Node.js recommended
echo [*] Opening browser...
echo [*] Press Ctrl+C to stop the server
echo.
start http://localhost:8000
timeout /t 2 /nobreak >nul
python2 -m SimpleHTTPServer 8000
goto :end

:check_npx
REM Check for Node.js (npx) - fallback
where npx >nul 2>&1
if errorlevel 1 goto check_php
echo [*] Starting server with Node.js (http-server)...
echo [*] Server running at: http://localhost:8000
echo [*] WARNING: TypeScript files will NOT be transpiled
echo [*] React app may not work - full Node.js recommended
echo [*] Opening browser...
echo [*] Press Ctrl+C to stop the server
echo.
start http://localhost:8000
timeout /t 2 /nobreak >nul
npx --yes http-server -p 8000
goto :end

:check_php
REM Check for PHP
php --version >nul 2>&1
if errorlevel 1 goto no_server
echo [*] Starting server with PHP...
echo [*] Server running at: http://localhost:8000
echo [*] WARNING: TypeScript files will NOT be transpiled
echo [*] React app may not work - Node.js recommended
echo [*] Opening browser...
echo [*] Press Ctrl+C to stop the server
echo.
start http://localhost:8000
timeout /t 2 /nobreak >nul
php -S localhost:8000
goto :end

:no_server
REM If no server found
echo [ERROR] No web server found!
echo.
echo Please install one of the following:
echo   1. Node.js (Recommended): https://nodejs.org/
echo      - Enables TypeScript support for React app
echo   2. Python 3: https://www.python.org/downloads/
echo      - Landing page will work, React app may not
echo   3. PHP: https://www.php.net/downloads.php
echo      - Landing page will work, React app may not
echo.
echo Or use VS Code with the "Live Server" extension.
echo.
pause
exit /b 1

:end

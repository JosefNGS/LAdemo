@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Push ALL Files and Changes to Main
echo ========================================
echo.

echo [STEP 1] Checking current status...
git status --short
echo.

echo [STEP 2] Adding ALL files (including docs, frontend, src)...
git add -A
git add --force docs/
git add --force "docs/Product docs/"
git add --force frontend/
git add --force src/
git add --force netlify/
git add --force public/
git add --force *.html
git add --force *.json
git add --force *.toml
git add --force *.bat
git add --force *.js
git add --force *.py

echo.
echo [STEP 3] Files staged for commit:
git status --short
echo.

echo [STEP 4] Committing all changes...
git commit -m "Push all files and changes: complete docs folder, frontend, src, configs - January 2026"

if errorlevel 1 (
    echo [INFO] No new changes or commit already exists.
) else (
    echo [SUCCESS] All files committed.
)

echo.
echo [STEP 5] Setting remote URL...
git remote set-url origin https://github.com/JosefNGS/LADEMO.git

echo.
echo [STEP 6] Pushing to main branch...
git push origin main

if errorlevel 1 (
    echo.
    echo [WARNING] Normal push failed. Trying force push...
    git push origin main --force
)

echo.
echo ========================================
echo   ✅ Push Complete!
echo ========================================
echo.
echo Verify on GitHub:
echo   https://github.com/JosefNGS/LADEMO
echo.
echo Check these folders:
echo   - https://github.com/JosefNGS/LADEMO/tree/main/docs
echo   - https://github.com/JosefNGS/LADEMO/tree/main/docs/Product%20docs
echo   - https://github.com/JosefNGS/LADEMO/tree/main/frontend
echo   - https://github.com/JosefNGS/LADEMO/tree/main/src
echo.
pause


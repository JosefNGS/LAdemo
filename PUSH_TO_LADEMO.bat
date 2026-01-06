@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Push to LAdemo Repository
echo ========================================
echo.

echo [STEP 1] Setting remote URL to LAdemo...
git remote set-url origin https://github.com/JosefNGS/LAdemo.git
git remote add origin https://github.com/JosefNGS/LAdemo.git 2>nul

echo.
echo [STEP 2] Verifying remote...
git remote -v

echo.
echo [STEP 3] Adding ALL files...
git add -A
git add --force docs/
git add --force "docs/Product docs/"
git add --force frontend/
git add --force src/
git add --force netlify/
git add --force public/

echo.
echo [STEP 4] Committing all files...
git commit -m "Initial commit: Push all files to LAdemo repository - January 2026"

if errorlevel 1 (
    echo [INFO] No new changes to commit, or commit already exists.
)

echo.
echo [STEP 5] Pushing to LAdemo repository (main branch)...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [WARNING] Push failed. Possible reasons:
    echo   - Repository is empty (need to create initial commit)
    echo   - Authentication required
    echo   - Branch doesn't exist yet
    echo.
    echo [TRY] Creating and pushing to main branch:
    git branch -M main
    git push -u origin main --force
)

echo.
echo ========================================
echo   ✅ Push Complete!
echo ========================================
echo.
echo Verify on GitHub:
echo   https://github.com/JosefNGS/LAdemo
echo.
pause


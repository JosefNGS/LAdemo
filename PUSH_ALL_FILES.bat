@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Push ALL Files to GitHub
echo ========================================
echo.

echo [STEP 1] Checking git status...
git status --short

echo.
echo [STEP 2] Adding ALL files (including docs)...
git add -A
git add --force docs/
git add --force "docs/Product docs/"
git add --force frontend/
git add --force src/
git add --force netlify/
git add --force public/

echo.
echo [STEP 3] Showing what will be committed...
git status --short

echo.
echo [STEP 4] Committing all files...
git commit -m "Push all files including all documentation, frontend, src, and config files - January 2026"

if errorlevel 1 (
    echo [INFO] No new changes to commit, or commit already exists.
) else (
    echo [SUCCESS] Files committed.
)

echo.
echo [STEP 5] Setting remote URL...
git remote set-url origin https://github.com/JosefNGS/LADEMO.git

echo.
echo [STEP 6] Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Possible reasons:
    echo   - Authentication required (use Personal Access Token)
    echo   - Network issues
    echo   - Branch conflicts
    echo.
    echo [HINT] Try: git push origin main --force
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ ALL FILES PUSHED TO GITHUB!
echo ========================================
echo.
echo Verify on GitHub: https://github.com/JosefNGS/LADEMO
echo.
echo Files that should be visible:
echo   - docs/ folder (all .md files)
echo   - docs/Product docs/ (all product documentation)
echo   - frontend/ folder
echo   - src/ folder
echo   - netlify/ folder
echo   - All config files (package.json, netlify.toml, etc.)
echo.
pause


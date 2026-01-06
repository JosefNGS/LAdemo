@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   PUSH EVERYTHING TO LADEMO
echo ========================================
echo.

echo [STEP 1] Setting remote URL...
git remote remove origin 2>nul
git remote add origin https://github.com/JosefNGS/LAdemo.git
git remote set-url origin https://github.com/JosefNGS/LAdemo.git

echo.
echo [STEP 2] Verifying remote...
git remote -v

echo.
echo [STEP 3] Adding ALL files explicitly...
echo Adding docs folder...
git add docs/
git add --force docs/*.md
git add --force docs/*.sql
git add --force docs/*.bat

echo Adding Product docs...
git add "docs/Product docs/"
git add --force "docs/Product docs/*.md"

echo Adding frontend...
git add frontend/
git add --force frontend/*.js
git add --force frontend/*.html

echo Adding src...
git add src/
git add --force src/**/*.tsx
git add --force src/**/*.ts

echo Adding netlify...
git add netlify/
git add --force netlify/functions/*.js

echo Adding public...
git add public/
git add --force public/_redirects

echo Adding root files...
git add *.html
git add *.json
git add *.toml
git add *.bat
git add *.js
git add *.py
git add *.md
git add .gitignore
git add .cursorrules
git add .nvmrc

echo Adding all other files...
git add -A

echo.
echo [STEP 4] Showing what will be committed...
git status --short | head -20

echo.
echo [STEP 5] Committing ALL files...
git commit -m "Initial commit: Push ALL files to LAdemo repository - Complete project with docs, frontend, src, configs - January 2026"

if errorlevel 1 (
    echo [INFO] No new changes to commit, or commit already exists.
    git log -1 --oneline
) else (
    echo [SUCCESS] All files committed!
)

echo.
echo [STEP 6] Ensuring main branch...
git branch -M main

echo.
echo [STEP 7] Pushing to LAdemo repository...
git push -u origin main --force

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo.
    echo Possible issues:
    echo   - Authentication required (use Personal Access Token)
    echo   - Repository doesn't exist or you don't have access
    echo   - Network issues
    echo.
    echo [HINT] Try:
    echo   git push origin main --force
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ ALL FILES PUSHED TO LADEMO!
echo ========================================
echo.
echo Verify on GitHub:
echo   https://github.com/JosefNGS/LAdemo
echo.
echo Should see:
echo   ✅ docs/ folder (all documentation)
echo   ✅ docs/Product docs/ (all product docs)
echo   ✅ frontend/ folder (build files, server, index.html)
echo   ✅ src/ folder (all React/TypeScript source)
echo   ✅ netlify/ folder (serverless functions)
echo   ✅ public/ folder (_redirects)
echo   ✅ All config files (package.json, netlify.toml, etc.)
echo   ✅ All HTML files (index.html, docs.html, manifesto.html)
echo   ✅ All scripts (.bat files)
echo.
pause


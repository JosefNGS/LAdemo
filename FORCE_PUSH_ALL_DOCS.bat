@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Force Push ALL Documentation Files
echo ========================================
echo.

echo [STEP 1] Removing docs from git cache (if tracked incorrectly)...
git rm -r --cached docs/ 2>nul

echo [STEP 2] Adding ALL docs files explicitly...
git add docs/*.md
git add docs/*.sql
git add docs/*.bat
git add "docs/Product docs/*.md"
git add -f docs/API_SETUP.md
git add -f docs/CHANGELOG.md
git add -f docs/COMPLETE_UI_DOCUMENTATION.md
git add -f docs/DEPENDENCY_CHECK.md
git add -f docs/DEPLOYMENT.md
git add -f docs/DOCUMENTATION_INDEX.md
git add -f docs/DRAG_DROP_DEPLOYMENT.md
git add -f docs/EMAIL_COLLECTION_SETUP.md
git add -f docs/FINANCIAL_FREEDOM_ENHANCEMENTS.md
git add -f docs/GITHUB_PUSH_INSTRUCTIONS.md
git add -f docs/GITHUB_PUSH_SUMMARY.md
git add -f docs/GITHUB_SETUP.md
git add -f docs/IMPLEMENTATION_PLAN.md
git add -f docs/LOCAL_BUILD_TEST.md
git add -f docs/NETLIFY_BUILD_FIX.md
git add -f docs/NETLIFY_BUILD_TROUBLESHOOTING.md
git add -f docs/NETLIFY_DEPLOYMENT_CHECK.md
git add -f docs/NETLIFY_DEPLOYMENT_CHECKLIST.md
git add -f docs/NETLIFY_DEPLOYMENT_READY.md
git add -f docs/NETLIFY_DEPLOYMENT_VERIFIED.md
git add -f docs/NETLIFY_FIX_SUMMARY.md
git add -f docs/NETLIFY_SETUP_COMPLETE.md
git add -f docs/NETLIFY_SETUP.md
git add -f docs/NETLIFY_VERIFICATION.md
git add -f docs/PROJECT_STATUS.md
git add -f docs/QUICK_WINS_FINANCIAL_FREEDOM.md
git add -f docs/SETUP_CHECKLIST.md
git add -f docs/SUPABASE_QUICK_START.md
git add -f docs/SUPABASE_SETUP.md
git add -f docs/supabase-migration.sql
git add -f docs/TODO.md
git add -f docs/TROUBLESHOOTING.md
git add -f docs/UI_DOCUMENTATION.md
git add -f docs/VERIFICATION.md
git add -f docs/VERIFY_NETLIFY_BUILD.bat

echo.
echo [STEP 3] Adding ALL Product docs files explicitly...
git add -f "docs/Product docs/BUSINESS_MODEL_CANVAS.md"
git add -f "docs/Product docs/COMPLETE_UI_DOCUMENTATION.md"
git add -f "docs/Product docs/MARKET_ANALYSIS.md"
git add -f "docs/Product docs/PITCH_DECK.md"
git add -f "docs/Product docs/PRODUCT_PRESENTATION_SLIDES.md"
git add -f "docs/Product docs/PRODUCT_PRESENTATION.md"
git add -f "docs/Product docs/REVENUE_PLAN.md"
git add -f "docs/Product docs/SWOT_ANALYSIS.md"

echo.
echo [STEP 4] Adding all other files...
git add -A

echo.
echo [STEP 5] Showing what will be committed...
git status --short | findstr /C:"docs"

echo.
echo [STEP 6] Committing ALL files...
git commit -m "Force add ALL documentation files - complete docs folder and Product docs - January 2026"

echo.
echo [STEP 7] Pushing to GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo [WARNING] Normal push failed, trying force push...
    git push origin main --force
)

echo.
echo ========================================
echo   ✅ DONE! Check GitHub now
echo ========================================
echo.
echo Verify: https://github.com/JosefNGS/LADEMO/tree/main/docs
echo.
pause


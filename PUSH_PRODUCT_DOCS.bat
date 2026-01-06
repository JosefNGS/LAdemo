@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Push ALL Product Docs Files
echo ========================================
echo.

echo [STEP 1] Creating new branch...
git checkout -b push-all-product-docs

echo.
echo [STEP 2] Adding ALL Product docs files explicitly...
git add --force "docs/Product docs/BUSINESS_MODEL_CANVAS.md"
git add --force "docs/Product docs/COMPLETE_UI_DOCUMENTATION.md"
git add --force "docs/Product docs/MARKET_ANALYSIS.md"
git add --force "docs/Product docs/PITCH_DECK.md"
git add --force "docs/Product docs/PRODUCT_PRESENTATION_SLIDES.md"
git add --force "docs/Product docs/PRODUCT_PRESENTATION.md"
git add --force "docs/Product docs/REVENUE_PLAN.md"
git add --force "docs/Product docs/SWOT_ANALYSIS.md"

echo.
echo [STEP 3] Adding all other files...
git add -A

echo.
echo [STEP 4] Verifying Product docs files are staged...
git status --short | findstr /C:"Product docs"

echo.
echo [STEP 5] Committing all files...
git commit -m "Add all Product docs files: BUSINESS_MODEL_CANVAS, MARKET_ANALYSIS, PITCH_DECK, REVENUE_PLAN, PRODUCT_PRESENTATION, PRODUCT_PRESENTATION_SLIDES, SWOT_ANALYSIS, COMPLETE_UI_DOCUMENTATION - January 2026"

echo.
echo [STEP 6] Pushing new branch to GitHub...
git push -u origin push-all-product-docs

if errorlevel 1 (
    echo.
    echo [WARNING] Push failed, trying force push...
    git push origin push-all-product-docs --force
)

echo.
echo [STEP 7] Switching back to main and merging...
git checkout main
git merge push-all-product-docs

echo.
echo [STEP 8] Pushing merged changes to main...
git push origin main

echo.
echo ========================================
echo   ✅ ALL Product Docs Pushed!
echo ========================================
echo.
echo Verify on GitHub:
echo   Branch: https://github.com/JosefNGS/LADEMO/tree/push-all-product-docs/docs/Product%20docs
echo   Main: https://github.com/JosefNGS/LADEMO/tree/main/docs/Product%20docs
echo.
echo Should see 8 files:
echo   1. BUSINESS_MODEL_CANVAS.md
echo   2. COMPLETE_UI_DOCUMENTATION.md
echo   3. MARKET_ANALYSIS.md
echo   4. PITCH_DECK.md
echo   5. PRODUCT_PRESENTATION_SLIDES.md
echo   6. PRODUCT_PRESENTATION.md
echo   7. REVENUE_PLAN.md
echo   8. SWOT_ANALYSIS.md
echo.
pause


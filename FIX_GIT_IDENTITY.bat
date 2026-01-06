@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   Fix Git Identity Configuration
echo ========================================
echo.

echo [INFO] Current Git configuration:
git config user.name
git config user.email
echo.

echo [STEP 1] Setting Git user name to JosefNGS...
git config user.name "JosefNGS"
git config --global user.name "JosefNGS"

echo.
echo [STEP 2] Setting Git user email...
echo Please enter your GitHub email (or press Enter for noreply email):
set /p GIT_EMAIL="Email (default: JosefNGS@users.noreply.github.com): "
if "%GIT_EMAIL%"=="" set GIT_EMAIL=JosefNGS@users.noreply.github.com

git config user.email "%GIT_EMAIL%"
git config --global user.email "%GIT_EMAIL%"

echo.
echo [STEP 3] Verifying configuration...
echo New Git user name:
git config user.name
echo New Git user email:
git config user.email
echo.

echo [STEP 4] To fix previous commits:
echo   Option A: Amend last commit (if not pushed yet):
echo     git commit --amend --author="JosefNGS <%GIT_EMAIL%>" --no-edit
echo.
echo   Option B: Fix all commits in this repo (use carefully):
echo     git filter-branch --env-filter "export GIT_AUTHOR_NAME='JosefNGS'; export GIT_AUTHOR_EMAIL='%GIT_EMAIL%'; export GIT_COMMITTER_NAME='JosefNGS'; export GIT_COMMITTER_EMAIL='%GIT_EMAIL%'"
echo.

echo ========================================
echo   ✅ Git Identity Updated!
echo ========================================
echo.
echo Future commits will use:
echo   Name: JosefNGS
echo   Email: %GIT_EMAIL%
echo.
pause


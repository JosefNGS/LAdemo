# Version Control & Git Workflow
## Critical Branch Protection & Production Readiness Guidelines

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Production Protection Rules

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

### Main Branch Protection
**MANDATORY RULE - NO EXCEPTIONS**:
- **Main branch is PROTECTED and PRODUCTION-READY ONLY**
- **ONLY CTO (Craig Martin) can merge to main branch**
- **NO direct pushes to main branch** - All changes must go through Pull Requests
- **Main branch must always be production-ready**
- **All code in main must be tested and verified**

### Branch Protection Rules

1. **Main Branch Access**:
   - **Only CTO (Craig Martin)** can approve and merge to main
   - **No direct commits** to main branch
   - **No force pushes** to main branch
   - **All changes** must go through Pull Request workflow

2. **Pull Request Requirements**:
   - **All PRs must be reviewed** by CTO before merging
   - **All PRs must pass** automated checks (if configured)
   - **All PRs must have** clear description of changes
   - **All PRs must be** linked to issues/tasks (when applicable)

3. **Production Readiness Checklist**:
   - [ ] Code is tested and working
   - [ ] No breaking changes
   - [ ] Documentation is updated
   - [ ] Build passes successfully
   - [ ] No console errors
   - [ ] Responsive design verified
   - [ ] Cross-browser tested (if applicable)
   - [ ] Security reviewed (if applicable)

---

## 🔄 Git Workflow

### Standard Workflow

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

2. **Make Changes**:
   - Write code
   - Test thoroughly
   - Update documentation
   - Commit with clear messages

3. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Clear description of changes"
   ```

4. **Push to Remote**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**:
   - Go to GitHub
   - Create Pull Request from feature branch to main
   - Add clear description
   - Request review from CTO (Craig Martin)

6. **CTO Review & Merge**:
   - CTO reviews the PR
   - CTO approves and merges if production-ready
   - Feature branch is deleted after merge

### Branch Naming Conventions

**Feature Branches**:
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/documentation-name` - Documentation updates
- `refactor/refactor-name` - Code refactoring
- `test/test-name` - Testing updates

**Examples**:
- `feature/user-authentication`
- `fix/marketplace-product-display`
- `docs/api-documentation`
- `refactor/dashboard-components`

---

## 🚫 FORBIDDEN ACTIONS

### Never Do These:
- ❌ **NEVER push directly to main branch**
- ❌ **NEVER force push to main branch**
- ❌ **NEVER merge to main without CTO approval**
- ❌ **NEVER commit broken code**
- ❌ **NEVER commit untested code**
- ❌ **NEVER commit API keys or secrets**
- ❌ **NEVER commit large binary files**
- ❌ **NEVER skip Pull Request process**

### Consequences:
- **Violating these rules** can break production
- **Unauthorized merges** will be reverted
- **Repeated violations** may result in access restrictions

---

## ✅ Pre-Commit Checklist

Before committing code:

- [ ] Code is tested and working
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Documentation updated (if needed)
- [ ] Follows project structure (`docs/Core Documentation/STRUCTURE.md`)
- [ ] Follows coding standards (`.cursorrules`)
- [ ] No sensitive data (API keys, passwords)
- [ ] Commit message is clear and descriptive
- [ ] **CRITICAL**: Push change documentation created (see Push Change Documentation section below)

---

## 📋 Pull Request Template

### Required Information:

**Title**: Clear, descriptive title

**Description**:
- What changes were made?
- Why were these changes needed?
- How was it tested?
- Any breaking changes?

**Checklist**:
- [ ] Code tested and working
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Follows project structure
- [ ] Follows coding standards

**Screenshots** (if UI changes):
- Before/after screenshots

**Related Issues**:
- Link to related issues/tasks

---

## 🔐 Branch Protection Settings

### Recommended GitHub Settings:

1. **Require Pull Request Reviews**:
   - Required reviewers: CTO (Craig Martin)
   - Dismiss stale reviews when new commits are pushed
   - Require review from Code Owners

2. **Require Status Checks**:
   - Require branches to be up to date before merging
   - Require status checks to pass before merging

3. **Restrictions**:
   - Do not allow bypassing the above settings
   - Restrict pushes that create files larger than 100MB

4. **Rules**:
   - Allow force pushes: ❌ Disabled
   - Allow deletions: ❌ Disabled
   - Allow squash merging: ✅ Enabled
   - Allow merge commits: ✅ Enabled
   - Allow rebase merging: ✅ Enabled

---

## 👥 Team Responsibilities

### CTO (Craig Martin) - Main Branch Maintainer
**Responsibilities**:
- Review all Pull Requests
- Approve production-ready code
- Merge to main branch
- Ensure production stability
- Maintain code quality standards

**Contact**: craig@nordicglobalsolutions.com

### Developers (Josef, Jonne)
**Responsibilities**:
- Create feature branches
- Write and test code
- Create Pull Requests
- Respond to review feedback
- Never push directly to main

---

## 🚀 Production Deployment

### Deployment Process:

1. **Code in Main Branch**:
   - Only production-ready code is in main
   - All code has been reviewed and tested

2. **Automatic Deployment**:
   - Netlify automatically deploys from main branch
   - Build process runs automatically
   - Production site updates automatically

3. **Verification**:
   - CTO verifies deployment
   - Test production site
   - Monitor for errors

---

## 📝 Commit Message Guidelines

### Format:
```
Type: Brief description

Detailed explanation (if needed)
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks

### Examples:
```
feat: Add user authentication system

- Implement login functionality
- Add session management
- Update user flow documentation
```

```
fix: Resolve marketplace product display issue

- Fix product image loading
- Update product card component
- Add error handling
```

---

## 🔍 Code Review Guidelines

### What to Review:

1. **Functionality**:
   - Does the code work as intended?
   - Are edge cases handled?
   - Are error cases handled?

2. **Code Quality**:
   - Follows coding standards?
   - Follows project structure?
   - Is code readable and maintainable?

3. **Testing**:
   - Is code tested?
   - Are tests passing?
   - Is manual testing done?

4. **Documentation**:
   - Is documentation updated?
   - Are comments clear?
   - Are changes documented?

5. **Security**:
   - No sensitive data exposed?
   - No security vulnerabilities?
   - Proper authentication/authorization?

---

## ⚡ Emergency Hotfixes

### Process for Critical Fixes:

1. **Create Hotfix Branch**:
   ```bash
   git checkout -b hotfix/critical-fix-name
   ```

2. **Make Fix**:
   - Fix the critical issue
   - Test thoroughly
   - Verify fix works

3. **Create PR**:
   - Create Pull Request
   - Mark as "URGENT" or "HOTFIX"
   - Request immediate CTO review

4. **CTO Review**:
   - CTO reviews immediately
   - CTO merges if fix is verified
   - Deploy to production

5. **Post-Fix**:
   - Document the issue
   - Create follow-up task if needed
   - Update documentation

---

## 📊 Version Control Best Practices

1. **Small, Focused Commits**:
   - One logical change per commit
   - Clear commit messages
   - Easy to review and revert

2. **Regular Commits**:
   - Commit frequently
   - Don't wait for "perfect" code
   - Use branches for work-in-progress

3. **Clear Branch Names**:
   - Descriptive names
   - Follow naming conventions
   - Easy to identify purpose

4. **Keep Branches Updated**:
   - Regularly merge main into feature branches
   - Resolve conflicts early
   - Keep branches clean

5. **Delete Merged Branches**:
   - Delete feature branches after merge
   - Keep repository clean
   - Avoid branch clutter

---

## 🎯 Production Readiness Criteria

Code is production-ready when:

- ✅ All tests pass
- ✅ No console errors
- ✅ No TypeScript errors
- ✅ Responsive design verified
- ✅ Cross-browser tested (if applicable)
- ✅ Performance acceptable
- ✅ Security reviewed
- ✅ Documentation updated
- ✅ Code reviewed by CTO
- ✅ Follows project structure
- ✅ Follows coding standards

---

## 📞 Contact

**For Version Control Questions**: Contact CTO (Craig Martin)  
**For Git Workflow Issues**: Contact CTO (Craig Martin)  
**For Branch Protection**: Contact CTO (Craig Martin)

**CTO Contact**: craig@nordicglobalsolutions.com

---

**This document defines critical version control rules. All team members must follow these rules to maintain production stability.**


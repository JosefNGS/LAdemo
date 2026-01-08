# Push Documentation Folder
## Change Documentation for Every GitHub Push

**⚠️ CRITICAL**: This folder contains documentation for EVERY push made to the GitHub repository.

---

## 📁 Folder Structure

Each push must have its own documentation file saved in this folder.

**Naming Convention**: `YYYY-MM-DD-HHMMSS-[brief-description].md`

**Examples**:
- `2026-01-08-143022-organize-docs-by-services.md`
- `2026-01-08-150530-add-individual-task-docs.md`
- `2026-01-08-160045-fix-responsive-layout.md`

---

## 📋 Required Information

Every push documentation must include:
1. **Push Information**: Date, time, branch, commit hash, author
2. **Changes Made**: Files added, modified, deleted
3. **Detailed Changes**: What changed and why
4. **Purpose**: Main goal of the push
5. **Verification**: Checklist of what was verified
6. **Impact Assessment**: Breaking changes, dependencies, etc.

---

## 🔄 Process

1. **Before Pushing**:
   - Create change documentation using template
   - Save in this folder with proper naming
   - Include in commit

2. **After Pushing**:
   - Verify documentation is in repository
   - Link to documentation in PR (if applicable)

---

## 📝 Template

Use `docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md` as the template for all push documentation.

---

## ✅ Verification

Before every push, ensure:
- [ ] Change documentation is created
- [ ] Documentation follows template
- [ ] Documentation is saved in this folder
- [ ] Documentation is included in commit
- [ ] All changes are documented

---

**This folder is CRITICAL for tracking all changes made to the repository. Every push MUST have documentation here.**


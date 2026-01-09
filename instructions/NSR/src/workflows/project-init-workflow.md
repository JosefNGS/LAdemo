# NSR Project Initialization Workflow

**Purpose**: Step-by-step workflow for initializing a new project using NSR framework

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Owner**: NorthStar Team

---

## Workflow Overview

This workflow guides the creation of a new project using NSR framework, generating a BitNexus-like structure with all necessary files, folders, and rules.

## Step-by-Step Process

### Phase 1: Project Setup

1. **Create Project Root**
   - Create project directory
   - Initialize git repository
   - Create root `README.md`
   - Create root `LICENSE` (MIT License - NorthStar Team)
   - Create root `CHANGELOG.md`

2. **Generate Folder Structure**
   - Use `src/templates/project-structure-template.md`
   - Create all required folders:
     - `frontend/`
     - `backend/`
     - `developers/`
     - `instructions/`
     - `rules/`
     - `docs/`
   - Create subfolders as per template

3. **Generate Mandatory Files**
   - For each folder, create:
     - `README.md` (folder overview)
     - `CHANGELOG.md` (change tracking)
   - Use templates from `src/templates/`

### Phase 2: Rules & Standards

4. **Generate `.cursorrules`**
   - Use `src/rules/cursor-rules-template.md`
   - Include relevant rules from `src/rules/`
   - Add project-specific rules
   - Include developer information
   - Add tech stack details

5. **Extract Rules to `rules/` Folder**
   - Copy framework rules (Agent OS, BMAD-METHOD)
   - Create service-specific rules
   - Create folder-specific rules
   - Organize by category

6. **Set Up Developer Profiles**
   - Create `developers/` folder
   - Add developer profile files
   - Include portable profile format
   - Add to README.md

### Phase 3: Documentation

7. **Initialize Documentation Structure**
   - Create `docs/` folder structure:
     - `Core Documentation/`
     - `Development/`
     - `Project Management/`
     - `Services/`
     - `Setup & Configuration/`
     - `UI & Features/`
   - Generate README.md and CHANGELOG.md for each

8. **Create Core Documentation**
   - `STRUCTURE.md` - Project structure (authoritative source)
   - `DOCS_STRUCTURE.md` - Documentation organization
   - `TECH_STACK.md` - Technology stack
   - `README.md` - Documentation overview

### Phase 4: Framework Integration

9. **Set Up Instructions Folder**
   - Copy BMAD-METHOD framework (if needed)
   - Copy Agent OS framework (if needed)
   - Create NSR reference folder
   - Add framework README files

10. **Configure Development Environment**
    - Set up frontend development server
    - Configure backend services
    - Create development server folder
    - Add Docker configuration (if needed)

### Phase 5: Validation & Verification

11. **Verify Structure**
    - Check all folders have README.md
    - Check all folders have CHANGELOG.md
    - Verify `.cursorrules` is complete
    - Validate developer profiles

12. **Initialize Version Control**
    - Create `.gitignore`
    - Set up branch protection rules
    - Configure PR workflow
    - Add initial commit

## Automation

This workflow can be automated using:
- NSR CLI tools (future)
- Template generation scripts
- File structure generators
- Rule extraction tools

## Customization

Projects can customize:
- Folder names (if needed)
- Additional folders (project-specific)
- Service selection (which services to include)
- Documentation structure (extended sections)
- Rule selection (which rules to apply)

---

**Framework**: NSR (NorthStar Rules)  
**License**: MIT License - Copyright (c) 2026 NorthStar Team (Nordic Global Solutions)

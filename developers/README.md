# Developer Profiles - Source of Truth

## Overview
This folder contains individual developer profile files that serve as the **source of truth** for each developer's information. These files are **portable** and can be moved between projects, ensuring consistent developer information across all projects.

## Purpose
- **Single Source of Truth**: Each developer maintains their own profile file
- **Portability**: Files can be copied/moved between projects
- **Consistency**: Ensures developer information is consistent across projects
- **Onboarding**: Quick reference for new team members
- **Agent Reference**: AI agents can reference these files for developer information

## File Structure
```
developers/
├── README.md                    # This file
├── CHANGELOG.md                 # General change history
├── JOSEF_LINDBOM.md             # Josef Lindbom's profile
├── JOSEF_LINDBOM_CHANGELOG.md   # Josef Lindbom's individual changelog
├── CRAIG_MARTIN.md              # Craig Martin's profile
├── CRAIG_MARTIN_CHANGELOG.md    # Craig Martin's individual changelog
├── JONNE_WASELIUS.md            # Jonne Waselius's profile
├── JONNE_WASELIUS_CHANGELOG.md  # Jonne Waselius's individual changelog
├── CORY.md                      # Cory's profile
└── CORY_CHANGELOG.md            # Cory's individual changelog
```

## Usage

### For Developers
- **Maintain your own file**: Keep your profile file up-to-date with current information
- **Portable**: Copy your file to new projects to maintain consistency
- **Version Control**: Commit changes to your profile when information updates

### For Projects
- **Reference**: Use these files as the source of truth for developer information
- **Onboarding**: Share relevant profile files with new team members
- **Documentation**: Reference developer profiles in project documentation

### For AI Agents
- **Pre-Flight Checklist**: Reference these files when asking "Who is the developer?"
- **Authorization**: Verify developer identity and role from these files
- **Contact Information**: Use email addresses and contact info from profiles

## Profile File Template

Each developer profile should include:
- **Personal Information**: Name, role, email, GitHub username
- **Contact Information**: Email, Discord, phone (optional)
- **Role & Responsibilities**: Current role, primary responsibilities
- **Skills & Expertise**: Technical skills, areas of expertise
- **Access Levels**: Repository access, branch permissions
- **Project-Specific Info**: Current projects, active tasks
- **Communication**: Preferred communication channels
- **Portable Metadata**: Information that applies across projects

## Developer Changelogs

Each developer has an individual changelog file (`[DEVELOPER_NAME]_CHANGELOG.md`) that tracks:
- **All changes made** by that developer
- **Contributions** to the project
- **Features developed** by the developer
- **Bug fixes** implemented
- **Documentation updates** made
- **Cross-references** to main project changelog

### Purpose
- **Individual tracking**: Each developer can track their own contributions
- **Accountability**: Clear record of who made what changes
- **Coordination**: Team members can see what each developer is working on
- **Review**: Easy to review individual developer contributions
- **AI Agent Reference**: AI agents can reference these for developer tracking

### Usage
- **Developers**: Maintain your own changelog, add entries for all your changes
- **Team**: Review individual changelogs to understand team contributions
- **AI Agents**: Reference these files when tracking developer contributions

## Maintenance

### When to Update
- Role changes
- Contact information changes
- New skills or expertise
- Access level changes
- Project assignments change

### Update Process
1. Developer updates their own profile file
2. Commit changes with message: `docs: Update developer profile - [developer name]`
3. Push to feature branch
4. Create Pull Request (if required by project)

## Related Documentation
- **Developer Registry**: `docs/Services/github/DEVELOPERS.md` (project-specific)
- **Developer Docs**: `docs/Development/DEVELOPER_DOCS.md` (project-specific)
- **Cursor Rules**: `.cursorrules` (references developer profiles)

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Active

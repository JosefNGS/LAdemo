# NSR Reference Frameworks

## Overview
This folder contains reference copies of frameworks that NSR (NorthStar Rules) uses as references for their development.

## Purpose
NSR development references these frameworks to:
- Understand development methodologies and best practices
- Align with established frameworks and patterns
- Ensure consistency with industry standards
- Guide decision-making processes

## Reference Frameworks

### Agent OS (`.agent-os/`)
- **Purpose**: Agent Operating System configuration and standards
- **Use Case**: NSR references Agent OS for:
  - Code standards and best practices
  - Security principles
  - Deployment requirements
  - Command definitions and workflows

### BMAD-METHOD (`BMAD-METHOD/`)
- **Purpose**: Business Model & Architecture Development Method
- **Use Case**: NSR references BMAD-METHOD for:
  - Product development workflows
  - Architecture decision processes
  - Documentation structures
  - Planning methodologies

## Usage

### For NSR Development
- **Reference Only**: These are reference copies - NSR uses them as guides
- **Do Not Modify**: Do not modify these reference copies directly
- **Source of Truth**: Original frameworks are in `instructions/.agent-os/` and `instructions/BMAD-METHOD/`

### For NSR Rules
- NSR rules may reference patterns, structures, or concepts from these frameworks
- NSR rules should align with best practices from these frameworks where applicable
- NSR rules may extend or adapt these frameworks for NorthStar-specific needs

## Maintenance

### When to Update
- When original frameworks in `instructions/` are updated
- When NSR development requires newer framework versions
- When framework changes affect NSR rules or development

### Update Process
1. Check for updates in original frameworks (`instructions/.agent-os/`, `instructions/BMAD-METHOD/`)
2. Copy updated frameworks to this `ref/` folder
3. Update NSR rules if framework changes affect NSR development
4. Update `instructions/NSR/CHANGELOG.md` with update details

## Related Documentation
- **NSR Overview**: `instructions/NSR/README.md`
- **Original Agent OS**: `instructions/.agent-os/`
- **Original BMAD-METHOD**: `instructions/BMAD-METHOD/`
- **NSR Rules**: `rules/` (if NSR rules are extracted)

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Active

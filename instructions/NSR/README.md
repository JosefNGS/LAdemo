# NorthStar Rules (NSR)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.2.0-blue)](CHANGELOG.md)

## Overview

**NorthStar Rules (NSR)** is a framework developed by the NorthStar team (Nordic Global Solutions) that enables the generation of BitNexus-like project structures. NSR provides templates, workflows, rules, and standards to bootstrap projects with consistent structure, documentation, and development practices.

**All rules in BitNexus are made by the NorthStar team.** NSR extracts and organizes these rules into a reusable framework that can generate similar project structures.

## NorthStar Team

- **Josef Lindbom** - COO (Chief Operating Officer) & Development Vision Lead
- **Craig Martin** - CTO (Chief Technology Officer)

## License

**MIT License** - Copyright (c) 2026 NorthStar Team (Nordic Global Solutions)

**Framework Ownership**: All NGS (Nordic Global Solutions) frameworks, including NSR, belong to the NorthStar team.

See [LICENSE](LICENSE) for full license text.

## Purpose

NSR provides a framework for:
- **Generating project structures** similar to BitNexus
- **Standardizing best practices** across NorthStar projects
- **Extracting and organizing rules** from BitNexus and other projects
- **Providing templates and workflows** for project initialization
- **Ensuring consistency** in file organization, documentation, and development practices

## How NSR Works

NSR works similar to BMAD-METHOD and Agent OS:

1. **Templates** (`src/templates/`) - Project structure templates
2. **Rules** (`src/rules/`) - Extracted rules from BitNexus and frameworks
3. **Workflows** (`src/workflows/`) - Step-by-step project initialization workflows
4. **Standards** (`src/standards/`) - Code and project standards
5. **References** (`ref/`) - Reference frameworks (Agent OS, BMAD-METHOD)

## Structure

```
NSR/
├── README.md                    # This overview document
├── LICENSE                      # MIT License (NorthStar Team)
├── CHANGELOG.md                 # Tracks all changes
├── config.yml                   # NSR framework configuration
├── src/                         # NSR framework source
│   ├── templates/               # Project structure templates
│   │   └── project-structure-template.md
│   ├── rules/                   # Extracted rules
│   │   └── cursor-rules-template.md
│   ├── workflows/               # Project initialization workflows
│   │   └── project-init-workflow.md
│   └── standards/               # Code and project standards
│       ├── code-standards.md
│       └── project-standards.md
└── ref/                         # Reference frameworks
    ├── .agent-os/               # Agent OS framework (reference)
    └── BMAD-METHOD/             # BMAD-METHOD framework (reference)
```

## Usage

### Generating a New Project

1. **Use Project Init Workflow**: Follow `src/workflows/project-init-workflow.md`
2. **Apply Structure Template**: Use `src/templates/project-structure-template.md`
3. **Generate Cursor Rules**: Use `src/rules/cursor-rules-template.md`
4. **Apply Standards**: Reference `src/standards/` for code and project standards

### Extracting Rules from BitNexus

NSR extracts rules from:
- `.cursorrules` - Cursor IDE rules
- `rules/` folder - Extracted framework rules
- Project structure - File organization patterns
- Documentation structure - Documentation organization

### Customizing for Your Project

Projects can customize:
- Folder names (if needed)
- Additional folders (project-specific)
- Service selection (which services to include)
- Documentation structure (extended sections)
- Rule selection (which rules to apply)

## Key Features

### Project Structure Generation
- **Mandatory folders** - Frontend, backend, developers, instructions, rules, docs
- **Mandatory files** - README.md and CHANGELOG.md in every folder
- **File organization** - Clear separation of concerns

### Rules Extraction
- **Cursor rules** - Generate `.cursorrules` from NSR templates
- **Service rules** - Service-specific requirements
- **Folder rules** - Folder-specific guidelines
- **Framework rules** - Extracted from Agent OS and BMAD-METHOD

### Standards Enforcement
- **Code standards** - TypeScript, React, Tailwind CSS guidelines
- **Project standards** - File organization, version control, documentation
- **Documentation standards** - CHANGELOG requirements, README structure

### Workflow Automation
- **Project initialization** - Step-by-step workflow for new projects
- **Structure validation** - Verify all required files and folders
- **Rule application** - Apply NSR rules to generated projects

## Reference Frameworks

NSR uses these frameworks as references:
- **Agent OS** (`ref/.agent-os/`) - Code standards, security, deployment
- **BMAD-METHOD** (`ref/BMAD-METHOD/`) - Product development workflows, architecture

## Related Documentation

- `.cursorrules`: Project-specific rules and AI agent guidelines (generated from NSR)
- `instructions/BMAD-METHOD/`: Business Model & Architecture Development Method (original)
- `instructions/.agent-os/`: Agent Operating System documentation (original)
- `ref/`: Reference copies of Agent OS and BMAD-METHOD for NSR development

## Maintenance

The NorthStar Rules are living documents and will be updated as needed to reflect new insights, technologies, or strategic shifts. All updates will be logged in the `CHANGELOG.md` file.

## Contributing

NSR is developed and maintained by the NorthStar team. For contributions or questions, contact:
- **Josef Lindbom**: josef@nordicglobalsolutions.com
- **Craig Martin**: craig@nordicglobalsolutions.com

---

**Last Updated**: January 2026  
**Version**: 1.2.0  
**Framework Owner**: NorthStar Team (Nordic Global Solutions)  
**License**: MIT License - Copyright (c) 2026 NorthStar Team

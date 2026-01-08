# Rules Directory

This directory contains system-specific rules extracted from the frameworks in the `instructions/` folder.

## Structure

```
rules/
├── README.md              # This file
├── agent-os/              # Agent OS framework rules
│   ├── README.md         # Agent OS rules overview
│   ├── code-style.md     # Code style guidelines
│   ├── best-practices.md # Development best practices
│   ├── security.md       # Security principles
│   └── deployment.md     # Deployment requirements
└── bmad-method/          # BMAD-METHOD framework rules
    ├── README.md         # BMAD-METHOD rules overview
    ├── workflow.md       # Workflow guidelines
    └── structure.md      # Structure and organization rules
```

## Purpose

These rules are extracted from:
- `instructions/.agent-os/` - Agent OS framework standards and guidelines
- `instructions/BMAD-METHOD/` - BMAD-METHOD framework documentation

## Usage

When working with code or features related to these frameworks:
1. **Check the relevant rule file** in this directory
2. **Follow the guidelines** specified in the rule files
3. **Reference the source** in `instructions/` for complete documentation

## Maintenance

- **Source of Truth**: The `instructions/` folder contains the original framework documentation
- **Rule Files**: These files extract and summarize key rules for quick reference
- **Updates**: When frameworks in `instructions/` are updated, these rule files should be reviewed and updated accordingly

## Integration with .cursorrules

The main `.cursorrules` file references these rule files. Always check both:
1. `.cursorrules` - Project-specific rules and structure
2. `rules/` - Framework-specific rules from instruction systems

# Rules Directory

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/` for complete framework documentation and guidelines.

This directory contains system-specific rules extracted from the frameworks in the `instructions/` folder and from the project's own documentation.

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Complete Agent OS framework documentation
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Complete BMAD-METHOD framework documentation

**These rule files are quick references** - Always check `instructions/` for complete, up-to-date documentation.

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
├── bmad-method/          # BMAD-METHOD framework rules
│   ├── README.md         # BMAD-METHOD rules overview
│   ├── workflow.md       # Workflow guidelines
│   └── structure.md      # Structure and organization rules
├── services/             # Service-specific rules
│   ├── README.md         # Services rules overview
│   ├── admin/            # Admin View & Task Management
│   ├── netlify/          # Netlify deployment
│   ├── PostgreSQL/         # PostgreSQL database
│   ├── phoenix/            # Phoenix web framework
│   ├── elixir/             # Elixir services & BEAM VM
│   ├── github/           # GitHub version control
│   ├── n8n/              # n8n automation
│   ├── discourse/        # Discourse forum
│   ├── erlang-ledger/    # Erlang/Elixir ledger
│   └── golang-api/       # Golang API
├── frontend/             # Frontend rules
│   └── rules.md          # Frontend development rules
├── backend/              # Backend rules
│   └── rules.md          # Backend development rules
├── dev_server/           # Development server rules
│   └── rules.md          # Dev server rules
└── docs/                 # Documentation rules
    └── rules.md          # Documentation rules
```

## Purpose

These rules are extracted from:
- `instructions/.agent-os/` - Agent OS framework standards and guidelines
- `instructions/BMAD-METHOD/` - BMAD-METHOD framework documentation
- `docs/Services/` - Service-specific documentation
- `docs/Core Documentation/` - Project structure and documentation standards
- `.cursorrules` - Project-specific rules

## Usage

When working with code or features:
1. **Check the relevant rule file** in this directory
2. **Follow the guidelines** specified in the rule files
3. **Reference the source** in `instructions/` or `docs/` for complete documentation

## Maintenance

- **Source of Truth**: The `instructions/` and `docs/` folders contain the original documentation
- **Rule Files**: These files extract and summarize key rules for quick reference
- **Updates**: When frameworks or documentation are updated, these rule files should be reviewed and updated accordingly

## Integration with .cursorrules

The main `.cursorrules` file references these rule files. Always check both:
1. `.cursorrules` - Project-specific rules and structure
2. `rules/` - Framework-specific and service-specific rules

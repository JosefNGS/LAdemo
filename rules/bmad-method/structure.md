# BMAD-METHOD Structure Rules

**Source**: `instructions/BMAD-METHOD/`

## Framework Structure

BMAD-METHOD is organized into several key components:

### Core Components
- **`src/core/`** - Core framework files (BMAD Core)
- **`src/modules/`** - BMAD modules (bmb, bmgd, bmm, cis)
- **`src/utility/`** - Utility components and helpers

### Documentation
- **`docs/explanation/`** - Concept explanations
- **`docs/how-to/`** - How-to guides
- **`docs/reference/`** - Reference documentation
- **`docs/tutorials/`** - Tutorial materials

### Development Tools
- **`tools/`** - Development tools and CLI utilities
- **`samples/`** - Sample custom modules for reference
- **`test/`** - Test fixtures and test files
- **`website/`** - BMAD website source files

## Module Structure

### Official Modules
1. **BMB** (BMAD Method Builder) - Custom module creation
2. **BMGD** (BMAD Game Development) - Game development workflows
3. **BMM** (BMAD Method Main) - Core agile development workflows
4. **CIS** (Creative Intelligence System) - Creative workflows

### Module Organization
- Each module has its own structure
- Modules can be used independently
- Modules work together seamlessly

## Custom Module Creation

### BMAD Builder
- Create custom modules using BMAD Builder
- Package custom content as installable modules
- Share modules with team or community

### Module Components
- **Agents** - Specialized AI agents
- **Workflows** - Guided workflows
- **Templates** - Code templates
- **Tools** - Development tools

## File Organization Rules

### Core Files
- **DO NOT modify** core framework files without understanding BMAD architecture
- Core files provide the foundation for all modules
- Changes to core affect all modules

### Module Files
- Each module maintains its own structure
- Follow module-specific conventions
- Don't mix module files

### Custom Content
- Place custom content in appropriate directories
- Follow BMAD structure conventions
- Use samples as reference

## Installation & Usage

### Installation
- Install via NPX: `npx bmad-method@alpha install`
- Follow installation instructions
- Initialize project with workflow

### Project Integration
- BMAD-METHOD integrates with IDE (Cursor, Claude Code, etc.)
- Workflows run through IDE agents
- Maintain project context

## CRITICAL Rules

- ✅ **Follow BMAD structure** - Use established organization
- ✅ **Respect module boundaries** - Don't mix module files
- ✅ **Use samples as reference** - Learn from examples
- ✅ **Follow installation procedures** - Proper setup required
- ✅ **Maintain project context** - Keep workflow information
- ❌ **Don't modify core files** without understanding architecture
- ❌ **Don't mix module structures** - Keep modules separate
- ❌ **Don't skip installation steps** - Complete setup required
- ❌ **Don't ignore module conventions** - Follow established patterns

# Agent OS Best Practices

**Source**: `instructions/.agent-os/standards/best-practices.md`

## Core Principles

### Keep It Simple
- Implement code in the **fewest lines possible**
- Avoid over-engineering solutions
- Choose **straightforward approaches** over clever ones

### Optimize for Readability
- Prioritize **code clarity** over micro-optimizations
- Write **self-documenting code** with clear variable names
- Add comments for **"why"** not **"what"**

### DRY (Don't Repeat Yourself)
- Extract repeated business logic to **private methods**
- Extract repeated UI markup to **reusable components**
- Create **utility functions** for common operations

### File Structure
- Keep files focused on a **single responsibility**
- Group related functionality together
- Use **consistent naming conventions**

## Dependencies

### Choose Libraries Wisely
When adding third-party dependencies:
- Select the **most popular and actively maintained** option
- Check the library's GitHub repository for:
  - **Recent commits** (within last 6 months)
  - **Active issue resolution**
  - **Number of stars/downloads**
  - **Clear documentation**

### Dependency Management
- Keep dependencies **up-to-date** but test thoroughly
- Remove unused dependencies regularly
- Document why specific dependencies are chosen

## Code Organization

### Component Structure
- One component per file
- Keep components focused and under 300 lines when possible
- Use clear, descriptive names

### Function Design
- Keep functions small and focused
- Single responsibility per function
- Clear input/output contracts

### Error Handling
- Handle errors gracefully
- Provide meaningful error messages
- Log errors appropriately

## CRITICAL Rules

- ✅ **Prioritize simplicity** - Fewer lines, clearer code
- ✅ **Write self-documenting code** - Clear names, obvious logic
- ✅ **Extract repeated code** - DRY principle always
- ✅ **Single responsibility** - One purpose per file/function
- ✅ **Choose proven libraries** - Popular, maintained, documented
- ❌ **Don't over-engineer** - Simple solutions first
- ❌ **Don't optimize prematurely** - Readability over micro-optimizations
- ❌ **Don't repeat code** - Extract to reusable components/functions
- ❌ **Don't add unnecessary dependencies** - Evaluate carefully

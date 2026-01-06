# Contributing to BitNexus

Thank you for your interest in contributing to BitNexus! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/JosefNGS/LADEMO/issues)
2. If not, create a new issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. Provide as much detail as possible:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment information
   - Screenshots if applicable

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue using the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Clearly describe the feature and its use cases

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the coding standards (see `.cursorrules`)
   - Write clear, concise commit messages
   - Add tests if applicable
   - Update documentation as needed
4. **Test your changes**
   ```bash
   npm run build
   # Test locally
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**
   - Use the PR template
   - Link related issues
   - Request review from maintainers

## Development Setup

### Prerequisites
- Node.js 18+
- Modern web browser
- Git

### Setup Steps
1. Clone the repository
   ```bash
   git clone https://github.com/JosefNGS/LADEMO.git
   cd LADEMO
   ```
2. Install dependencies (if any)
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm run dev
   # or
   start.bat  # Windows
   ```

## Coding Standards

### TypeScript/React
- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Keep components focused and reusable
- Export types from `src/types.ts`

### Styling
- Use Tailwind CSS utility classes
- Follow the design system (see `.cursorrules`)
- Maintain responsive design (mobile-first)
- Use glass-card styling for consistency

### File Structure
- Pages go in `src/pages/`
- Components go in `src/components/`
- Services go in `src/services/`
- Types go in `src/types.ts`
- Constants go in `src/constants.tsx`

### Naming Conventions
- **Files**: PascalCase for components (`Dashboard.tsx`), camelCase for utilities
- **Components**: PascalCase (`Dashboard`, `Marketplace`)
- **Functions**: camelCase (`handleSubmit`, `getAIAdvice`)
- **Constants**: UPPER_SNAKE_CASE for true constants

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add shopping cart functionality
fix: resolve dashboard chart rendering issue
docs: update API documentation
```

## Testing

- Test your changes locally before submitting
- Ensure all existing tests pass
- Add tests for new features when possible
- Test on multiple browsers if applicable

## Documentation

- Update README.md if adding new features
- Update relevant docs in `docs/` folder
- Add JSDoc comments for complex functions
- Keep `.cursorrules` updated with new patterns

## Review Process

1. All PRs require at least one review
2. Address review comments promptly
3. Maintainers will merge after approval
4. PRs may be closed if inactive for 30+ days

## Questions?

- Open a discussion in GitHub Discussions
- Check existing issues and PRs
- Review the documentation in `docs/`

Thank you for contributing to BitNexus! 🚀


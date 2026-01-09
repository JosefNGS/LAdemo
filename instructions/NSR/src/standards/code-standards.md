# NSR Code Standards

**Purpose**: Code standards and best practices for NSR-generated projects

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Owner**: NorthStar Team

---

## TypeScript Standards

### Type Safety
- Always use TypeScript with strict typing
- Define interfaces for component props
- Use enums for route definitions
- Export types from `types.ts`, not inline
- Never use `any` type (use proper TypeScript types)

### Naming Conventions
- **Files**: PascalCase for components (`Dashboard.tsx`), camelCase for utilities
- **Components**: PascalCase (`Dashboard`, `Marketplace`)
- **Functions**: camelCase (`handleSubmit`, `getAIAdvice`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for objects
- **Props interfaces**: `ComponentNameProps` (e.g., `LayoutProps`)

## React Standards

### Component Patterns
- Use functional components with TypeScript
- Use `React.FC<Props>` for component typing
- Keep components in `pages/` for route-level pages
- Keep reusable UI in `components/`
- Use descriptive component names (PascalCase)

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects
- Keep state as local as possible
- Pass callbacks as props for parent-child communication

### Code Organization
- One component per file
- Export default for components
- Named exports for utilities and types
- Keep files focused and under 300 lines when possible

## Styling Standards

### Tailwind CSS Guidelines
- Use Tailwind CSS utility classes exclusively
- Follow design system colors and spacing
- Use glass card patterns for modern UI
- Responsive design: mobile-first approach
- No inline styles (use Tailwind classes)

### Design System
- **Colors**: Use defined color palette (purple, cyan, green, gold)
- **Glass Cards**: `glass-card` class with backdrop blur
- **Gradients**: Use `text-gradient-cyan-purple` for headings
- **Borders**: `border-white/5` for subtle borders
- **Spacing**: Use consistent padding (p-6, p-8) and gaps (gap-4, gap-6, gap-8)

## File Organization

### Import Rules
- Use relative imports: `'./components/Layout'`
- Import types: `import { AppRoute } from '../types'`
- Import constants: `import { ICONS } from '../constants'`
- Group imports: React first, then local imports

### Folder Structure
- **Pages**: Route-level components in `pages/`
- **Components**: Reusable UI in `components/`
- **Services**: API services in `services/`
- **Utils**: Utility functions in `utils/`
- **Data**: Data files in `data/`
- **Contexts**: React contexts in `contexts/`

## Documentation Standards

### Code Comments
- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Keep README updated with setup instructions
- All documentation files go in `docs/` folder

### CHANGELOG Requirements
- **MANDATORY**: Every change MUST be logged in CHANGELOG.md
- **Tracking**: Include `[Developer: Name]` or `[Cursor]` tag
- **Location**: Update relevant CHANGELOG.md files
- **Format**: Follow Keep a Changelog format

## Error Handling

### Best Practices
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors to console for debugging
- Provide fallback UI for errors

## Performance

### Optimization
- Lazy load heavy components when possible
- Use `React.memo` for expensive components (if needed)
- Optimize images with proper sizing
- Minimize re-renders with proper state management

---

**Framework**: NSR (NorthStar Rules)  
**License**: MIT License - Copyright (c) 2026 NorthStar Team (Nordic Global Solutions)

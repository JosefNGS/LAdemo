# BitNexus Landing Page - Cursor Rules

## Project Overview
This is a React + TypeScript landing page with an interactive demo dashboard for BitNexus, a decentralized affiliate revenue platform.

## Tech Stack
- **Frontend**: React 19.2.3 with TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Charts**: Recharts 3.6.0
- **Build**: ES Modules (no bundler, direct browser imports)
- **Fonts**: Orbitron (futuristic), Inter (sans), Space Grotesk (display)

## File Structure
```
src/
├── pages/          # Page components (Dashboard, Marketplace, Alliance, etc.)
├── components/      # Reusable components (Layout, etc.)
├── services/       # API services and utilities
├── types.ts        # TypeScript type definitions
├── constants.tsx   # Constants, icons, and shared data
├── App.tsx         # Main app component with routing
└── main.tsx        # React entry point
```

## Coding Standards

### TypeScript
- Always use TypeScript with strict typing
- Define interfaces for component props
- Use enums for route definitions (AppRoute)
- Export types from `types.ts`, not inline

### React Components
- Use functional components with TypeScript
- Use `React.FC<Props>` for component typing
- Keep components in `pages/` for route-level pages
- Keep reusable UI in `components/`
- Use descriptive component names (PascalCase)

### Styling Guidelines
- Use Tailwind CSS utility classes exclusively
- Follow the design system:
  - **Colors**: 
    - Purple: `#7c3aed` (nexusPurple)
    - Cyan: `#06b6d4` (techCyan)
    - Green: `#10b981` (signalGreen)
    - Gold: `#fbbf24` (wealthGold)
    - Background: `#030712` (deepBg)
    - Card: `#111827` (cardBg)
  - **Glass Cards**: `glass-card` class with backdrop blur
  - **Gradients**: Use `text-gradient-cyan-purple` for headings
  - **Borders**: `border-white/5` for subtle borders
  - **Spacing**: Use consistent padding (p-6, p-8) and gaps (gap-4, gap-6, gap-8)
  - **Rounded**: Use `rounded-xl`, `rounded-2xl`, `rounded-3xl` for cards
  - **Fonts**: 
    - `font-display` for headings (Space Grotesk)
    - `font-futuristic` for special text (Orbitron)
    - Default: Inter

### Component Patterns

#### Page Components
```typescript
import React from 'react';

const PageName: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Content */}
    </div>
  );
};

export default PageName;
```

#### Icons
- All icons are defined in `src/constants.tsx` as React components
- Use `<ICONS.IconName />` pattern
- Icons return SVG elements

#### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects
- Keep state as local as possible
- Pass callbacks as props for parent-child communication

### Import Rules
- Use relative imports: `'./components/Layout'`
- Import types: `import { AppRoute } from '../types'`
- Import constants: `import { ICONS } from '../constants'`
- Group imports: React first, then local imports

### Naming Conventions
- **Files**: PascalCase for components (`Dashboard.tsx`), camelCase for utilities
- **Components**: PascalCase (`Dashboard`, `Marketplace`)
- **Functions**: camelCase (`handleSubmit`, `getAIAdvice`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for objects
- **Props interfaces**: `ComponentNameProps` (e.g., `LayoutProps`)

### Code Organization
- One component per file
- Export default for components
- Named exports for utilities and types
- Keep files focused and under 300 lines when possible

### UI/UX Patterns
- **Loading States**: Show loading indicators for async operations
- **Error Handling**: Display user-friendly error messages
- **Responsive Design**: Mobile-first, use `md:`, `lg:` breakpoints
- **Animations**: Use Tailwind transitions (`transition-all`, `hover:scale-105`)
- **Accessibility**: Use semantic HTML, proper ARIA labels

### Specific Patterns

#### Glass Card Pattern
```tsx
<div className="glass-card p-8 rounded-[2rem] border-white/5">
  {/* Content */}
</div>
```

#### Button Patterns
- Primary: `bg-purple-600 hover:bg-purple-500`
- Secondary: `bg-white/5 border border-white/10`
- Gradient: `bg-gradient-to-r from-purple-600 to-cyan-500`
- Always include `transition-all` or `transition-colors`

#### Placeholder Pages
- Use `PlaceholderPage` component for coming-soon sections
- Include icon, title, description, and return button

### Performance
- Lazy load heavy components when possible
- Use `React.memo` for expensive components (if needed)
- Optimize images with proper sizing
- Minimize re-renders with proper state management

### Error Handling
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors to console for debugging
- Provide fallback UI for errors

### Testing Considerations
- Write testable components (pure functions when possible)
- Keep business logic separate from UI
- Use descriptive variable names for clarity

### Git & Version Control
- Commit messages should be clear and descriptive
- Keep commits focused on single features/fixes
- Don't commit build artifacts or node_modules

### Documentation
- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Keep README updated with setup instructions

## Common Tasks

### Adding a New Page
1. Create file in `src/pages/PageName.tsx`
2. Add route to `AppRoute` enum in `types.ts`
3. Add navigation item in `Layout.tsx` if needed
4. Add case in `App.tsx` renderContent switch

### Adding a New Icon
1. Add icon component to `ICONS` object in `constants.tsx`
2. Use SVG format with proper props
3. Export and use as `<ICONS.IconName />`

### Styling a New Component
1. Start with `glass-card` base class
2. Add spacing with `p-6` or `p-8`
3. Use rounded corners: `rounded-xl` or `rounded-2xl`
4. Add borders: `border border-white/5`
5. Use hover states: `hover:border-purple-500/30`

## Anti-Patterns to Avoid
- ❌ Don't use inline styles (use Tailwind classes)
- ❌ Don't create components in wrong directories
- ❌ Don't use `any` type (use proper TypeScript types)
- ❌ Don't mix CSS files with Tailwind
- ❌ Don't hardcode colors (use design system)
- ❌ Don't create deeply nested components (max 3-4 levels)
- ❌ Don't forget responsive design (mobile-first)

## Design System Reference
- **Primary Action Color**: Purple (`#7c3aed`)
- **Secondary Action Color**: Cyan (`#06b6d4`)
- **Success Color**: Green (`#10b981`)
- **Warning Color**: Gold (`#fbbf24`)
- **Background**: Deep dark (`#030712`)
- **Card Background**: Dark gray (`#111827`)
- **Text Primary**: White (`#ffffff`)
- **Text Secondary**: Gray (`#9ca3af`)
- **Border Opacity**: 5% white (`rgba(255, 255, 255, 0.05)`)

## Notes
- This project uses ES modules directly in the browser (no bundler)
- Import maps are defined in `index.html`
- All React dependencies are loaded via ESM CDN
- The demo mode loads React app dynamically when "Try Demo" is clicked


# Frontend Rules

**Source**: `docs/Core Documentation/STRUCTURE.md` and `.cursorrules`

## Critical Rules

### Frontend Location
- **All frontend files MUST be in**: `frontend/`
- **React source code**: `frontend/src/`
- **Static assets**: `frontend/public/`
- **Build output**: `frontend/dist/` (generated)

### File Organization
- **Pages**: `frontend/src/pages/` - Route-level page components
- **Components**: `frontend/src/components/` - Reusable UI components
- **Services**: `frontend/src/services/` - API services and utilities
- **Contexts**: `frontend/src/contexts/` - React contexts
- **Data**: `frontend/src/data/` - Data files
- **Utils**: `frontend/src/utils/` - Utility functions
- **Types**: `frontend/src/types.ts` - TypeScript type definitions
- **Constants**: `frontend/src/constants.tsx` - Constants, icons, shared data

### Code Standards
- **React 19.2.3** with TypeScript
- **Functional components** with TypeScript
- **Tailwind CSS** for styling (via CDN)
- **ES Modules** architecture
- **One component per file**

### Styling Guidelines
- **Use Tailwind CSS utility classes** exclusively
- **Follow design system** (colors, spacing, fonts)
- **Glass card pattern** for cards
- **Responsive design** - Mobile-first approach

### Component Patterns
- **Page Components**: Route-level pages in `pages/`
- **Reusable Components**: UI components in `components/`
- **Icons**: Defined in `constants.tsx` as React components
- **State Management**: Use `useState` and `useEffect`

## CRITICAL Rules

- ✅ **All frontend code in `frontend/`** - Correct location
- ✅ **TypeScript with strict typing** - Always use TypeScript
- ✅ **Tailwind CSS for styling** - No inline styles
- ✅ **One component per file** - Keep files focused
- ✅ **Mobile-first responsive design** - Always responsive
- ❌ **Never use inline styles** - Use Tailwind classes
- ❌ **Never skip TypeScript types** - Always define types
- ❌ **Never create components in wrong directories** - Follow structure

---
project_name: 'BitNexus Platform'
user_name: 'Josef Lindbom'
date: 'January 2026'
sections_completed: ['technology_stack', 'critical_rules', 'architecture_patterns']
existing_patterns_found: 15
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

**Based on:** BMAD-METHOD Project Context Workflow  
**Reference:** `instructions/BMAD-METHOD/src/modules/bmm/workflows/generate-project-context/`

---

## Technology Stack & Versions

### Frontend
- **React**: 19.2.3 (via ESM CDN)
- **TypeScript**: Latest (transpiled via esbuild)
- **Tailwind CSS**: 3.x (via CDN)
- **Recharts**: 3.6.0 (via ESM CDN)

### Backend (Planned)
- **Phoenix**: Latest (HTTP API and WebSocket)
- **Elixir**: Latest (business logic services)
- **BEAM VM**: Latest (high-concurrency runtime)

### Database
- **PostgreSQL**: Latest (primary database)
- **PostgreSQL + pgvector**: Latest (vector database, pending CTO validation)

### Infrastructure
- **Netlify**: Alpha phase (hosting and serverless functions)
- **AWS**: Planned migration (EC2/ECS, RDS, CloudFront)

### AI & External Services
- **Google Gemini API**: AI content generation
- **QR Server API**: QR code generation

---

## Critical Implementation Rules

### 1. Multi-Tenant Data Isolation

**CRITICAL**: All database tables MUST include `tenant_id` column.

**Rules**:
- Every table must have `tenant_id` as foreign key to `tenants` table
- All queries MUST filter by `tenant_id` (no exceptions)
- JWT tokens MUST include `tenant_id` claim
- API middleware MUST validate tenant context
- Database indexes MUST include `tenant_id` for performance

**Example**:
```sql
-- ✅ CORRECT
SELECT * FROM products WHERE tenant_id = $1 AND id = $2;

-- ❌ WRONG
SELECT * FROM products WHERE id = $2;
```

---

### 2. Authentication Architecture

**CRITICAL**: Authentication is split between Phoenix (HTTP) and Elixir (business logic).

**Phoenix Responsibilities**:
- HTTP request/response handling
- JWT extraction from `Authorization` header
- Route protection via `AuthPlug`
- Error responses (401, 403)

**Elixir Responsibilities**:
- Password hashing (bcrypt/argon2)
- JWT token generation and validation
- Credential validation
- Session management

**DO NOT**:
- ❌ Implement password hashing in Phoenix
- ❌ Generate JWT tokens in Phoenix
- ❌ Validate credentials in Phoenix

---

### 3. Frontend Component Patterns

**CRITICAL**: Follow established component patterns.

**Page Components**:
- Location: `frontend/src/pages/PageName.tsx`
- Pattern: Functional component with TypeScript
- Export: Default export

**Reusable Components**:
- Location: `frontend/src/components/ComponentName.tsx`
- Pattern: Functional component with props interface
- Export: Default export

**Icons**:
- Location: `frontend/src/constants.tsx`
- Pattern: `<ICONS.IconName />`
- Format: SVG elements

---

### 4. Styling Rules

**CRITICAL**: Use Tailwind CSS utility classes exclusively.

**DO NOT**:
- ❌ Use inline styles
- ❌ Create separate CSS files
- ❌ Use CSS-in-JS libraries

**DO**:
- ✅ Use Tailwind utility classes
- ✅ Use custom classes defined in `index.html` (`.glass-card`, `.text-gradient-cyan-purple`)
- ✅ Follow design system colors (nexusPurple, techCyan, signalGreen, etc.)

---

### 5. TypeScript Type Safety

**CRITICAL**: All components and functions must have proper TypeScript types.

**Rules**:
- Define interfaces for component props
- Use `React.FC<Props>` for component typing
- Export types from `frontend/src/types.ts`
- Never use `any` type
- Use enums for route definitions

**Example**:
```typescript
// ✅ CORRECT
interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // ...
};

// ❌ WRONG
const ProductCard = ({ product, onSelect }) => {
  // ...
};
```

---

### 6. Database Query Safety

**CRITICAL**: All database queries MUST use parameterized queries to prevent SQL injection.

**Rules**:
- Use Ecto for Elixir database access
- Use parameterized queries (never string concatenation)
- Validate all user input before database queries
- Use database transactions for multi-step operations

**Example**:
```elixir
# ✅ CORRECT
Repo.all(from p in Product, where: p.tenant_id == ^tenant_id and p.id == ^product_id)

# ❌ WRONG
Repo.all("SELECT * FROM products WHERE tenant_id = '#{tenant_id}' AND id = '#{product_id}'")
```

---

### 7. Error Handling

**CRITICAL**: All async operations must have proper error handling.

**Rules**:
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors to console for debugging
- Provide fallback UI for errors
- Never expose internal error details to users

**Example**:
```typescript
// ✅ CORRECT
try {
  const data = await fetchData();
  setData(data);
} catch (error) {
  console.error('Error fetching data:', error);
  setError('Failed to load data. Please try again.');
}

// ❌ WRONG
const data = await fetchData();
setData(data);
```

---

### 8. Responsive Design

**CRITICAL**: All views must be responsive and work across all target viewports.

**Target Viewports**:
- Mobile: 360 × 800
- Tablet Portrait: 768 × 1024
- Tablet Landscape: 1024 × 768
- Desktop: 1440 × 900

**Rules**:
- Mobile-first approach (start with mobile, enhance for larger screens)
- No horizontal scrolling at any viewport
- Use Tailwind responsive breakpoints (`md:`, `lg:`, `xl:`)
- Touch targets must be at least 44x44 pixels on mobile
- Test on all target viewports

**DO NOT**:
- ❌ Use fixed px widths/heights for layout containers
- ❌ Use `width: 100vw` (use `width: 100%` instead)
- ❌ Use `transform: scale()` for layout-critical elements
- ❌ Use `position: absolute` for layout-critical positioning

---

### 9. File Organization

**CRITICAL**: Follow the established file structure.

**Frontend Structure**:
```
frontend/
├── src/
│   ├── pages/          # Page components
│   ├── components/    # Reusable components
│   ├── services/      # API services
│   ├── contexts/      # React contexts
│   ├── types.ts       # TypeScript types
│   ├── constants.tsx  # Constants and icons
│   └── App.tsx        # Main app component
```

**Backend Structure**:
```
backend/
├── phoenix/           # Phoenix HTTP API
├── elixir/            # Elixir business logic services
└── netlify/           # Netlify serverless functions (alpha)
```

**DO NOT**:
- ❌ Create files in wrong directories
- ❌ Mix frontend and backend code
- ❌ Create random files in root directory

---

### 10. Git Workflow

**CRITICAL**: Follow the Git workflow rules.

**Rules**:
- Create feature branch for all changes: `git checkout -b feature/your-feature-name`
- Make changes and commit to feature branch
- Create Pull Request from feature branch to main
- Request review from CTO (Craig Martin)
- CTO reviews and merges if production-ready
- NEVER push directly to main branch

**Before Committing**:
- Code is tested and working
- No console errors
- Documentation updated (if needed)
- CHANGELOG.md updated with ALL changes
- Developer/Cursor tracking in changelog entries

---

### 11. Documentation Requirements

**CRITICAL**: All folders MUST have README.md and CHANGELOG.md.

**Rules**:
- Create README.md and CHANGELOG.md when creating new folder
- Update CHANGELOG.md when making changes in folder
- Keep README.md updated when folder structure changes
- Track developer/Cursor in all CHANGELOG entries

**Format**:
```markdown
- Description of change [Developer: Name] or [Cursor]
```

---

### 12. Task Ownership

**CRITICAL**: All tasks MUST have explicit owners.

**Format**:
- `[Owner: Josef]` - Person owner
- `[Owner: Frontend]` - Role owner
- `[Owner: Backend]` - Role owner
- `[Owner: CTO]` - Role owner

**Rules**:
- Every task in TODO.md must have owner
- Every task in personal task files must have owner
- When adding new task, assign owner immediately
- When moving tasks, update owner in both locations

---

### 13. Bidirectional Auto-Update

**CRITICAL**: TODO.md and all docs/Development/ files MUST stay synchronized.

**Rules**:
- When TODO.md is updated → ALL relevant files in docs/Development/ MUST be auto-updated
- When docs/Development/ files are updated → TODO.md MUST be auto-updated
- This is MANDATORY - NO EXCEPTIONS
- System MUST auto-update (not manual)

**Files That Must Stay Synchronized**:
- `docs/Project Management/TODO.md`
- `docs/Development/JOSEF_TASKS.md`
- `docs/Development/CRAIG_TASKS.md`
- `docs/Development/JONNE_TASKS.md`
- `docs/Development/SVEIN_TASKS.md`
- `docs/Development/LEE_TASKS.md`
- `docs/Development/CORY_TASKS.md`
- `docs/Development/FRONTEND_OWNER.md`
- `docs/Development/BACKEND_OWNER.md`
- `docs/Development/SECURITY_OWNER.md`
- `docs/Development/CTO_OWNER.md`
- `docs/Development/SALES_OWNER.md`
- `docs/Development/TEAM_OWNER.md`

---

## Architecture Patterns

### 1. Multi-Tenant Pattern

**Pattern**: Shared database with tenant_id isolation

**Implementation**:
- All tables include `tenant_id` column
- All queries filter by `tenant_id`
- JWT tokens include `tenant_id` claim
- API middleware validates tenant context

---

### 2. Service Layer Pattern

**Pattern**: Business logic in Elixir services, HTTP in Phoenix

**Implementation**:
- Phoenix handles HTTP/WebSocket
- Elixir services handle business logic
- Clear separation of concerns
- Reusable business logic

---

### 3. Repository Pattern

**Pattern**: Ecto repositories for data access

**Implementation**:
- Repositories encapsulate database queries
- Parameterized queries prevent SQL injection
- Database transactions for consistency
- Connection pooling for performance

---

## Unobvious Details

### 1. Glass Card Styling

**Critical**: Glass cards use backdrop blur, not regular background.

**Implementation**:
```css
.glass-card {
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

**DO NOT** use solid backgrounds for cards.

---

### 2. Icon Usage

**Critical**: All icons are defined as React components in `constants.tsx`.

**Usage**:
```typescript
<ICONS.IconName className="w-6 h-6" />
```

**DO NOT** import SVG files directly.

---

### 3. Route Definitions

**Critical**: Routes are defined as enum in `types.ts`.

**Usage**:
```typescript
enum AppRoute {
  DASHBOARD = '/dashboard',
  MARKETPLACE = '/marketplace',
  // ...
}
```

**DO NOT** hardcode route strings in components.

---

### 4. API Service Pattern

**Critical**: All API calls go through service files.

**Location**: `frontend/src/services/`

**Pattern**:
```typescript
export async function fetchData(): Promise<Data> {
  const response = await fetch('/api/data');
  return response.json();
}
```

**DO NOT** make direct fetch calls in components.

---

### 5. State Management

**Critical**: Use React hooks and Context API, not external state management.

**Pattern**:
- `useState` for local component state
- `useContext` for global state (CartContext)
- `useEffect` for side effects

**DO NOT** use Redux, MobX, or other state management libraries.

---

## Testing Considerations

### 1. Component Testing

**Pattern**: Test components in isolation.

**Focus**:
- Component renders correctly
- User interactions work
- Props are handled correctly
- Error states are handled

---

### 2. Integration Testing

**Pattern**: Test API integration.

**Focus**:
- API calls succeed
- Error handling works
- Data is displayed correctly
- Loading states work

---

### 3. E2E Testing

**Pattern**: Test complete user flows.

**Focus**:
- User registration and login
- Product discovery and affiliate link generation
- Content generation workflow
- Bot staking flow

---

## Performance Considerations

### 1. Code Splitting

**Pattern**: Lazy load heavy components.

**Implementation**:
```typescript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

---

### 2. Image Optimization

**Pattern**: Use optimized images.

**Rules**:
- Use appropriate image formats (WebP, AVIF)
- Lazy load images below the fold
- Use responsive images

---

### 3. Database Query Optimization

**Pattern**: Optimize database queries.

**Rules**:
- Use indexes on frequently queried columns
- Limit query results (pagination)
- Use database transactions for consistency
- Avoid N+1 queries

---

## Security Considerations

### 1. Input Validation

**Pattern**: Validate all user input.

**Rules**:
- Validate on frontend (UX)
- Validate on backend (security)
- Sanitize user input
- Use parameterized queries

---

### 2. Authentication

**Pattern**: Secure authentication flow.

**Rules**:
- Passwords hashed with bcrypt/argon2
- JWT tokens expire in 24 hours
- Refresh tokens expire in 30 days
- Rate limiting on login endpoints

---

### 3. Data Protection

**Pattern**: Encrypt sensitive data.

**Rules**:
- Encrypt data at rest (AES-256)
- Encrypt data in transit (TLS 1.3)
- Never log sensitive data
- Follow GDPR requirements

---

**Last Updated**: January 2026  
**Status**: Active Project Context  
**Related Documents**: PRD.md, Architecture_Decision_Document.md, TECH_STACK.md, .cursorrules

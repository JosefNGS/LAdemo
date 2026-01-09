# NPM Dependency Check

**Date**: January 2026

## Current Dependencies

### Production Dependencies
```json
{
  "@PostgreSQL/PostgreSQL-js": "^2.39.0",
  "esbuild": "^0.19.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "recharts": "^3.0.0"
}
```

### Development Dependencies
```json
{
  "esbuild": "^0.19.0"
}
```

**Note**: `esbuild` is intentionally listed in both `dependencies` and `devDependencies` to ensure Netlify always installs it.

## CDN Dependencies

These are also loaded via CDN in `index.html` (for development):

- **@google/generative-ai**: Latest (via esm.sh)
- **Tailwind CSS**: 3.4.1 (via CDN)

**Note**: React, React DOM, and Recharts are now in `package.json` but still loaded via CDN in development. The build script marks them as external.

## Dependency Status

### ✅ esbuild (^0.19.0)
- **Purpose**: TypeScript/JSX transpilation for production build
- **Status**: Stable, working correctly
- **Latest**: 0.24.x available (optional upgrade)
- **Action**: Current version works fine; upgrade optional

### ✅ @PostgreSQL/PostgreSQL-js (^2.39.0)
- **Purpose**: PostgreSQL client for email collection
- **Status**: Stable, working correctly
- **Latest**: 2.47.x available (optional upgrade)
- **Action**: Current version works fine; upgrade optional

### ✅ react (^19.0.0)
- **Purpose**: React library for UI components
- **Status**: Latest stable version
- **Action**: No updates needed

### ✅ react-dom (^19.0.0)
- **Purpose**: React DOM renderer
- **Status**: Latest stable version
- **Action**: No updates needed

### ✅ recharts (^3.0.0)
- **Purpose**: Chart library for data visualization
- **Status**: Latest stable version
- **Action**: No updates needed

## Version Check Commands

Run these in your terminal to check versions:

```bash
# List all installed packages
npm list --depth=0

# Check for outdated packages
npm outdated

# Check for security vulnerabilities
npm audit

# Update all packages to latest (within semver range)
npm update

# Update to latest major versions (breaking changes possible)
npm install @PostgreSQL/PostgreSQL-js@latest esbuild@latest
```

## Node.js Version

**Required**: Node 18.x (specified in `package.json` engines)
**Your version**: Node 22.20.0 (compatible - newer than required)
**Netlify**: Will use Node 18 (from `.nvmrc` and `package.json`)

## Security

Run security audit:
```bash
npm audit

# Fix non-breaking issues
npm audit fix

# Fix all issues (may include breaking changes)
npm audit fix --force
```

**Current Status**: 1 moderate severity vulnerability (check with `npm audit` for details)

## Recommendations

1. ✅ **Current setup is working** - no urgent updates needed
2. 🔄 **Optional**: Update to latest patch versions: `npm update`
3. 🔄 **Optional**: Upgrade to esbuild 0.24.x for latest features
4. 🔄 **Optional**: Upgrade to @PostgreSQL/PostgreSQL-js 2.47.x
5. ⚠️ **Security**: Run `npm audit fix` to address the moderate vulnerability

## Update Strategy

### Safe Updates (Recommended)
```bash
# Update within current major versions (safe)
npm update
```

### Major Version Updates (Test First)
```bash
# Update to latest major versions
npm install @PostgreSQL/PostgreSQL-js@latest esbuild@latest

# Test build after updating
npm run build

# Test dev server
npm run dev
```

---

**Last Updated**: January 2026


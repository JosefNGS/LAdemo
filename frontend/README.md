# Frontend Application

This directory contains the React + TypeScript frontend application for BitNexus Landing Page.

## Structure

- **`src/`** - React source code
  - `pages/` - Route-level page components (35+ pages)
  - `components/` - Reusable UI components
  - `services/` - API services and utilities
  - `contexts/` - React contexts
  - `data/` - Data files
  - `utils/` - Utility functions
  - `types.ts` - TypeScript type definitions
  - `constants.tsx` - Constants, icons, shared data
- **`public/`** - Static assets
- **`dist/`** - Production build output (generated)
- **`index.html`** - Main HTML with landing page & React setup
- **`build.js`** - Production build script
- **`server.js`** - Node.js dev server with TypeScript transpilation

## Tech Stack

- **React 19.2.3** with TypeScript
- **Tailwind CSS** for styling (via CDN)
- **Recharts 3.6.0** for data visualization
- **Google Gemini API** integration
- **ES Modules** architecture

## Development

- **Start Server**: Run `start.bat` (Windows) or `start.sh` (Mac/Linux) from root
- **Build**: Run `npm run build` from root
- **Dev Server**: `node frontend/server.js` (TypeScript transpilation)

## Documentation

- **Rules**: See `rules/frontend/rules.md` for frontend development rules
- **Framework Guides**: See `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation
- **Structure**: See `docs/Core Documentation/STRUCTURE.md` for complete structure

## CRITICAL Requirements

- ✅ **All frontend code in `frontend/`** - Correct location
- ✅ **TypeScript with strict typing** - Always use TypeScript
- ✅ **Tailwind CSS for styling** - No inline styles
- ✅ **One component per file** - Keep files focused
- ✅ **Mobile-first responsive design** - Always responsive
- ✅ **README.md and CHANGELOG.md** - Required in this folder

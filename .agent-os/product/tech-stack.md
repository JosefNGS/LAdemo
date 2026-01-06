# Technical Stack - WHN Chat

## Context

Project-specific tech stack for WHN Chat (Why Not Chat) - An AI chat application with multi-provider support.

## Frontend Framework
- **Framework**: React 18.2+
- **Language**: TypeScript 5.3+
- **Build Tool**: Vite 5.0+
- **CSS Framework**: TailwindCSS 3.4+
- **CSS Typography**: @tailwindcss/typography 0.5.10+
- **Styling**: PostCSS 8.4+ with Autoprefixer

## Desktop Application
- **Platform**: Electron 28.0+
- **Architecture**: Main process (Node.js) + Renderer process (React)
- **IPC**: Electron IPC for frontend-backend communication
- **Distribution**: Portable installers for Windows, macOS, Linux

## Web Application
- **Server**: Vite Dev Server (Development)
- **Port**: 8081 (Web), 8080 (Electron dev server)
- **Deployment**: Static build deployment ready

## UI Components & Libraries
- **Markdown Rendering**: react-markdown 9.0+
- **Typography**: Tailwind Typography plugin
- **Icons**: SVG-based custom icons
- **Theme**: Dark theme with modern design
- **Responsive**: Mobile-first responsive design

## AI Integration
- **Primary Provider**: Ollama (Local AI models)
- **Multi-Provider Support**:
  - OpenAI API
  - DeepSeek API
  - Anthropic API
  - Google AI API
  - Azure OpenAI
- **AI Features**:
  - Real-time streaming responses
  - Multi-session management
  - Personality system (6 personalities)
  - Prompt types (4 types)
  - Memory management (5/25/50/full conversation)

## Data Storage
- **Database Type**: File-based JSON storage
- **Location**: `database/` folder
- **Structure**:
  - Chat sessions: `database/Chat History/[session-name]/`
  - Session metadata: `database/chat-sessions.json`
  - Documents: `database/documents/`
  - Projects: `database/projects.json`
- **Vector Database**: ChromaDB (Docker integration)
- **Knowledge Base**: Fuzzy search with typo tolerance

## Docker Services
- **Container Runtime**: Docker Desktop
- **Orchestration**: docker-compose
- **Services**:
  - ChromaDB (Vector database)
  - File storage service
- **Configuration**:
  - Environment files in `docker/configs/`
  - Startup scripts in `docker/scripts/`

## Development Tools
- **Package Manager**: npm
- **Node Version**: 18 LTS+
- **Process Manager**: concurrently (for Electron dev)
- **Linting**: ESLint 9+ with TypeScript support
- **Formatting**: Prettier 3.6+
- **Type Checking**: TypeScript compiler (tsc)
- **Git Hooks**: Husky 9.1+ with lint-staged 16.2+

## Code Quality
- **ESLint Plugins**:
  - @typescript-eslint/eslint-plugin 8.45+
  - eslint-plugin-react 7.37+
  - eslint-plugin-react-hooks 6.1+
  - eslint-plugin-jsx-a11y 6.10+
  - eslint-plugin-security 3.0+
  - eslint-plugin-compat 6.0+
  - eslint-plugin-prettier 5.5+
- **Pre-commit Hooks**: Automatic linting and formatting

## Platform Support
- **Operating Systems**: Windows 10+, macOS 10.15+, Linux (Ubuntu 20.04+)
- **Startup Modes**: Normal, Background, Hidden, Minimized, Windows Service
- **Cross-Platform Scripts**: Bash (.sh) and Batch (.bat, .ps1)

## Hosting & Deployment
- **Primary Platform**: Daytona.io (AI-first secure sandbox infrastructure)
- **Daytona Features**:
  - Sub-90ms sandbox creation
  - Isolated Docker-based execution
  - Process, File, Git, and LSP APIs
  - Massive parallelization support
  - Stateful snapshot capabilities
- **Container Runtime**: Docker with docker-compose
- **Base Images**: node:18-alpine (optimized)
- **Self-Hosted Options**: Self-hosted Daytona instance support
- **Local Development**: Vite dev server
- **Traditional Cloud**: AWS, Google Cloud, Azure, DigitalOcean (fallback)
- **Static Hosting**: Vercel, Netlify (web frontend)
- **Electron Packaging**: electron-builder (planned)
- **Distribution**: Docker Hub, GitHub Container Registry, GitHub Releases
- **CI/CD**: GitHub Actions with Docker builds

## Asset Management
- **Icons**: SVG format with ICO fallback
- **Images**: Local assets in project
- **Fonts**: System fonts with fallbacks
- **Static Assets**: Bundled with Vite

## API Endpoints
- **Ollama**: `http://localhost:11434` (default)
- **OpenAI**: `https://api.openai.com/v1`
- **DeepSeek**: `https://api.deepseek.com/v1`
- **Anthropic**: `https://api.anthropic.com/v1`
- **Google AI**: `https://generativelanguage.googleapis.com/v1`
- **Azure**: Configurable endpoint

## Security
- **API Keys**: Local storage only (never transmitted)
- **File Access**: Configurable hard drive access control
- **Privacy**: All data stays on device
- **CORS**: Handled by Electron security policies
- **Content Security**: Error boundaries and input validation

## Documentation
- **Format**: Markdown (.md)
- **Location**: `/docs` directory
- **Structure**: Feature-based documentation
- **Auto-generated**: None (manual documentation)

## Testing
- **Framework**: Planned (Jest/Vitest)
- **E2E Testing**: Planned (Playwright)
- **Test Coverage**: Planned

## Version Control
- **Repository**: GitHub
- **Branching**: main branch
- **Commit Style**: Conventional commits (recommended)
- **CI/CD**: GitHub Actions (planned)

## Environment Configuration
- **Development**: `NODE_ENV=development`
- **Production**: `NODE_ENV=production`
- **Config Files**: Environment-specific settings
- **Secrets**: Local .env files (gitignored)

## Build System
- **Frontend Build**: Vite with TypeScript
- **Electron Build**: Electron Builder (planned)
- **Output**: `dist/` directory
- **Assets**: Optimized and bundled

## Monitoring & Logging
- **Logging**: Console logging with debug mode
- **Error Tracking**: Error boundaries in React
- **Performance**: Vite build analytics
- **Health Checks**: Docker service health monitoring


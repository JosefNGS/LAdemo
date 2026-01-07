# BitNexus Landing Page

A modern, interactive landing page with a React-based demo dashboard for BitNexus, a decentralized affiliate revenue platform.

## ⚠️ LICENSE AND USAGE TERMS

**PROPRIETARY SOFTWARE - NOT FOR USE IN OTHER PROJECTS**

This codebase is proprietary and protected by copyright. **You are NOT allowed to use this code in your own projects** without explicit written permission.

**PROHIBITED:**
- ❌ Using this code in your own projects
- ❌ Redistributing or selling this code
- ❌ Creating derivative works based on this code
- ❌ Copying substantial portions of this code into other projects

**PERMITTED:**
- ✅ Viewing the code for reference or educational purposes
- ✅ Reporting bugs or contributing (subject to approval)

For licensing inquiries or usage permissions, contact: josef@nordicglobalsolutions.com

See [LICENSE](LICENSE) for full terms and conditions.

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari - latest versions)
- Node.js 20+ (for development server and builds)
- A local web server (for ES modules to work properly)

**Platform Support:**
- ✅ **Windows** (x64, ARM64)
- ✅ **macOS** (Intel x64, Apple Silicon ARM64 - M1/M2/M3)
- ✅ **Linux** (x64, ARM64)
- ✅ **All architectures**: The dev server automatically uses the correct esbuild binary for your platform

### Running Locally

#### Option 1: Using start script (Recommended)
**Windows**: Double-click `start.bat` or run:
```bash
start.bat
```

**macOS/Linux**: Run:
```bash
./start.sh
```

Or make it executable first:
```bash
chmod +x start.sh
./start.sh
```

This will:
- Use Node.js with TypeScript support (if available)
- Automatically transpile TypeScript files on the fly
- Open your browser automatically
- Fall back to Python/PHP if Node.js isn't available (TypeScript won't work)

#### Option 2: Using Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 3: Using Node.js (http-server)
```bash
npx http-server -p 8000
```

#### Option 4: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 5: Using PHP
```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

**Note:** You cannot simply open `index.html` directly in the browser due to ES module CORS restrictions. You must use a local server.

### Deployment to Netlify

#### Quick Deploy
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://www.netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify will auto-detect build settings from `netlify.toml`
6. Click "Deploy site"

#### Build Settings (Auto-detected)
- **Build command**: `npm run build` (runs from `frontend/` directory)
- **Publish directory**: `frontend/dist`
- **Functions directory**: `backend/netlify/functions`
- **Node version**: 18

For detailed deployment instructions, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## 🔧 GitHub Configuration

This repository includes GitHub-specific configuration files for the BitNexus project.

### Repository
**GitHub**: [JosefNGS/LAdemo](https://github.com/JosefNGS/LAdemo)

### Files Overview

#### Issue Templates
- **bug_report.md** - Template for reporting bugs
- **feature_request.md** - Template for requesting new features
- **config.yml** - Configuration for issue templates

#### Pull Requests
- **PULL_REQUEST_TEMPLATE.md** - Template for pull requests with checklist

#### Documentation
- **CONTRIBUTING.md** - Guidelines for contributors
- **CODE_OF_CONDUCT.md** - Community code of conduct
- **SECURITY.md** - Security policy and vulnerability reporting

#### CI/CD Workflows
- **workflows/ci.yml** - Continuous Integration pipeline
- **workflows/deploy.yml** - Netlify deployment workflow

#### Automation
- **dependabot.yml** - Automated dependency updates

### Setup Instructions

1. **Push these files to your GitHub repository** (already included)
2. **Configure GitHub Secrets** (for deployment):
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
3. **Enable GitHub Features**:
   - Issues
   - Discussions (optional)
   - Actions

### Workflows

#### CI Pipeline
Runs on every push and pull request to `main` or `develop` branches:
- Builds the project
- Runs type checking
- Runs linting (if configured)

#### Deployment
Automatically deploys to Netlify when pushing to `main` branch.

### Contributing
See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed contribution guidelines.

## 📄 Documentation

- **[UI Documentation](./docs/UI_DOCUMENTATION.md)** - Complete UI specifications and page inventory
- **[Product Presentation](./docs/Product%20docs/PRODUCT_PRESENTATION.md)** - Complete product overview and business case
- **[Product Presentation Slides](./docs/Product%20docs/PRODUCT_PRESENTATION_SLIDES.md)** - Pitch deck outline
- **[Implementation Plan](./docs/IMPLEMENTATION_PLAN.md)** - Development roadmap and feature implementation
- **[Quick Wins](./docs/QUICK_WINS_FINANCIAL_FREEDOM.md)** - High-impact features for financial freedom
- **[Financial Freedom Enhancements](./docs/FINANCIAL_FREEDOM_ENHANCEMENTS.md)** - Strategies to help users achieve financial freedom
- **[Affiliate Program Architecture](./docs/AFFILIATE_PROGRAM_ARCHITECTURE.md)** - Comprehensive affiliate program strategy, commission structure, and operations framework
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Netlify deployment instructions
- **[API Setup](./docs/API_SETUP.md)** - Gemini API configuration guide
- **[Supabase Setup](./docs/SUPABASE_SETUP.md)** - Complete Supabase database integration guide
- **[Supabase Quick Start](./docs/SUPABASE_QUICK_START.md)** - Get started with Supabase in 5 minutes
- **[Email Collection Setup](./docs/EMAIL_COLLECTION_SETUP.md)** - Database options for email signups
- **[Troubleshooting](./docs/TROUBLESHOOTING.md)** - Common issues and solutions

## 📁 Project Structure

```
BitNexus Landing Page/
├── frontend/               # Frontend application
│   ├── index.html          # Main HTML file with landing page and React setup
│   ├── docs.html           # Documentation page
│   ├── manifesto.html      # Manifesto page
│   ├── src/                # React source code
│   │   ├── main.tsx        # React entry point
│   │   ├── App.tsx         # Main React app component
│   │   ├── types.ts        # TypeScript type definitions
│   │   ├── constants.tsx   # Icons and constants
│   │   ├── components/     # Reusable components
│   │   │   ├── Layout.tsx  # Main layout component with sidebar
│   │   │   ├── ProductDetailDrawer.tsx
│   │   │   └── ProductUploadForm.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Dashboard.tsx   # Command Center dashboard
│   │   │   ├── Marketplace.tsx # Product marketplace
│   │   │   ├── Alliance.tsx    # Alliance arena
│   │   │   ├── Earn.tsx        # MEV/XAB Bot Lab
│   │   │   ├── TokenShop.tsx   # NXC credits shop
│   │   │   ├── Chat.tsx        # Encrypted chat
│   │   │   ├── Friends.tsx     # Social connections
│   │   │   ├── Forum.tsx       # Community forum
│   │   │   ├── AffiliateManager.tsx # Affiliate tracking
│   │   │   ├── ContentGenerator.tsx # AI content generation
│   │   │   ├── Goals.tsx        # Goal tracking
│   │   │   ├── Academy.tsx      # Educational courses
│   │   │   ├── NexusHub.tsx    # AI chat interface
│   │   │   ├── Login.tsx       # Login page
│   │   │   ├── Register.tsx   # Registration page
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── Cart.tsx        # Shopping cart
│   │   │   ├── Checkout.tsx    # Checkout page
│   │   │   └── ... (more pages)
│   │   ├── contexts/        # React contexts
│   │   │   └── CartContext.tsx # Shopping cart state
│   │   └── services/        # API services
│   │       ├── geminiService.ts    # AI service
│   │       └── supabaseService.ts # Supabase database client
│   ├── public/             # Static assets
│   │   └── _redirects      # Netlify SPA routing
│   ├── build.js            # Production build script
│   ├── server.js           # Development server with TypeScript transpilation
│   └── server.py           # Fallback Python server
├── backend/                # Backend services
│   └── netlify/
│       └── functions/      # Serverless functions
│           ├── submit-email.js
│           ├── submit-email-airtable.js
│           └── submit-email-supabase.js
├── docs/                   # Documentation
│   ├── Product docs/       # Product documentation
│   │   ├── REVENUE_PLAN.md
│   │   ├── PITCH_DECK.md
│   │   └── ... (more docs)
│   └── ... (other docs)
├── package.json            # Node.js dependencies
├── netlify.toml            # Netlify configuration
├── start.bat               # Development server launcher
└── README.md
```

## 🛠️ Tech Stack

- **React 19.2.3** - UI framework (loaded via ESM CDN)
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Recharts 3.6.0** - Chart library for data visualization
- **Supabase** - PostgreSQL database with real-time capabilities
- **ES Modules** - Native browser module system (no bundler needed)

## ✨ Features

### Landing Page
- Hero section with countdown timer
- Genesis signup section
- Academy modules showcase (6 courses)
- Responsive design

### Demo Dashboard
- **Dashboard**: Command Center with affiliate revenue tracking, financial freedom progress, income streams, quick actions, and Tools section (Link Shortener, QR Generator, Commission Calculator, UTM Builder)
- **Marketplace**: Product listings with search, filtering, earning calculators, product tags, and product detail drawer
- **Earn**: MEV Bot Lab & XAB Bot Lab (XRP) with staking, passive income calculator, and bot management
- **Alliance**: Tier progression, referral tools, success stories, Global Hall of Fame, and network statistics
- **Credits Shop**: NXC credits packages with pricing tiers and AI usage credits
- **Chat**: Encrypted messaging interface with financial freedom chat groups
- **Friends**: Social connections and friend management
- **Forum**: Community forum with categories (Affiliate Marketing, MEV Bot Trading, XAB Bot Trading, Network Building, Financial Freedom, Support)
- **Affiliate Manager**: Link tracking, performance analytics, and QR code generation
- **Content Generator**: AI-powered content creation for social media
- **Goals**: Goal setting and progress tracking
- **Academy**: Educational courses, financial freedom learning paths, and live events
- **NexusHub**: AI-powered chat assistant
- **Profile**: User settings, security, and social media connections
- **Admin Pages**: Vetting, Users, Reports (for administrators)

## 🎨 Design System

### Colors
- **Primary**: Purple (`#7c3aed`)
- **Secondary**: Cyan (`#06b6d4`)
- **Success**: Green (`#10b981`)
- **Warning**: Gold (`#fbbf24`)
- **Background**: Deep dark (`#030712`)
- **Card**: Dark gray (`#111827`)

### Fonts
- **Display**: Space Grotesk (headings)
- **Futuristic**: Orbitron (special text)
- **Body**: Inter (default)

## 🔧 Development

### Adding a New Page
1. Create a new file in `src/pages/PageName.tsx` (or `frontend/src/pages/PageName.tsx` if files are moved)
2. Add route to `AppRoute` enum in `src/types.ts` (or `frontend/src/types.ts`)
3. Add case in `src/App.tsx` renderContent switch (or `frontend/src/App.tsx`)
4. Optionally add navigation item in `src/components/Layout.tsx` (or `frontend/src/components/Layout.tsx`)

### Adding a New Icon
1. Add icon component to `ICONS` object in `src/constants.tsx` (or `frontend/src/constants.tsx` if files are moved)
2. Use SVG format with proper React props
3. Use as `<ICONS.IconName />`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow glass-card pattern for cards
- Use consistent spacing (p-6, p-8, gap-4, gap-6)
- Mobile-first responsive design

## 📝 Notes

### Development
- This project uses ES modules with on-the-fly TypeScript transpilation
- All dependencies are loaded via CDN (esm.sh)
- The React app loads dynamically when "Try Demo" is clicked
- Development server (`server.js`) transpiles TypeScript files on demand

### Production
- Run `npm run build` to create production build (runs from `frontend/` directory)
- TypeScript files are pre-transpiled to JavaScript
- Output goes to `frontend/dist/` directory
- Backend functions are in `backend/netlify/functions/`
- Ready for deployment to Netlify or other static hosts
- All routes redirect to `index.html` for SPA routing

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any browser with ES module support

## 🐛 Troubleshooting

### React app doesn't load
- Make sure you're using a local web server (not file://)
- Check browser console for errors
- Verify all file paths are correct

### Styles not loading
- Ensure Tailwind CDN is accessible
- Check network tab for failed requests

### Charts not displaying
- Verify Recharts is loaded (check import map)
- Check browser console for errors

## 📄 License

See [LICENSE](LICENSE) for full terms and conditions.


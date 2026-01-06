# BitNexus Landing Page

A modern, interactive landing page with a React-based demo dashboard for BitNexus, a decentralized affiliate revenue platform.

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari - latest versions)
- Node.js 18+ (for development server and builds)
- A local web server (for ES modules to work properly)

### Running Locally

#### Option 1: Using start.bat (Recommended - Windows)
Simply double-click `start.bat` or run:
```bash
start.bat
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
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

For detailed deployment instructions, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## 📄 Documentation

- **[UI Documentation](./docs/UI_DOCUMENTATION.md)** - Complete UI specifications and page inventory
- **[Product Presentation](./docs/Product%20docs/PRODUCT_PRESENTATION.md)** - Complete product overview and business case
- **[Product Presentation Slides](./docs/Product%20docs/PRODUCT_PRESENTATION_SLIDES.md)** - Pitch deck outline
- **[Implementation Plan](./docs/IMPLEMENTATION_PLAN.md)** - Development roadmap and feature implementation
- **[Quick Wins](./docs/QUICK_WINS_FINANCIAL_FREEDOM.md)** - High-impact features for financial freedom
- **[Financial Freedom Enhancements](./docs/FINANCIAL_FREEDOM_ENHANCEMENTS.md)** - Strategies to help users achieve financial freedom
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Netlify deployment instructions
- **[API Setup](./docs/API_SETUP.md)** - Gemini API configuration guide
- **[Troubleshooting](./docs/TROUBLESHOOTING.md)** - Common issues and solutions

## 📁 Project Structure

```
BitNexus Landing Page/
├── index.html              # Main HTML file with landing page and React setup
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Main React app component
│   ├── types.ts            # TypeScript type definitions
│   ├── constants.tsx       # Icons and constants
│   ├── components/
│   │   └── Layout.tsx      # Main layout component with sidebar
│   ├── pages/
│   │   ├── Dashboard.tsx   # Command Center dashboard
│   │   ├── Marketplace.tsx # Product marketplace
│   │   ├── Alliance.tsx    # Alliance arena
│   │   ├── NexusHub.tsx    # AI chat interface
│   │   └── Auth.tsx        # Login/Register page
│   └── services/
│       └── geminiService.ts # AI service (mock)
└── README.md
```

## 🛠️ Tech Stack

- **React 19.2.3** - UI framework (loaded via ESM CDN)
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Recharts 3.6.0** - Chart library for data visualization
- **ES Modules** - Native browser module system (no bundler needed)

## ✨ Features

### Landing Page
- Hero section with countdown timer
- Genesis signup section
- Academy modules showcase (6 courses)
- Responsive design

### Demo Dashboard
- **Dashboard**: Command Center with affiliate revenue tracking, financial freedom progress, income streams, and quick actions
- **Marketplace**: Product listings with search, filtering, earning calculators, and product tags
- **Earn**: MEV Bot Lab with staking, passive income calculator, and bot management
- **Alliance**: Tier progression, referral tools, success stories, and leaderboard
- **Token Shop**: NXC token packages with pricing tiers
- **Chat**: Encrypted messaging interface
- **Friends**: Social connections and friend management
- **Affiliate Manager**: Link tracking, performance analytics, and QR code generation
- **Content Generator**: AI-powered content creation for social media
- **Goals**: Goal setting and progress tracking
- **Academy**: Educational courses and financial freedom learning paths
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
1. Create a new file in `src/pages/PageName.tsx`
2. Add route to `AppRoute` enum in `src/types.ts`
3. Add case in `src/App.tsx` renderContent switch
4. Optionally add navigation item in `src/components/Layout.tsx`

### Adding a New Icon
1. Add icon component to `ICONS` object in `src/constants.tsx`
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
- Run `npm run build` to create production build
- TypeScript files are pre-transpiled to JavaScript
- Output goes to `dist/` directory
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

This project is part of the BitNexus platform.


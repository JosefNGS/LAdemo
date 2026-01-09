---
stepsCompleted: []
inputDocuments: []
---

# UX Design Specification - BitNexus Platform

**Author:** Josef Lindbom (COO & Development Vision Lead)  
**Date:** January 2026  
**Version:** 1.0  
**Status:** Active UX Design Specification

**Based on:** BMAD-METHOD UX Design Workflow  
**Reference:** `instructions/BMAD-METHOD/src/modules/bmm/workflows/2-plan-workflows/create-ux-design/`

---

## Design Overview

### Design Philosophy

BitNexus uses a **glassmorphism design system** with a dark theme that conveys trust, transparency, and financial sophistication. The design emphasizes:

- **Transparency**: Glass-like cards with backdrop blur
- **Trust**: ISO certifications and security badges prominently displayed
- **Financial Focus**: Purple and cyan gradients for wealth and technology
- **Modern Aesthetics**: Futuristic fonts (Orbitron) with clean sans-serif (Inter)

### Design System

**Color Palette**:
- **Primary Purple**: `#7c3aed` (nexusPurple) - Wealth and premium
- **Tech Cyan**: `#06b6d4` (techCyan) - Technology and innovation
- **Signal Green**: `#10b981` (signalGreen) - Success and earnings
- **Wealth Gold**: `#fbbf24` (wealthGold) - Financial success
- **Deep Background**: `#030712` (deepBg) - Dark theme base
- **Card Background**: `#111827` (cardBg) - Elevated surfaces

**Typography**:
- **Display Font**: Space Grotesk (headings)
- **Futuristic Font**: Orbitron (special text, branding)
- **Body Font**: Inter (default, readable)

**Components**:
- **Glass Cards**: `glass-card` class with backdrop blur
- **Gradients**: `text-gradient-cyan-purple` for headings
- **Borders**: `border-white/5` for subtle borders
- **Rounded Corners**: `rounded-xl`, `rounded-2xl`, `rounded-3xl`

---

## User Interface Patterns

### Navigation Pattern

**Layout Structure**:
- **Sidebar Navigation**: Persistent sidebar with main navigation items
- **Top Header**: User profile, notifications, cart badge
- **Breadcrumbs**: Contextual navigation for deep pages
- **Mobile**: Collapsible sidebar, hamburger menu

**Navigation Items**:
- Dashboard
- Marketplace
- Earn (Bot Lab)
- Alliance
- Credits Shop
- Academy
- Content Generator
- Chat
- Friends
- Profile

---

### Dashboard Pattern

**Layout**:
- **Financial Overview Card**: Total earnings, income streams, progress bar
- **Quick Actions**: Link shortener, QR generator, tools
- **Income Streams Widget**: Breakdown by source (affiliate, staking, network)
- **Commission Calculator**: Interactive calculator with real-time results
- **Global Leaderboard**: Top earners, sortable, clickable
- **Daily Tips Banner**: Rotating tips and recommendations

**Interaction Patterns**:
- **Hover States**: Cards lift slightly, borders glow
- **Click Actions**: Navigate to detailed views
- **Real-Time Updates**: Live earnings updates via WebSocket

---

### Marketplace Pattern

**Product Discovery**:
- **Overview Tab**: Product grid with filters and search
- **Due Diligence Tab**: Product research, ISO certifications, audits
- **Product Cards**: Image, title, commission rate, earning potential
- **Product Detail Drawer**: Slide-out drawer with full product information
- **Filters**: Category, commission rate, vendor, tags

**Interaction Patterns**:
- **Product Selection**: Click card → Open detail drawer
- **Affiliate Link Generation**: One-click button in detail drawer
- **Audit Modals**: Click certification badge → View audit details
- **Cart Integration**: Add to cart from detail drawer

---

### Content Generator Pattern

**Content Creation Flow**:
1. **Upload Modal**: Upload product information or enter manually
2. **Content Type Selection**: Text post, image prompt, video script
3. **AI Generation**: Generate content using Gemini API
4. **Review & Edit**: Edit generated content
5. **Quick Actions**: Save template, schedule post, view analytics

**Interaction Patterns**:
- **Modal Workflow**: Sequential modals for each step
- **Real-Time Generation**: Show loading state during AI generation
- **Template Management**: Save and reuse content templates
- **Scheduling**: Calendar interface for post scheduling

---

### Bot Lab Pattern

**Staking Interface**:
- **Bot Selection**: Tabs for MEV Bot and XAB Bot
- **Bot Information**: APY rates, performance history, risk disclosures
- **Staking Form**: Amount input, staking button
- **Earnings Display**: Real-time earnings tracking
- **Withdrawal**: Withdraw earnings to wallet

**Interaction Patterns**:
- **Tab Navigation**: Switch between bot types
- **Staking Flow**: Input → Confirm → Stake → Track
- **Real-Time Updates**: Live earnings updates

---

## Responsive Design

### Mobile (< 768px)
- **Single Column Layout**: All content stacked vertically
- **Collapsible Sidebar**: Hamburger menu
- **Touch Targets**: Minimum 44x44 pixels
- **Simplified Navigation**: Bottom navigation bar option
- **Optimized Cards**: Full-width cards, reduced padding

### Tablet (768px - 1024px)
- **Two-Column Layout**: Where applicable
- **Sidebar**: Collapsible, persistent when open
- **Medium Padding**: Balanced spacing
- **Adaptive Grid**: 2-column product grid

### Desktop (≥ 1024px)
- **Multi-Column Layout**: Full sidebar, main content area
- **Optimal Spacing**: Full padding values
- **Grid Layouts**: 3-4 column product grids
- **Hover States**: Enhanced hover interactions

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

**Visual**:
- **Color Contrast**: 4.5:1 for text, 3:1 for UI components
- **Text Resizing**: Support up to 200% zoom
- **Focus Indicators**: Clear focus states for keyboard navigation

**Keyboard Navigation**:
- **Tab Order**: Logical tab sequence
- **Skip Links**: Skip to main content
- **Keyboard Shortcuts**: Common actions accessible via keyboard

**Screen Readers**:
- **ARIA Labels**: All interactive elements labeled
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text

---

## User Experience Principles

1. **Clarity First**: Clear labels, intuitive navigation, obvious actions
2. **Progressive Disclosure**: Show essential info first, details on demand
3. **Feedback**: Immediate feedback for all user actions
4. **Error Prevention**: Validation, confirmations, clear error messages
5. **Consistency**: Same patterns across all pages
6. **Efficiency**: Shortest path to user goals
7. **Trust**: Security badges, certifications, transparent information

---

## Interaction Design

### Micro-Interactions

**Button States**:
- **Default**: Subtle border, transparent background
- **Hover**: Border glow, slight scale (1.05x)
- **Active**: Pressed state, scale down (0.95x)
- **Loading**: Spinner, disabled state
- **Success**: Green checkmark, success message

**Transitions**:
- **Duration**: 200-300ms for most transitions
- **Easing**: Ease-in-out for smooth feel
- **Page Transitions**: Fade in/out between pages

### Feedback Patterns

**Success Feedback**:
- Green toast notification
- Success icon with message
- Auto-dismiss after 3 seconds

**Error Feedback**:
- Red error message
- Clear error description
- Actionable next steps

**Loading States**:
- Skeleton screens for content loading
- Progress indicators for long operations
- Optimistic UI updates where possible

---

## Information Architecture

### Content Hierarchy

**Primary Navigation**:
1. Dashboard (home)
2. Marketplace (product discovery)
3. Earn (passive income)
4. Alliance (network building)
5. Academy (education)

**Secondary Navigation**:
- Content Generator
- Chat
- Friends
- Profile

**Tertiary Actions**:
- Cart
- Notifications
- Settings
- Help

---

## Design Specifications

### Component Specifications

**Glass Cards**:
- Background: `rgba(17, 24, 39, 0.8)`
- Backdrop Blur: `blur(10px)`
- Border: `1px solid rgba(255, 255, 255, 0.05)`
- Border Radius: `1rem` (rounded-xl)
- Padding: `1.5rem` (p-6) or `2rem` (p-8)
- Shadow: Subtle shadow for depth

**Buttons**:
- Primary: Purple gradient (`from-purple-600 to-cyan-500`)
- Secondary: Transparent with border
- Size: `px-6 py-3` (standard), `px-4 py-2` (small)
- Border Radius: `0.5rem` (rounded-lg)

**Input Fields**:
- Background: `rgba(17, 24, 39, 0.6)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Focus: Purple border glow
- Padding: `px-4 py-2`

---

## User Testing Considerations

### Usability Testing

**Key Areas to Test**:
1. **Onboarding Flow**: Can new users complete setup in 5 minutes?
2. **Affiliate Link Generation**: Can users generate first link in 2 minutes?
3. **Content Generation**: Is AI content generation intuitive?
4. **Navigation**: Can users find all features easily?
5. **Mobile Experience**: Is mobile experience as good as desktop?

### A/B Testing Opportunities

1. **Landing Page**: Countdown timer effectiveness
2. **Dashboard Layout**: Card arrangement and information hierarchy
3. **Marketplace**: Product card design and information display
4. **Content Generator**: Workflow steps and modal design

---

## Design Assets

### Icons
- **Icon Library**: Custom SVG icons defined in `frontend/src/constants.tsx`
- **Usage**: `<ICONS.IconName />` pattern
- **Style**: Consistent stroke width, rounded corners

### Images
- **Product Images**: Marketplace product images
- **Marketing Assets**: Banners, social media images
- **Certifications**: ISO badges, audit logos

### Fonts
- **Google Fonts**: Orbitron, Inter, Space Grotesk
- **Loading**: Via CDN in `index.html`

---

## Design System Documentation

**Reference**: `docs/Product docs/Technical Documentation/COMPLETE_UI_DOCUMENTATION.md`

**Key Sections**:
- Design System (colors, typography, spacing)
- Component Library
- Page-by-Page Specifications
- Responsive Design Guidelines

---

**Last Updated**: January 2026  
**Status**: Active UX Design Specification  
**Related Documents**: PRD.md, Architecture_Decision_Document.md, COMPLETE_UI_DOCUMENTATION.md

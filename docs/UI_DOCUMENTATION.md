# BitNexus UI Documentation
## Complete Page Inventory & User Interface Guide

**Last Updated**: January 2026  
**System**: BitNexus Command Center - AI-Powered Affiliate Marketing Platform  
**Document Version**: 1.2  
**Status**: Complete Page Inventory - Updated with Forum, Tools, and Frontend/Backend Structure

---

## Table of Contents

1. [Authentication Pages](#authentication-pages)
2. [Main User Pages](#main-user-pages)
3. [Admin Pages](#admin-pages)
4. [Moderator Pages](#moderator-pages)
5. [UI Design System](#ui-design-system)
6. [Navigation & Technical Specs](#navigation--technical-specs)

---

## Authentication Pages

### 1. Login Page (`/login`)

**Purpose**: User authentication and access to the platform.

**UI Elements**:
- **Header**: BitNexus logo with gradient text (cyan-purple-cyan)
- **Form Card**: Elevated surface with rounded corners (`rounded-3xl`)
- **Input Fields**: 
  - Email field
  - Password field
  - Purple border accents and focus ring effects
- **Login Button**: Gradient purple button with hover effects
- **Footer Links**: 
  - "Create Account" (cyan)
  - "Forgot Password?" (gray)

**Features**:
- Real-time form validation
- Loading states during authentication
- Auto-redirect if already authenticated

---

### 2. Register Page (`/register`)

**Purpose**: New user account creation.

**UI Elements**:
- Design mirrors the login page for consistency
- Registration form includes additional profile fields
- Terms & conditions acceptance checkbox
- Referral code input field (optional)

**Features**:
- Email format validation
- Password strength requirements
- Referral code processing for MLM tree integration

---

### 3. Forgot Password Page (`/forgot-password`)

**Purpose**: Password recovery via email.

**UI Elements**:
- Simple email input form
- Submit button
- "Back to Login" navigation link

---

## Main User Pages

### 4. Dashboard (`/dashboard`)

**Purpose**: Financial headquarters providing an overview of earnings and performance.

**Tabs**:

#### Overview
- **Affiliate Link Revenue Hero Card**: Large display of total earnings from affiliate links with growth percentage
  - "View Links" button - Opens affiliate manager
  - "Generate Link" button - Quick link generation
- **Financial Freedom Progress Bar**: Shows current income, target, progress percentage, and estimated time to goal
- **Income Streams Widget**: Breakdown of all income sources (affiliate commissions, XAB bot returns, sub-affiliate network, passive income %)
- **Quick Actions Section**: Daily checklist for boosting earnings
- **Daily Tips**: Rotating tips for financial success
- **4-Card Metric Grid**:
  - Daily ROI Target
  - Total Earnings
  - Affiliate Clicks
  - Conversion Rate
- **Product Sales Performance Charts**: Visual representation of sales data
- **Company Presentation Video**: Trust documentation and due diligence information (front page section)

#### Due Diligence
- Trust documentation
- What due diligence has been done
- Company verification and compliance information

#### Team Builder
- Document for listing key people
- Prioritized lists with checkboxes for each name
- Communication tools (chat, email, etc.)
- How to scale the business
- Automation tools
- Management tools

#### Withdraw
- Available earnings balance display
- Withdrawal form (USD payout)
- History table showing past withdrawals
- Fee information (0.5%)

#### My Products
- Management list for user-submitted products
- Status badges: Pending/Active/Rejected
- Product editing and management tools

#### Alliance
- Personal invitation link to invite new users
- New users are placed under their inviter's alliance
- **Alliance Chat**: Communication within alliance network
- **Alliance Private Forum**: Exclusive discussion area for alliance members
- **Moderation**: Q&A section for alliance-related questions

---

### 5. Marketplace (`/marketplace`)

**Purpose**: Product discovery and affiliate link generation.

**Features**:
- **Search & Filter**: 
  - Real-time search
  - Category dropdowns (Crypto, Health, Sports, etc.)
- **Product Cards**: 
  - Display product image
  - NXC price (BUY badge)
  - Commission % (EARN badge)
- **Detail Drawer**: 
  - Slide-over (desktop) or full-screen (mobile) modal
  - Tabs: Overview, Marketing Assets, Affiliate Link generator
- **Product Upload**: 
  - Form for sellers to submit products
  - Includes: price, commission, marketing assets
- **Online Store**: 
  - Selling books, t-shirts, and other merchandise

---

### 6. Earn Page (`/earn`)

**Purpose**: Showcasing passive income opportunities.

**Features**:
- **MEV Bot Lab**: General trading bots for Ethereum and other chains (Maximum Extractable Value)
- **XAB Bot Lab (XRP)**: XRP-specific trading bots optimized for XRP blockchain
- **Opportunities**: Cards for:
  - Staking Rewards
  - Yield Farming

---

### 7. Token Shop (`/shop`)

**Purpose**: Purchase NXC tokens to interact with the platform.

**Features**:
- **Packages**: Tiered bundles:
  - 50 NXC
  - 100 NXC
  - 250 NXC
  - 500 NXC
- **Badges**: "Popular" and "Best Value" indicators
- **Checkout**: Modal for package confirmation and cost breakdown

---

### 8. Alliance (`/alliance`)

**Purpose**: Network management and MLM tracking.

**Features**:
- **Tier Progress**: Progress bar toward the next network rank
- **Referral Tools**: 
  - Referral code display
  - "Copy" functionality
- **Live Ticker**: Real-time commission updates indicator

---

### 9. Affiliate Manager (`/affiliate`)

**Purpose**: Managing and tracking performance of affiliate links.

**Features**:
- **Performance Summary**: 
  - Aggregated Clicks
  - Conversions
  - Earnings
- **Link List**: 
  - Cards for each link
  - QR code generation
  - Status toggles (Active/Paused)

---

### 10. Chat (`/chat`)

**Purpose**: Real-time direct messaging between users.

**UI Elements**:
- **Sidebar**: 
  - Conversation list
  - User avatars
  - Unread badges
- **Main Panel**: 
  - Scrollable message history
  - Color-coded bubbles (Sent/Received)

---

### 11. Friends (`/friends`)

**Purpose**: Managing social connections.

**Tabs**:
- **My Friends**: 
  - Table of connections
  - Profile and message actions
- **Requests**: 
  - Management of incoming/outgoing friend requests
- **Blocked**: 
  - List of restricted users
  - "Unblock" option

---

### 12. Forum (`/forum`)

**Purpose**: Community forum for discussions, knowledge sharing, and networking.

**Features**:
- **Category Sidebar**: 
  - All Discussions
  - Affiliate Marketing
  - MEV Bot Trading
  - XAB Bot Trading (XRP)
  - Network Building
  - Financial Freedom
  - Support & Help
- **Search Functionality**: Real-time search across all discussions
- **Post Listings**: 
  - Pinned posts (highlighted)
  - Hot posts (trending)
  - Category badges
  - Author information
  - Reply counts and views
  - Last activity timestamps
- **Quick Stats**: 
  - Total Posts
  - Active Members
  - Today's Posts
  - Online Now
- **New Post Button**: Create new discussion threads

---

### 13. Profile (`/profile`)

**Purpose**: User identity, privacy settings, and account management.

**Features**:
- **Privacy Controls**: 
  - Toggle visibility (Public/Private) for:
    - Email
    - Bio
    - Phone
- **Wallet Connect**: 
  - Integration for MetaMask
  - WalletConnect support
- **Account Settings**: 
  - Management of 2FA
  - Password changes
  - Email verification

---

### 13. Academy (`/academy`)

**Purpose**: Educational content and live training.

**Sections**:
- **Live Events**: 
  - Scheduled Zoom sessions
  - "Live Soon" badges
- **Course Library**: 
  - Educational modules
  - Graded by level: Beginner to Mastery

---

### 17. Checkout (`/checkout`)

**Purpose**: Final purchase confirmation and payment processing.

**Features**:
- Order summary
- Payment method selection
- Confirmation and receipt

---

### 18. Shopping Cart (`/cart`)

**Purpose**: Review selected items before checkout.

**Features**:
- Item list with quantities
- Price calculations
- Remove items
- Proceed to checkout

---

## Admin Pages

### 14. Product Vetting (`/admin/vetting`)

**Purpose**: Admin review queue for marketplace submissions.

**Features**:
- Detailed review forms
- Feedback system
- Status management (Approve/Reject/Pending)

---

### 15. User Management (`/admin/users`)

**Purpose**: Global user administration.

**Features**:
- Role management
- Account banning/suspension
- Balance adjustments
- User activity monitoring

---

## Moderator Pages

### 16. Report Dashboard (`/moderator/reports`)

**Purpose**: Moderation of user-submitted reports and flags.

**Features**:
- Report queue
- Investigation tools
- Resolution tracking
- User communication

---

## UI Design System

### Color Palette

- **Primary Purple**: `#7c3aed` (Nexus Purple)
- **Primary Cyan**: `#06b6d4` (Tech Cyan)
- **Success Green**: `#10b981` (Signal Green)
- **Warning Yellow**: `#fbbf24` (Wealth Gold)
- **Backgrounds**: 
  - `#030712` (Deep)
  - `#111827` (Card)

### Typography

- **Heading XL**: Large hero text, often with gradients
- **Heading LG/MD**: Section headers for cards and page segments
- **Body/Caption**: Primary content text and metadata labels

### Components

- **Surface Cards**: Elevated cards utilizing glassmorphism and subtle borders
- **Buttons**: 
  - High-contrast purple gradients for primary actions
  - Gray borders for secondary actions
- **Badges**: Small, high-visibility capsules for statuses and levels

---

## Navigation & Technical Specs

### Responsive Breakpoints

- **Mobile**: `<640px`
- **Tablet**: `640-1024px`
- **Desktop**: `>1024px`

### Interaction States

Defined states across all buttons and inputs:
- **Hover**: Visual feedback on interactive elements
- **Focus**: Keyboard navigation indicators
- **Active**: Pressed/selected state
- **Disabled**: Non-interactive state styling

### Performance

- **Lazy Loading**: Images and content loaded on demand
- **Infinite Scroll**: For long lists and feeds
- **Optimistic UI Updates**: Real-time features with immediate feedback

---

## Page Route Summary

### Authentication Routes
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password recovery

### Main User Routes
- `/dashboard` - Main dashboard with tabs
- `/marketplace` - Product marketplace
- `/earn` - Passive income opportunities
- `/shop` - Token shop
- `/alliance` - Network management
- `/affiliate` - Affiliate manager
- `/chat` - Direct messaging
- `/friends` - Social connections
- `/profile` - User profile and settings
- `/academy` - Educational content
- `/cart` - Shopping cart
- `/checkout` - Checkout process

### Admin Routes
- `/admin/vetting` - Product review queue
- `/admin/users` - User management

### Moderator Routes
- `/moderator/reports` - Report moderation

---

## Design Principles

1. **Consistency**: Unified design language across all pages
2. **Accessibility**: Clear contrast, keyboard navigation, screen reader support
3. **Performance**: Fast loading, smooth animations, optimized assets
4. **Responsiveness**: Seamless experience across all device sizes
5. **User Feedback**: Clear loading states, success/error messages, progress indicators

---

## Component Library

### Common Components

- **Glass Cards**: Frosted glass effect with backdrop blur
- **Gradient Buttons**: Purple to cyan gradients for primary actions
- **Status Badges**: Color-coded status indicators
- **Progress Bars**: Visual progress tracking
- **Modal/Drawer**: Slide-over panels for detailed views
- **Form Inputs**: Consistent styling with validation states
- **Data Tables**: Sortable, filterable tables for data display
- **Charts**: Performance visualization components

---

## Future Enhancements

### Planned Features
- Dark/Light theme toggle
- Advanced analytics dashboard
- Mobile app (iOS/Android)
- Browser extension for quick access
- API documentation for integrations
- Webhook system for real-time updates

---

## Notes

- All pages follow the established design system
- Color codes are consistent across the platform
- Responsive design is implemented on all pages
- Performance optimizations are applied throughout
- Accessibility standards are maintained

---

**Document Maintained By**: BitNexus Development Team  
**For Questions**: Refer to development team or project documentation


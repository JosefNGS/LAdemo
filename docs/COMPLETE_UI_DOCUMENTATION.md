# BitNexus Complete UI Documentation
## Comprehensive Page-by-Page Guide

**Last Updated**: January 2026  
**Version**: 2.0  
**Status**: Complete - All Pages Documented

---

## Table of Contents

1. [Landing Page](#1-landing-page)
2. [Authentication Pages](#2-authentication-pages)
   - [Login](#21-login)
   - [Register](#22-register)
   - [Forgot Password](#23-forgot-password)
3. [Main Application Pages](#3-main-application-pages)
   - [Dashboard](#31-dashboard)
   - [Marketplace](#32-marketplace)
   - [Earn (MEV Bot Lab)](#33-earn-mev-bot-lab)
   - [Alliance](#34-alliance)
   - [Credits Shop](#35-token-shop)
   - [Academy](#36-academy)
   - [Goals](#37-goals)
   - [Content Generator](#38-content-generator)
   - [Affiliate Manager](#39-affiliate-manager)
   - [Chat](#310-chat)
   - [Friends](#311-friends)
   - [Profile](#312-profile)
   - [NexusHub (AI Command)](#313-nexushub-ai-command)
   - [Cart](#314-cart)
   - [Checkout](#315-checkout)
4. [Administration Pages](#4-administration-pages)
   - [Vetting](#41-vetting)
   - [Users](#42-users)
   - [Reports](#43-reports)
5. [Standalone Pages](#5-standalone-pages)
   - [Manifesto](#51-manifesto)
   - [Docs](#52-docs)
6. [Layout & Navigation](#6-layout--navigation)
7. [Components](#7-components)
   - [ProductDetailDrawer](#71-productdetaildrawer)
   - [ProductUploadForm](#72-productuploadform)
8. [Design System](#8-design-system)

---

## 1. Landing Page

**File**: `index.html`  
**Route**: `/`  
**Purpose**: Marketing landing page with countdown timer and demo access

### Contents

#### Hero Section
- **BitNexus Logo**: Gradient text logo (cyan-purple-cyan)
- **Main Headline**: "The Future of Affiliate Revenue is Decentralized"
- **Subheadline**: Description of platform value proposition
- **Countdown Timer**: Real-time countdown to launch date
  - Days, Hours, Minutes, Seconds display
  - Updates every second
  - Styled with gradient text

#### Genesis Signup Section
- **Email Input Field**:
  - Placeholder: "Enter your terminal email..."
  - White text with improved visibility
  - Placeholder opacity: 60% for better readability
- **Initiate Access Button**:
  - Gradient purple-to-cyan button
  - Shadow effect for visibility
  - Triggers email collection
- **Early Adopter Notice**:
  - "Limited to 500 Early-Adopter licenses. 142 remaining."
  - High visibility (80% opacity, bold text)
  - "142 remaining" in extra bold for emphasis

#### Academy Modules Showcase
- **Section Title**: "Academy Modules"
- **6 Course Cards**:
  1. **Module 1**: Foundation & Strategy
  2. **Module 2**: Network Building
  3. **Module 3**: Content Creation
  4. **Module 4**: Automation & Scaling
  5. **Module 5**: Advanced Tactics
  6. **Module 6**: Financial Mastery
- Each card shows:
  - Module number and title
  - Brief description
  - Glassmorphism design
  - Hover effects

#### Footer
- **Links**: Manifesto, Docs
- **Copyright**: BitNexus branding
- **Social Links**: (if applicable)

#### Demo Access
- **"Try Demo" Button**: 
  - Dynamically loads React application
  - Hides landing page view
  - Shows app view
  - Handles TypeScript transpilation

---

## 2. Authentication Pages

### 2.1 Login

**File**: `src/pages/Login.tsx`  
**Route**: `/login`  
**Purpose**: User authentication and access to the platform

#### Contents

**Header Section**:
- BitNexus logo with gradient text
- "Access the Command Center" subtitle

**Login Form**:
- **Email Field**:
  - Label: "Email Address"
  - Placeholder: "agent@nexus.io"
  - Real-time email validation
  - Error messages on blur
  - Red border on validation error
  
- **Password Field**:
  - Label: "Password"
  - Placeholder: "••••••••"
  - Minimum 8 characters validation
  - Real-time validation feedback
  - Error messages displayed below field

- **Remember Me Checkbox**:
  - Toggle for session persistence
  - Styled with accent color

- **Forgot Password Link**:
  - Links to Forgot Password page
  - Purple accent color

**Submit Button**:
- Gradient purple-to-cyan button
- Loading state with spinner
- Disabled during submission
- Text: "Access Command Center"

**Footer Links**:
- "Don't have an account? Create Account" link
- "Continue as Guest" button for demo mode

#### Features
- Real-time form validation
- Email format checking
- Password length validation
- Loading states during authentication
- Error message display
- Smooth transitions

---

### 2.2 Register

**File**: `src/pages/Register.tsx`  
**Route**: `/register`  
**Purpose**: New user account creation

#### Contents

**Header Section**:
- BitNexus logo
- "Join the Revolution" subtitle

**Registration Form**:
- **Email Field**:
  - Same validation as login
  - Real-time feedback

- **Password Field**:
  - Password strength indicator:
    - 6 levels: Weak → Very Strong
    - Visual progress bar
    - Color-coded (red/yellow/green)
    - Real-time calculation based on:
      - Length (8+, 12+)
      - Lowercase letters
      - Uppercase letters
      - Numbers
      - Special characters

- **Confirm Password Field**:
  - Must match password
  - Real-time matching validation
  - Error if mismatch

- **Referral Code Field**:
  - Optional input
  - Auto-uppercase conversion
  - Placeholder: "NEXUS-XXXX-XXXX"
  - Helper text explaining purpose
  - Processes referral on registration

- **Terms & Conditions Checkbox**:
  - Required acceptance
  - Links to terms and privacy policy
  - Error if not checked

**Submit Button**:
- Loading state: "Creating Account..."
- Processes referral code if provided
- Simulates API call (2 seconds)

**Footer**:
- "Already have an account? Login" link

#### Features
- Password strength visualization
- Referral code processing
- Terms acceptance requirement
- Comprehensive validation
- Loading states

---

### 2.3 Forgot Password

**File**: `src/pages/ForgotPassword.tsx`  
**Route**: `/forgot-password`  
**Purpose**: Password recovery via email

#### Contents

**Initial State**:
- **Header**: "Reset Your Password"
- **Description**: Instructions for password reset
- **Email Field**:
  - Email validation
  - Error messages
- **Submit Button**:
  - "Send Reset Link"
  - Loading state

**Success State** (After Submission):
- **Success Icon**: Green checkmark in circle
- **Title**: "Check Your Email"
- **Message**: 
  - Confirmation email sent
  - Email address displayed
  - Spam folder reminder
- **Back to Login Button**: Returns to login page

#### Features
- Email validation
- Success confirmation screen
- User-friendly messaging
- Loading states

---

## 3. Main Application Pages

### 3.1 Dashboard

**File**: `src/pages/Dashboard.tsx`  
**Route**: `/dashboard`  
**Purpose**: Financial headquarters and command center

#### Contents

**Hero Card - Affiliate Link Revenue**:
- **Title**: "Affiliate Link Revenue"
- **Main Value**: $14,210.00 USD
- **Growth Indicator**: +15.2% (green)
- **Description**: "Total earnings from affiliate links"
- **Action Buttons**:
  - "View Links" (secondary)
  - "Generate Link" (primary, green gradient)
- **Design**: Green-to-cyan gradient background with glow effect

**Financial Freedom Progress Bar**:
- **Current Income**: $2,450/month
- **Target Income**: $5,000/month
- **Progress Percentage**: 49%
- **Visual Progress Bar**: Animated fill
- **Estimated Time**: "~3 months to goal"
- **Color Coding**: Green for progress

**Income Streams Widget**:
- **Breakdown Cards**:
  1. **Affiliate Commissions**: $1,200/month
  2. **MEV Bot Returns**: $850/month
  3. **Sub-Affiliate Network**: $400/month
  4. **Passive Income %**: 35% of total
- **Visual**: Card grid with icons
- **Color Coding**: Different colors per stream

**Quick Actions Section**:
- **Title**: "Daily Checklist"
- **Checkbox Items**:
  - [ ] Share 1 product link
  - [ ] Follow up with 3 leads
  - [ ] Post on social media
  - [ ] Check earnings
- **Progress**: X/4 completed
- **Design**: Glass card with checkboxes

**Daily Tips Banner**:
- **Rotating Tips**: 
  - "Focus on high-commission products"
  - "Engage with your network daily"
  - "Use AI tools to save time"
- **Auto-rotate**: Changes every 10 seconds
- **Design**: Gradient banner with icon

**Metric Cards Grid** (4 cards):
1. **Daily ROI Target**: $82.50 (currency)
2. **Total Earnings**: $14,210 (currency)
3. **Affiliate Clicks**: 1,247 (count)
4. **Conversion Rate**: 3.2% (percent)

**Product Sales Performance Chart**:
- **Chart Type**: Line/Area chart (Recharts)
- **Data**: Sales over time
- **Time Period**: Last 30 days
- **Interactive**: Hover for details
- **Responsive**: Adapts to screen size

**Tabs Section**:
- **Overview Tab** (default): All above content
- **Due Diligence Tab**:
  - Company presentation video
  - Trust documentation
  - Due diligence information
  - Compliance details
- **Team Builder Tab**:
  - Key people list
  - Prioritized checkboxes
  - Communication tools
  - Scaling strategies
  - Automation tools
- **Withdraw Tab**:
  - Available balance display
  - Withdrawal form
  - NXC to USD conversion
  - Fee information (0.5%)
  - History table
- **My Products Tab**:
  - User-submitted products list
  - Status badges (Pending/Active/Rejected)
  - Edit/Manage actions
- **Alliance Tab**:
  - Personal invitation link
  - Copy functionality
  - Network tree preview

#### Features
- Real-time data visualization
- Multiple income stream tracking
- Goal setting and progress
- Quick action items
- Tabbed interface
- Responsive charts

---

### 3.2 Marketplace

**File**: `src/pages/Marketplace.tsx`  
**Route**: `/marketplace`  
**Purpose**: Product discovery and affiliate link generation

#### Contents

**Header Section**:
- **Title**: "Nexus Marketplace"
- **Subtitle**: "Discover products and generate affiliate links"
- **Submit Product Button**: Opens ProductUploadForm

**Search Bar**:
- **Placeholder**: "Search products, bots, or courses..."
- **Icon**: Search icon on left
- **Real-time Search**: Filters as you type
- **Design**: Glass card with border

**Category Filters**:
- **Categories**: All, Crypto, Health, Tech, Marketing, Automation, Shop, Academy
- **Design**: Pill-shaped buttons
- **Active State**: Purple gradient with shadow
- **Scrollable**: Horizontal scroll on mobile

**Product Grid**:
- **Layout**: Responsive grid (1-4 columns)
- **Product Cards** contain:

  **Product Image**:
  - 400x300 placeholder image
  - Category badge overlay
  - Price badge (bottom left)
  - Commission badge (bottom right)
  - Hover zoom effect

  **Product Info**:
  - Product name (bold, hover color change)
  - Product tags (if available):
    - 🔄 Recurring Income
    - ⚡ Quick Win
    - 🎯 High Commission
    - 👶 Beginner Friendly
  - Earning Potential Calculator:
    - "10 sales/month: $XXX"
    - "Avg affiliate earns: $XXX/month"
    - "Time to $1K/month: X months"
    - Cyan background card

  **Action Buttons**:
  - "View Details" (primary, purple)
  - Analytics icon button (secondary)

**Product Detail Drawer** (Modal):
- Opens when "View Details" clicked
- **Tabs**:
  1. **Overview**:
     - Full description
     - Earning potential details
     - Product specifications
  2. **Marketing Assets**:
     - Banner images
     - Social media templates
     - Email templates
     - Download buttons
  3. **Affiliate Link**:
     - Generate link button
     - Generated link display
     - Copy to clipboard
     - QR code display

**Product Upload Form** (Modal):
- Opens when "Submit Product" clicked
- **Form Fields**:
  - Product name (required)
  - Description (textarea, required)
  - Category (dropdown, required)
  - Price in NXC (number, required)
  - Commission % (1-100, required)
  - Image URL (optional)
  - Tags (multi-select)
- **Validation**: Real-time with error messages
- **Submission Fee Notice**: 25 NXC creditss
- **Submit Button**: Loading state

#### Features
- Real-time search and filtering
- Product tags for quick identification
- Earning potential calculator
- Product detail drawer with tabs
- Product submission form
- Responsive grid layout
- Hover effects and animations

---

### 3.3 Earn (MEV Bot Lab)

**File**: `src/pages/Earn.tsx`  
**Route**: `/earn`  
**Purpose**: Passive income through MEV bot staking

#### Contents

**Header Section**:
- **Title**: "MEV Bot Lab"
- **Subtitle**: "Automated passive income through blockchain trading"

**Staking Overview Card**:
- **Total Staked**: 2,500 NXC
- **Current APY**: 12.5%
- **Monthly Earnings**: $312.50
- **Total Earned**: $3,750.00
- **Design**: Large hero card with gradient

**Bot Templates Section**:
- **3 Bot Types**:
  1. **Arbitrage Bot**:
     - APY: 10-12%
     - Risk: Low
     - Description
     - "Stake Now" button
  2. **Liquidity Bot**:
     - APY: 12-15%
     - Risk: Medium
     - Description
     - "Stake Now" button
  3. **Flash Loan Bot**:
     - APY: 15-18%
     - Risk: High
     - Description
     - "Stake Now" button

**Passive Income Projection Calculator**:
- **Input Fields**:
  - Stake amount (NXC)
  - APY slider (10-18%)
- **Output Display**:
  - Monthly earnings
  - Yearly earnings
  - 5-year compound projection
- **Visual Chart**: Bar or line chart
- **Interactive**: Updates in real-time

**Active Stakes Table**:
- **Columns**:
  - Bot Type
  - Amount Staked
  - APY
  - Earnings
  - Status
  - Actions
- **Actions**: Withdraw, Reinvest, Pause

**Earnings History Chart**:
- **Chart Type**: Line chart
- **Data**: Earnings over time
- **Time Period**: Last 6 months
- **Interactive**: Hover for details

**Withdrawal Section**:
- **Available Balance**: Display
- **Withdrawal Form**:
  - Amount input
  - Destination wallet
  - Fee display
  - Submit button

#### Features
- Multiple bot options
- APY display and comparison
- Passive income calculator
- Staking interface
- Earnings tracking
- Withdrawal functionality

---

### 3.4 Alliance

**File**: `src/pages/Alliance.tsx`  
**Route**: `/alliance`  
**Purpose**: Network management and MLM tracking

#### Contents

**Header Section**:
- **Title**: "Alliance Network"
- **Subtitle**: "Build your network and earn team commissions"

**Tier Progress Card**:
- **Current Tier**: Silver
- **Next Tier**: Gold
- **Progress Bar**: Visual progress to next tier
- **Requirements**: "Need 15 more referrals for Gold"
- **Benefits**: List of tier benefits
- **Design**: Gradient card with progress visualization

**Referral Tools Section**:
- **Referral Code Display**:
  - Code: "NEXUS-XXXX-XXXX"
  - Copy button
  - Share buttons (social media)
- **Referral Link**:
  - Full URL
  - Copy button
  - QR code generator
- **Marketing Materials**:
  - Pre-made graphics
  - Email templates
  - Social media posts

**Network Statistics**:
- **Total Network Size**: 142 members
- **Direct Referrals**: 23
- **Sub-Affiliates**: 119
- **Active This Month**: 89
- **Total Commissions**: $2,450

**Success Stories Section**:
- **3-5 Success Stories**:
  - User name/avatar
  - Achievement description
  - Strategy used
  - Earnings amount
  - Network size
  - Time to success
- **Design**: Card grid with images

**Global Leaderboard**:
- **Top 10 Users**:
  - Rank
  - Avatar
  - Name
  - Network Size
  - Total Earnings
  - Tier Badge
- **Your Position**: Highlighted
- **Design**: Table or card list

**Live Commission Ticker**:
- **Real-time Updates**: Scrolling ticker
- **Format**: "User X earned $Y from Product Z"
- **Animation**: Smooth scrolling
- **Design**: Banner at top or bottom

**Network Tree Visualization**:
- **Visual Tree**: Hierarchical display
- **Interactive**: Click to expand/collapse
- **User Info**: Hover for details
- **Color Coding**: By tier or activity

#### Features
- Tier progression tracking
- Referral code management
- Network statistics
- Success stories showcase
- Leaderboard ranking
- Real-time commission updates
- Network tree visualization

---

### 3.5 Credits Shop

**File**: `src/pages/TokenShop.tsx`  
**Route**: `/shop`  
**Purpose**: Purchase NXC creditss for platform usage

#### Contents

**Header Section**:
- **Title**: "NXC Credits Shop"
- **Subtitle**: "Purchase NXC packages for network interactions and AI usage credits for the AI tools"
- **Cart Button**: Shows item count if cart has items

**Token Packages Grid** (4 packages):
1. **Starter Pack**:
   - 50 NXC Creditss
   - Price: $150
   - Bonus: 0 NXC
   - AI Credits: 25
   - "Add to Cart" button

2. **Growth Pack** (Most Popular):
   - 100 NXC Creditss
   - Price: $280
   - Bonus: +5 NXC
   - AI Credits: 50
   - "MOST POPULAR" badge
   - "Add to Cart" button

3. **Pro Pack**:
   - 250 NXC Creditss
   - Price: $650
   - Bonus: +15 NXC
   - AI Credits: 150
   - "Add to Cart" button

4. **Enterprise Pack**:
   - 500 NXC Creditss
   - Price: $1,200
   - Bonus: +35 NXC
   - AI Credits: 350
   - "Add to Cart" button

**Package Card Details**:
- Large token amount (gradient text)
- Price in USD
- Price per NXC calculation
- Bonus NXC (if applicable)
- AI Credits included
- Popular badge (if applicable)
- Hover effects

**Why Buy NXC Section**:
- **4 Benefit Cards**:
  1. **Network Access**: Unlock premium features
  2. **AI Credits**: Power AI tools
  3. **Staking Rewards**: Earn passive income
  4. **Tier Benefits**: Better commission rates

**AI Usage Credits Info Section**:
- **Title**: "AI Usage Credits"
- **Description**: Explains NXC usage for AI features
- **Usage Examples**:
  - Content Generator: 10 NXC per generation
  - NexusHub AI: 5 NXC per conversation
  - AI Recommendations: 2 NXC per query
- **Tip**: Higher packages include bonus AI credits
- **Design**: Cyan-themed card with border

#### Features
- Package comparison
- Bonus token display
- AI credits information
- Cart integration
- Responsive grid
- Popular badge highlighting

---

### 3.6 Academy

**File**: `src/pages/Academy.tsx`  
**Route**: `/academy`  
**Purpose**: Educational content and training

#### Contents

**Header Section**:
- **Title**: "BitNexus Academy"
- **Subtitle**: "Master affiliate marketing and achieve financial freedom"

**Live Events Section**:
- **Upcoming Events**:
  - Event title
  - Date and time
  - Platform (Zoom, etc.)
  - "Live Soon" badge
  - "Register" button
- **Past Events**: Recordings available

**Financial Freedom Learning Paths**:
- **3 Structured Paths**:

  1. **Path to $1K/month (30 days)**:
     - Duration: 30 days
     - Modules: 6 modules
     - Progress: X% complete
     - "Start Path" button
     - Module list with checkmarks

  2. **Path to $5K/month (90 days)**:
     - Duration: 90 days
     - Modules: 12 modules
     - Progress: X% complete
     - Prerequisites: Complete $1K path
     - "Start Path" button

  3. **Path to Financial Freedom (6 months)**:
     - Duration: 6 months
     - Modules: 24 modules
     - Progress: X% complete
     - Prerequisites: Complete $5K path
     - "Start Path" button

**Course Library**:
- **Filter Options**:
  - Level: Beginner, Intermediate, Advanced, Mastery
  - Category: Strategy, Network, Content, Automation
  - Status: All, Enrolled, Completed
- **Course Cards**:
  - Course thumbnail
  - Title and description
  - Level badge
  - Duration
  - Progress bar (if enrolled)
  - Instructor name
  - Rating/reviews
  - "Enroll" or "Continue" button

**My Progress Section**:
- **Overall Progress**: X% complete
- **Courses Completed**: X/Y
- **Certificates Earned**: X
- **Time Spent**: X hours
- **Achievements**: Badges earned

**Featured Courses**:
- **Top 3-5 Courses**:
  - Highlighted design
  - Popular badge
  - High ratings
  - Quick enroll button

#### Features
- Structured learning paths
- Course library with filters
- Progress tracking
- Live events calendar
- Achievement system
- Certificate generation

---

### 3.7 Goals

**File**: `src/pages/Goals.tsx`  
**Route**: `/goals`  
**Purpose**: Goal setting and progress tracking

#### Contents

**Header Section**:
- **Title**: "Financial Goals"
- **Subtitle**: "Set and track your path to financial freedom"

**Monthly Income Goals**:
- **Current Goal**: $5,000/month
- **Progress Bar**: Visual progress
- **Current Income**: $2,450/month
- **Percentage**: 49% complete
- **Time Remaining**: "~3 months"
- **Edit Goal Button**

**Network Size Goals**:
- **Current Goal**: 100 members
- **Current Network**: 42 members
- **Progress Bar**: Visual progress
- **Percentage**: 42% complete
- **Edit Goal Button**

**Product Promotion Goals**:
- **Goal**: Promote 10 products this month
- **Current**: 4 products
- **Progress Bar**: Visual progress
- **Product List**: Checkboxes
- **Edit Goal Button**

**Goal History**:
- **Completed Goals**: List with dates
- **Archived Goals**: Past goals
- **Achievement Badges**: Visual rewards

**Quick Actions**:
- **Create New Goal** button
- **Edit Existing Goals** button
- **View All Goals** link

#### Features
- Multiple goal types
- Progress visualization
- Time estimates
- Goal editing
- Achievement tracking
- History display

---

### 3.8 Content Generator

**File**: `src/pages/ContentGenerator.tsx`  
**Route**: `/content-generator`  
**Purpose**: AI-powered content creation for social media

#### Contents

**Header Section**:
- **Title**: "Content Generator"
- **Subtitle**: "Create engaging social media content with AI"

**Product Selection**:
- **Dropdown/Select**: Choose product to promote
- **Product Preview**: Selected product card
- **Product Info**: Name, commission, tags

**Content Type Selection**:
- **Options**:
  - Social Media Post
  - Email Campaign
  - Blog Post
  - Product Description
  - Ad Copy
- **Radio Buttons or Tabs**

**Platform Selection**:
- **Social Media Platforms**:
  - YouTube
  - Instagram
  - Facebook
  - TikTok
  - Snapchat
  - X (Twitter)
  - LinkedIn
- **Checkboxes**: Multi-select
- **Platform Icons**: Visual representation

**Content Generation**:
- **Generate Button**: 
  - Uses AI (Gemini API)
  - Loading state
  - Cost: 10 NXC per generation
- **AI Prompt**: Auto-generated based on selections
- **Custom Instructions**: Optional textarea

**Generated Content Preview**:
- **Content Display**: 
  - Formatted text
  - Character count
  - Platform-specific formatting
- **Edit Button**: Manual editing
- **Regenerate Button**: Create new version
- **Copy Button**: Copy to clipboard

**Sharing Options**:
- **Share Buttons**: 
  - Direct share to platforms (if connected)
  - Copy link
  - Download as image
  - Schedule post
- **Social Media Connections**: Status indicators

**Content History**:
- **Previous Generations**: List of past content
- **Reuse Button**: Regenerate similar content
- **Delete Button**: Remove from history

**AI Credits Display**:
- **Remaining Credits**: X AI credits
- **Cost Per Generation**: 10 NXC
- **Buy More Credits**: Link to Credits Shop

#### Features
- Product integration
- Multi-platform support
- AI-powered generation
- Content preview and editing
- Social media sharing
- Content history
- Credit management

---

### 3.9 Affiliate Manager

**File**: `src/pages/AffiliateManager.tsx`  
**Route**: `/affiliate`  
**Purpose**: Track affiliate link performance

#### Contents

**Header Section**:
- **Title**: "Affiliate Manager"
- **Subtitle**: "Track clicks, conversions, and sub-affiliate performance"

**Performance Summary Cards** (3 cards):
1. **Total Clicks**: 1,247
   - Trend: +15.2%
   - Chart: Mini sparkline
2. **Conversions**: 42
   - Conversion Rate: 3.4%
   - Trend: +8.1%
3. **Total Earnings**: $2,450
   - This Month: $1,200
   - Trend: +22.5%

**Performance Chart**:
- **Chart Type**: Line/Area chart
- **Metrics**: Clicks, Conversions, Earnings
- **Time Period**: Last 30 days
- **Interactive**: Toggle metrics
- **Responsive**: Adapts to screen

**Top Products Table**:
- **Columns**:
  - Product Name
  - Clicks
  - Conversions
  - Earnings
  - Conversion Rate
  - Actions
- **Sortable**: By any column
- **Actions**: View details, Pause link

**Affiliate Links List**:
- **Link Cards**:
  - Product name and image
  - Full affiliate link
  - Status: Active/Paused
  - Performance metrics
  - QR code button
  - Copy link button
  - Toggle status button
  - Analytics button
- **Search/Filter**: By product, status

**QR Code Generator**:
- **Modal/Drawer**: Opens on click
- **QR Code Display**: Generated code
- **Download Options**: PNG, SVG
- **Share Options**: Social media

**Sub-Affiliate Network**:
- **Network Tree**: Visual hierarchy
- **Sub-Affiliate Stats**:
  - Number of sub-affiliates
  - Their total earnings
  - Your commission from them
- **Top Performers**: List of best sub-affiliates

**Link Creation**:
- **Quick Create Button**: Generate new link
- **Product Selection**: Dropdown
- **Custom Parameters**: Optional
- **Generate Button**: Creates link instantly

#### Features
- Real-time analytics
- Link management
- QR code generation
- Performance tracking
- Sub-affiliate monitoring
- Export data options

---

### 3.10 Chat

**File**: `src/pages/Chat.tsx`  
**Route**: `/chat`  
**Purpose**: Encrypted messaging between users

#### Contents

**Layout**: Split view (sidebar + main)

**Sidebar - Conversation List**:
- **Search Bar**: Find conversations
- **Conversation Items**:
  - Avatar
  - Name
  - Last message preview
  - Timestamp
  - Unread badge (if applicable)
  - Online status indicator
- **New Chat Button**: Start new conversation
- **Filter Options**: All, Unread, Archived

**Main Panel - Chat View**:
- **Chat Header**:
  - Contact name and avatar
  - Online status
  - Options menu (block, delete, etc.)

- **Message Area**:
  - **Sent Messages** (right-aligned):
    - Purple/cyan gradient background
    - Timestamp
    - Read receipts (if applicable)
  - **Received Messages** (left-aligned):
    - Dark background
    - Timestamp
    - Sender name

- **Message Input**:
  - Text area
  - Emoji picker
  - Attachment button
  - Send button
  - Character count

**Features**:
- Real-time messaging
- Message encryption indicator
- Typing indicators
- Read receipts
- File attachments
- Emoji support
- Message search

#### Features
- Encrypted messaging
- Real-time updates
- Unread indicators
- Online status
- Message search
- File sharing

---

### 3.11 Friends

**File**: `src/pages/Friends.tsx`  
**Route**: `/friends`  
**Purpose**: Manage social connections

#### Contents

**Tabs**:
1. **My Friends**
2. **Requests**
3. **Blocked**

**My Friends Tab**:
- **Friends List**:
  - Avatar
  - Name
  - Online status
  - Last active
  - Actions:
    - Message button
    - View profile
    - Remove friend
- **Search Bar**: Find friends
- **Filter Options**: Online, Recently Active, Alphabetical

**Requests Tab**:
- **Incoming Requests**:
  - Avatar
  - Name
  - Mutual friends
  - Accept/Decline buttons
- **Outgoing Requests**:
  - Avatar
  - Name
  - Status: Pending
  - Cancel button
- **Empty State**: "No pending requests"

**Blocked Tab**:
- **Blocked Users List**:
  - Avatar
  - Name
  - Blocked date
  - Unblock button
- **Empty State**: "No blocked users"

**Friend Suggestions**:
- **Suggested Friends**:
  - Based on mutual connections
  - Based on network
  - Add Friend button

#### Features
- Friend management
- Request handling
- Block/unblock functionality
- Online status
- Search and filter
- Friend suggestions

---

### 3.12 Profile

**File**: `src/pages/Profile.tsx` (embedded in App.tsx)  
**Route**: `/profile`  
**Purpose**: User settings and account management

#### Contents

**Profile Header**:
- **Avatar**: User profile picture
- **Name**: Display name
- **Tier Badge**: Current alliance tier
- **Edit Profile Button**

**Account Information**:
- **Email**: Display (with privacy toggle)
- **Phone**: Display (with privacy toggle)
- **Bio**: Text area (with privacy toggle)
- **Join Date**: Display
- **Privacy Controls**: Toggle visibility (Public/Private)

**Social Media Connections**:
- **Platform Buttons**:
  - YouTube
  - Instagram
  - Facebook
  - TikTok
  - Snapchat
  - X (Twitter)
  - LinkedIn
- **Connection Status**:
  - Connected (green checkmark)
  - Not Connected (gray)
- **Connect/Disconnect Buttons**: Toggle functionality

**Wallet Connect**:
- **MetaMask Button**: Connect wallet
- **WalletConnect Button**: Connect wallet
- **Connected Wallet**: Display address
- **Disconnect Button**

**Account Settings**:
- **Two-Factor Authentication**: Toggle
- **Password Change**: Link to change password
- **Email Verification**: Status and resend
- **Notification Preferences**: Toggle options
- **Language Selection**: Dropdown
- **Theme Selection**: Light/Dark (if applicable)

**Privacy Settings**:
- **Profile Visibility**: Public/Private/Friends
- **Earnings Visibility**: Show/Hide
- **Network Visibility**: Show/Hide
- **Activity Status**: Show/Hide

**Danger Zone**:
- **Delete Account Button**: Red, with confirmation
- **Export Data Button**: Download user data
- **Deactivate Account**: Temporary deactivation

#### Features
- Profile management
- Privacy controls
- Social media integration
- Wallet connection
- Security settings
- Account deletion

---

### 3.13 NexusHub (AI Command)

**File**: `src/pages/NexusHub.tsx`  
**Route**: `/nexushub` or via AI button  
**Purpose**: AI-powered chat assistant

#### Contents

**Chat Interface**:
- **Header**: "NexusHub AI Assistant"
- **Subtitle**: "Ask me anything about affiliate marketing, NXC, or strategies"

**Message History**:
- **AI Messages** (left):
  - AI avatar
  - Message text
  - Timestamp
  - Suggested actions (if applicable)
- **User Messages** (right):
  - User avatar
  - Message text
  - Timestamp

**Input Area**:
- **Text Input**: Multi-line textarea
- **Send Button**: Submit message
- **AI Credits Display**: Remaining credits
- **Cost Indicator**: "5 NXC per conversation"

**Quick Actions**:
- **Suggested Questions**:
  - "How do I increase my affiliate earnings?"
  - "What products should I promote?"
  - "Explain NXC creditsomics"
  - "Help me build my network"
- **Click to Ask**: Pre-fills input

**AI Response Features**:
- **Markdown Support**: Formatted responses
- **Code Blocks**: Syntax highlighting
- **Lists**: Bulleted/numbered
- **Links**: Clickable URLs
- **Loading Indicator**: While AI processes

**Conversation History**:
- **Previous Conversations**: Sidebar or dropdown
- **New Conversation Button**: Start fresh
- **Save Conversation**: Bookmark important chats

#### Features
- AI-powered responses
- Context-aware assistance
- Quick action suggestions
- Conversation history
- Credit management
- Markdown formatting

---

### 3.14 Cart

**File**: `src/pages/Cart.tsx`  
**Route**: `/cart`  
**Purpose**: Shopping cart with item management

#### Contents

**Header Section**:
- **Title**: "Shopping Cart"
- **Clear Cart Button**: Remove all items

**Empty Cart State**:
- **Icon**: Shopping cart icon
- **Message**: "Your cart is empty"
- **Description**: "Add items from the Credits Shop or Marketplace"
- **Action Buttons**:
  - "Browse Credits Shop"
  - "Browse Marketplace"

**Cart Items List**:
- **Item Cards**:
  - Product/token image (if available)
  - Name and description
  - Quantity controls (+/- buttons)
  - Price per item
  - Total price (price × quantity)
  - Remove button (X icon)
- **Design**: Glass cards with borders

**Order Summary Sidebar**:
- **Subtotal**: Sum of all items
- **Item Count**: "X items"
- **Tax (5%)**: Calculated tax
- **Total**: Final amount (large, purple)
- **Proceed to Checkout Button**: Primary action
- **Continue Shopping Button**: Secondary action
- **Sticky**: Stays visible while scrolling

#### Features
- Item quantity management
- Real-time total calculation
- Tax calculation
- Remove items
- Empty state handling
- Responsive layout

---

### 3.15 Checkout

**File**: `src/pages/Checkout.tsx`  
**Route**: `/checkout`  
**Purpose**: Payment processing and order completion

#### Contents

**Header Section**:
- **Title**: "Checkout"

**Payment Method Selection**:
- **3 Options**:
  1. **USD** (Credit Card)
  2. **NXC** (Token Payment)
  3. **Card** (Debit/Credit)
- **Radio Buttons or Cards**: Visual selection
- **Active State**: Purple border and background

**Payment Details Form**:
- **Email Address**: Required
- **Card Details** (if card selected):
  - Card Number (formatted: XXXX XXXX XXXX XXXX)
  - Expiry Date (MM/YY)
  - CVV (3 digits)
- **NXC Payment Info** (if NXC selected):
  - Required NXC amount
  - Current NXC price
  - Wallet redirect notice

**Order Summary Sidebar**:
- **Items List**: All cart items
- **Subtotal**: Item total
- **Tax (5%)**: Calculated
- **Total**: Final amount
- **Back to Cart Button**

**Submit Payment Button**:
- **Loading State**: "Processing Payment..."
- **Spinner**: Animated
- **Disabled**: During processing

**Order Confirmation** (After Success):
- **Success Icon**: Green checkmark
- **Title**: "Order Confirmed!"
- **Message**: Confirmation details
- **Email Notice**: "Confirmation sent to [email]"
- **Action Buttons**:
  - "Go to Dashboard"
  - "Continue Shopping"

#### Features
- Multiple payment methods
- Form validation
- Real-time calculations
- Loading states
- Order confirmation
- Email notifications

---

## 4. Administration Pages

### 4.1 Vetting

**File**: `src/pages/Vetting.tsx`  
**Route**: `/admin/vetting`  
**Purpose**: Admin review queue for marketplace submissions

#### Contents

**Header Section**:
- **Title**: "Product Vetting Queue"
- **Subtitle**: "Review and approve marketplace submissions"

**Filter Tabs**:
- **All**: All submissions
- **Pending**: Awaiting review
- **Approved**: Already approved
- **Rejected**: Denied submissions

**Submission Cards**:
- **Product Info**:
  - Product name
  - Category
  - Price
  - Commission %
  - Submitted by (user)
  - Submission date
- **Product Details**:
  - Description
  - Image preview
  - Tags
- **Review Form**:
  - Status dropdown (Pending/Approve/Reject)
  - Feedback textarea
  - Rejection reason (if rejected)
- **Actions**:
  - Approve button
  - Reject button
  - Request changes button
  - View full details

**Statistics**:
- **Pending Reviews**: Count
- **Approved Today**: Count
- **Rejected Today**: Count
- **Average Review Time**: Display

#### Features
- Submission review
- Status management
- Feedback system
- Bulk actions
- Search and filter

---

### 4.2 Users

**File**: `src/pages/Users.tsx`  
**Route**: `/admin/users`  
**Purpose**: Global user administration

#### Contents

**Header Section**:
- **Title**: "User Management"
- **Subtitle**: "Manage all platform users"

**Search and Filters**:
- **Search Bar**: By name, email, user ID
- **Filters**:
  - Status: All, Active, Banned, Suspended
  - Tier: All tiers
  - Registration Date: Date range
  - Activity: Active, Inactive

**Users Table**:
- **Columns**:
  - Avatar
  - Name
  - Email
  - Tier
  - Status
  - Join Date
  - Last Active
  - Total Earnings
  - Network Size
  - Actions
- **Sortable**: All columns
- **Pagination**: Page navigation

**User Details Modal**:
- **Full Profile**: All user information
- **Account Balance**: NXC and USD
- **Transaction History**: List
- **Network Tree**: Visual display
- **Activity Log**: Recent actions
- **Actions**:
  - Edit user
  - Adjust balance
  - Ban/Suspend
  - Reset password
  - Delete account

**Bulk Actions**:
- **Select Multiple**: Checkboxes
- **Actions**:
  - Ban selected
  - Suspend selected
  - Export data
  - Send email

#### Features
- User search
- Advanced filtering
- User management
- Balance adjustments
- Bulk operations
- Activity tracking

---

### 4.3 Reports

**File**: `src/pages/Reports.tsx`  
**Route**: `/moderator/reports`  
**Purpose**: Moderation of user-submitted reports

#### Contents

**Header Section**:
- **Title**: "Report Dashboard"
- **Subtitle**: "Review and resolve user reports"

**Report Categories**:
- **All Reports**
- **Product Reports**: Fake products, scams
- **User Reports**: Harassment, spam
- **Content Reports**: Inappropriate content
- **Technical Reports**: Bugs, issues

**Reports List**:
- **Report Cards**:
  - Report type badge
  - Reported by (user)
  - Reported item (product/user)
  - Description
  - Timestamp
  - Status: Open/In Progress/Resolved
  - Priority: Low/Medium/High
- **Actions**:
  - View details
  - Assign to moderator
  - Resolve
  - Dismiss

**Report Details Modal**:
- **Full Report**: Complete information
- **Evidence**: Screenshots, links
- **Related Items**: Connected reports
- **Resolution Form**:
  - Resolution type
  - Notes
  - Actions taken
  - Submit resolution

**Statistics**:
- **Open Reports**: Count
- **Resolved Today**: Count
- **Average Resolution Time**: Display
- **Report Types**: Pie chart

#### Features
- Report categorization
- Priority assignment
- Resolution tracking
- Evidence management
- Statistics dashboard

---

## 5. Standalone Pages

### 5.1 Manifesto

**File**: `manifesto.html` or `src/pages/Manifesto.tsx`  
**Route**: `/manifesto`  
**Purpose**: Platform principles and vision

#### Contents

**Header**:
- **Title**: "The BitNexus Manifesto"
- **Subtitle**: "Our Core Principles"

**6 Core Principles**:
1. **Decentralization**: Power to the people
2. **Transparency**: Open and honest operations
3. **Financial Freedom**: Enable true independence
4. **Innovation**: Cutting-edge technology
5. **Community**: Strong network support
6. **Integrity**: Ethical business practices

Each principle includes:
- Icon
- Title
- Description
- Examples

**Call to Action**:
- **Join Button**: Link to registration
- **Learn More**: Link to docs

#### Features
- Principle explanations
- Visual design
- Call to action
- Consistent branding

---

### 5.2 Docs

**File**: `docs.html` or `src/pages/Docs.tsx`  
**Route**: `/docs`  
**Purpose**: Platform documentation

#### Contents

**Navigation Sidebar**:
- Getting Started
- Core Features
- API Reference
- Guides & Tutorials
- NXC Creditsomics
- Security & Audits
- FAQs
- Support

**Content Sections**:
- **Getting Started**: Setup guide
- **Core Features**: Feature documentation
- **API Reference**: Technical docs
- **Guides**: Step-by-step tutorials
- **Tokenomics**: NXC credits details
- **Security**: Security measures
- **FAQs**: Common questions
- **Support**: Contact information

#### Features
- Search functionality
- Table of contents
- Code examples
- Interactive demos
- Version information

---

## 6. Layout & Navigation

**File**: `src/components/Layout.tsx`  
**Purpose**: Main application layout with sidebar and header

#### Contents

**Sidebar Navigation**:
- **Main Navigation**:
  - Dashboard
  - Marketplace
  - Earn
  - Alliance
  - Credits Shop
  - Academy
  - Goals
  - Content Generator
- **Social & Performance**:
  - Chat
  - Friends
  - Affiliate Manager
- **Administration** (if admin):
  - Vetting
  - Users
  - Reports
- **AI Command**: NexusHub button
- **Profile Settings**: Profile link

**Mobile Header**:
- **Hamburger Menu**: Toggle sidebar
- **BitNexus Logo**: Centered
- **Cart Icon**: With item count badge
- **Profile Avatar**: Click to open profile

**Features**:
- Responsive design
- Active route highlighting
- Collapsible sidebar
- Mobile optimization
- Cart badge integration

---

## 7. Components

### 7.1 ProductDetailDrawer

**File**: `src/components/ProductDetailDrawer.tsx`  
**Purpose**: Product details modal with tabs

#### Contents

**Drawer Design**:
- **Desktop**: Slide-over from right (600px width)
- **Mobile**: Full-screen overlay
- **Backdrop**: Dark overlay with blur

**Header**:
- **Title**: "Product Details"
- **Close Button**: X icon

**Product Image**:
- **Large Display**: Full width
- **Category Badge**: Overlay
- **Price Badge**: Overlay

**Product Info**:
- **Name**: Large, bold
- **Tags**: Badge display
- **Commission Badge**: Green highlight
- **Status Badge**: Active/Pending

**Tabs**:
1. **Overview**: Description, earning potential
2. **Marketing Assets**: Banners, templates
3. **Affiliate Link**: Link generation, QR code

**Tab Content**:
- **Overview**: Full description, calculators
- **Marketing Assets**: Image grid, downloads
- **Affiliate Link**: Generator, copy, QR code

#### Features
- Responsive design
- Tab navigation
- Link generation
- QR code display
- Asset downloads

---

### 7.2 ProductUploadForm

**File**: `src/components/ProductUploadForm.tsx`  
**Purpose**: Product submission form

#### Contents

**Modal Design**:
- **Centered Modal**: Max width 2xl
- **Backdrop**: Dark overlay
- **Scrollable**: Long form support

**Form Fields**:
- **Product Name**: Text input (required)
- **Description**: Textarea (required)
- **Category**: Dropdown (required)
- **Price**: Number input (required)
- **Commission %**: Number input (required, 1-100)
- **Image URL**: URL input (optional)
- **Tags**: Multi-select buttons

**Validation**:
- **Real-time**: Error messages
- **Required Fields**: Marked with *
- **Error Display**: Red text below fields

**Submission Info**:
- **Fee Notice**: 25 NXC creditss
- **Review Process**: Explanation
- **Terms**: Acceptance required

**Actions**:
- **Cancel Button**: Close modal
- **Submit Button**: Loading state

#### Features
- Form validation
- Tag selection
- Image URL input
- Fee information
- Loading states

---

## 8. Design System

### Colors

**Primary Colors**:
- **Purple**: `#7c3aed` (Nexus Purple)
- **Cyan**: `#06b6d4` (Tech Cyan)
- **Green**: `#10b981` (Signal Green)
- **Gold**: `#fbbf24` (Wealth Gold)

**Backgrounds**:
- **Deep**: `#030712` (Main background)
- **Card**: `#111827` (Card background)

**Text**:
- **Primary**: White (`#ffffff`)
- **Secondary**: Gray (`#9ca3af`)
- **Muted**: Dark gray (`#6b7280`)

### Typography

**Fonts**:
- **Display**: Space Grotesk (headings)
- **Futuristic**: Orbitron (special text)
- **Body**: Inter (default)

**Sizes**:
- **XL**: 3xl (30px)
- **LG**: 2xl (24px)
- **MD**: xl (20px)
- **Base**: 16px
- **SM**: 14px
- **XS**: 12px

### Components

**Glass Cards**:
- Background: `bg-white/5`
- Border: `border-white/5`
- Backdrop blur: `backdrop-blur-md`
- Rounded: `rounded-3xl` or `rounded-[2rem]`

**Buttons**:
- **Primary**: Purple gradient with shadow
- **Secondary**: White/5 background with border
- **Danger**: Red background
- **Hover**: Scale transform

**Badges**:
- Small, high-visibility
- Rounded: `rounded-full` or `rounded-lg`
- Border: `border-white/10`

### Spacing

**Padding**:
- **Cards**: `p-6` or `p-8`
- **Sections**: `p-4` to `p-8`

**Gaps**:
- **Grid**: `gap-4`, `gap-6`, `gap-8`
- **Flex**: `gap-2`, `gap-4`, `gap-6`

### Responsive Breakpoints

- **Mobile**: `<640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `>1024px`

### Animations

- **Hover**: Scale, color transitions
- **Loading**: Spinner animations
- **Progress**: Fill animations
- **Transitions**: `transition-all` (300ms)

---

## Summary

This documentation covers all 20+ pages and components in the BitNexus platform. Each page is designed with:

- **Consistent Design**: Glassmorphism, gradients, purple/cyan theme
- **User Experience**: Intuitive navigation, clear actions
- **Responsive Design**: Works on all devices
- **Real-time Features**: Live data, updates, interactions
- **Financial Focus**: Emphasis on earnings and financial freedom

The platform provides a complete ecosystem for affiliate marketing, network building, and passive income generation, all powered by AI and blockchain technology.

---

**Document Version**: 2.0  
**Last Updated**: January 2026  
**Maintained By**: BitNexus Development Team




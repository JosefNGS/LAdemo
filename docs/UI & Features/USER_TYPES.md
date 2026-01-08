# BitNexus Platform - User Types Documentation

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Complete User Type Reference

---

## Table of Contents

1. [Overview](#overview)
2. [User Tiers](#user-tiers)
3. [User Roles](#user-roles)
4. [Alliance Roles](#alliance-roles)
5. [User Status Types](#user-status-types)
6. [Special Designations](#special-designations)
7. [Subscription Tiers](#subscription-tiers)
8. [User States](#user-states)
9. [Permission Matrix](#permission-matrix)
10. [User Type Progression](#user-type-progression)

---

## Overview

BitNexus platform supports multiple user classification systems that determine access levels, permissions, commission rates, and feature availability. This document provides a comprehensive reference for all user types, roles, tiers, and designations used throughout the platform.

---

## User Tiers

User tiers are based on network performance, earnings, and activity level. Higher tiers unlock better commission rates and additional features.

### Bronze Tier
- **Description**: Entry-level tier for new users
- **Requirements**: Default tier for new accounts
- **Features**:
  - Basic marketplace access
  - Standard commission rates
  - Basic analytics
  - Community access
- **Commission Rate**: Base rate (varies by product)
- **Network Requirements**: 0-10 members
- **Visual Indicator**: Orange badge with bronze styling

### Silver Tier
- **Description**: Active affiliate tier
- **Requirements**: 
  - Network volume: $10,000+
  - Minimum 10-20 direct referrals
  - Active participation
- **Features**:
  - Enhanced commission rates (+5-10%)
  - Advanced analytics
  - Alliance creation access
  - Priority support
- **Commission Rate**: Base rate + 5-10%
- **Network Requirements**: 10-50 members
- **Visual Indicator**: Gray badge with silver styling
- **Example**: "Rank: Silver IV" (sub-rankings within tier)

### Gold Tier
- **Description**: High-performing affiliate tier
- **Requirements**:
  - Network volume: $25,000+
  - Minimum 20-50 direct referrals
  - Consistent monthly earnings
- **Features**:
  - Premium commission rates (+10-15%)
  - Full analytics suite
  - Alliance leadership capabilities
  - Advanced content generation
  - Bot staking access
- **Commission Rate**: Base rate + 10-15%
- **Network Requirements**: 50-150 members
- **Visual Indicator**: Yellow badge with gold styling

### Platinum Tier
- **Description**: Elite affiliate tier
- **Requirements**:
  - Network volume: $50,000+
  - Minimum 50+ direct referrals
  - High monthly earnings ($5K+/month)
  - Large network (150+ members)
- **Features**:
  - Maximum commission rates (+15-25%)
  - Premium analytics and reporting
  - Alliance leadership with advanced tools
  - Unlimited AI credits
  - Priority feature access
  - White-label options
- **Commission Rate**: Base rate + 15-25%
- **Network Requirements**: 150+ members
- **Visual Indicator**: Purple badge with platinum styling

### Diamond Tier (Future)
- **Description**: Highest tier (mentioned in database schema)
- **Requirements**: TBD
- **Features**: TBD
- **Visual Indicator**: TBD

---

## User Roles

User roles determine administrative and moderation capabilities on the platform.

### Standard User
- **Description**: Regular platform user with full access to user features
- **Access**:
  - All user pages (Dashboard, Marketplace, Alliance, etc.)
  - Full user functionality
  - Community features
- **Restrictions**:
  - No admin access
  - No moderation capabilities
  - No user management
- **Default Role**: All new users start as Standard Users

### Admin
- **Description**: Platform administrator with user management capabilities
- **Access**:
  - All user pages
  - Admin pages (Vetting, Users, Reports)
  - User management
  - Product vetting
- **Permissions**:
  - User Management
  - Product Vetting
  - Reports Moderation
  - Analytics Access
- **Restrictions**:
  - Cannot modify system settings (Super Admin only)
  - Limited to assigned permissions
- **Visual Indicator**: Admin badge in navigation

### Moderator
- **Description**: Content and community moderator
- **Access**:
  - All user pages
  - Reports page
  - Content moderation tools
- **Permissions**:
  - Reports Moderation
  - Content Moderation
  - Community management
- **Restrictions**:
  - No user management
  - No product vetting
  - No system settings access
- **Visual Indicator**: Moderator badge

### Super Admin
- **Description**: Highest administrative role with full platform access
- **Access**:
  - All user pages
  - All admin pages
  - System settings
  - Complete platform control
- **Permissions**:
  - All Permissions (unrestricted)
  - User Management
  - Product Vetting
  - Reports Moderation
  - Content Moderation
  - Analytics Access
  - System Settings
- **Restrictions**: None
- **Visual Indicator**: Super Admin badge

---

## Alliance Roles

Alliance roles define a user's position and responsibilities within an alliance (group of affiliates).

### Alliance Member
- **Description**: Regular member of an alliance
- **Access**:
  - View alliance information
  - Participate in alliance activities
  - Access alliance resources
  - View alliance statistics
- **Responsibilities**:
  - Contribute to alliance goals
  - Follow alliance guidelines
  - Participate in alliance activities
- **Permissions**:
  - View alliance dashboard
  - Access alliance resources
  - Participate in discussions
- **Restrictions**:
  - Cannot manage alliance settings
  - Cannot invite/remove members
  - Cannot modify alliance structure

### Co-Leader
- **Description**: Secondary leadership role in an alliance
- **Access**:
  - All member permissions
  - Member management (limited)
  - Alliance settings (limited)
- **Responsibilities**:
  - Assist alliance leader
  - Manage members (with approval)
  - Moderate alliance activities
- **Permissions**:
  - View and manage members
  - Moderate content
  - Access analytics
- **Restrictions**:
  - Cannot delete alliance
  - Cannot change core settings
  - Requires leader approval for major changes

### Alliance Leader/Admin
- **Description**: Primary leader and administrator of an alliance
- **Access**:
  - Full alliance management
  - All member and co-leader permissions
  - Complete alliance control
- **Responsibilities**:
  - Manage alliance members
  - Set alliance goals
  - Configure alliance settings
  - Invite/remove members
  - Access advanced analytics
- **Permissions**:
  - Full member management
  - Alliance settings control
  - Recruitment campaigns
  - Analytics and reporting
  - Commission sharing configuration
- **Requirements**:
  - Minimum Silver tier to create alliance
  - Active account status
- **Restrictions**:
  - Must maintain minimum tier level
  - Subject to platform policies

---

## User Status Types

User status indicates the current state of a user's account.

### Active
- **Description**: Account is active and operational
- **Access**: Full platform access based on tier and role
- **Features**: All features available
- **Visual Indicator**: Green status badge

### Inactive
- **Description**: Account is temporarily inactive
- **Access**: Limited access (read-only)
- **Features**: Can view but cannot perform actions
- **Visual Indicator**: Gray status badge
- **Common Causes**: 
  - User-initiated pause
  - Payment issues
  - Account review

### Suspended
- **Description**: Account is suspended due to policy violations
- **Access**: No platform access
- **Features**: Account locked
- **Visual Indicator**: Red status badge
- **Common Causes**:
  - Policy violations
  - Fraudulent activity
  - Terms of service violations

### Online
- **Description**: User is currently active on the platform
- **Access**: Full access
- **Features**: Real-time features available
- **Visual Indicator**: Green dot indicator
- **Context**: Used in chat, friends list, and user browsing

### Offline
- **Description**: User is not currently active
- **Access**: N/A (status indicator only)
- **Features**: N/A
- **Visual Indicator**: Gray/no indicator
- **Context**: Used in chat, friends list, and user browsing

---

## Special Designations

Special designations recognize exceptional achievements or legacy status.

### Prime Core Member
- **Description**: Legacy or founding member designation
- **Requirements**: 
  - Early platform adoption
  - Founding member status
  - Special recognition
- **Features**:
  - Legacy benefits
  - Special badge/recognition
  - Priority access
- **Visual Indicator**: Special badge in profile
- **Example**: "Prime Core Member • Dec 2024"

### Master Affiliate
- **Description**: Recognition for exceptional affiliate performance
- **Requirements**:
  - High earnings ($10K+/month)
  - Large network (200+ members)
  - Consistent top performance
- **Features**:
  - Special recognition
  - Master affiliate badge
  - Exclusive benefits
- **Visual Indicator**: "MASTER AFFILIATE" badge
- **Example**: Displayed in profile alongside tier

### Legacy Node Master
- **Description**: Recognition for early bot/node participation
- **Requirements**:
  - Early MEV/XAB bot adoption
  - Significant node contributions
  - Legacy status
- **Features**:
  - Legacy node benefits
  - Special recognition
  - Priority node access
- **Visual Indicator**: "LEGACY NODE" badge
- **Example**: Displayed in profile

---

## Subscription Tiers

Subscription tiers determine feature access and service levels (from revenue plan).

### Free Tier
- **Description**: Basic free access
- **Features**:
  - Limited marketplace access
  - Basic content generation
  - Limited AI credits (10/month)
  - Community access
  - Email support
- **Restrictions**:
  - No bot staking
  - Limited analytics
  - Standard commission rates
- **Cost**: Free

### Starter Plan
- **Description**: Entry-level paid subscription
- **Features**:
  - Basic affiliate link tracking
  - Standard analytics
  - Community access
  - 10 AI content generations/month
  - Email support
- **Cost**: $29/month
- **Target**: New affiliates

### Growth Plan
- **Description**: Most popular subscription tier
- **Features**:
  - Advanced analytics & reporting
  - Unlimited AI content generation
  - Priority support
  - Advanced link management
  - A/B testing tools
  - 50% discount on Academy courses
- **Cost**: $79/month
- **Target**: Active affiliates

### Pro Plan
- **Description**: Professional tier with advanced features
- **Features**:
  - Everything in Growth
  - White-label affiliate links
  - API access
  - Custom integrations
  - Dedicated account manager
  - Free Academy courses
- **Cost**: $149/month
- **Target**: Power users and agencies

### Enterprise Plan
- **Description**: Custom enterprise solution
- **Features**:
  - Everything in Pro
  - Custom features
  - Dedicated support team
  - Custom integrations
  - Volume discounts
  - SLA guarantees
- **Cost**: Custom pricing
- **Target**: Large organizations

---

## User States

User states indicate authentication and access level.

### Unauthenticated
- **Description**: User not logged in
- **Access**:
  - Landing page
  - Demo mode
  - Manifesto page
  - Documentation
- **Restrictions**:
  - Cannot access Dashboard
  - Cannot access Marketplace
  - Cannot perform user actions
- **Redirect**: Login page when accessing protected routes

### Authenticated
- **Description**: User is logged in
- **Access**:
  - All user pages
  - All user actions
  - Full platform features (based on tier/role)
- **Restrictions**:
  - Admin pages (unless admin role)
  - Tier-based feature restrictions
- **Default State**: After successful login

### Demo Mode
- **Description**: Guest exploration mode
- **Access**:
  - All pages (read-only)
  - View-only functionality
- **Restrictions**:
  - Cannot perform actions requiring account
  - Prompts to create account
  - Limited data persistence
- **Entry Point**: "Try Demo" button on landing page

---

## Permission Matrix

| Feature | Standard User | Admin | Moderator | Super Admin | Alliance Member | Alliance Leader |
|---------|--------------|------|-----------|-------------|------------------|-----------------|
| Dashboard Access | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Marketplace Access | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Product Creation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| User Management | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Product Vetting | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Content Moderation | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| Reports Access | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| System Settings | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Alliance Creation | ✅* | ✅* | ✅* | ✅* | ❌ | ✅ |
| Alliance Management | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Member Invitation | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

*Requires minimum Silver tier

---

## User Type Progression

### Typical User Journey

1. **New User Registration**
   - Status: Unauthenticated → Authenticated
   - Tier: Bronze (default)
   - Role: Standard User
   - Subscription: Free Tier

2. **Early Activity**
   - Tier: Bronze → Silver (at $10K volume)
   - Subscription: Free → Starter (optional)
   - Status: Active

3. **Growth Phase**
   - Tier: Silver → Gold (at $25K volume)
   - Subscription: Starter → Growth (optional)
   - Alliance: Can join or create alliance
   - Status: Active, Online

4. **Advanced Phase**
   - Tier: Gold → Platinum (at $50K volume)
   - Subscription: Growth → Pro (optional)
   - Alliance: Alliance Leader
   - Designations: Master Affiliate (if qualified)
   - Status: Active, Online

5. **Elite Phase**
   - Tier: Platinum (maintained)
   - Subscription: Pro or Enterprise
   - Alliance: Multiple alliances or large alliance
   - Designations: Master Affiliate, Legacy Node Master
   - Status: Active, Online

### Tier Progression Requirements

| From Tier | To Tier | Network Volume | Direct Referrals | Network Size | Monthly Earnings |
|-----------|---------|----------------|------------------|--------------|------------------|
| Bronze | Silver | $10,000+ | 10-20 | 10-50 | $500+ |
| Silver | Gold | $25,000+ | 20-50 | 50-150 | $2,000+ |
| Gold | Platinum | $50,000+ | 50+ | 150+ | $5,000+ |

### Role Progression

- **Standard User**: Default for all users
- **Admin/Moderator**: Assigned by Super Admin
- **Super Admin**: Assigned by platform owners
- **Alliance Roles**: Determined by alliance leader or tier requirements

---

## Notes

- **Multiple Classifications**: Users can have multiple classifications simultaneously (e.g., Platinum tier + Master Affiliate + Alliance Leader)
- **Tier Benefits**: Higher tiers unlock better commission rates, more features, and priority support
- **Role Permissions**: Roles determine administrative capabilities, independent of tier
- **Status Impact**: Account status affects all access regardless of tier or role
- **Subscription Independence**: Subscription tiers are separate from user tiers and provide additional features
- **Alliance Roles**: Alliance-specific roles are independent of platform roles

---

## Related Documentation

- `USER_FLOW_LOGIC.md` - Complete user journey mapping
- `REVENUE_PLAN.md` - Subscription tier details
- `BUSINESS_MODEL_CANVAS.md` - User type business context

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Maintained By**: BitNexus Development Team



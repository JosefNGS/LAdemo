# Discourse Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Discourse forum into the existing BitNexus system.

---

## Integration Strategy

### Phase 1: Discourse Setup
- Set up Discourse instance
- Configure basic settings
- Set up custom domain

### Phase 2: SSO Integration
- Configure SSO provider in Discourse
- Implement SSO endpoint in Phoenix/Elixir
- Test SSO authentication flow

### Phase 3: Theme Customization
- Install custom theme
- Configure branding (logo, colors)
- Customize layout

### Phase 4: User Synchronization
- Set up user sync mechanism
- Sync existing users
- Test user updates

---

## SSO Integration

### Discourse SSO Configuration

**Settings**:
- Enable SSO provider
- Configure SSO URL
- Set SSO secret key

### Phoenix/Elixir SSO Endpoint

**Endpoint**: `POST /api/v1/discourse/sso`

**Responsibilities**:
- Validate user session
- Generate SSO payload
- Sign payload with secret
- Redirect to Discourse

---

## User Synchronization

### Sync Mechanism

**Pattern**: Periodic sync or event-driven

**Flow**:
1. User created/updated in main platform
2. Sync event triggered
3. User data sent to Discourse API
4. Discourse user created/updated

---

## Theme Integration

### Custom Theme

**Location**: `backend/discourse/themes/`

**Configuration**:
- Logo and branding
- Color scheme
- Layout customization

---

**This guide focuses on Discourse integration. For related services, see individual service documentation.**

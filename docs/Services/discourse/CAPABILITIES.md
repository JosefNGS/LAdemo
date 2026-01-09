# Discourse Service Capabilities

**Last Updated**: January 2026  
**Status**: Planned Community Forum Service

## Overview
Discourse is the **community forum platform** for BitNexus. It provides discussion forums, user engagement, and community features.

## What Discourse Can Manage
- **Community Forums**:
  - Discussion categories and topics
  - User posts and replies
  - Community moderation
  - User reputation and badges
- **User Management**:
  - Forum user accounts
  - User profiles and avatars
  - User activity tracking
  - User permissions and roles
- **Content Management**:
  - Forum categories and topics
  - Post moderation
  - Content search and discovery
  - Content archiving

## What Discourse Should NOT Manage
- ❌ Core platform authentication (SSO integration only)
- ❌ Business logic (owned by **Elixir services**)
- ❌ Payment processing (owned by **payment services**)
- ❌ Product marketplace (owned by **main platform**)

## Integrations
- **Phoenix/Elixir**: SSO integration for user authentication
- **PostgreSQL**: User data synchronization
- **Main Platform**: User sync and branding

## Typical Use Cases
- Community discussions and support
- User engagement and feedback
- Knowledge base and documentation
- Community-driven content moderation

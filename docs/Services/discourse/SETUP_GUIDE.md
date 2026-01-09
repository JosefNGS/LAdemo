# Discourse Setup Guide
## Quick Start Guide for Discourse Forum

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Setup Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Quick Start

### Prerequisites

- **Discourse Instance**: Hosted Discourse or self-hosted
- **Domain**: Custom domain for forum
- **SSO Provider**: Phoenix/Elixir SSO endpoint

### Setup Steps

1. **Install Discourse**:
   - Use Discourse hosting or Docker installation
   - Configure domain and SSL

2. **Configure SSO**:
   - Enable SSO provider in Discourse settings
   - Configure SSO URL and secret

3. **Customize Theme**:
   - Install custom theme
   - Configure branding

4. **Test Integration**:
   - Test SSO login flow
   - Verify user synchronization

---

## Configuration

### SSO Settings

**Discourse Settings**:
- SSO URL: `https://your-platform.com/api/v1/discourse/sso`
- SSO Secret: Shared secret key

### Theme Settings

**Custom Theme**:
- Logo: BitNexus logo
- Colors: Brand colors
- Layout: Custom layout

---

## Troubleshooting

### SSO Not Working

**Check**:
1. SSO URL is correct
2. Secret key matches
3. User session is valid
4. Discourse logs for errors

---

**This setup guide gets you started with Discourse. For detailed implementation, see IMPLEMENTATION_GUIDE.md.**

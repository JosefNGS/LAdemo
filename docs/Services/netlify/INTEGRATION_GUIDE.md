# Netlify Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating Netlify hosting and serverless functions into the existing BitNexus system.

---

## Integration Strategy

### Current Integration

**Netlify is already integrated**:
- ✅ Frontend deployed to Netlify
- ✅ Serverless functions deployed
- ✅ PostgreSQL integration via functions
- ✅ CI/CD from GitHub

### Migration Strategy

**Planned Migration**:
- Phase 1: Coexistence (Netlify + AWS)
- Phase 2: Gradual migration of functions
- Phase 3: Complete migration to AWS

---

## Frontend Integration

### Static Site Deployment

**Build Process**:
- `npm run build` creates `frontend/dist/`
- Netlify deploys `dist/` directory
- SPA routing via `_redirects` file

---

## Serverless Functions Integration

### Function Deployment

**Location**: `backend/netlify/functions/`

**Functions**:
- `submit-email.js` - Email collection
- `submit-email-postgresql.js` - PostgreSQL integration

---

## Database Integration

### PostgreSQL Connection

**Pattern**: Serverless functions use PostgreSQL client

**Configuration**:
- Environment variables in Netlify dashboard
- `POSTGRESQL_URL` and `POSTGRESQL_ANON_KEY`

---

**This guide focuses on Netlify integration. For related services, see individual service documentation.**

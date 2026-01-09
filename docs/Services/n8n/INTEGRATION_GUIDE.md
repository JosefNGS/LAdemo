# n8n Integration Guide
## Integration with Existing BitNexus System

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Integration Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This guide provides detailed instructions for integrating n8n automation service into the existing BitNexus system.

---

## Integration Strategy

### Phase 1: n8n Setup
- Set up n8n instance
- Configure basic settings
- Set up authentication

### Phase 2: Workflow Creation
- Create initial workflows
- Configure integrations
- Test workflows

### Phase 3: BitNexus Integration
- Set up webhook endpoints in Phoenix
- Create workflows that call BitNexus APIs
- Test end-to-end flows

---

## Phoenix/Elixir Integration

### Webhook Endpoints

**Pattern**: Phoenix exposes webhook endpoints for n8n

**Endpoints**:
- `POST /api/v1/webhooks/n8n/email-submitted`
- `POST /api/v1/webhooks/n8n/user-registered`
- `POST /api/v1/webhooks/n8n/transaction-completed`

---

## Workflow Examples

### Email Submission Workflow

**Trigger**: Email submitted via landing page
**Actions**:
1. Save to PostgreSQL
2. Send notification to Discord
3. Add to CRM system

---

**This guide focuses on n8n integration. For related services, see individual service documentation.**

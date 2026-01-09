# n8n Service Capabilities

**Last Updated**: January 2026  
**Status**: Planned Automation Layer

## Overview
n8n is the **automation and orchestration** layer. It connects BitNexus to external services and runs repeatable workflows.

## What n8n Can Manage
- **Workflow Automation**:
  - Lead capture → CRM sync
  - Email submission → PostgreSQL → notification to Discord/Slack
  - Affiliate events → reporting pipelines
- **Integrations**:
  - PostgreSQL (reads/writes via environment-configured connections)
  - Gemini AI (content generation, analysis)
  - Payment providers and external APIs
- **Scheduling & Triggers**:
  - Time-based jobs (cron)
  - Webhook-based workflows
  - Event-driven flows from BitNexus APIs

## What n8n Should NOT Manage
- ❌ Core business logic that must be versioned and tested like code (keep in **Elixir/Go**)
- ❌ Security-critical logic (auth, permissions) without review
- ❌ Direct UI behavior or routing (owned by **frontend/Phoenix**)

## Integrations
- **Phoenix / Elixir**: expose webhooks or API endpoints that n8n calls
- **PostgreSQL**: store workflow outputs and logs
- **Netlify / AWS**: deployment of webhook endpoints and static UI

## Typical Use Cases
- Syncing BitNexus data into CRM and marketing tools
- Sending notification flows for key events (KPI thresholds, big deals)
- Running enrichment or analysis jobs on investor/affiliate data


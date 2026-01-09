# n8n Service Architecture
## System Architecture for n8n Automation

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for n8n automation service integration into the BitNexus platform.

---

## System Architecture

### n8n Integration Architecture

```
┌─────────────────────────────────────────────────────────┐
│              n8n Automation Service                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Workflow Engine                           │   │
│  │  • Workflow execution                            │   │
│  │  • Node processing                                │   │
│  │  • Error handling                                 │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Integration Layer                         │   │
│  │  • PostgreSQL connector                           │   │
│  │  • Gemini AI connector                            │   │
│  │  • Payment gateway connectors                     │   │
│  │  • External API connectors                        │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         External Services                         │   │
│  │  • PostgreSQL database                            │   │
│  │  • Gemini AI                                      │   │
│  │  • Payment providers                              │   │
│  │  • BitNexus APIs (Phoenix/Elixir)                 │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Integration Points

### Phoenix/Elixir Integration

**Pattern**: n8n calls BitNexus APIs via webhooks

**Flow**:
1. Event occurs in BitNexus platform
2. Webhook triggered
3. n8n workflow executes
4. Workflow calls external services or BitNexus APIs

---

**This architecture focuses on n8n integration. For related services, see individual service documentation.**

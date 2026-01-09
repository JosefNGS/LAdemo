# Netlify Service Architecture
## System Architecture for Netlify Hosting

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for Netlify hosting and serverless functions in the BitNexus platform (alpha phase).

---

## System Architecture

### Netlify Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Netlify Platform (Alpha Phase)             │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Static Site Hosting                       │   │
│  │  • Frontend React app                            │   │
│  │  • CDN distribution                              │   │
│  │  • SSL certificates                              │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Serverless Functions                       │   │
│  │  • submit-email.js                               │   │
│  │  • submit-email-postgresql.js                    │   │
│  │  • API endpoints                                 │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         External Services                         │   │
│  │  • PostgreSQL database                            │   │
│  │  • Email services                                 │   │
│  │  • External APIs                                  │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Migration Architecture (Planned)

### AWS Migration Target

```
┌─────────────────────────────────────────────────────────┐
│              AWS Infrastructure (Planned)                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         CloudFront CDN                           │   │
│  │  • Static assets                                 │   │
│  │  • Global distribution                          │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Application Servers                      │   │
│  │  • EC2/ECS for Phoenix/Elixir                    │   │
│  │  • Load balancer                                 │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Serverless Functions                      │   │
│  │  • Lambda functions                              │   │
│  │  • API Gateway                                   │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Database                                  │   │
│  │  • RDS PostgreSQL                                │   │
│  │  • Vector database (planned)                     │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

**This architecture focuses on Netlify (alpha phase) and planned AWS migration. For related services, see individual service documentation.**

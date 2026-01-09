# Discourse Service Architecture
## System Architecture for Discourse Forum

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Architecture Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Overview

This document describes the architecture for Discourse forum integration into the BitNexus platform.

---

## System Architecture

### Discourse Integration Architecture

```
┌─────────────────────────────────────────────────────────┐
│              BitNexus Platform                            │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Main Platform (Phoenix/Elixir)            │   │
│  │  • User authentication                             │   │
│  │  • User management                                 │   │
│  │  • SSO provider                                    │   │
│  └───────────────────────────────────────────────────┘   │
│              │                                           │
│              │ SSO Integration                           │
│              ▼                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │         Discourse Forum                           │   │
│  │  • Forum discussions                              │   │
│  │  • User accounts (via SSO)                        │   │
│  │  • Custom theme                                   │   │
│  │  • Plugins                                        │   │
│  └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Integration Points

### SSO Integration

**Pattern**: Discourse uses SSO for authentication

**Flow**:
1. User clicks forum link in main platform
2. Main platform generates SSO token
3. Discourse validates token
4. User logged into Discourse automatically

### User Synchronization

**Pattern**: Sync users between platforms

**Flow**:
1. User created in main platform
2. User synced to Discourse
3. User updates reflected in both platforms

---

**This architecture focuses on Discourse integration. For related services, see individual service documentation.**

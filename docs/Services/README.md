# Services Documentation

## Overview
This folder contains service-specific documentation for all backend services in the BitNexus platform.

## Services

Each service has its own folder with comprehensive documentation:

- **admin/** - Admin View & Task Management service
- **discourse/** - Discourse forum service
- **elixir/** - Elixir backend service
- **erlang-ledger/** - Erlang/Elixir blockchain ledger service
- **github/** - GitHub version control service
- **golang-api/** - Golang API service
- **n8n/** - n8n automation service
- **netlify/** - Netlify deployment service (⚠️ ALPHA PHASE - AWS migration planned)
- **phoenix/** - Phoenix web framework service
- **postgresql/** - PostgreSQL database service
- **supabase/** - Supabase service (legacy, migrating to PostgreSQL)

## Standard Documentation Structure

Each service folder contains:
- **README.md** - Service overview and documentation index
- **CHANGELOG.md** - Service-specific changelog
- **SERVICE_RULES.md** - Service-specific rules and requirements
- **CAPABILITIES.md** - What the service can and cannot manage
- **ARCHITECTURE.md** - Service architecture documentation
- **INTEGRATION_GUIDE.md** - Integration guide for other services
- **SETUP_GUIDE.md** - Setup and configuration guide
- **IMPLEMENTATION_GUIDE.md** - Implementation guide

## Purpose

This folder houses all service-specific documentation to ensure clear understanding of each service's responsibilities, capabilities, and integration points.

## Maintenance

- All changes must be logged in `CHANGELOG.md`
- Service documentation should be kept up-to-date with code changes
- Service rules must be followed when working with each service
- Capabilities documentation should reflect current service functionality

---

**Last Updated**: January 2026

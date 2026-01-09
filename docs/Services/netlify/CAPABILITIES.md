# Netlify Service Capabilities

**Last Updated**: January 2026  
**Status**: Alpha Phase - Temporary Hosting Solution

## Overview
Netlify is the **current hosting platform** for BitNexus (alpha phase). It provides static site hosting, serverless functions, and CI/CD. Migration to AWS servers is planned.

## What Netlify Can Manage
- **Static Site Hosting**:
  - Frontend React application deployment
  - CDN distribution
  - SSL certificates
  - Custom domains
- **Serverless Functions**:
  - Backend API endpoints (Node.js)
  - Email submission functions
  - API integrations
  - Environment variable management
- **CI/CD**:
  - Automatic deployments from Git
  - Branch previews
  - Build process automation
  - Deployment rollback

## What Netlify Should NOT Manage
- ❌ Core business logic (migrate to **Elixir services**)
- ❌ Database operations (use **PostgreSQL** directly)
- ❌ Authentication logic (migrate to **Phoenix/Elixir auth**)
- ❌ Long-running processes (migrate to **AWS**)

## Integrations
- **Frontend**: Static site deployment
- **PostgreSQL**: Serverless functions connect to database
- **GitHub**: CI/CD integration
- **Future AWS**: Planned migration target

## Typical Use Cases
- Hosting landing page and React app
- Email collection via serverless functions
- Quick API endpoints for integrations
- Development and alpha phase hosting

## Migration Plan

**Planned Migration to AWS**:
- EC2/ECS for application servers
- Lambda for serverless functions
- CloudFront for CDN
- RDS for PostgreSQL
- Better control and scalability

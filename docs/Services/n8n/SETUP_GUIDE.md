# n8n Setup Guide
## Quick Start Guide for n8n Automation

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Setup Documentation

**Service Owner**: Craig Martin (CTO)  
**Contact**: craig@nordicglobalsolutions.com

---

## Quick Start

### Prerequisites

- **n8n Instance**: Self-hosted or n8n Cloud
- **Docker** (if self-hosting)
- **PostgreSQL** (for workflow storage)

### Setup Steps

1. **Install n8n**:
   ```bash
   # Docker
   docker run -it --rm \
     --name n8n \
     -p 5678:5678 \
     n8nio/n8n
   ```

2. **Access n8n**:
   - Open browser to `http://localhost:5678`
   - Complete initial setup

3. **Configure Integrations**:
   - Set up PostgreSQL connection
   - Configure Gemini AI credentials
   - Add payment gateway credentials

4. **Create Workflows**:
   - Create initial workflows
   - Test workflows
   - Deploy workflows

---

## Configuration

### Environment Variables

**n8n Configuration**:
- `N8N_BASIC_AUTH_ACTIVE` - Enable basic auth
- `N8N_BASIC_AUTH_USER` - Username
- `N8N_BASIC_AUTH_PASSWORD` - Password
- `DB_TYPE` - Database type (postgresdb)
- `DB_POSTGRESDB_HOST` - PostgreSQL host
- `DB_POSTGRESDB_DATABASE` - Database name

---

## Troubleshooting

### Workflows Not Executing

**Check**:
1. n8n is running
2. Workflows are activated
3. Credentials are configured
4. Check n8n execution logs

---

**This setup guide gets you started with n8n. For detailed implementation, see IMPLEMENTATION_GUIDE.md.**

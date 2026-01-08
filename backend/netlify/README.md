# Netlify Serverless Functions

This directory contains Netlify serverless functions.

## Structure

- **`functions/`** - Serverless function files
  - `submit-email.js` - Email submission handler
  - `submit-email-airtable.js` - Airtable email submission
  - `submit-email-supabase.js` - Supabase email submission

## Configuration

- **Netlify Config**: `netlify.toml` (root level)
- **Functions Directory**: `backend/netlify/functions/`
- **Build Output**: `frontend/dist/`

## Documentation

- **Service Rules**: See `rules/services/netlify/rules.md` for Netlify service rules
- **Service Documentation**: See `docs/Services/netlify/` for complete service documentation
- **Framework Guides**: See `instructions/.agent-os/` for deployment and code standards

## CRITICAL Requirements

- ✅ **Functions in `backend/netlify/functions/`** - Correct location
- ✅ **Use environment variables** - Never hardcode secrets
- ✅ **Error handling** - Required in all functions
- ✅ **CTO approval** - Required for all deployments
- ✅ **README.md and CHANGELOG.md** - Required in this folder

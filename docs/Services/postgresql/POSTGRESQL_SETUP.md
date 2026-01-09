# PostgreSQL Setup Guide
## Database Integration for BitNexus

**Last Updated**: January 2026  
**Status**: Complete Integration Guide

---

## Overview

This guide explains how to set up and configure PostgreSQL as the database backend for BitNexus. PostgreSQL provides a PostgreSQL database with real-time capabilities, authentication, and storage.

---

## Why PostgreSQL?

- **Open Source**: Built on PostgreSQL
- **Generous Free Tier**: 500MB database, 2GB bandwidth
- **Real-time**: Built-in real-time subscriptions
- **Authentication**: Built-in auth system
- **API**: Auto-generated REST and GraphQL APIs
- **Storage**: File storage included
- **Dashboard**: Visual database management

---

## Step 1: Create PostgreSQL Project

1. **Sign Up/Login**:
   - Go to [PostgreSQL.com](https://PostgreSQL.com)
   - Sign up or log in to your account

2. **Create New Project**:
   - Click "New Project"
   - Enter project details:
     - **Name**: BitNexus (or your preferred name)
     - **Database Password**: Create a strong password (save it!)
     - **Region**: Choose closest to your users
     - **Pricing Plan**: Free tier is sufficient for start

3. **Wait for Provisioning**:
   - Project setup takes 1-2 minutes
   - You'll see a success message when ready

---

## Step 2: Create Database Tables

### Email Submissions Table

1. **Open SQL Editor**:
   - In PostgreSQL dashboard, click "SQL Editor" in left sidebar
   - Click "New Query"

2. **Run Migration**:
   ```sql
   -- Create email_submissions table
   CREATE TABLE IF NOT EXISTS email_submissions (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     source TEXT DEFAULT 'landing_page',
     status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected', 'active')),
     ip_address TEXT,
     user_agent TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create index on email for faster lookups
   CREATE INDEX IF NOT EXISTS idx_email_submissions_email ON email_submissions(email);

   -- Create index on status for filtering
   CREATE INDEX IF NOT EXISTS idx_email_submissions_status ON email_submissions(status);

   -- Create index on created_at for sorting
   CREATE INDEX IF NOT EXISTS idx_email_submissions_created_at ON email_submissions(created_at DESC);

   -- Enable Row Level Security (RLS)
   ALTER TABLE email_submissions ENABLE ROW LEVEL SECURITY;

   -- Create policy to allow inserts (for anonymous users)
   CREATE POLICY "Allow anonymous inserts" ON email_submissions
     FOR INSERT
     TO anon
     WITH CHECK (true);

   -- Create policy to allow service role to read all
   CREATE POLICY "Allow service role read" ON email_submissions
     FOR SELECT
     TO service_role
     USING (true);
   ```

3. **Click "Run"** to execute the SQL

### Additional Tables (Optional)

You can create additional tables for:
- User profiles
- Product listings
- Affiliate links
- Transactions
- Network relationships

---

## Step 3: Get API Credentials

1. **Go to Project Settings**:
   - Click "Settings" (gear icon) in left sidebar
   - Click "API" in settings menu

2. **Copy Credentials**:
   - **Project URL**: `https://xxxxx.PostgreSQL.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (keep secret!)

---

## Step 4: Configure Netlify

### Option A: Via Netlify Dashboard (Recommended)

1. **Go to Netlify Dashboard**:
   - Navigate to your site
   - Go to "Site settings" → "Environment variables"

2. **Add Variables**:
   ```
   PostgreSQL_URL=https://xxxxx.PostgreSQL.co
   PostgreSQL_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Save Changes**

### Option B: Via netlify.toml

Add to `netlify.toml`:
```toml
[build.environment]
  PostgreSQL_URL = "https://xxxxx.PostgreSQL.co"
  PostgreSQL_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Note**: Don't commit secrets to git! Use environment variables.

---

## Step 5: Install Dependencies

### For Netlify Functions

The PostgreSQL function requires the `@PostgreSQL/PostgreSQL-js` package:

```bash
npm install @PostgreSQL/PostgreSQL-js
```

This should be installed in your project root. Netlify will automatically bundle it with your functions.

---

## Step 6: Update Email Submission Function

1. **Rename Function** (optional):
   - Rename `netlify/functions/submit-email-PostgreSQL.js` to `netlify/functions/submit-email.js`
   - Or update the fetch URL in `index.html` to use `submit-email-PostgreSQL`

2. **Verify Function**:
   - The function is already configured to use PostgreSQL
   - It will automatically use environment variables

---

## Step 7: Test the Integration

### Local Testing

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Set Environment Variables Locally**:
   Create `.env` file in project root:
   ```
   PostgreSQL_URL=https://xxxxx.PostgreSQL.co
   PostgreSQL_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Run Locally**:
   ```bash
   netlify dev
   ```

4. **Test Form**:
   - Open `http://localhost:8888`
   - Submit test email
   - Check PostgreSQL dashboard → Table Editor → email_submissions

### Production Testing

1. **Deploy to Netlify**:
   ```bash
   netlify deploy --prod
   ```

2. **Test on Live Site**:
   - Submit test email from landing page
   - Check PostgreSQL dashboard to verify email was saved

---

## Step 8: Verify Data in PostgreSQL

1. **Open PostgreSQL Dashboard**:
   - Go to your project
   - Click "Table Editor" in left sidebar

2. **View email_submissions Table**:
   - You should see submitted emails
   - Check columns: email, source, status, created_at, etc.

3. **Query Data** (Optional):
   - Use SQL Editor to query:
   ```sql
   SELECT * FROM email_submissions 
   ORDER BY created_at DESC 
   LIMIT 10;
   ```

---

## Frontend Integration (Optional)

If you want to use PostgreSQL directly from the frontend:

1. **Add PostgreSQL Service**:
   - The service is already created at `src/services/PostgreSQLService.ts`
   - Initialize it in your app:

   ```typescript
   import { initPostgreSQL } from './services/PostgreSQLService';

   // In your app initialization
   await initPostgreSQL({
     url: 'https://xxxxx.PostgreSQL.co',
     anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
   });
   ```

2. **Use Service**:
   ```typescript
   import { saveEmailToPostgreSQL, checkEmailExists } from './services/PostgreSQLService';

   // Save email
   await saveEmailToPostgreSQL(email, {
     source: 'landing_page',
     ipAddress: '...',
     userAgent: '...'
   });

   // Check if exists
   const exists = await checkEmailExists(email);
   ```

**Note**: For security, it's recommended to use the Netlify function instead of direct frontend access.

---

## Security Best Practices

1. **Row Level Security (RLS)**:
   - Already enabled in the SQL migration
   - Only allows inserts from anonymous users
   - Service role can read all (for admin dashboard)

2. **API Keys**:
   - Never expose `service_role` key in frontend
   - Use `anon` key for public operations
   - Rotate keys if compromised

3. **Rate Limiting**:
   - Add rate limiting to prevent spam
   - Use PostgreSQL's built-in rate limiting or add custom logic

4. **Email Validation**:
   - Already implemented in the function
   - Consider adding email verification flow

---

## Troubleshooting

### Emails Not Saving

1. **Check Function Logs**:
   - Netlify Dashboard → Functions → View logs
   - Look for errors

2. **Verify Environment Variables**:
   - Ensure `PostgreSQL_URL` and `PostgreSQL_ANON_KEY` are set
   - Check for typos

3. **Check Database Permissions**:
   - Verify RLS policies allow inserts
   - Check table exists

4. **Test Connection**:
   ```sql
   -- In PostgreSQL SQL Editor
   SELECT * FROM email_submissions LIMIT 1;
   ```

### CORS Errors

- Function already includes CORS headers
- If issues persist, check Netlify function configuration

### Function Timeout

- Increase timeout in `netlify.toml`:
  ```toml
  [functions]
    submit-email.timeout = 10
  ```

---

## Next Steps

1. **Email Verification**: Add email verification flow
2. **Admin Dashboard**: Create admin panel to view submissions
3. **Analytics**: Track submission sources and conversion rates
4. **Automation**: Set up automated emails for new signups
5. **Additional Tables**: Create tables for users, products, etc.

---

## Resources

- [PostgreSQL Documentation](https://PostgreSQL.com/docs)
- [PostgreSQL JavaScript Client](https://PostgreSQL.com/docs/reference/javascript/introduction)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## Support

For issues:
1. Check PostgreSQL dashboard logs
2. Check Netlify function logs
3. Verify environment variables
4. Test SQL queries in PostgreSQL SQL Editor
5. Review PostgreSQL documentation

---

**Last Updated**: January 2026  
**Maintained By**: Development Team



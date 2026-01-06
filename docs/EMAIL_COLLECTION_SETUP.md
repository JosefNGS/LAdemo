# Email Collection Setup Guide
## Database Integration for Landing Page Email Signups

**Last Updated**: January 2026  
**Status**: Implementation Guide

---

## Overview

The landing page email collection form now saves emails to a database via a Netlify serverless function. This guide explains how to set up and configure the email storage system.

---

## Current Implementation

### Frontend (index.html)
- Email input field with validation
- Submit button with loading state
- Success/error message display
- Form validation before submission

### Backend (Netlify Function)
- **File**: `netlify/functions/submit-email.js`
- Validates email format
- Saves to database (configurable)
- Returns success/error responses
- Handles CORS

---

## Setup Options

### Option 1: Airtable (Recommended for Quick Setup)

**Pros**: Easy setup, visual interface, free tier available  
**Cons**: Rate limits on free tier

#### Steps:

1. **Create Airtable Base**:
   - Go to [Airtable.com](https://airtable.com)
   - Create a new base
   - Create a table called "Email Submissions"
   - Add fields:
     - `Email` (Email field)
     - `Source` (Single select: "Landing Page")
     - `Status` (Single select: "Pending", "Verified", "Rejected")
     - `Submitted At` (Date field)
     - `IP Address` (Text field)
     - `User Agent` (Long text field)

2. **Get API Credentials**:
   - Go to [Airtable API](https://airtable.com/api)
   - Select your base
   - Copy your Base ID
   - Get your API key from Account settings

3. **Configure Netlify**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add:
     - `AIRTABLE_API_KEY`: Your Airtable API key
     - `AIRTABLE_BASE_ID`: Your Base ID

4. **Update Function**:
   - Use `netlify/functions/submit-email-airtable.js`
   - Rename to `submit-email.js` or update the fetch URL in `index.html`

5. **Install Dependencies**:
   ```bash
   npm install airtable
   ```

---

### Option 2: Firebase Firestore

**Pros**: Free tier, real-time updates, scalable  
**Cons**: Requires Firebase project setup

#### Steps:

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create new project
   - Enable Firestore Database

2. **Get Credentials**:
   - Project Settings → Service Accounts
   - Generate new private key
   - Download JSON file

3. **Configure Netlify**:
   - Add environment variables:
     - `FIREBASE_PROJECT_ID`: Your project ID
     - `FIREBASE_PRIVATE_KEY`: Private key from JSON
     - `FIREBASE_CLIENT_EMAIL`: Client email from JSON

4. **Create Function**:
   ```javascript
   const admin = require('firebase-admin');
   
   if (!admin.apps.length) {
     admin.initializeApp({
       credential: admin.credential.cert({
         projectId: process.env.FIREBASE_PROJECT_ID,
         privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
         clientEmail: process.env.FIREBASE_CLIENT_EMAIL
       })
     });
   }
   
   const db = admin.firestore();
   
   exports.handler = async (event, context) => {
     // ... validation code ...
     
     await db.collection('emailSubmissions').add({
       email: email,
       source: 'landing_page',
       timestamp: admin.firestore.FieldValue.serverTimestamp(),
       status: 'pending'
     });
     
     // ... return success ...
   };
   ```

---

### Option 3: Supabase (Recommended)

**Pros**: Open source, PostgreSQL, generous free tier, real-time capabilities  
**Cons**: Requires database setup

#### Quick Setup:

1. **Follow the complete guide**: See `docs/SUPABASE_SETUP.md` for detailed instructions

2. **Quick Steps**:
   - Create project at [supabase.com](https://supabase.com)
   - Run SQL migration from `docs/supabase-migration.sql`
   - Get API credentials from Project Settings → API
   - Add environment variables to Netlify:
     - `SUPABASE_URL`: Your project URL
     - `SUPABASE_ANON_KEY`: Your anon key
   - Use `netlify/functions/submit-email-supabase.js` (or rename to `submit-email.js`)

3. **Install Dependencies**:
   ```bash
   npm install @supabase/supabase-js
   ```

**For complete setup instructions, see `docs/SUPABASE_SETUP.md`**

---

### Option 4: Simple JSON File (Development Only)

**Note**: Not recommended for production. Use only for testing.

The current `submit-email.js` function logs emails to console. For development, you can modify it to append to a JSON file, but this won't work on Netlify's serverless functions (read-only filesystem).

---

## Testing

### Local Testing

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Run Locally**:
   ```bash
   netlify dev
   ```

3. **Test Form**:
   - Open `http://localhost:8888`
   - Submit test email
   - Check function logs

### Production Testing

1. **Deploy to Netlify**:
   ```bash
   netlify deploy --prod
   ```

2. **Test on Live Site**:
   - Submit test email
   - Check database/console logs
   - Verify email was saved

---

## Environment Variables

Add these to Netlify Dashboard → Site Settings → Environment Variables:

### For Airtable:
```
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
```

### For Firebase:
```
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

### For Supabase:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
```

---

## Email Validation

The function validates:
- Email is not empty
- Email contains "@" symbol
- Email matches regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

---

## Security Considerations

1. **Rate Limiting**: Add rate limiting to prevent spam
2. **Email Verification**: Send verification email after signup
3. **Duplicate Prevention**: Check if email already exists
4. **Input Sanitization**: Already handled by validation
5. **CORS**: Configured for your domain only in production

---

## Next Steps

1. **Choose Database Solution**: Select one of the options above
2. **Set Up Database**: Create tables/collections
3. **Configure Environment Variables**: Add to Netlify
4. **Update Function**: Use appropriate function file
5. **Test**: Verify emails are being saved
6. **Monitor**: Set up alerts for new submissions

---

## Troubleshooting

### Emails Not Saving
- Check Netlify function logs
- Verify environment variables are set
- Check database permissions
- Verify API keys are correct

### CORS Errors
- Ensure function returns proper CORS headers
- Check domain is allowed

### Function Timeout
- Increase timeout in `netlify.toml`:
  ```toml
  [functions]
    submit-email.timeout = 10
  ```

---

## Support

For issues or questions:
- Check Netlify function logs
- Review database logs
- Test function locally with `netlify dev`
- Check environment variables

---

**Last Updated**: January 2026  
**Maintained By**: Development Team


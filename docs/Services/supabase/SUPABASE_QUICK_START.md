# Supabase Quick Start Guide
## Get Started in 5 Minutes

### Step 1: Create Supabase Project (2 min)
1. Go to [supabase.com](https://supabase.com) and sign up
2. Click "New Project"
3. Enter project name: `BitNexus`
4. Choose region and create project
5. Wait 1-2 minutes for provisioning

### Step 2: Create Database Table (1 min)
1. In Supabase dashboard, click "SQL Editor"
2. Click "New Query"
3. Copy and paste the SQL from `docs/supabase-migration.sql`
4. Click "Run"

### Step 3: Get API Keys (1 min)
1. Go to "Settings" → "API"
2. Copy:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 4: Configure Netlify (1 min)
1. Go to Netlify Dashboard → Your Site → Site Settings → Environment Variables
2. Add:
   - `SUPABASE_URL` = Your project URL
   - `SUPABASE_ANON_KEY` = Your anon key
3. Save

### Step 5: Install & Deploy
1. Install dependencies:
   ```bash
   npm install
   ```

2. Update email function (choose one):
   - Option A: Rename `netlify/functions/submit-email-supabase.js` to `netlify/functions/submit-email.js`
   - Option B: Update `index.html` to call `submit-email-supabase` instead

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Step 6: Test
1. Go to your live site
2. Submit an email via the landing page form
3. Check Supabase dashboard → Table Editor → `email_submissions`
4. You should see your test email!

---

## Troubleshooting

**Emails not saving?**
- Check Netlify function logs
- Verify environment variables are set correctly
- Check Supabase table exists

**Need more help?**
- See full guide: `docs/SUPABASE_SETUP.md`
- Check Supabase docs: [supabase.com/docs](https://supabase.com/docs)

---

**That's it!** Your Supabase integration is ready. 🚀


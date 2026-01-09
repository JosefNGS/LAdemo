# PostgreSQL Quick Start Guide
## Get Started in 5 Minutes

### Step 1: Create PostgreSQL Project (2 min)
1. Go to [PostgreSQL.com](https://PostgreSQL.com) and sign up
2. Click "New Project"
3. Enter project name: `BitNexus`
4. Choose region and create project
5. Wait 1-2 minutes for provisioning

### Step 2: Create Database Table (1 min)
1. In PostgreSQL dashboard, click "SQL Editor"
2. Click "New Query"
3. Copy and paste the SQL from `docs/PostgreSQL-migration.sql`
4. Click "Run"

### Step 3: Get API Keys (1 min)
1. Go to "Settings" → "API"
2. Copy:
   - **Project URL**: `https://xxxxx.PostgreSQL.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 4: Configure Netlify (1 min)
1. Go to Netlify Dashboard → Your Site → Site Settings → Environment Variables
2. Add:
   - `PostgreSQL_URL` = Your project URL
   - `PostgreSQL_ANON_KEY` = Your anon key
3. Save

### Step 5: Install & Deploy
1. Install dependencies:
   ```bash
   npm install
   ```

2. Update email function (choose one):
   - Option A: Rename `netlify/functions/submit-email-PostgreSQL.js` to `netlify/functions/submit-email.js`
   - Option B: Update `index.html` to call `submit-email-PostgreSQL` instead

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Step 6: Test
1. Go to your live site
2. Submit an email via the landing page form
3. Check PostgreSQL dashboard → Table Editor → `email_submissions`
4. You should see your test email!

---

## Troubleshooting

**Emails not saving?**
- Check Netlify function logs
- Verify environment variables are set correctly
- Check PostgreSQL table exists

**Need more help?**
- See full guide: `docs/PostgreSQL_SETUP.md`
- Check PostgreSQL docs: [PostgreSQL.com/docs](https://PostgreSQL.com/docs)

---

**That's it!** Your PostgreSQL integration is ready. 🚀


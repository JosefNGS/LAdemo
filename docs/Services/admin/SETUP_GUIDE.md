# Admin View & Task Management Setup Guide
## Quick Start Guide for Admin Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Setup Documentation

**Service Owner**: Josef Lindbom (COO & Development Vision Lead)  
**Contact**: josef@nordicglobalsolutions.com

---

## Quick Start

### Prerequisites

- **Frontend**: React application running
- **Development Server**: `frontend/server.js` running
- **PostgreSQL**: Database connection configured (or localStorage fallback)

### Access Admin View

1. **Start Development Server**:
   ```bash
   npm start
   # or
   node frontend/server.js
   ```

2. **Navigate to Admin View**:
   - Open browser to `http://localhost:8000`
   - Navigate to Admin View (or direct URL)

3. **Login**:
   - Username: `admin`
   - Password: `bnadmin`

4. **View Tasks**:
   - Click "Tasks" tab
   - Click "View Task Checklist" for any team member
   - Tasks load automatically from markdown files

---

## Setup Checklist

- [ ] Development server running
- [ ] PostgreSQL configured (or localStorage fallback)
- [ ] Markdown task files exist in `docs/Development/`
- [ ] Admin login credentials configured
- [ ] Auto-sync service enabled

---

## Configuration

### Task File Locations

**Required Files**:
- `docs/Development/JOSEF_TASKS.md`
- `docs/Development/CRAIG_TASKS.md`
- `docs/Development/JONNE_TASKS.md`
- `docs/Development/SVEIN_TASKS.md`
- `docs/Development/LEE_TASKS.md`
- `docs/Development/CORY_TASKS.md`

### Database Configuration

**PostgreSQL** (if available):
- Connection configured in `postgresqlService.ts`
- `team_tasks` table must exist

**LocalStorage** (fallback):
- Automatically used if PostgreSQL unavailable
- Data persists in browser localStorage

---

## Troubleshooting

### Tasks Not Loading

**Check**:
1. Development server is running
2. Markdown files exist in `docs/Development/`
3. File paths are correct
4. Browser console for errors

### Auto-Sync Not Working

**Check**:
1. AdminView is mounted
2. AutoSyncService is started
3. Database connection is working
4. Check browser console for sync errors

---

**This setup guide gets you started with Admin View. For detailed implementation, see IMPLEMENTATION_GUIDE.md.**

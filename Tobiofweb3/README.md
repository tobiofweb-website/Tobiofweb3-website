# tobiofweb3 — Hero Landing Page

A bold Web3-style hero landing page with newsletter signup and project showcase.

## Files

- `index.html` — Main landing page (hero, about, projects, CTA)
- `tobiofweb3.css` — Dark neon theme with responsive layout
- `script.js` — Newsletter form handler
- `server.js` — Express backend serving static files + POST /subscribe
- `web.jpg` — Avatar image

## Running the Server

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open http://localhost:3000 in your browser.

The server will serve all static files and handle newsletter signups.

## Production Deployment

Before uploading to production:

- [ ] Update social links if needed (X, Telegram, project URLs)
- [ ] Replace `web.jpg` with your actual avatar
- [ ] Configure `SMTP_*` environment variables for email notifications (optional)
- [ ] Set `PORT` environment variable if needed (defaults to 3000)

### Email Notifications (Optional)

To send email notifications when users sign up, set environment variables:

```bash
export SMTP_HOST=smtp.example.com
export SMTP_PORT=587
export SMTP_USER=your-email@example.com
export SMTP_PASS=your-password
export OWNER_EMAIL=notification@example.com
npm start
```

Or on Windows PowerShell:

```powershell
$env:SMTP_HOST = 'smtp.example.com'; $env:SMTP_PORT = '587'; $env:SMTP_USER = 'user@example.com'; $env:SMTP_PASS = 'password'; $env:OWNER_EMAIL = 'you@example.com'; npm start
```

## Signups

User signups are stored in `subscriptions.jsonl` (one JSON line per signup with email, timestamp, and IP).

For production, migrate to a proper database and add rate-limiting.

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JS
- **Backend**: Node.js, Express
- **Email**: Nodemailer (optional SMTP)

---

© 2026 tobiofweb3 — Dominate then rule in web3


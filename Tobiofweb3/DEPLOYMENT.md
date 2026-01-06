## Deployment Checklist

### Pre-upload
- [x] Fixed all file paths (using relative paths for images)
- [x] Created proper `index.html` (renamed from space-filled filename)
- [x] Updated footer with 2026 copyright
- [x] Fixed broken SVG markup (removed duplicate closing tags)
- [x] Server now serves static files + API
- [x] Newsletter form properly wired to `/subscribe` endpoint
- [x] Error handling on form submission
- [x] Created `.gitignore` for sensitive files

### Before Deployment
- [ ] Run `npm install` on target server
- [ ] Test form submission: http://localhost:3000 → click "Sign up"
- [ ] Verify `subscriptions.jsonl` is created with new entries
- [ ] (Optional) Configure SMTP env vars for email notifications
- [ ] Update project links if URLs change
- [ ] Replace `web.jpg` with your final avatar image

### Hosting Options
- Heroku, Railway, Render: Deploy with `npm start`
- AWS EC2, DigitalOcean: Run `npm install && npm start` on port 3000
- Vercel/Netlify: Use Express server on a function/lambda with static assets
- VPS: Use PM2 or systemd to manage the process

### Environment Variables for Production
```
PORT=3000
SMTP_HOST=smtp.gmail.com (optional)
SMTP_PORT=587 (optional)
SMTP_USER=your-email (optional)
SMTP_PASS=app-password (optional)
OWNER_EMAIL=your-email (optional)
```

### Security Notes
- Add rate-limiting middleware before production
- Migrate `subscriptions.jsonl` to a proper database
- Consider adding CAPTCHA to the form
- Use HTTPS in production
- Sanitize email input on backend (already done with regex validation)

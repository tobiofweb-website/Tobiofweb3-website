const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.')));

const SUBS_FILE = path.join(__dirname, 'subscriptions.jsonl');

function isValidEmail(email){
  // simple email validation
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendNotification(email){
  // Optional: configure SMTP via env vars to enable notification emails
  const host = process.env.SMTP_HOST;
  if(!host) return false;

  const transporter = nodemailer.createTransport({
    host: host,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  });

  const owner = process.env.OWNER_EMAIL || process.env.SMTP_USER;
  if(!owner) return false;

  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL || owner,
    to: owner,
    subject: `New newsletter signup: ${email}`,
    text: `New signup: ${email}`
  });

  return info;
}

app.post('/subscribe', async (req, res) => {
  const email = (req.body.email || req.query.email || '').toString().trim();
  if(!isValidEmail(email)) return res.status(400).json({ ok:false, error: 'Invalid email' });

  const entry = { email, ts: new Date().toISOString(), ip: req.ip };
  const line = JSON.stringify(entry) + '\n';

  fs.appendFile(SUBS_FILE, line, { encoding: 'utf8', flag: 'a' }, (err) => {
    if(err){
      console.error('Failed to write subscription:', err);
    }
  });

  // Attempt to send notification (best-effort)
  try{
    if(process.env.SMTP_HOST){ await sendNotification(email); }
  }catch(e){ console.error('Notify failed', e); }

  return res.json({ ok:true, email });
});

app.get('/health', (req, res) => res.json({ ok:true, now: new Date().toISOString() }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

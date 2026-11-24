import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

const submissions = new Map<string, number[]>();

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.post('/api/contact', async (request, response) => {
  const senderIp = request.ip || 'unknown';
  const now = Date.now();
  const recent = (submissions.get(senderIp) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) {
    response.status(429).json({ error: 'Too many requests. Please try again later.' });
    return;
  }

  const { name, email, message, website } = request.body as {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  if (website) {
    response.json({ success: true });
    return;
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    name.trim().length < 2 ||
    name.trim().length > 80 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.trim().length < 10 ||
    message.trim().length > 3000
  ) {
    response.status(400).json({ error: 'Please provide a valid name, email, and message.' });
    return;
  }

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim();
  const recipient = process.env.CONTACT_TO_EMAIL?.trim() || gmailUser;

  if (!gmailUser || !gmailAppPassword || !recipient) {
    response.status(503).json({
      error: 'Email delivery is not configured yet. Please email Anand directly.',
    });
    return;
  }

  const safeName = name.trim().replace(/[<>&]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
  })[character] || character);
  const safeEmail = email.trim().replace(/[<>&]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
  })[character] || character);
  const safeMessage = message.trim()
    .replace(/[<>&]/g, (character) => ({
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
    })[character] || character)
    .replace(/\r?\n/g, '<br>');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;color:#171717">
          <h2 style="margin-bottom:16px">New portfolio message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr style="border:0;border-top:1px solid #ddd;margin:20px 0">
          <p style="line-height:1.65">${safeMessage}</p>
        </div>
      `,
    });

    submissions.set(senderIp, [...recent, now]);
    response.json({ success: true });
  } catch (error) {
    console.error('Contact email failed:', error);
    response.status(502).json({ error: 'The message could not be delivered. Please try again.' });
  }
});

if (isProduction) {
  app.use(express.static(path.join(root, 'dist')));
  app.get('*', (_request, response) => {
    response.sendFile(path.join(root, 'dist', 'index.html'));
  });
} else {
  const { createServer } = await import('vite');
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});

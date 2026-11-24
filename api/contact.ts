import type { IncomingMessage, ServerResponse } from 'node:http';
import nodemailer from 'nodemailer';

type ContactRequest = IncomingMessage & {
  body?: {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };
};

type ContactResponse = ServerResponse & {
  status: (code: number) => ContactResponse;
  json: (body: unknown) => void;
};

const submissions = new Map<string, number[]>();

export default async function handler(
  request: ContactRequest,
  response: ContactResponse,
) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const senderIp =
    (request.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    request.socket.remoteAddress ||
    'unknown';
  const now = Date.now();
  const recent = (submissions.get(senderIp) || []).filter((time) => now - time < 15 * 60 * 1000);

  if (recent.length >= 5) {
    response.status(429).json({ error: 'Too many requests. Please try again later.' });
    return;
  }

  const body = request.body || {};
  if (body.website) {
    response.status(200).json({ success: true });
    return;
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (
    name.length < 2 ||
    name.length > 80 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10 ||
    message.length > 3000
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

  const escapeHtml = (value: string) =>
    value.replace(/[<>&]/g, (character) => ({
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
    })[character] || character);

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
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;color:#171717">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:0;border-top:1px solid #ddd;margin:20px 0">
          <p style="line-height:1.65">${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
        </div>
      `,
    });

    submissions.set(senderIp, [...recent, now]);
    response.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email failed:', error);
    response.status(502).json({ error: 'The message could not be delivered. Please try again.' });
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/** Trim string fields; treat non-strings as empty for validation */
function str(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

/** Basic email shape check (backend guard; not a full RFC parser) */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Phone: digits only, per requirements (no letters or symbols) */
function isValidPhone(phone) {
  return /^[0-9]+$/.test(phone) && phone.length >= 6;
}

/**
 * POST /api/contact
 * Body JSON: { department, doctor, name, email, phone, message }
 */
export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body.' },
        { status: 400 }
      );
    }

    const department = str(body.department);
    const doctor = str(body.doctor);
    const name = str(body.name);
    const email = str(body.email);
    const phoneRaw = str(body.phone);
    const message = str(body.message);

    // --- Required fields ---
    // Dropdown still shows label "Choose Doctor" until a real option is picked
    if (!doctor || doctor.toLowerCase() === 'choose doctor') {
      return NextResponse.json(
        { success: false, error: 'Choose Doctor is required.' },
        { status: 400 }
      );
    }

    if (!department) {
      return NextResponse.json(
        { success: false, error: 'Department is required.' },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required.' }, { status: 400 });
    }
    if (!phoneRaw) {
      return NextResponse.json({ success: false, error: 'Phone is required.' }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ success: false, error: 'Message is required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phoneRaw)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Phone must contain numbers only (no letters or special characters).',
        },
        { status: 400 }
      );
    }

    // --- Env: SMTP + inbox ---
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      RECEIVER_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !RECEIVER_EMAIL) {
      console.error('Missing SMTP or RECEIVER_EMAIL environment variables.');
      return NextResponse.json(
        { success: false, error: 'Server email configuration is incomplete.' },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);
    if (!Number.isFinite(port)) {
      return NextResponse.json(
        { success: false, error: 'Invalid SMTP_PORT configuration.' },
        { status: 500 }
      );
    }

    // Nodemailer transport (A2: 465 = SSL; 587 = STARTTLS — both are common)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      ...(port === 587 ? { requireTLS: true } : {}),
    });

    const subject = `New appointment request from ${name}`;
    const html = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="margin-bottom: 1rem;">New contact / appointment form</h2>
          <table style="border-collapse: collapse; max-width: 560px;">
            <tbody>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Department</td><td style="padding: 6px 0;">${escapeHtml(department)}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Doctor</td><td style="padding: 6px 0;">${escapeHtml(doctor)}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phoneRaw)}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 6px 0;">${escapeHtmlWithBreaks(message)}</td></tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Website Form" <${SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

/** Prevent HTML injection in the outbound email body */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch]);
}

/** Same as escapeHtml but preserves line breaks for textarea content in HTML email */
function escapeHtmlWithBreaks(text) {
  return escapeHtml(text).replace(/\r\n/g, '\n').replace(/\n/g, '<br/>');
}

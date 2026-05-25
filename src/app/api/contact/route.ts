import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Type definition for the incoming lead body
interface ContactRequestBody {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // SMTP Configurations from environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE !== "false"; // true by default (SSL on 465)
    const smtpUser = process.env.SMTP_USER || "usmanbhatti4945@gmail.com";
    const smtpPass = process.env.SMTP_PASS; // App Password (e.g. Google 16-character code)
    const smtpFrom = process.env.SMTP_FROM || `"Muhammad Usman" <usmanbhatti4945@gmail.com>`;
    const smtpTo = process.env.SMTP_TO || "usmanbhatti4945@gmail.com";

    if (!smtpPass) {
      console.error("WARNING: SMTP_PASS is missing in your environment configuration.");
      // Fallback: log details and return success to avoid crashing the client form
      return NextResponse.json(
        { 
          message: "Form accepted, but email service is in sandboxed dry-run mode (SMTP_PASS not configured).",
          sandboxed: true
        },
        { status: 200 }
      );
    }

    // Initialize transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Host Notification Email Template (Dark Luxury Theme for Usman)
    const hostEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            background-color: #0A0A0A;
            color: #F5F5F5;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111111;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          }
          .header {
            border-b: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          .eyebrow {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #D6C2A1;
            font-weight: bold;
          }
          .title {
            font-size: 24px;
            color: #F5F5F5;
            margin: 8px 0 0 0;
            font-weight: 300;
          }
          .grid {
            margin-bottom: 24px;
          }
          .row {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            color: #BDBDBD;
            letter-spacing: 1px;
            margin-bottom: 4px;
            font-weight: bold;
          }
          .value {
            font-size: 14px;
            color: #F5F5F5;
          }
          .message-box {
            background-color: #151515;
            border-left: 2px solid #D6C2A1;
            padding: 16px;
            border-radius: 8px;
            font-size: 14px;
            color: #E0E0E0;
            line-height: 1.6;
            margin-top: 10px;
          }
          .footer {
            font-size: 10px;
            color: #555555;
            text-align: center;
            margin-top: 32px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="eyebrow">PORTFOLIO PIPELINE</span>
            <h1 class="title">New Premium Lead Captured</h1>
          </div>
          <div class="grid">
            <div class="row">
              <div class="label">SENDER NAME</div>
              <div class="value">${name}</div>
            </div>
            <div class="row">
              <div class="label">SENDER EMAIL</div>
              <div class="value"><a href="mailto:${email}" style="color: #D6C2A1; text-decoration: none;">${email}</a></div>
            </div>
            <div class="row">
              <div class="label">SUBJECT</div>
              <div class="value">${subject || "No Subject Provided"}</div>
            </div>
            <div class="row" style="border: none;">
              <div class="label">MESSAGE BRIEF</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            ORBIT TECHNOLOGIES SECURED TELEMETRY
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Client Autoresponder Thank-You Email Template (Ultra-Premium Champagne Theme)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            background-color: #0A0A0A;
            color: #F5F5F5;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111111;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.6);
          }
          .header {
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 24px;
            margin-bottom: 32px;
          }
          .logo-badge {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid #D6C2A1;
            line-height: 48px;
            text-align: center;
            font-size: 16px;
            color: #D6C2A1;
            font-weight: bold;
            letter-spacing: 1px;
            margin: 0 auto 16px auto;
          }
          .brand-title {
            font-size: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #F5F5F5;
            margin: 0;
            font-weight: 800;
          }
          .brand-tag {
            font-size: 10px;
            font-style: italic;
            color: #D6C2A1;
            letter-spacing: 2px;
            margin-top: 4px;
            display: block;
          }
          .body-content {
            font-size: 15px;
            line-height: 1.7;
            color: #BDBDBD;
          }
          .greeting {
            font-size: 18px;
            color: #F5F5F5;
            margin-bottom: 16px;
            font-weight: 500;
          }
          .lead-summary {
            background-color: #151515;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 20px;
            margin: 28px 0;
          }
          .summary-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #D6C2A1;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .summary-text {
            font-size: 13px;
            color: #BDBDBD;
            font-style: italic;
            line-height: 1.5;
            margin: 0;
          }
          .cta-container {
            text-align: center;
            margin: 36px 0;
          }
          .cta-btn {
            background-color: #D6C2A1;
            color: #0A0A0A;
            text-transform: uppercase;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 2px;
            padding: 16px 32px;
            border-radius: 30px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(214, 194, 161, 0.25);
          }
          .signature {
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 24px;
            margin-top: 36px;
            font-size: 12px;
            color: #777777;
          }
          .signature-name {
            font-weight: bold;
            color: #F5F5F5;
          }
          .signature-role {
            font-size: 10px;
            color: #D6C2A1;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 2px;
          }
          .footer-note {
            font-size: 9px;
            color: #444444;
            text-align: center;
            margin-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            padding-top: 20px;
            letter-spacing: 1px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-badge">MU</div>
            <h1 class="brand-title">MUHAMMAD USMAN</h1>
            <span class="brand-tag">Digital Visionary & AI Creator</span>
          </div>
          
          <div class="body-content">
            <div class="greeting">Hello ${name},</div>
            <p>
              Thank you for initiating contact. Your transmission has been securely logged into our active work pipeline.
            </p>
            <p>
              I review all parameters personally. You can expect a direct response detailing a proposed scope and timeline analysis within the next <strong>12 hours</strong>.
            </p>
            
            <div class="lead-summary">
              <div class="summary-title">Summary of Your Inquiry</div>
              <p class="summary-text">"${message.length > 180 ? message.substring(0, 180) + "..." : message}"</p>
            </div>
            
            <p>
              In the meantime, you are invited to explore my company platform, <strong>Orbit Technologies</strong>, to review our latest engineering benchmarks, high-performance web systems, and creative AI deployment pipelines.
            </p>
            
            <div class="cta-container">
              <a href="https://orbit-technologies.usmanbhatti4945.workers.dev/" class="cta-btn" target="_blank">
                EXPLORE ORBIT TECHNOLOGIES
              </a>
            </div>
          </div>
          
          <div class="signature">
            <div class="signature-name">Muhammad Usman</div>
            <div class="signature-role">Software Engineer & AI Director</div>
          </div>
          
          <div class="footer-note">
            © ${new Date().getFullYear()} ORBIT TECHNOLOGIES. ALL RIGHTS RESERVED. SECURED CHANNELS.
          </div>
        </div>
      </body>
      </html>
    `;

    // 3. Dispatch Emails Concurrently
    await Promise.all([
      // Send notification email to Usman
      transporter.sendMail({
        from: smtpFrom,
        to: smtpTo,
        replyTo: email,
        subject: `[Lead Notification] ${subject || "New Portfolio Message"} — ${name}`,
        text: `New Lead Captured!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\nMessage:\n${message}`,
        html: hostEmailHtml,
      }),

      // Send autoresponder thank-you email to the sender
      transporter.sendMail({
        from: smtpFrom,
        to: email,
        subject: `Connection Initiated — Muhammad Usman`,
        text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will review it within the next 12 hours. In the meantime, feel free to visit my company website: https://orbit-technologies.usmanbhatti4945.workers.dev/\n\nBest regards,\nMuhammad Usman`,
        html: clientEmailHtml,
      }),
    ]);

    return NextResponse.json(
      { message: "Lead recorded successfully. Communications dispatched." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API ROUTER CONTACT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to dispatch communications. Please try again later." },
      { status: 500 }
    );
  }
}

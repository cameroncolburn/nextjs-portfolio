import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { contactSchema } from "../../lib/schemas/contact";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
 try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
        return NextResponse.json({ error: result.error.issues[0].message }, { status: 400 });
    }

    const { name, email, message } = result.data;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const mailgun = new Mailgun(FormData);

    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API || "",
    });

    const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Contact Form Submission</title>
        </head>
        <body>
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; text-align: center;">Contact Form Submission</h2>
            <p><strong>Name:</strong> <span style="color: #3b82f6;">${safeName}</span></p>
            <p><strong>Email:</strong> <span style="color: #3b82f6;">${safeEmail}</span></p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
            <div style="margin-top: 20px; text-align: center; color: #999; font-size: 12px;">
            This message was sent via your portfolio website contact form.
            </div>
        </div>
        </div>
        </body>
        </html>
        `;

    const mailData = {
        from: process.env.MAILGUN_EMAIL as string,
        to: process.env.MAILGUN_TO_EMAIL as string,
        subject: `${name} just sent a request!`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: htmlTemplate,
    };

    await mg.messages
    .create(process.env.MAILGUN_DOMAIN as string, mailData);


    return NextResponse.json(
      {
        message:
          "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailgun Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
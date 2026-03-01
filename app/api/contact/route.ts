import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Zentari Contact Form <onboarding@resend.dev>",
      to: "terddy03@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto;">
          <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 4px;">New Project Inquiry</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 0;">Submitted via zentariph.com contact form</p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #1e293b; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Email</td>
              <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 10px 0; color: #94a3b8;">Company</td>
              <td style="padding: 10px 0; color: #1e293b;">${company}</td>
            </tr>`
                : ""
            }
            ${
              projectType
                ? `<tr>
              <td style="padding: 10px 0; color: #94a3b8;">Project Type</td>
              <td style="padding: 10px 0; color: #1e293b;">${projectType}</td>
            </tr>`
                : ""
            }
          </table>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

          <h3 style="font-size: 14px; color: #94a3b8; font-weight: 500; margin-bottom: 12px;">MESSAGE</h3>
          <p style="font-size: 15px; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8;">Zentari Software — zentariph.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

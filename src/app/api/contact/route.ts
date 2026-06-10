import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Kontakt <onboarding@resend.dev>",
    to: "nooribi.bewerbung@gmail.com",
    replyTo: email,
    subject: subject || `Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

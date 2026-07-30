import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Rate-Limiting (In-Memory, Fixed-Window pro IP) ---
const WINDOW_MS = 5 * 60 * 1000; // 5-Minuten-Fenster
const MAX_REQUESTS = 3; // erlaubte Sendungen pro IP pro Fenster
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  // Kein Eintrag oder Fenster abgelaufen -> neues Fenster starten
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  // Limit erreicht -> blockieren
  if (entry.count >= MAX_REQUESTS) {
    return false;
  }
  entry.count += 1;
  return true;
}

// Abgelaufene Einträge gelegentlich entfernen, damit die Map nicht wächst
function sweep() {
  const now = Date.now();
  for (const [ip, entry] of hits) {
    if (now > entry.resetAt) hits.delete(ip);
  }
}

export async function POST(request: Request) {
  const { name, email, subject, message, company } = await request.json();

  // 1. Honeypot: 'company' ist im Formular für Menschen unsichtbar.
  //    Ist es ausgefüllt, war es ein Bot. Wir antworten mit "ok",
  //    damit der Bot keinen Hinweis bekommt -- senden aber keine Mail.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  // 2. Rate-Limit pro Absender-IP (hinter Vercel steht sie in x-forwarded-for)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (Math.random() < 0.1) sweep();

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuch es in ein paar Minuten erneut." },
      { status: 429 },
    );
  }

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

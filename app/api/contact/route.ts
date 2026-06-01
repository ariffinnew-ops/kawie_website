import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  company: z.string().max(120).optional(),
  phone: z.string().max(40).optional(),
  service: z.string().min(1).max(120),
  message: z.string().min(1).max(5000),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your form fields and try again.' }, { status: 400 })
  }

  const { name, email, company, phone, service, message } = parsed.data
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}`,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Contact form is temporarily unavailable. Please email admin@kawie-digital.com directly.' },
      { status: 503 }
    )
  }

  const to = process.env.CONTACT_TO_EMAIL ?? 'admin@kawie-digital.com'
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Kawie Digital <onboarding@resend.dev>'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Kawie Digital enquiry — ${service}`,
      text,
    }),
  })

  if (!res.ok) {
    console.error('[contact] Resend error:', res.status, await res.text())
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or email admin@kawie-digital.com.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const { email } = await request.json() || {}
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 })
    }

    const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS']
    const missing = requiredEnv.filter((k) => !process.env[k])
    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Email server not configured. Missing env: ${missing.join(', ')}.` },
        { status: 500 }
      )
    }

    const port = Number(process.env.SMTP_PORT) || 465
    const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    try {
      await transporter.verify()
    } catch (e) {
      return NextResponse.json(
        { success: false, message: `Cannot connect to SMTP server at ${process.env.SMTP_HOST}:${port}. Check host/port/secure/user/pass.` },
        { status: 500 }
      )
    }

    const html = `
      <h2>New Newsletter Signup</h2>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: 'New Newsletter Signup',
      html,
    })

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' })
  } catch (err) {
    console.error('Newsletter error:', err)
    return NextResponse.json({ success: false, message: 'Failed to subscribe.' }, { status: 500 })
  }
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

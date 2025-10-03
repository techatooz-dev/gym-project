import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
	try {
		const body = await request.json()
		const {
			name,
			email,
			dob,
			country,
			organization,
			phone,
			appointmentType,
			message,
		} = body || {}

			if (!name || !email || !dob || !country || !organization || !phone || !appointmentType || !message) {
			return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 })
		}

				// Pakistan phone numbers: normalize +92/92 to local 03… and enforce exactly 11 digits
				let normalizedPhone = String(phone).replace(/\D/g, '')
				if (normalizedPhone.startsWith('92')) {
					normalizedPhone = '0' + normalizedPhone.slice(2)
				}
				if (!/^\d{11}$/.test(normalizedPhone)) {
				return NextResponse.json({ success: false, message: 'Phone number must be exactly 11 digits.' }, { status: 400 })
			}
    

		// SMTP env checks
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

		// verify connectivity
		try {
			await transporter.verify()
		} catch (e) {
			return NextResponse.json(
				{ success: false, message: `Cannot connect to SMTP server at ${process.env.SMTP_HOST}:${port}. Check host/port/secure/user/pass.` },
				{ status: 500 }
			)
		}

		const apptLabel = appointmentType === 'initial'
			? 'Initial consultation visit'
			: appointmentType === 'followup'
				? 'Follow-up visit'
				: appointmentType

		const html = `
			<h2>New Appointment Request</h2>
			<ul style="list-style:none;padding:0;margin:0;font-family:Arial,sans-serif;font-size:14px;color:#111;">
				<li><strong>Name:</strong> ${escapeHtml(name)}</li>
				<li><strong>Email Address:</strong> ${escapeHtml(email)}</li>
				<li><strong>Date Of Birth:</strong> ${escapeHtml(dob)}</li>
				<li><strong>Country:</strong> ${escapeHtml(country)}</li>
				<li><strong>Organization Name:</strong> ${escapeHtml(organization)}</li>
			<li><strong>Phone number:</strong> ${escapeHtml(normalizedPhone)}</li>
				<li><strong>Appointment Type:</strong> ${escapeHtml(apptLabel)}</li>
			</ul>
			<p style="margin-top:12px;"><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
		`

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
			replyTo: email,
			subject: 'New Appointment Form Submission',
			html,
		})

		return NextResponse.json({ success: true, message: 'Email sent successfully!' })
	} catch (err) {
		console.error('Contact form error:', err)
		return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 })
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


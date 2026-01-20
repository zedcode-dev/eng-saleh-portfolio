import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Create a transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Get recipients from environment variable
        const recipients = process.env.RECIPIENT_EMAILS?.split(',') || [];

        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`, // Friendly sender name
            to: recipients,
            replyTo: email, // Valid Reply-To header
            subject: `New Message from ${name}: ${subject}`, // Clearer subject
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
            html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #2563EB;">New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr style="border: 1px solid #eee; margin: 20px 0;" />
    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
</div>
            `,
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}

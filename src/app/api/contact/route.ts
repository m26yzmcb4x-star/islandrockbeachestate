import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, honeypot } = body;

        // Honeypot check
        if (honeypot) {
            return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
        }

        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 1. Send data to n8n Webhook (best-effort automation, never the only delivery path)
        let webhookDelivered = false;
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (webhookUrl) {
            try {
                const webhookRes = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        phone: phone || '',
                        message,
                        source: 'website',
                        timestamp: new Date().toISOString()
                    })
                });
                webhookDelivered = webhookRes.ok;
                if (!webhookDelivered) {
                    console.error('n8n webhook responded with', webhookRes.status);
                }
            } catch (webhookError) {
                console.error('Failed to reach n8n webhook:', webhookError);
            }
        }

        // 2. Send email via Resend -- this is the only path that puts the enquiry
        // in front of a real person today, so a failure here must not be reported
        // to the visitor as success.
        let emailDelivered = false;
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { error } = await resend.emails.send({
                from: 'Island Rock Estate <info@islandrockestate.com>',
                to: ['fritz@islandrockestate.com'],
                replyTo: email,
                subject: `New Enquiry from ${name} - Island Rock Estate`,
                text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
            `,
                html: `
<h3>New Enquiry from Island Rock Estate Website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
            });
            if (error) {
                console.error('Resend error:', error);
            } else {
                emailDelivered = true;
            }
        } else {
            console.error('RESEND_API_KEY is not configured');
        }

        if (!emailDelivered && !webhookDelivered) {
            return NextResponse.json({
                message: "We couldn't send your enquiry right now. Please reach us directly on WhatsApp (+258 85 062 7916) or email fritz@islandrockestate.com."
            }, { status: 502 });
        }

        return NextResponse.json({ message: 'Enquiry received successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

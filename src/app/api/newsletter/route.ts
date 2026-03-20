import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || !email.includes('@')) {
            return NextResponse.json({ message: 'Please provide a valid email address' }, { status: 400 });
        }

        // Send to n8n webhook for newsletter processing
        try {
            const webhookUrl = process.env.N8N_NEWSLETTER_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL?.replace('/enquiry', '/newsletter');
            if (webhookUrl) {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email,
                        source: 'website_footer',
                        type: 'newsletter',
                        timestamp: new Date().toISOString()
                    })
                });
            }
        } catch (webhookError) {
            console.error('Failed to trigger n8n newsletter webhook:', webhookError);
            // Continue - don't fail the user request
        }

        return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}

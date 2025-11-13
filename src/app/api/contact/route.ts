import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Mock API response - in production, send to email service or database
    console.log('Contact form submission:', data);

    return NextResponse.json({
      status: 'ok',
      id: `contact-${Date.now()}`,
      received: true,
      message: 'Contact form received successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to process request' },
      { status: 500 }
    );
  }
}

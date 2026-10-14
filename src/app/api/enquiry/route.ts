import { NextRequest, NextResponse } from 'next/server';
import { createEnquiry } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, company, service, budget, message, website_trap } = body;

    // Spam honeypot trap check
    if (website_trap && website_trap.trim() !== '') {
      // Bot detected - return fake success to prevent spam retry loops
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // Required fields check
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Project description message is required' }, { status: 400 });
    }

    const result = await createEnquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : undefined,
      company: company ? company.trim() : undefined,
      service: service || 'General Enquiry',
      budget: budget || undefined,
      message: message.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to save enquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry created successfully',
        data: result.data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing enquiry' },
      { status: 500 }
    );
  }
}

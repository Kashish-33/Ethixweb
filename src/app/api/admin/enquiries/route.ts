import { NextRequest, NextResponse } from 'next/server';
import { isRequestAuthenticated } from '@/lib/auth';
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from '@/lib/db';

export async function GET(req: NextRequest) {
  if (!isRequestAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
  }

  const leads = await getEnquiries();
  return NextResponse.json({ data: leads });
}

export async function PATCH(req: NextRequest) {
  if (!isRequestAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
    }

    const result = await updateEnquiryStatus(id, status, notes);
    if (!result.success) {
      return NextResponse.json({ error: result.error || 'Failed to update lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Status updated successfully' });
  } catch (err) {
    return NextResponse.json({ error: 'Server error updating lead' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isRequestAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const result = await deleteEnquiry(id);
    return NextResponse.json({ success: result.success });
  } catch (err) {
    return NextResponse.json({ error: 'Server error deleting lead' }, { status: 500 });
  }
}

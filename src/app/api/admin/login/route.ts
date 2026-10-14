import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword } from '@/lib/db';
import { ADMIN_COOKIE_NAME, getExpectedSessionToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
    }

    const token = getExpectedSessionToken();
    const response = NextResponse.json({ success: true, message: 'Authentication successful' });

    // Set secure HttpOnly cookie
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: 'Login server error' }, { status: 500 });
  }
}

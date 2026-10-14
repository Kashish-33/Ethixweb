import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'ethix_admin_session';

// Stable token generator
export function getExpectedSessionToken(): string {
  const isProduction = process.env.NODE_ENV === 'production';
  const secret = process.env.ADMIN_SESSION_SECRET;
  const password = process.env.ADMIN_PASSWORD;

  if (isProduction && (!secret || !password)) {
    throw new Error(
      'ADMIN_SESSION_SECRET and ADMIN_PASSWORD must be set as environment variables in production. ' +
      'Do not rely on default values for a publicly deployed application.'
    );
  }

  // Safe to use local-dev-only defaults only outside production
  const resolvedSecret = secret || 'ethix-local-dev-only';
  const resolvedPassword = password || 'ethix-local-dev-only';

  // Simple deterministic hash
  let hash = 0;
  const str = `${resolvedSecret}:${resolvedPassword}:session_auth`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return `session_${Math.abs(hash)}`;
}

export function isServerAuthenticated(): boolean {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return Boolean(token && token === getExpectedSessionToken());
  } catch (err) {
    return false;
  }
}

export function isRequestAuthenticated(req: NextRequest): boolean {
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  return Boolean(cookie && cookie === getExpectedSessionToken());
}

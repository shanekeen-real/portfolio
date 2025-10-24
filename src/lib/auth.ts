import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

export async function createToken(project: string): Promise<string> {
  return await new SignJWT({ project })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .setIssuedAt()
    .sign(secret);
}

export async function verifyToken(token: string): Promise<{ project: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { project: string };
  } catch {
    return null;
  }
}

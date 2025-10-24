import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting (use Redis in production)
const attempts = new Map<string, { count: number; lastAttempt: number }>();

export function rateLimit(ip: string, maxAttempts = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const key = ip;
  
  const attempt = attempts.get(key);
  
  if (!attempt) {
    attempts.set(key, { count: 1, lastAttempt: now });
    return { allowed: true, remaining: maxAttempts - 1 };
  }
  
  // Reset if window has passed
  if (now - attempt.lastAttempt > windowMs) {
    attempts.set(key, { count: 1, lastAttempt: now });
    return { allowed: true, remaining: maxAttempts - 1 };
  }
  
  // Check if exceeded
  if (attempt.count >= maxAttempts) {
    return { allowed: false, remaining: 0 };
  }
  
  // Increment
  attempts.set(key, { count: attempt.count + 1, lastAttempt: now });
  return { allowed: true, remaining: maxAttempts - attempt.count - 1 };
}

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded && forwarded.length > 0) {
    const firstIP = forwarded.split(',')[0];
    return firstIP ? firstIP.trim() : '';
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

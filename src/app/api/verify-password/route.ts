import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIP } from '@/lib/rate-limit';

// Store passwords securely using environment variables
const getProjectPassword = (project: string): string | undefined => {
  switch (project) {
    case 'yellow-dollar':
      return process.env.YELLOW_DOLLAR_PASSWORD;
    // Add more projects as needed
    default:
      return undefined;
  }
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = rateLimit(clientIP, 5, 15 * 60 * 1000); // 5 attempts per 15 minutes
    
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ 
        success: false, 
        error: 'Too many attempts. Please try again later.' 
      }, { status: 429 });
    }
    
    const { project, password } = await request.json();
    
    if (!project || !password) {
      return NextResponse.json({ success: false, error: 'Missing project or password' }, { status: 400 });
    }
    
    const expectedPassword = getProjectPassword(project);
    
    if (!expectedPassword) {
      return NextResponse.json({ success: false, error: 'Project not found or password not configured' }, { status: 404 });
    }
    
    if (password === expectedPassword) {
      return NextResponse.json({ 
        success: true, 
        remaining: rateLimitResult.remaining 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Incorrect password',
        remaining: rateLimitResult.remaining 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

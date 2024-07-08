import { NextApiResponse, NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export default function middleware(req: NextApiRequest, res: NextApiResponse, next: any) {
  // Your middleware logic here
  // Since we don't want authentication, you can leave this empty
  // If needing something like a proxy, you can do that here

  NextResponse.next();
}
// /app/page.js
'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to /dashboard
    router.push('/home');
  }, [router]);

  return null;
}

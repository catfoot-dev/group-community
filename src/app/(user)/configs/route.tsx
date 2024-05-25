'use client'

import { useSession } from 'next-auth/react';

export default function Configs() {
  const { data: session } = useSession();

  if (session) {
    
  }

  return (
    <main className="flex flex-col items-center justify-between p-5">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        123
      </div>
    </main>
  );
}

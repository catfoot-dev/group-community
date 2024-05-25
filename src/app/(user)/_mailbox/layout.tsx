'use client'

import MailboxSidebar from './_components/Sidebar';
import { useEffect } from 'react';

export default function MailboxLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // getBoxes();
  }, []);

  async function getBoxes() {
    try {
      const res = await fetch(`/api/mailbox`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'fetch',
        }),
      });
      const { code, data, error } = await res.json();
      if (error) {
        throw new Error(error);
      }
      if (code === 200) {
        data;
      }
    } catch (e: any) {
      throw new Error(e.response || e.message);
    }
  }

  return (
    <div className="flex flex-row flex-1 max-h-[calc(100vh-3rem)]">
      <MailboxSidebar />
      {children}
    </div>
  );
}

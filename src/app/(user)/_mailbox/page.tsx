'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MailboxRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/mailbox/inbox');
  }, [router]);

  return <></>;
}

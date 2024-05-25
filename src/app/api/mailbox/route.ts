import * as ERROR from '@/app/_lib/locale/error.json';

import { authOptions } from '../auth/[...nextauth]/route';
import { decrypt } from '@/app/_lib/crypto';
import { getServerSession } from 'next-auth';
import { openBoxImap } from '@/app/_lib/email';

const ERROR_MESSAGE = ERROR as any;

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    if (!session?.user?.email) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const email = session.user.email;
    const cryptoKey = `${process.env.NEXTAUTH_SECRET}${email.substring(2, 4)}`;
    const decrypted = await decrypt(cryptoKey, (session.user as any).key);
    const [_, pass] = decrypted.split('$');
    const body = await request.json();
    const [__, emailHost] = email.split('@');
    switch (body.kind) {
      case 'fetch':
        res = {
          code: 200,
          data: await openBoxImap(emailHost, email, pass, {
            mailboxName: body.mailboxName,
            begin: body.begin,
            end: body.end,
            html: body.html,
          }),
        };
        break;
    }
  } catch (e: any) {
    if (res.code) {
      res.error = e.message;
    } else {
      res.code = ERROR.InvalidServerError;
      res.error = ERROR_MESSAGE[ERROR.InvalidServerError];
    }
  }
  if (res.code !== 200) {
    res.error = ERROR_MESSAGE[res.code];
  }
  return new Response(JSON.stringify(res));
}

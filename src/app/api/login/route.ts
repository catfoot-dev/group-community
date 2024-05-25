import * as ERROR from '@/app/_lib/locale/error.json';

import { checkEmailAccess, checkHost } from '@/app/_lib/email';

import { encrypt } from '@/app/_lib/crypto';

const ERROR_MESSAGE = ERROR as any;

export async function POST(request: Request) {
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    const body = await request.json();
    if (!body.email || body.email.indexOf('@') === -1) {
      res.code = ERROR.InvalidEmailAddress;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidEmailAddress]);
    }
    if (!body.password) {
      res.code = ERROR.InvalidPassword;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidPassword]);
    }
    const [username, emailHost] = body.email.split('@');
    try {
      await checkHost(emailHost);
    } catch (err: any) {
      res.code = ERROR.UnknownEmailAddressHost;
      throw new Error(ERROR_MESSAGE[ERROR.UnknownEmailAddressHost]);
    }
    if (process.env.NODE_ENV !== 'production' && username.startsWith('test')) {
      // 개발 테스트 계정
    } else {
      try {
        await checkEmailAccess(emailHost, body.email, body.password);
      } catch (err: any) {
        if (err.toString() === 'Error: invalid user or password') {
          res.code = ERROR.InvalidAccountOrPassword;
          throw new Error(ERROR_MESSAGE[ERROR.InvalidAccountOrPassword]);
        } else {
          res.code = ERROR.EmailServerError;
          throw new Error(ERROR_MESSAGE[ERROR.EmailServerError]);
        }
      }
    }
    const cryptoKey = `${process.env.NEXTAUTH_SECRET}${body.email.substring(2, 4)}`;
    res = {
      code: 200,
      data: {
        name: username,
        email: body.email,
        uuid: body.uuid,
        key: await encrypt(cryptoKey, `${body.email}$${body.password}`),
      },
    };
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

import * as ERROR from '@/app/_lib/locale/error.json';

import { NextApiResponse } from 'next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import prisma from '@/app/_lib/db';

const ERROR_MESSAGE = ERROR as any;

export async function POST(request: Request, response: NextApiResponse) {
  const session = await getServerSession(authOptions);
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    const body = await request.json();
    const uid = (session?.user as any)?.uid;
    if (!uid) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const community = await prisma.community.findFirst({
      where: { slug: body.slug },
    });
    res.data = !community;
  } catch (err: any) {
    if (res.code !== 200) {
      console.error(err);
      res.code = ERROR.InvalidServerError;
      res.error = ERROR_MESSAGE[ERROR.InvalidServerError];
    } else {
      res.error = err.toString();
    }
  }
  return new Response(JSON.stringify(res));
}

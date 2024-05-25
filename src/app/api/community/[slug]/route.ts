import * as ERROR from '@/app/_lib/locale/error.json';

import { NextApiRequest } from 'next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import prisma from '@/app/_lib/db';

const ERROR_MESSAGE = ERROR as any;

export async function GET(request: NextApiRequest) {
  const session = await getServerSession(authOptions);
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    const slug = request.query.slug as string;
    if (!session?.user?.email) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });
    if (!user) {
      // TODO:
      throw new Error();
    }
    const community = await prisma.community.findFirst({
      where: { slug },
    });
    if (!community) {
      // TODO:
      throw new Error();
    }
    const total = prisma.post.count({ where: { community } });
    const list = await prisma.post.findMany({
      select: {
        id: true,
        community: true,
        user: true,
        title: true,
        text: true,
        commentCnt: true,
      },
      where: { community },
      skip: 0,
      take: 15,
    });
    res.data = {
      total,
      list,
    };
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

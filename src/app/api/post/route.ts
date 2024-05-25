import * as ERROR from '@/app/_lib/locale/error.json';

import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import prisma from '@/app/_lib/db';

const ERROR_MESSAGE = ERROR as any;

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    const body = await request.json();
    if (!body.title) {
      // TODO:
      throw new Error();
    }
    if (!body.text) {
      // TODO:
      throw new Error();
    }
    const uid = (session?.user as any)?.uid;
    if (!uid) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const community = await prisma.community.findFirst({
      where: { slug: body.community },
    });
    if (!community) {
      // TODO:
      throw new Error();
    }
    const isLargeText = body.text.length > 255;
    const post = await prisma.post.create({
      data: {
        title: body.title.substring(0, 100),
        text: body.text.substring(0, 255),
        communityId: community.id,
        userId: uid,
        commentCnt: 0,
        largeText: isLargeText ? {
          create: { text: body.text },
        } : undefined,
      },
    });
    res.data = post;
  } catch (err) {
    //
  }
  return new Response(JSON.stringify(res));
}

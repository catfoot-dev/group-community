import * as ERROR from '@/app/_lib/locale/error.json';

import { getGroupList, getGroupWithParents } from './_lib/group';

import { authOptions } from './auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import prisma from '@/app/_lib/db';

const ERROR_MESSAGE = ERROR as any;

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  let res = { code: 200 } as { code: number; data: any, error?: string };
  try {
    const uid = (session?.user as any)?.uid;
    if (!uid) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const user = await prisma.user.findFirst({
      relationLoadStrategy: 'join',
      include: { group: true, position: true },
      where: { id: uid },
    });
    if (!user) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const userGroups = user.groupId ? await getGroupWithParents(user.groupId) : [];
    const groups = await getGroupList();
    const users = await prisma.user.findMany({
      relationLoadStrategy: 'join',
      include: {
        position: true,
      },
    });
    res.data = {
      user,
      userGroups,
      groups,
      users,
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

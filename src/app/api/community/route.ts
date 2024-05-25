import * as ERROR from '@/app/_lib/locale/error.json';

import { Community, CommunityCategory } from '@/generated/client';

import { NextApiResponse } from 'next';
import { authOptions } from '../auth/[...nextauth]/route';
import { getGroupWithParents } from '../_lib/group';
import { getServerSession } from 'next-auth';
import prisma from '@/app/_lib/db';

const ERROR_MESSAGE = ERROR as any;
const COMMUNITY_COUNT_PER_PAGE = 12;

async function getCommunities(
  isIn: boolean,
  category: CommunityCategory,
  groupIds: number[] | undefined,
  take: number,
): Promise<Community[]> {
  if (isIn) {
    const communities = await prisma.community.findMany({
      relationLoadStrategy: 'join',
      include: { manager: true },
      where: {
        id: { in: groupIds },
        category,
      },
      skip: 0,
      take,
      orderBy: { latestPostDate: 'asc' },
    });
    const more = take - communities.length;
    if (more > 0) {
      const moreCommunities = await getCommunities(
        !isIn,
        category,
        groupIds,
        more,
      );
      return [...communities, ...moreCommunities];
    }
    return communities;
  }
  const communities = await prisma.community.findMany({
    relationLoadStrategy: 'join',
    include: { manager: true },
    where: {
      id: { notIn: groupIds },
      isPrivate: false,
      category,
    },
    skip: 0,
    take,
    orderBy: { latestPostDate: 'asc' },
  });
  return communities;
}

export async function GET(request: Request, response: NextApiResponse) {
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
      include: { group: true },
      where: { id: uid },
    });
    if (!user) {
      res.code = ERROR.InvalidAccess;
      throw new Error(ERROR_MESSAGE[ERROR.InvalidAccess]);
    }
    const groups = user.groupId ? await getGroupWithParents(user.groupId) : [];
    const workCount = await prisma.community.count({
      where: { category: CommunityCategory.WORK },
    });
    const workList = await getCommunities(
      true,
      CommunityCategory.WORK,
      groups.map((item) => item.id),
      COMMUNITY_COUNT_PER_PAGE,
    );
    const projectCount = await prisma.community.count({
      where: { category: CommunityCategory.PROJECT },
    });
    const projectList = await getCommunities(
      true,
      CommunityCategory.PROJECT,
      groups.map((item) => item.id),
      COMMUNITY_COUNT_PER_PAGE,
    );
    const clubCount = await prisma.community.count({
      where: { category: CommunityCategory.CLUB },
    });
    const clubList = await getCommunities(
      true,
      CommunityCategory.CLUB,
      groups.map((item) => item.id),
      COMMUNITY_COUNT_PER_PAGE,
    );
    res.data = {
      work: {
        total: workCount,
        list: workList,
      },
      project: {
        total: projectCount,
        list: projectList,
      },
      club: {
        total: clubCount,
        list: clubList,
      },
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

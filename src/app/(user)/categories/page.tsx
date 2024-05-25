'use client'

import { ArrowDown01Icon, SquareLock02Icon, SquareUnlock02Icon } from 'hugeicons-react';
import { Button, Spinner, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useSocket } from '@/app/_components/SocketProvider';

type CommunityType = {
  id: number;
  slug: string;
  isPublicRead: boolean;
  isPublicWrite: boolean;
  isSmallGroup: boolean;
  name: string;
  managerId: number;
  latestPostDate: Date;
};

export default function CommunityList() {
  const router = useRouter();
  const { userGroups } = useSocket();
  const [isLoaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState<{
    name: string;
    total: number;
    list: CommunityType[];
  }[]>([
    { name: '부서', total: 0, list: [] },
    { name: '업무 / 프로젝트', total: 0, list: [] },
    { name: '소모임 (취미, 사내동호회 등)', total: 0, list: [] },
  ]);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    getCommunities();

    return () => {
      controller.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCommunities() {
    try {
      const res = await fetch('/api/community', {
        method: 'GET',
        signal,
      });
      const {code, data, error} = await res.json();
      if (code === 200) {
        setCategories((prev) => {
          prev[0].total = data.work.total;
          prev[0].list = data.work.list;
          prev[1].total = data.project.total;
          prev[1].list = data.project.list;
          prev[2].total = data.club.total;
          prev[2].list = data.club.list;
          return [...prev];
        });
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        throw err;
      }
    }
    setLoaded(true);
  }

  return (
    <div className="flex flex-col gap-2 p-10 w-full min-h-full scroll-y-auto">
      {categories.map((category, i) => (
        <div key={`community-category-${i}`}>
          <div className="flex flex-row items-center gap-1">
            <Typography variant="h5">
              {category.name}
            </Typography>
            {isLoaded ? (
              <Typography variant="small">
                ({category.total})
              </Typography>
            ) : <Spinner className="mx-2 size-4" /> }
          </div>
          <div className="grid grid-cols-4 gap-4 m-5 mb-10">
            {isLoaded ? category.list.length ? (category.list.map((community) => (
              <div
                key={`community-${community.slug}`}
                className={clsx(`flex flex-col col-span-1 px-5 py-3 border-x border-y
                  rounded-md drop-shadow-md transition-all`, {
                    'bg-white hover:cursor-pointer hover:bg-gray-50 hover:scale-105': i !== 0 || userGroups.findIndex((item) => item.communityId === community.id) !== -1,
                    'bg-gray-300': i === 0 && userGroups.findIndex((item) => item.communityId === community.id) === -1,
                  })}
                onClick={() => {
                  if (i === 0 && userGroups.findIndex((item) => item.communityId === community.id) === -1) {
                    return;
                  }
                  router.push(`/c/${community.slug}`);
                }}
              >
                <div className="flex flex-row items-center gap-1">
                  <Typography variant="h6">
                    {community.name}
                  </Typography>
                </div>
                <div className="flex flex-row gap-1 text-sm">
                  <Typography variant="small" className="flex flex-row gap-1 items-center">
                    읽기: {community.isPublicRead ? (
                      <>
                        <SquareUnlock02Icon size="14" /> 모두 가능
                      </>
                    ) : (
                      <>
                        <SquareLock02Icon size="14" /> 소속원만
                      </>
                    )}
                  </Typography>
                  <Typography variant="small">/</Typography>
                  <Typography variant="small"className="flex flex-row gap-1 items-center">
                    쓰기: {community.isPublicRead ? (
                      <>
                        <SquareUnlock02Icon size="14" /> 모두 가능
                      </>
                    ) : (
                      <>
                        <SquareLock02Icon size="14" /> 소속원만
                      </>
                    )}
                  </Typography>
                </div>
                <div className="flex flex-row text-sm">
                  <Typography variant="small">
                    최근 글: {community.latestPostDate
                      ? dayjs(community.latestPostDate).format('YYYY-MM-DD HH:mm')
                      : '없음'}
                  </Typography>
                </div>
              </div>
            ))) : (
              <Typography variant="small">(항목이 없습니다)</Typography>
            ) : (
              [...Array(6)].map((_, j) => (
                <div
                  key={`group-skeleton-${j}`}
                  className="flex flex-col col-span-1 px-5 py-3 h-16
                    border-x border-y rounded-md bg-gray-200 drop-shadow-md animate-pulse"
                />
              ))
            )}
            {category.total > category.list.length && (
              <Button
                variant="text"
                className="col-span-4"
              >
                모두 보기
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

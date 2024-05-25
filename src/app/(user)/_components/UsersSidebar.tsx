'use client'

import { Avatar, Badge, Chip, IconButton, Tab, Tabs, TabsHeader, Typography } from '@material-tailwind/react';
import { BubbleChatAddIcon, BubbleChatNotificationIcon, Cancel01Icon, UserListIcon, WorkflowSquare06Icon } from 'hugeicons-react';
import { GroupType, KeyValueType, UserItemType, UserType } from '@/app/_lib/types';
import { useEffect, useMemo, useState } from 'react';

import SearchBox from '@/app/_components/SearchBox';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useSocket } from '@/app/_components/SocketProvider';

const tabItems = [
  { key: 'group', name: '소속', icon: WorkflowSquare06Icon },
  { key: 'name', name: '이름', icon: UserListIcon },
  { key: 'new', name: '최신', icon: BubbleChatAddIcon },
  { key: 'unread', name: '안 읽음', icon: BubbleChatNotificationIcon },
];

function dateToPass(_date: Date | string) {
  const date = dayjs(_date);
  const today = dayjs();
  if (date.format('YYYYMMDD') === today.format('YYYYMMDD')) {
    return `${date.hour() < 12 ? '오전' : '오후'} ${date.format('h:mm')}`;
  }
  const diff = today.diff(date, 'day');
  if (diff === 1) return '어제';
  if (diff === 2) return '이틀 전';
  const week = today.day() - diff;
  if (week < 0 && week >= -7) return '지난 주';
  if (diff < 7) return `${Math.abs(diff)}일 전`;
  if (date.format('YYYY') === today.format('YYYY')) return date.format('MM-DD');
  return date.format('YYYY-MM-DD');
}

function UserItem({
  moreContent,
  groups,
  ...item
}: UserItemType & {
  moreContent: 'group' | 'message',
  groups: KeyValueType<GroupType>,
}) {
  return (
    <div className="flex justify-between gap-2 p-1 rounded-md hover:bg-gray-300 hover:cursor-pointer">
      <div className={clsx('flex flex-row gap-2', {
        'w-full': moreContent === 'group',
        'w-[calc(100%-85px)]': moreContent !== 'group',
      })}>
        <Avatar
          size="sm"
          alt={item.name}
          src={item.image ?? '/img/default_avatar.jpg'}
        />
        <div className="flex flex-col w-full">
          <Typography
            variant="h6"
            className="overflow-hidden text-ellipsis text-nowrap text-[12px]"
          >
            {item.name}
          </Typography>
          <Typography
            variant="small"
            className="overflow-hidden text-ellipsis text-nowrap font-normal text-[12px]"
          >
            <span className={clsx('', {
              'text-gray-800': moreContent === 'group',
              'text-gray-600': moreContent !== 'group',
            })}>
              {moreContent === 'group' ? groups[item.group].name : item.lastMessageContent}
            </span>
          </Typography>
        </div>
      </div>
      {moreContent !== 'group' && (
        <div className="flex flex-col gap-1 justify-center items-end">
          <Typography
            variant="small"
            color="gray"
            className="pr-1 font-normal text-[10px]"
          >
            {item.lastMessageReceivedAt ? dateToPass(item.lastMessageReceivedAt) : ''}
          </Typography>
          <div className="h-4">
            {item.unreadMessageCount ? (
              <Chip
                variant="filled"
                color="pink"
                className="px-2 py-0.5 rounded-full font-normal text-[10px] leading-3"
                value={item.unreadMessageCount > 99 ? '+99' : item.unreadMessageCount}
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

function UserList({
  tab,
  groups,
  items,
}: {
  tab: string;
  groups: KeyValueType<GroupType>;
  items: UserItemType[];
}) {
  const [sortedUsers, setSortedUsers] = useState<UserItemType[]>([]);
  const sortedGroupKeys = useMemo(() => Object.keys(groups).sort((a, b) => {
    const groupA = groups[Number(a)];
    const groupB = groups[Number(b)];
    return groupA.order - groupB.order;
  }), [groups]);

  useEffect(() => {
    if (!tab || !Object.keys(groups).length || !items.length) {
      return;
    }
    
    const sortedUsers = items.sort((a: UserItemType, b: UserItemType) => {
      switch (tab) {
        case 'group': {
          let order = groups[a.group]?.order - groups[b.group]?.order;
          if (order) return order;
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        }
        case 'name': {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        }
        case 'new': {
          let order = (b.lastMessageReceivedAt?.getTime() ?? 0)
            - (a.lastMessageReceivedAt?.getTime() ?? 0);
          if (order) return order;
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        }
        case 'unread': {
          let order = (b.unreadMessageCount ? b.lastMessageReceivedAt?.getTime() ?? 0 : 0)
            - (a.unreadMessageCount ? a.lastMessageReceivedAt?.getTime() ?? 0 : 0);
          if (order) return order;
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        }
        default:
          return 0;
      }
    });
    
    setSortedUsers(sortedUsers);
  }, [tab, groups, items]);

  let idx = 0;
  return (
    <div className="flex flex-col gap-0 p-1 w-full h-full overflow-y-auto border-[1px] border-gray-300 bg-white rounded-md">
      {tab === 'group' ? sortedGroupKeys.map((key, i) => {
        const groupKey = Number(key);
        const groupItems: UserItemType[] = [];
        for (let len = sortedUsers.length; idx < len;) {
          if (sortedUsers[idx].group === groupKey) {
            groupItems.push(sortedUsers[idx++]);
          } else if (sortedUsers[idx].group < groupKey) {
            idx++;
          } else {
            break;
          }
        }
        return (
          <div key={`group-${key}`}>
            <div
              className={clsx('flex flex-row -m-1 mb-1 px-1 py-0.5 w-[calc(100%+0.5rem)] text-[10px] bg-gray-100', {
                'mt-1': i !== 0,
              })}
            >
              {groups[Number(key)].name}
            </div>
            <div className="">
              {groupItems.map((item, j) => (
                <div key={`users-item-${j}`} className={clsx('', {
                  'pb-1': j !== items.length - 1,
                  'pt-1 border-t-[1px] border-gray-300': j !== 0,
                })}>
                  <UserItem
                    moreContent="group"
                    groups={groups}
                    {...item}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }) : sortedUsers.map((item, i) => tab === 'name' || item.lastMessageReceivedAt ? (
        <div key={`users-item-${i}`} className={clsx('', {
          'pb-1': i !== items.length - 1,
          'pt-1 border-t-[1px] border-gray-300': i !== 0,
        })}>
          <UserItem
            moreContent={tab === 'name' ? 'group' : 'message'}
            groups={groups}
            {...item}
          />
        </div>
      ) : null)}
    </div>
  );
}

export default function UsersSidebar({
  isShow,
  onClose,
}: {
  isShow: boolean;
  onClose: () => void;
}) {
  const { groupDict } = useSocket();
  const [tab, setTab] = useState('group');
  const [groups, setGroups] = useState<KeyValueType<GroupType>>({});
  const [items, setItems] = useState<UserItemType[]>([]);
  const [hasUnread, setUnread] = useState(false);

  useEffect(() => {
    const tab = localStorage.getItem('UsersSidebar.tab') ?? 'group';
    setTab(tab);
    // dummy
    const items: UserItemType[] = [];
    for (let i = 0; i < 15; i++) {
      items.push({
        group: Number(Object.keys(groupDict).find((_, i) => Math.random() > 0.7) ?? 12),
        name: (i % 2 ? '더스윙' : '팩트') + ' 고양이' + i,
        email: '',
        image: '/img/default_avatar.jpg',
        unreadMessageCount: i < 14 ? i * 8 : null,
        lastMessageContent: i < 14 ? 'Web Developer 123785454676549569540349582039458906' : null,
        lastMessageReceivedAt: i < 14 ? new Date(Date.now() - i * 100000000) : null,
      });
    }
    setItems(() => items);
    setUnread(true);
  }, [groupDict]);

  useEffect(() => {
    setGroups(groupDict);
    // if (!user?.groupId) {
    //   return;
    // }
    // const groups = [];
    // function appendGroup(groupId: number) {
    //   const group = groupDict[groupId];
    //   if (!group) {
    //     return;
    //   }
    //   appendGroup(group.parentId);
    //   groups.push(group);
    // }
    // appendGroup(user.groupId);
    // onGroupUpdate(groups);
  }, [groupDict]);

  function changeTab(value: string) {
    setTab(value);
    localStorage.setItem('UsersSidebar.tab', value);
  }
  
  return (
    <div className={clsx('fixed flex flex-col pt-12 h-full overflow-hidden border-gray-300 bg-gray-100 transition-all duration-150 ease-out', {
      'w-64 border-r-[1px]': isShow,
      'w-0 border-0': !isShow
    })}>
      <div className="flex flex-col justify-start mb-2 w-64 h-full">
        <div className="flex flex-row pt-1 px-1 w-full">
          <Typography variant="h6" className="mt-[3px] w-full text-gray-600 text-[12px]">사용자</Typography>
          <IconButton variant="text" size="sm" className="w-5 h-5 rounded-full hover:cursor-pointer" onClick={onClose}>
            <Cancel01Icon size="12" />
          </IconButton>
        </div>
        
        <div className="flex flex-col px-2 pb-1 w-full">
          <SearchBox />
        </div>

        <div className="flex flex-col gap-1 px-2 pb-1 w-full h-[calc(100%-72px)]">
          <Tabs value={tab} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              {tabItems.map((tab) => (
                tab.key === 'unread' ? (
                  <Badge
                    key={`tab-${tab.key}`}
                    color="pink"
                    className={clsx('min-w-[5px] min-h-[5px] z-10', {
                      'hidden': tab.key !== 'unread' || !hasUnread
                    })}
                  >
                    <Tab value={tab.key} onClick={() => changeTab(tab.key)} >
                      <div className="flex flex-row gap-1 text-[11px] text-nowrap">
                        <tab.icon size="13" className="mt-[2px]" />
                        {tab.name}
                      </div>
                    </Tab>
                  </Badge>
                ) : (
                  <Tab
                    key={`tab-${tab.key}`}
                    value={tab.key}
                    onClick={() => changeTab(tab.key)}
                  >
                    <div className="flex flex-row gap-1 text-[11px] text-nowrap">
                      <tab.icon size="13" className="mt-[2px]" />
                      {tab.name}
                    </div>
                  </Tab>
                )
              ))}
            </TabsHeader>
          </Tabs>
          <UserList tab={tab} groups={groups} items={items} />
        </div>
      </div>
    </div>
  );
}

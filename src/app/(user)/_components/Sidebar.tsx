import { AddCircleIcon, Comment01Icon, Home06Icon, ListViewIcon, Logout03Icon, Settings02Icon, StarIcon, UserAccountIcon } from 'hugeicons-react';
import { Button, Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { NavItemType } from '@/app/_lib/types';
import { PiPawPrintFill } from 'react-icons/pi';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import { useSocket } from '@/app/_components/SocketProvider';

const NAV_ITEMS: NavItemType[] = [
  {
    name: '홈',
    type: 'ITEM',
    icon: Home06Icon,
    link: '/',
  },
  { type: 'SPLITTER' },
  {
    name: '커뮤니티',
    type: 'ITEM',
    children: [
      {
        name: '리스트',
        type: 'ITEM',
        icon: ListViewIcon,
        link: '/categories'
      },
      {
        name: '새 커뮤니티',
        type: 'NEW_COMMUNITY',
        icon: AddCircleIcon,
        link: '/category'
      },
    ],
  },
  {
    name: '부서',
    type: 'WORKGROUP',
    isLoadingChildren: true,
    children: [],
  },
  {
    name: '즐겨찾기',
    type: 'FAVORATE',
    isLoadingChildren: true,
    children: [],
  },
  { type: 'SPLITTER' },
  {
    name: '내 정보',
    type: 'ITEM',
    children: [
      {
        name: '프로필',
        type: 'PROFILE',
        icon: UserAccountIcon,
      },
      {
        name: '설정',
        type: 'ITEM',
        icon: Settings02Icon,
        link: '/configs',
      },
    ],
  },
];

function NavItem({
  item,
  currentPath,
  onCloseWriter,
}: {
  item: NavItemType; 
  currentPath: string;
  onCloseWriter: () => void;
}) {
  const router = useRouter();
  
  return (
    <>
      {item.type === 'SPLITTER' ? (
        <div className="w-full h-0 border-b-[1px] border-gray-300" />
      ) : item.link || item.action ? (
        <Button
          fullWidth
          variant="text"
          size="sm"
          color="gray"
          className={clsx('flex justify-start items-center gap-2 px-2 py-1 rounded-sm', {
            'border-gray-300 bg-gray-300 hover:bg-gray-200'
              : item.link === currentPath ||
                (item.link && item.link !== '/' && currentPath.startsWith(item.link)),
            'border-transparent bg-inherit': item.link && !currentPath.startsWith(item.link),
          })}
          onClick={() => {
            item.action?.();
            item.link && router.push(item.link);
            onCloseWriter();
          }}
        >
          {item.icon && <item.icon size="20" />}
          <span className="flex mt-0.5 w-full">{item.name}</span>
        </Button>
      ) : (
        <div className="mt-2 px-2 text-xs">{item.name}</div>
      )}
      {item.children ? (
        <div className="flex flex-col gap-1 w-full">
          {item.children.map((child, i) => (
            <NavItem
              key={`nav-item-${i}`}
              item={child}
              currentPath={currentPath}
              onCloseWriter={onCloseWriter}
            />
          ))}
        </div>
      ) : undefined}
      {item.isLoadingChildren && (
        <div className="flex flex-col mb-2 w-full justify-center items-center">
          <Spinner className="size-4" />
        </div>
      )}
    </>
  );
}

export default function Sidebar({
  isFold,
  onCloseWriter,
}: {
  isFold: boolean;
  onCloseWriter: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? '';
  const { user, groupDict, userGroups } = useSocket();
  const [navItems, setNavItems] = useState<NavItemType[]>([]);

  useEffect(() => {
    if (!user?.groupId) {
      setNavItems(NAV_ITEMS);
      return;
    }
    function preProcessNavItem(item: NavItemType) {
      switch (item.type) {
        case 'NEW_COMMUNITY': {
          item.action = () => {

          };
          break;
        }
        case 'WORKGROUP': {
          item.children = [];
          if (!userGroups.length) {
            break;
          }
          item.isLoadingChildren = false;
          userGroups
            .sort((a, b) => a.order - b.order || a.id - b.id)
            .forEach((group) => {
              item.children.push({
                name: group.name,
                type: 'ITEM',
                icon: Comment01Icon,
                link: `/c/${group.slug}`,
              });
            });
          break;
        }
        case 'FAVORATE': {
          item.children = [];
          item.isLoadingChildren = false;
          break;
        }
        case 'PROFILE': {
          item.link = `/p/${user?.email}`;
          break;
        }
      }
      if (item.children) {
        item.children = item.children.map(preProcessNavItem);
      }
      return item;
    }
    setNavItems(() => [
      ...NAV_ITEMS.map(preProcessNavItem).filter((_) => _),
    ]);
  }, [user, groupDict, userGroups]);

  return (
    <div className={clsx(
      'fixed flex h-full overflow-hidden border-gray-300 bg-gray-100 text-gray-800 z-50 transition-all duration-150 ease-out', {
        'w-0 border-0': isFold,
        'w-52 border-r-[1px]': !isFold,
      })}
    >
      <div className="flex flex-col p-2 w-52">
        <div
          className="flex flex-row gap-2 p-1 w-full h-10 hover:cursor-pointer"
          onClick={() => router.push('/')}
        >
          <PiPawPrintFill
            className="p-[3px] rounded-2xl border-[1px] border-gray-400 bg-white text-gray-600 drop-shadow-md"
            size="24"
          />
          <span className="text-nowrap">야옹야옹</span>
        </div>

        <div className="flex flex-col justify-between mt-1 w-full h-full">
          <div className="flex flex-col gap-1 p-1 w-full">
            {navItems.map((item, i) => (
              <NavItem
                key={`nav-item-${i}`}
                item={item}
                currentPath={pathname}
                onCloseWriter={onCloseWriter}
              />
            ))}
          </div>

          <div className="flex p-1">
            <Button
              variant="text"
              size="sm"
              color="pink"
              className="flex justify-start items-center gap-2 px-2 py-1 rounded-full"
              onClick={() => signOut()}
            >
              <Logout03Icon size="18" />
              <span className="mt-0.5 mr-0.5">로그아웃</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

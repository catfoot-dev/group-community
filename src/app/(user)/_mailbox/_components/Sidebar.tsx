'use client'

import { Delete02Icon, InboxIcon, LicenseDraftIcon, MailEdit01Icon, SentIcon, SpamIcon } from 'hugeicons-react';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@material-tailwind/react';
import clsx from 'clsx';

const navItems = [
  {
    name: '받은 메일함',
    icon: InboxIcon,
    link: '/mailbox/inbox',
  },
  {
    name: '임시 보관함',
    icon: LicenseDraftIcon,
    link: '/mailbox/drafts',
  },
  {
    name: '보낸 메일함',
    icon: SentIcon,
    link: '/mailbox/sent',
  },
  {
    name: '스팸',
    icon: SpamIcon,
    link: '/mailbox/junk',
  },
  {
    name: '삭제한 메일',
    icon: Delete02Icon,
    link: '/mailbox/trash',
  },
];

export default function MailboxSidebar() {
  const router = useRouter();
  const pathname = usePathname() ?? '';
  const selectedMenu = pathname.split('/').slice(0, 3).join('/');

  return (
    <div className="flex flex-col w-52 min-w-52 h-full max-h-full overflow-hidden border-r-[1px] border-gray-300 bg-white text-gray-800">
      <div className="flex flex-col p-2 w-full">
        <Button
          fullWidth
          variant="filled"
          size="sm"
          color="gray"
          className="flex justify-start items-center gap-2"
          onClick={() => router.push('/mailbox/new')}
        >
          <MailEdit01Icon size="18" />
            <span className="flex w-full">새 메일</span>
        </Button>
      </div>

      <div className="flex flex-col gap-1 p-2 w-full">
        {navItems.map((item, i) => (
          <Button
            fullWidth
            key={`navitem-${i}`}
            variant="text"
            size="sm"
            color="gray"
            className={clsx('flex justify-start items-center gap-2', {
              'bg-gray-200 hover:bg-gray-200': item.link === selectedMenu,
              'bg-inherit': item.link !== selectedMenu,
            })}
            onClick={() => router.push(item.link)}
          >
            <item.icon size="18" />
            <span className="flex w-full">{item.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

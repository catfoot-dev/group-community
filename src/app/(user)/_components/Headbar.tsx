import { AddSquareIcon, ArrowLeft03Icon, ArrowRight03Icon, Notification01Icon, UserGroupIcon } from 'hugeicons-react';
import { Badge, Button, IconButton, Typography } from '@material-tailwind/react';

import { PiPawPrintFill } from 'react-icons/pi';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Headbar({
  isFold,
  isUsersShowing,
  isWriterShowing,
  onUsersToggle,
  onWriterToggle,
  onChangeFold,
  onNotificationToggle,
}: {
  isFold: boolean;
  isUsersShowing: boolean;
  isWriterShowing: boolean;
  onUsersToggle: () => void;
  onWriterToggle: () => void;
  onChangeFold: (isFold: boolean) => void;
  onNotificationToggle: () => void;
}) {
  const router = useRouter();
  
  return (
    <div className={clsx('fixed flex justify-between gap-1 p-2 h-12 border-b-[1px] border-gray-300 bg-gray-100 text-gray-800 z-50 transition-all duration-150 ease-out', {
      'w-full': isFold,
      'w-[calc(100%-13rem)]': !isFold,
    })}>
      <div className="flex gap-2">
        <div className={clsx('flex p-1', {
          'hidden': !isFold,
          'visible': isFold,
        })}>
          <PiPawPrintFill
            className="p-[3px] rounded-2xl border-[1px] border-gray-400 bg-white text-gray-600 drop-shadow-md hover:cursor-pointer"
            size="24"
            onClick={() => router.push('/')}
          />
        </div>
        <IconButton
          variant="text"
          className="rounded-2xl"
          color="gray"
          size="sm"
          onClick={() => onChangeFold(!isFold)}
        >
          {isFold
            ? <ArrowRight03Icon size="16" />
            : <ArrowLeft03Icon  size="16" />}
        </IconButton>
        <IconButton
          variant="text"
          className={clsx('rounded-md border-[1px] border-gray-300', {
            'bg-gray-300 shadow-md hover:bg-gray-200': isUsersShowing,
            'bg-white': !isUsersShowing,
          })}
          color="gray"
          size="sm"
          onClick={onUsersToggle}
        >
          <UserGroupIcon size="16" />
        </IconButton>
        <Button
          variant="text"
          className={clsx('flex flex-row gap-1 justify-start items-center px-2 h-8 ' +
            'rounded-md border-[1px] border-gray-300',
            {
              'bg-gray-300 shadow-md hover:bg-gray-200': isWriterShowing,
              'bg-white': !isWriterShowing,
            },
          )}
          color="gray"
          size="sm"
          onClick={onWriterToggle}
        >
          <AddSquareIcon size="16" />
          <Typography variant="small" className="mt-0.5">새 글쓰기</Typography>
        </Button>
        {/* {isFold && (
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                color="gray"
                size="sm"
                className="flex flex-row gap-1 justify-start items-center px-2"
              >
                {currentMenu?.icon && <currentMenu.icon size="16" />}
                <Typography variant="small" className="mt-0.5">
                  {currentMenu?.name ?? ''}
                </Typography>
                <ArrowDown01Icon size="16" />
              </Button>
            </MenuHandler>
          </Menu>
        )} */}
      </div>
      <div className="flex" />
      <div className="flex flex-row mr-2">
        <Badge overlap="square" placement="top-end" className="top-[20%] right-[20%] min-w-[5px] min-h-[5px]">
          <IconButton variant="text" color="gray" size="sm" className="rounded-full" onClick={onNotificationToggle}>
            <Notification01Icon size="20" />
          </IconButton>
        </Badge>
      </div>
    </div>
  );
}

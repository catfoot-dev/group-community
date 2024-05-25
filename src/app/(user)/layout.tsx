'use client'

import { useEffect, useState } from 'react';

import Headbar from './_components/Headbar';
import { PiPawPrintFill } from 'react-icons/pi';
import Sidebar from './_components/Sidebar';
import { SocketProvider } from '../_components/SocketProvider';
import UsersSidebar from './_components/UsersSidebar';
import Writer from './_components/Writer';
import clsx from 'clsx';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DefaultLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoaded, setLoaded] = useState(false);
  const [isSidebarFold, setSidebarFold] = useState(false);
  const [isUsersShowing, setUsersShowing] = useState(false);
  const [isWriterShowing, setWriterShowing] = useState(false);
  const [isNotificationShowing, setNotificationShowing] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.email) {
        setLoaded(true);
      } else {
        router.replace(process.env.NEXT_PUBLIC_SIGNIN_PAGE || '');
      }
    });
  }, [router]);

  function usersToggle() {
    setUsersShowing(!isUsersShowing);
  }

  function writerToggle() {
    setUsersShowing(false);
    setWriterShowing(!isWriterShowing);
  }

  function notificationToggle() {
    setNotificationShowing(!isNotificationShowing);
  }

  return (
    <SocketProvider>
      {isLoaded ? (
        <div className="flex flex-row w-full min-h-full max-h-full">
          <Sidebar
            isFold={isSidebarFold}
            onCloseWriter={() => setWriterShowing(false)}
          />
          <div className={clsx('flex flex-col w-full transition-all duration-150 ease-out', {
            'ml-0': isSidebarFold,
            'ml-52': !isSidebarFold
          })}>
            <Headbar
              isFold={isSidebarFold}
              isUsersShowing={isUsersShowing}
              isWriterShowing={isWriterShowing}
              onUsersToggle={usersToggle}
              onWriterToggle={writerToggle}
              onChangeFold={(isFold) => setSidebarFold(isFold)}
              onNotificationToggle={notificationToggle}
            />
            <div className="relative flex mt-12 flex-1">
              {children}
            </div>
            <UsersSidebar
              isShow={isUsersShowing}
              onClose={() => setUsersShowing(false)} 
            />
            <Writer
              isShow={isWriterShowing}
              onClose={() => setWriterShowing(false)}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-row gap-10">
            <PiPawPrintFill
              className="text-gray-600 animate-[bounce_2s_-.6s_infinite]"
              size="32"
            />
            <PiPawPrintFill
              className="text-gray-600 animate-[bounce_2s_-.3s_infinite]"
              size="32"
            />
            <PiPawPrintFill
              className="text-gray-600 animate-[bounce_2s_infinite]"
              size="32"
            />
          </div>
        </div>
      )}
    </SocketProvider>
  );
}

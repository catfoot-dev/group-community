'use client'

import { Spinner, Typography } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';

type MailType = {
  headers: any;
  summary: string;
};

let scrollTimer: NodeJS.Timeout | null = null;
const CriteriaDic = {
  'inbox': 'ALL',
  'drafts': 'DRAFT',
  'sent': ''
};

export default function Mailbox() {
  const pathname = usePathname();
  const [mailboxName] = pathname.split('/').slice(2, 3);
  const listDivRef = useRef(null);
  const [isInited, setInited] = useState(false);
  const [isListLoading, setListLoading] = useState(false);
  const [isMailLoading, setMailLoading] = useState(false);
  const [isMailShowing, setMailShowing] = useState(false);
  const [storage, setStorage] = useState({ usage: 0, limit: 0 });
  const [unseen, setUnseen] = useState(-1);
  const [total, setTotal] = useState(-1);
  const [lastMail, setLastMail] = useState(-1);
  const [selectedMail, setSelectedMail] = useState<any>();
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (total === -1) {
      getInboxList();
    } else {
      onListScroll();
    }
  }, [total, list, lastMail]);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);

  async function onListScroll() {
    if (!listDivRef.current) {
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = listDivRef.current;
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
      scrollTimer = null;
      if (total > list.length && lastMail > 1 && scrollHeight - clientHeight - scrollTop < 35) {
        getInboxList(lastMail);
      }
    }, 1000);
  }

  async function fetchInbox(begin?: number, end?: number, html?: boolean) {
    try {
      const res = await fetch(`/api/mailbox`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'fetch',
          mailboxName: 'INBOX',
          criteria: 
          begin,
          end,
          html,
        }),
        signal,
      });
      return await res.json();
    } catch (err) {
      if (!controller.signal.aborted) {
        throw err;
      }
    }
  }

  async function getInboxList(begin?: number) {
    if (isListLoading || (begin === undefined && total !== -1)) return;
    setListLoading(true);
    try {
      const { code, data, error } = await fetchInbox(begin);
      if (code === 200) {
        setStorage(data.storage);
        setTotal(data.total);
        setList((prev) => {
          const sortedList = data.list.sort((a: any, b: any) => b.attributes.uid - a.attributes.uid);
          if (sortedList.length) {
            setLastMail(sortedList[sortedList.length - 1].attributes.uid - 1);
          }
          return [...prev, ...sortedList];
        });
      } else if (error) {
        throw new Error(error);
      }
    } catch (e: any) {
      throw new Error(e.response || e.message);
    } finally {
      setInited(true);
      setListLoading(false);
    }
  }

  async function getInbox(uid: number) {
    if (isMailLoading) return;
    setMailShowing(true);
    setMailLoading(true);
    try {
      let selectedMail;
      for (const item of list) {
        if (item.attributes.uid === uid) {
          selectedMail = item;
          break;
        }
      }
      if (selectedMail.html === undefined) {
        const { code, data, error } = await fetchInbox(uid, uid, true);
        if (code === 200) {
          selectedMail.html = data.list[0].html;
          setList(() => [...list]);
        } else if (error) {
          throw new Error(error);
        }
      }
      setSelectedMail(selectedMail);
    } catch (e: any) {
      throw new Error(e.response || e.message);
    } finally {
      setMailLoading(false);
    }
  }

  return (
    <div className="flex flex-row flex-1">
      <div
        ref={listDivRef}
        className={clsx('flex flex-col h-full max-h-full overflow-hidden overflow-y-auto text-sm transition-all duration-300 ease-out', {
          'w-96': selectedMail,
          'w-full': !selectedMail,
          'border-r-[1px] border-gray-300': isMailShowing,
        })}
        onScroll={onListScroll}
      >
        {isInited ? (
          list.map((item) => (
            <div
              key={`email-${item.attributes.uid}`}
              className={clsx('flex flex-col p-2 w-full border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100/50', {
                'bg-gray-200 text-gray-600': item.attributes.flags.includes('\\Seen')
              })}
              onClick={() => getInbox(item.attributes.uid)}
            >
              <div className="flex flex-row gap-2 justify-between items-end w-full">
                <Typography variant="h6" className="text-nowrap text-sm overflow-hidden overflow-ellipsis">
                  {item.headers?.from?.value[0].name ?? ''}
                </Typography>
                <Typography variant="small" className="text-nowrap">
                  {item.headers?.date ? dayjs(item.headers?.date).format('YYYY-MM-DD HH:mm') : ''}
                </Typography>
              </div>
              <div className="flex w-full">
                <Typography variant="h6" className="text-nowrap text-sm overflow-hidden overflow-ellipsis">
                  {item.headers?.subject ?? ''}
                </Typography>
              </div>
              <div className="flex w-full">
                <Typography variant="small" className={clsx('', {
                  'text-nowrap text-sm overflow-hidden overflow-ellipsis': selectedMail,
                })}>
                  {item.summary ?? ''}
                </Typography>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
            <Spinner />
            메일 항목을 불러오는 중입니다
          </div>
        )}
        {isInited && list.length !== total && (
          <div className="flex flex-row gap-2 p-2 pb-10 w-full justify-center items-center">
            <Spinner />
            항목을 더 불러옵니다
          </div>
        )}
      </div>
      <div className={clsx('flex h-full max-h-full overflow-hidden overflow-x-clip overflow-y-auto transition-all duration-300 ease-out', {
        'w-[calc(100vw-50rem)]': isMailShowing,
        'w-0': !isMailShowing,
      })}>
        {isMailShowing && (isMailLoading ? (
          <div className="flex w-full h-full gap-2 justify-center items-center">
            <Spinner />
            메일 본문을 불러오는 중입니다
          </div>
        ) : (
          <div className="p-4" dangerouslySetInnerHTML={{ __html: selectedMail?.html ?? '' }} />
        ))}
      </div>
    </div>
  );
}

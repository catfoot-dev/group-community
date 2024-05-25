'use client'

import { GroupType, KeyValueType, UserType } from '../_lib/types';
import { Socket, io } from 'socket.io-client';
import { createContext, useContext, useEffect, useState } from 'react';

type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
  groupDict: KeyValueType<GroupType>;
  user: UserType | null;
  userGroups: GroupType[];
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  groupDict: {},
  user: null,
  userGroups: [],
});

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setConnected] = useState(false);
  const [groupDict, setGroupDict] = useState<KeyValueType<GroupType>>({});
  const [user, setUser] = useState<UserType | null>(null);
  const [userGroups, setUserGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    const socket = io();

    socket.on('connect', () => {
      setConnected(true);
      console.log(socket);
    });

    socket.on('user', ({ data }) => {
      setUser(data);
    });

    socket.on('users', (data) => {
      console.log('users', data);
    });

    socket.on('groups', ({ data }) => {
      const groupDict = data.reduce((prev, item) => {
        prev[item.id] = item;
        return prev;
      }, {});
      setGroupDict(groupDict);
    });

    socket.on('disconnect', (reason) => {
      console.log('disconnect', reason);
      setConnected(false);
    });

    setSocket(socket);

    return () => {
      socket && socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    const groups = [];
    function appendGroup(groupId: number) {
      const group = groupDict[groupId];
      if (!group) {
        return;
      }
      appendGroup(group.parentId);
      groups.push(group);
    }
    appendGroup(user.groupId);
    setUserGroups(groups);
  }, [user, groupDict]);

  return (
    <SocketContext.Provider value={{ socket, isConnected, groupDict, user, userGroups }}>
      {children}
    </SocketContext.Provider>
  )
}

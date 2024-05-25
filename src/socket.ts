import { getGroupList, getGroupWithParents } from '@/app/api/_lib/group';

import { Socket } from 'socket.io';
import { decode } from 'next-auth/jwt';

// 수정 시에 서버 재시작 필요
export async function SocketConnection(socket: Socket) {
  const cookies = socket.handshake.headers.cookie?.split(/;[ ]?/) ?? [];
  const [_, sessionToken] = cookies.find((cookie) => {
    return cookie.startsWith('next-auth.session-token=');
  })?.split('=');
  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // const groupId = (decoded.user as any)?.groupId;

  async function sendUserInfo() {
    socket.emit('user', { data: decoded.user });
  }
  sendUserInfo();

  async function sendGroups() {
    const groups = await getGroupList();
    socket.emit('groups', { data: groups });
  }
  sendGroups();
}

import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/_lib/db';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        uuid: { type: 'text' },
        email: { label: '이메일', type: 'text', placeholder: '이메일 주소를 입력해주세요' },
        password: { label: '패스워드', type: 'password', placeholder: '패스워드를 입력해주세요' },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.uuid || !credentials?.email || !credentials?.password) {
          return {
            code: 400,
            error: 'Bad Request',
          };
        }
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              uuid: credentials.uuid,
              email: credentials.email,
              password: credentials.password,
            }),
          });
          const { code, data, error } = await res.json();
          if (code === 200) {
            if (credentials.email) {
              let user = await prisma.user.findFirst({
                where: { email: credentials.email },
              });
              if (!user) {
                user = await prisma.user.create({
                  data: {
                    name: credentials.email.split('@')[0],
                    email: credentials.email,
                    image: '/img/default_avatar.jpg',
                    position: { connect: { id: 9 } },
                  },
                });
              }
              data.uid = user?.id;
              data.groupId = user?.groupId;
              data.name = user?.name;
              data.profile = user?.image;
            }
            return data;
          } else if (error) {
            throw new Error(error);
          }
        } catch (e: any) {
          if (process.env.NODE_ENV === 'production') {
            return {
              code: 500,
              error: 'Server Error',
            };
          }
          throw new Error(e.response || e.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session.user as any).uid = (token.user as any).uid;
      (session.user as any).groupId = (token.user as any).groupId;
      (session.user as any).uuid = (token.user as any).uuid;
      (session.user as any).key = (token.user as any).key;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: process.env.NEXT_PUBLIC_SIGNIN_PAGE,
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

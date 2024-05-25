import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import SessionWrapper from './_components/SessionWrapper';

const notoSansKR = Noto_Sans_KR({
  preload: false,
  weight: ['100', '400', '800'],
});

export const metadata: Metadata = {
  title: '야옹웨어',
  description: '좋은 그룹웨어는 비싸다! 싼 그룹웨어는 쓰기 불편하다! 그래서 냐는 직접 만들었다!',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="ko">
        <body className={notoSansKR.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}

'use client';

export default function CommunityLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full min-h-full scroll-y-auto">
      {children}
    </div>
  );
}

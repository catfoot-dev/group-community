'use client';

export default function ProfileLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full min-h-full">
      <div className="flex flex-col mr-44 w-full h-full">
        {children}
      </div>
    </div>
  );
}

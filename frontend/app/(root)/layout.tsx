import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="flex-grow">{children}</div>
    </div>
  );
}

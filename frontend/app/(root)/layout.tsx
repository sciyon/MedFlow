import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-work-sans w-full min-h-screen bg-white flex flex-col">
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}

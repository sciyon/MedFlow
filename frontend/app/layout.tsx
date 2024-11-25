import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sharpSans = localFont({
  src: './fonts/HostGrotesk.ttf',
  variable: "--font-host-bold",
  weight: '800',
  style: 'bold'
})

const nunitoSans = localFont({
  src: './fonts/NunitoSans.ttf',
  variable: "--font-nunito-sans",
  weight: '400',
  style: 'bold'
})

const montserratSans = localFont({
  src: './fonts/Montserrat.ttf',
  variable: "--font-montserrat-sans",
  weight: '400',
  style: 'normal'
})

export const metadata: Metadata = {
  title: "MedFlow",
  description: "A medical information system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sharpSans.variable} ${nunitoSans.variable} ${montserratSans.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

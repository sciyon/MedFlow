import type { Metadata } from "next";
import { Montserrat, Gabarito, Nunito_Sans, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html>
      <body className={`antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

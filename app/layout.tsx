import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Cameron Colburn",
  description: "Cameron Colburn is a software developer in Hamilton, Ontario Canada. This page is a software developer portfolio demonstrating some of his work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body id="home" className={inter.className}>
        {children}
      </body>
    </html>
  );
}

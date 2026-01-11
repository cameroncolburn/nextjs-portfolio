import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body
       id="home"
      >
        {children}
      </body>
    </html>
  );
}

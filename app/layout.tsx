import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: "./fonts/avenir.otf",
  variable: "--font-avenir",
  weight: "100 200 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Study Platform",
  description: "Created by Rania Chettab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${avenir.variable} font-avenir bg-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}

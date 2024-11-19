import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: "./fonts/avenir.otf",
  variable: "--font-avenir",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={`${avenir.variable} font-avenir container mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

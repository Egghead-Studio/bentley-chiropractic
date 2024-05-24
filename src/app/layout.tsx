import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Nav} from "@/components/Nav/Nav";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bentley Chiropractic",
  description: "Book Your Appointment Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'min-h-screen')}>
        <Nav/>
        <div className={'m-4 md:mx-auto md:w-10/12 md:my-8 lg:w-9/12 lg:my-12'}>
        {children}
        </div>
      </body>
    </html>
  );
}

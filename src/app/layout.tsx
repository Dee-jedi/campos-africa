import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campos — If it's on campus, it's on Campos",
  description:
    "The #1 Academic & Lifestyle Super-App for African University Students. Built to help students ace their exams with instant materials and CBT prep, buy and sell safely on campus, stay informed with real-time news, and connect with their campus community.",
  keywords: [
    "Campos",
    "African University",
    "Past Questions",
    "CBT Prep",
    "Lecture Materials",
    "Campus Marketplace",
    "UNILAG",
    "UNIBEN",
    "OAU",
    "UNN",
    "ABU",
    "UI",
    "Hostels",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

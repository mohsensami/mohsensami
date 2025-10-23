import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GamificationProvider } from "@/contexts/GamificationContext";
import GamificationProgress from "@/components/GamificationProgress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mohsen Sami | Frontend Developer",
  description:
    "Experienced Frontend Developer with 5+ years expertise in Next.js, React.js, and modern web technologies. Building impactful digital experiences.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Web Development",
    "Mohsen Sami",
  ],
  authors: [{ name: "Mohsen Sami" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Mohsen Sami | Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in Next.js, React.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/model/blink.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleTagManager gtmId="GTM-KPXZ8RSC" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GamificationProvider>
          {children}
          <SpeedInsights />
          <GamificationProgress />
        </GamificationProvider>
      </body>
    </html>
  );
}

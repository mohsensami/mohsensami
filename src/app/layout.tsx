import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "دی‌بلاگ | دنیای سادهٔ برنامه‌نویسی",
    template: "%s | دی‌بلاگ",
  },
  description: "وبلاگ برنامه‌نویسی با آخرین مقالات فرانت‌اند، بک‌اند، ری‌اکت و بیشتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full`}>
      <body className="min-h-full bg-stone-50 font-sans text-stone-900 antialiased">
        <Header />
        {children}
        <footer className="mt-16 border-t border-stone-200 bg-white py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-stone-500">
            <p>دی‌بلاگ — وبلاگ برنامه‌نویسی ساخته‌شده با Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

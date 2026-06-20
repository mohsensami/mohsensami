import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const vazirmatn = Vazirmatn({
    subsets: ['arabic'],
    variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
    title: {
        default: 'آقای برنامه نویس | دنیای سادهٔ برنامه‌نویسی',
        template: '%s | آقای برنامه نویس',
    },
    description: 'وبلاگ برنامه‌نویسی با آخرین مقالات فرانت‌اند، بک‌اند، ری‌اکت و بیشتر',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full`} suppressHydrationWarning>
            <body className="min-h-full bg-stone-50 font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
                <ThemeProvider>
                    <Header />
                    {children}
                    <footer className="mt-16 border-t border-stone-200 bg-white py-8 dark:border-stone-800 dark:bg-stone-900">
                        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-stone-500 dark:text-stone-400">
                            <p>آقای برنامه نویس — نوشته‌شده با ❤️ برای یادگیرندگان فارسی‌زبان </p>
                        </div>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}

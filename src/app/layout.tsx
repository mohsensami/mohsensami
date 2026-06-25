import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Toaster } from 'sonner';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import NgProviders from './providers/NgProvider';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: {
        default: 'دیتای سبز | دنیای سادهٔ برنامه‌نویسی',
        template: '%s | دیتای سبز',
    },
    description: 'وبلاگ برنامه‌نویسی با آخرین مقالات فرانت‌اند، بک‌اند، ری‌اکت و بیشتر',
};

const vazir = localFont({
    src: [
        {
            path: '../../public/fonts/Vazir-Light-FD-WOL.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Vazir-FD-WOL.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Vazir-Bold-FD-WOL.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-vazir',
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={`${vazir.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="min-h-screen flex flex-col justify-between bg-stone-50 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
                <ThemeProvider>
                    <TooltipProvider>
                        <Header />
                        <NgProviders>{children}</NgProviders>
                        <Toaster position="top-center" richColors />
                        <footer className="mt-16 border-t border-stone-200 bg-white py-8 dark:border-stone-800 dark:bg-stone-900">
                            <div className="mx-auto max-w-6xl px-4 text-center text-sm text-stone-500 dark:text-stone-400">
                                <p>دیتای سبز — نوشته‌شده با ❤️ برای یادگیرندگان فارسی‌زبان </p>
                            </div>
                        </footer>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Toaster } from 'sonner';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: {
        default: 'آقای برنامه نویس | دنیای سادهٔ برنامه‌نویسی',
        template: '%s | آقای برنامه نویس',
    },
    description: 'وبلاگ برنامه‌نویسی با آخرین مقالات فرانت‌اند، بک‌اند، ری‌اکت و بیشتر',
};

const vazir = localFont({
    src: [
        {
            path: '../../public/fonts/Vazir-Bold-FD-WOL.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Vazir-Bold-FD-WOL.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Vazir-Bold-FD-WOL.woff2',
            weight: '300',
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
        <html
            lang="fa"
            dir="rtl"
            className={cn('h-full', vazir.variable, 'font-sans', geist.variable)}
            suppressHydrationWarning
        >
            <body className="min-h-full bg-stone-50 font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
                <ThemeProvider>
                    <TooltipProvider>
                        <Header />
                        {children}
                        <Toaster position="top-center" richColors />
                        <footer className="mt-16 border-t border-stone-200 bg-white py-8 dark:border-stone-800 dark:bg-stone-900">
                            <div className="mx-auto max-w-6xl px-4 text-center text-sm text-stone-500 dark:text-stone-400">
                                <p>آقای برنامه نویس — نوشته‌شده با ❤️ برای یادگیرندگان فارسی‌زبان </p>
                            </div>
                        </footer>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

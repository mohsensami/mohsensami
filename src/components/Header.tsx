import Link from 'next/link';
import { auth, signOut } from '@/lib/auth';
import { MobileNav } from '@/components/MobileNav';
import { SearchBar } from '@/components/SearchBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserAvatar } from '@/components/ui/UserAvatar';

export async function Header() {
    const session = await auth();

    async function logoutAction() {
        'use server';
        await signOut({ redirectTo: '/' });
    }

    return (
        <header className=" z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/95">
            <div className="mx-auto flex container-fluid items-center gap-3 px-4 py-4 sm:gap-4">
                <Link href="/" className="group flex shrink-0 items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-lg font-bold text-white">
                        P
                    </span>
                    <div>
                        <span className="block text-lg font-bold text-stone-900 group-hover:text-emerald-700 dark:text-stone-100 dark:group-hover:text-emerald-400">
                            دیتای سبز
                        </span>
                        <span className="block text-xs text-stone-500 dark:text-stone-400">
                            دنیای برنامه‌نویسی
                        </span>
                    </div>
                </Link>

                <div className="flex flex-1 justify-center px-1 sm:px-4">
                    <SearchBar />
                </div>

                <nav className="flex shrink-0 items-center gap-2 text-sm sm:gap-3">
                    <Link
                        href="/posts/new"
                        className="hidden rounded-lg bg-emerald-600 px-3 py-2 font-medium text-white transition hover:bg-emerald-700 sm:inline-flex sm:px-4"
                    >
                        نوشته جدید
                    </Link>

                    <ThemeToggle />

                    <div className="hidden items-center gap-2 md:flex">
                        {session?.user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="inline-flex items-center gap-2 text-stone-600 transition hover:text-emerald-700 dark:text-stone-300 dark:hover:text-emerald-400"
                                >
                                    <UserAvatar
                                        user={{
                                            name: session.user.name,
                                            email: session.user.email,
                                            image: session.user.image,
                                        }}
                                        size="sm"
                                    />
                                    <span>{session.user.name}</span>
                                </Link>
                                <form action={logoutAction}>
                                    <button
                                        type="submit"
                                        className="rounded-lg border border-stone-200 px-3 py-2 text-stone-600 transition hover:border-stone-300 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:text-stone-100"
                                    >
                                        خروج
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-lg border border-stone-200 px-3 py-2 text-stone-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400 sm:px-4"
                                >
                                    ورود
                                </Link>
                                <Link
                                    href="/register"
                                    className="rounded-lg bg-stone-800 px-4 py-2 font-medium text-white transition hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600"
                                >
                                    ثبت‌نام
                                </Link>
                            </>
                        )}
                    </div>

                    <MobileNav session={session} logoutAction={logoutAction} />
                </nav>
            </div>
        </header>
    );
}

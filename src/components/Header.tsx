import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";

export async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-lg font-bold text-white">
            P
          </span>
          <div>
            <span className="block text-lg font-bold text-stone-900 group-hover:text-emerald-700 dark:text-stone-100 dark:group-hover:text-emerald-400">
              آقای برنامه نویس
            </span>
            <span className="block text-xs text-stone-500 dark:text-stone-400">
              دنیای سادهٔ برنامه‌نویسی
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm sm:gap-3">
          <Link
            href="/posts"
            className="hidden text-stone-600 transition hover:text-emerald-700 dark:text-stone-300 dark:hover:text-emerald-400 sm:inline"
          >
            همه نوشته‌ها
          </Link>

          <Link
            href="/posts/new"
            className="rounded-lg bg-emerald-600 px-3 py-2 font-medium text-white transition hover:bg-emerald-700 sm:px-4"
          >
            نوشته جدید
          </Link>

          <ThemeToggle />

          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="hidden text-stone-600 transition hover:text-emerald-700 dark:text-stone-300 dark:hover:text-emerald-400 sm:inline"
              >
                پروفایل
              </Link>
              <span className="hidden text-stone-500 dark:text-stone-400 sm:inline">
                {session.user.name}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
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
                className="hidden rounded-lg bg-stone-800 px-4 py-2 font-medium text-white transition hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 sm:inline"
              >
                ثبت‌نام
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

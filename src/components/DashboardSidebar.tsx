"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserAvatar } from "@/components/ui/UserAvatar";

const navItems = [
  { href: "/dashboard", label: "پروفایل", icon: "👤", exact: true },
  { href: "/dashboard/posts", label: "مقالات من", icon: "📝" },
  { href: "/dashboard/drafts", label: "پیش‌نویس‌ها", icon: "📋" },
  { href: "/dashboard/favorites", label: "علاقه‌مندی‌ها", icon: "❤️" },
  { href: "/dashboard/comments", label: "نظرات من", icon: "💬" },
];

type DashboardSidebarProps = {
  user: { name: string | null; email: string; image: string | null };
  logoutAction: () => Promise<void>;
};

export function DashboardSidebar({ user, logoutAction }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <div className="flex items-center gap-3">
          <UserAvatar user={user} size="md" />
          <div className="min-w-0">
            <div className="truncate font-bold text-stone-900 dark:text-stone-100">
              {user.name ?? "کاربر"}
            </div>
            <div className="truncate text-xs text-stone-500" dir="ltr">
              {user.email}
            </div>
          </div>
        </div>
      </div>

      <nav className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    active
                      ? "bg-emerald-50 font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      : "text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-800"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <form action={logoutAction}>
        <button
          type="submit"
          className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-red-900 dark:hover:bg-red-950 dark:hover:text-red-400"
        >
          خروج از حساب
        </button>
      </form>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatar } from "@/components/ui/UserAvatar";

type MobileNavProps = {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
  logoutAction: () => Promise<void>;
};

const links = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/posts", label: "مقالات" },
  { href: "/posts/new", label: "نوشته جدید" },
];

export function MobileNav({ session, logoutAction }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="باز کردن منو"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
        <SheetHeader>
          <SheetTitle>منو</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
            >
              {link.label}
            </Link>
          ))}

          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                <UserAvatar
                  user={{
                    name: session.user.name,
                    email: session.user.email,
                    image: session.user.image,
                  }}
                  size="sm"
                />
                {session.user.name ?? "داشبورد"}
              </Link>
              <Link
                href="/dashboard/favorites"
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                علاقه‌مندی‌ها
              </Link>
              <form action={logoutAction} className="mt-4">
                <Button type="submit" variant="outline" className="w-full">
                  خروج
                </Button>
              </form>
            </>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="outline">
                <Link href="/login">ورود</Link>
              </Button>
              <Button asChild>
                <Link href="/register">ثبت‌نام</Link>
              </Button>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4 dark:border-stone-800">
            <span className="text-sm text-stone-500">تم</span>
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

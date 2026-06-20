"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="تغییر تم"
        className="h-9 w-9 rounded-lg border border-stone-200 dark:border-stone-700"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label="تغییر تم"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

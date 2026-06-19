# آقای برنامه نویس — وبلاگ برنامه‌نویسی

وبلاگ برنامه‌نویسی فارسی با Next.js، TypeScript، Tailwind CSS و SQLite — الهام‌گرفته از [ditty.ir](https://ditty.ir/).

## امکانات

- صفحه اصلی با آخرین مقالات
- سایدبار دسته‌بندی‌ها و پربازدیدترین‌ها
- ثبت‌نام و ورود کاربران
- انتشار مقاله جدید (فقط برای کاربران ثبت‌نام‌شده)
- دیتابیس SQLite در فایل `data/blog.db`
- پشتیبانی RTL و فونت فارسی

## راه‌اندازی

```bash
npm install
npm run dev
```

سایت روی [http://localhost:3000](http://localhost:3000) اجرا می‌شود.

## حساب دمو

- **ایمیل:** ali@example.com
- **رمز:** 123456

## ساختار

```
src/
  app/           # صفحات Next.js App Router
  components/    # کامپوننت‌های UI
  lib/
    db/          # SQLite + Drizzle ORM
    auth.ts      # احراز هویت با JWT Cookie
    posts.ts     # کوئری‌های مقالات
data/
  blog.db        # فایل دیتابیس (خودکار ساخته می‌شود)
```

## تکنولوژی‌ها

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- SQLite + better-sqlite3 + Drizzle ORM
- bcryptjs + jose (احراز هویت)

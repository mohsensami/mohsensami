import Link from "next/link";
import { auth } from "@/lib/auth";
import { getAllCategories, getPopularPosts } from "@/lib/posts";

export async function Sidebar() {
  const [session, categories, popularPosts] = await Promise.all([
    auth(),
    getAllCategories(),
    getPopularPosts(5),
  ]);

  return (
    <aside className="space-y-6">
      <section className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-5">
        <h2 className="mb-2 font-bold text-stone-900">نوشته جدید</h2>
        <p className="mb-4 text-sm leading-6 text-stone-600">
          {session?.user
            ? "مقاله جدیدت رو بنویس و با دیگران به اشتراک بذار."
            : "برای انتشار مقاله باید وارد حساب کاربری‌ات بشی."}
        </p>
        <Link
          href="/posts/new"
          className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          {session?.user ? "شروع نوشتن" : "ورود و نوشتن"}
        </Link>
      </section>

      {session?.user && (
        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 font-bold text-stone-900">حساب من</h2>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-stone-700 transition hover:bg-emerald-50 hover:text-emerald-800"
          >
            <span>📊</span>
            <span>داشبورد نوشته‌ها</span>
          </Link>
        </section>
      )}

      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900">
          <span className="h-5 w-1 rounded-full bg-emerald-500" />
          دسته‌بندی‌ها
        </h2>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/category/${cat.slug}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-stone-700 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                <span>{cat.name}</span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-500">
                  {cat.postCount}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900">
          <span>🔥</span>
          پربازدیدترین‌ها
        </h2>
        <ol className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={post.id} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                {index + 1}
              </span>
              <Link
                href={`/posts/${post.slug}`}
                className="text-sm leading-6 text-stone-700 transition hover:text-emerald-700"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {!session?.user && (
        <section className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-5">
          <h2 className="mb-2 font-bold text-stone-900">نویسنده شو!</h2>
          <p className="mb-4 text-sm leading-6 text-stone-600">
            با ثبت‌نام در سایت می‌تونی مقاله‌های برنامه‌نویسی خودت رو منتشر کنی.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            همین الان شروع کن
          </Link>
        </section>
      )}
    </aside>
  );
}

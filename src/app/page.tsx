import Link from "next/link";
import { auth } from "@/lib/auth";
import { getLatestCommentsCached } from "@/lib/comments";
import {
  getCategoriesWithPostsCached,
  getLatestPostsCached,
  getPopularPostsCached,
} from "@/lib/posts";
import { CategoryPills, CategoryPostsSection } from "@/components/home/CategoryPostsSection";
import { LatestCommentsSection } from "@/components/home/LatestCommentsSection";
import { HomeSectionTitle } from "@/components/home/HomeSectionTitle";
import { NumberedPostList } from "@/components/home/NumberedPostList";

export const revalidate = 300;

export default async function HomePage() {
  const [popularPosts, latestPosts, categoriesWithPosts, latestComments, session] =
    await Promise.all([
      getPopularPostsCached(10),
      getLatestPostsCached(10),
      getCategoriesWithPostsCached(5),
      getLatestCommentsCached(8),
      auth(),
    ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-emerald-600 via-teal-600 to-cyan-700 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="relative">
          <p className="mb-3 text-sm font-medium text-emerald-100">وبلاگ برنامه‌نویسی</p>
          <h1 className="mb-4 text-3xl font-bold leading-12 sm:text-4xl">
            دنیای سادهٔ برنامه‌نویسی
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-8 text-emerald-50/90">
            آخرین مقالات، آموزش‌ها و نکات برنامه‌نویسی — از ری‌اکت و جاوااسکریپت تا
            معماری نرم‌افزار و هوش مصنوعی.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/posts"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              همه مقالات
            </Link>
            <Link
              href={session?.user ? "/posts/new" : "/login"}
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              {session?.user ? "نوشته جدید" : "ورود و نوشتن"}
            </Link>
          </div>
        </div>
      </section>

      {categoriesWithPosts.length > 0 && (
        <section className="mb-10">
          <HomeSectionTitle title="دسته‌بندی‌ها" href="/posts" linkLabel="همه مقالات" />
          <CategoryPills categories={categoriesWithPosts} />
        </section>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <HomeSectionTitle title="نوشته‌های پربازدید این روزها" />
          <NumberedPostList posts={popularPosts} />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <HomeSectionTitle title="مقاله‌های تازه" href="/posts" linkLabel="مشاهده همه" />
          <NumberedPostList posts={latestPosts} />
        </section>
      </div>

      <div className="mt-10 space-y-10">
        <CategoryPostsSection categories={categoriesWithPosts} />
        <LatestCommentsSection comments={latestComments} />
      </div>
    </main>
  );
}

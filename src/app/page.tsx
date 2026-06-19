import { Sidebar } from "@/components/Sidebar";
import { PostCard } from "@/components/PostCard";
import { getLatestPosts, getPopularPosts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  const latestPosts = getLatestPosts(10);
  const popularPosts = getPopularPosts(5);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="mb-10 rounded-2xl bg-gradient-to-l from-emerald-600 to-teal-700 px-6 py-10 text-white shadow-lg">
        <h1 className="mb-3 text-3xl font-bold leading-10">
          دنیای سادهٔ برنامه‌نویسی
        </h1>
        <p className="max-w-2xl text-base leading-8 text-emerald-50">
          آخرین مقالات، آموزش‌ها و نکات برنامه‌نویسی — از ری‌اکت و جاوااسکریپت
          تا معماری نرم‌افزار و هوش مصنوعی.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-stone-900">مقاله‌های تازه</h2>
              <Link
                href="/posts"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-800"
              >
                مشاهده همه
              </Link>
            </div>
            <div className="space-y-6">
              {latestPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index + 1} />
              ))}
            </div>
          </section>
        </div>

        <Sidebar />
      </div>

      <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:hidden">
        <h2 className="mb-4 text-lg font-bold">🔥 پربازدیدترین‌ها</h2>
        <ol className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={post.id}>
              <Link
                href={`/posts/${post.slug}`}
                className="text-sm text-stone-700 hover:text-emerald-700"
              >
                {index + 1}. {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

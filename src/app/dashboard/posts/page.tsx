import Link from "next/link";
import { DashboardPostList } from "@/components/DashboardPostList";
import { auth } from "@/lib/auth";
import { getPostsByAuthor } from "@/lib/posts";

export const metadata = {
  title: "مقالات من",
};

export default async function DashboardPostsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const posts = await getPostsByAuthor(session.user.id);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">مقالات من</h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            مدیریت و ویرایش نوشته‌های منتشرشده
          </p>
        </div>
        <Link
          href="/posts/new"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          نوشته جدید
        </Link>
      </div>

      <DashboardPostList posts={posts} />
    </div>
  );
}

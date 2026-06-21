import Link from "next/link";
import { formatPersianDate } from "@/lib/format";
import { auth } from "@/lib/auth";
import { getDraftPostsByAuthor } from "@/lib/posts";

export const metadata = {
  title: "پیش‌نویس‌ها",
};

export default async function DashboardDraftsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const drafts = await getDraftPostsByAuthor(session.user.id);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">پیش‌نویس‌ها</h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            {drafts.length.toLocaleString("fa-IR")} پیش‌نویس ذخیره‌شده
          </p>
        </div>
        <Link
          href="/posts/new"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          نوشته جدید
        </Link>
      </div>

      {drafts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
          <p className="text-stone-600 dark:text-stone-400">پیش‌نویسی ندارید.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {drafts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    آخرین ویرایش: {formatPersianDate(post.createdAt)}
                    {post.slug && (
                      <>
                        {" "}
                        · <span dir="ltr">{post.slug}</span>
                      </>
                    )}
                  </p>
                </div>
                <Link
                  href={`/dashboard/posts/${post.slug}/edit`}
                  className="inline-flex shrink-0 items-center justify-center rounded-lg border border-stone-200 px-4 py-2 text-sm text-stone-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-stone-700 dark:text-stone-300"
                >
                  ادامه ویرایش
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

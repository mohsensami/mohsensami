import Link from "next/link";
import { auth } from "@/lib/auth";
import { getCommentsByAuthor } from "@/lib/comments";
import { formatPersianDate } from "@/lib/utils";

export const metadata = {
  title: "نظرات من",
};

export default async function DashboardCommentsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const comments = await getCommentsByAuthor(session.user.id);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">نظرات من</h1>
        <p className="mt-2 text-stone-600 dark:text-stone-400">
          {comments.length.toLocaleString("fa-IR")} نظر ثبت‌شده
        </p>
      </div>

      {comments.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
          <p className="text-stone-600 dark:text-stone-400">هنوز نظری ثبت نکرده‌اید.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <time>{formatPersianDate(comment.createdAt)}</time>
                <span>·</span>
                <Link
                  href={`/posts/${comment.post.slug}`}
                  className="font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
                >
                  {comment.post.title}
                </Link>
              </div>
              <p className="text-sm leading-7 text-stone-700 dark:text-stone-300">
                {comment.content}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

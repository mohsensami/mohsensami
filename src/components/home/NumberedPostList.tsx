import Link from "next/link";
import type { PostWithRelations } from "@/lib/posts";
import { formatPersianDate } from "@/lib/format";

type NumberedPostListProps = {
  posts: PostWithRelations[];
  startIndex?: number;
};

export function NumberedPostList({ posts, startIndex = 1 }: NumberedPostListProps) {
  if (posts.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-stone-500 dark:text-stone-400">
        هنوز مقاله‌ای منتشر نشده
      </p>
    );
  }

  return (
    <ol className="space-y-1">
      {posts.map((post, index) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.slug}`}
            className="group flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-sm font-bold text-stone-500 transition group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-stone-800 dark:text-stone-400 dark:group-hover:bg-emerald-900 dark:group-hover:text-emerald-300">
              {startIndex + index}
            </span>
            <div className="min-w-0 flex-1">
              <span className="block text-base font-semibold leading-7 text-stone-800 transition group-hover:text-emerald-700 dark:text-stone-200 dark:group-hover:text-emerald-400">
                {post.title}
              </span>
              <span className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                {post.category && (
                  <>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {post.category.name}
                    </span>
                    <span>·</span>
                  </>
                )}
                <span>{formatPersianDate(post.createdAt)}</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

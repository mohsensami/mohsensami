import Link from "next/link";
import type { PostWithRelations } from "@/lib/posts";
import { formatPersianDate } from "@/lib/format";
import { UserAvatar } from "@/components/ui/UserAvatar";

type PostCardProps = {
  post: PostWithRelations;
  index?: number;
};

export function PostCard({ post, index }: PostCardProps) {
  return (
    <article className="group border-b border-stone-100 pb-6 last:border-0 dark:border-stone-800">
      <div className="flex gap-4">
        {index !== undefined && (
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-bold text-stone-500 group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-stone-800 dark:text-stone-400">
            {index}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            {post.category && (
              <Link
                href={`/category/${post.category.slug}`}
                className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300"
              >
                {post.category.name}
              </Link>
            )}
            <span>{formatPersianDate(post.createdAt)}</span>
            <span>·</span>
            <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
          </div>

          <h2 className="mb-2 text-xl font-bold leading-8 text-stone-900 transition group-hover:text-emerald-700 dark:text-stone-100 dark:group-hover:text-emerald-400">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="mb-3 line-clamp-2 text-sm leading-7 text-stone-600 dark:text-stone-400">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
              <UserAvatar user={post.author} size="sm" />
              {post.author.name ?? "نویسنده"}
            </span>
            <Link
              href={`/posts/${post.slug}`}
              className="text-sm font-medium text-emerald-600 transition hover:text-emerald-800 dark:text-emerald-400"
            >
              ادامه مطلب ←
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

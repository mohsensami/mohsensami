import Link from "next/link";
import type { CommentWithPost } from "@/lib/comments";
import { formatPersianDate } from "@/lib/format";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { HomeSectionTitle } from "./HomeSectionTitle";

type LatestCommentsSectionProps = {
  comments: CommentWithPost[];
};

export function LatestCommentsSection({ comments }: LatestCommentsSectionProps) {
  if (comments.length === 0) return null;

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <HomeSectionTitle title="آخرین نظرات" />
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-xl border border-stone-100 bg-stone-50/50 p-4 dark:border-stone-800 dark:bg-stone-950/50"
          >
            <div className="mb-2 flex items-center gap-2">
              <UserAvatar user={comment.author} size="sm" />
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                {comment.author.name ?? "کاربر"}
              </span>
              <span className="text-xs text-stone-400">·</span>
              <time className="text-xs text-stone-500 dark:text-stone-400">
                {formatPersianDate(comment.createdAt)}
              </time>
            </div>
            <p className="mb-2 line-clamp-2 text-sm leading-7 text-stone-600 dark:text-stone-400">
              {comment.content}
            </p>
            <Link
              href={`/posts/${comment.post.slug}`}
              className="text-xs font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
            >
              در «{comment.post.title}»
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

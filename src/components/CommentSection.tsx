"use client";

import { useActionState } from "react";
import { createCommentAction } from "@/lib/actions/comments";
import { formatPersianDate } from "@/lib/utils";
import type { CommentWithAuthor } from "@/lib/comments";
import { UserAvatar } from "@/components/ui/UserAvatar";

const initialState = { error: "", success: false };

export function CommentSection({
  postSlug,
  comments,
  isLoggedIn,
}: {
  postSlug: string;
  comments: CommentWithAuthor[];
  isLoggedIn: boolean;
}) {
  return (
    <section className="mt-10 border-t border-stone-100 pt-8 dark:border-stone-800">
      <h2 className="mb-6 text-xl font-bold text-stone-900 dark:text-stone-100">
        نظرات ({comments.length.toLocaleString("fa-IR")})
      </h2>

      {isLoggedIn ? (
        <CommentForm postSlug={postSlug} />
      ) : (
        <p className="mb-6 rounded-lg bg-stone-50 px-4 py-3 text-sm text-stone-600 dark:bg-stone-800 dark:text-stone-300">
          برای ثبت نظر باید{" "}
          <a
            href={`/login?callbackUrl=/posts/${postSlug}`}
            className="font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
          >
            وارد شوید
          </a>
          .
        </p>
      )}

      <div className="mt-6 space-y-4">
        {comments.length === 0 ? (
          <p className="text-sm text-stone-500 dark:text-stone-400">هنوز نظری ثبت نشده.</p>
        ) : (
          comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border border-stone-100 bg-stone-50/50 p-4 dark:border-stone-800 dark:bg-stone-800/50"
            >
              <div className="mb-2 flex items-center gap-2 text-sm">
                <UserAvatar user={comment.author} size="sm" />
                <span className="font-medium text-stone-900 dark:text-stone-100">
                  {comment.author.name ?? "کاربر"}
                </span>
                <span className="text-stone-400">·</span>
                <time className="text-stone-500 dark:text-stone-400">
                  {formatPersianDate(comment.createdAt)}
                </time>
              </div>
              <p className="text-sm leading-7 text-stone-700 dark:text-stone-300">
                {comment.content}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

function CommentForm({ postSlug }: { postSlug: string }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await createCommentAction(formData);
      if (result?.error) return { error: result.error, success: false };
      return { error: "", success: true };
    },
    initialState,
  );

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="postSlug" value={postSlug} />

      {state?.error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          نظر شما ثبت شد.
        </div>
      )}

      <textarea
        name="content"
        required
        rows={3}
        placeholder="نظر خود را بنویسید..."
        className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
      />

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending ? "در حال ارسال..." : "ارسال نظر"}
      </button>
    </form>
  );
}

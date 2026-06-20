"use client";

import { useActionState } from "react";
import { deletePostAction } from "@/lib/actions/posts";
import Link from "next/link";
import { formatPersianDate } from "@/lib/utils";
import type { PostWithRelations } from "@/lib/posts";

const initialState = { error: "" };

function DeletePostButton({ postId }: { postId: number }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await deletePostAction(formData);
      return result ?? initialState;
    },
    initialState,
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="postId" value={postId} />
      {state?.error && (
        <span className="text-xs text-red-600 dark:text-red-400">{state.error}</span>
      )}
      <button
        type="submit"
        disabled={pending}
        onClick={(e) => {
          if (!confirm("آیا از حذف این نوشته مطمئن هستید؟")) {
            e.preventDefault();
          }
        }}
        className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-60 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
      >
        {pending ? "..." : "حذف"}
      </button>
    </form>
  );
}

export function DashboardPostList({ posts }: { posts: PostWithRelations[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-200 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
        <p className="text-stone-600 dark:text-stone-400">هنوز نوشته‌ای منتشر نکرده‌اید.</p>
        <Link
          href="/posts/new"
          className="mt-4 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          اولین نوشته را بنویسید
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0 flex-1">
            <Link
              href={`/posts/${post.slug}`}
              className="block truncate text-lg font-bold text-stone-900 hover:text-emerald-700 dark:text-stone-100 dark:hover:text-emerald-400"
            >
              {post.title}
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <span>{post.category.name}</span>
              <span>·</span>
              <span dir="ltr">{post.slug}</span>
              <span>·</span>
              <span>{formatPersianDate(post.createdAt)}</span>
              <span>·</span>
              <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={`/dashboard/posts/${post.slug}/edit`}
              className="rounded-lg border border-stone-200 px-3 py-1.5 text-sm text-stone-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
            >
              ویرایش
            </Link>
            <DeletePostButton postId={post.id} />
          </div>
        </article>
      ))}
    </div>
  );
}

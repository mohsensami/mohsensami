"use client";

import { useActionState } from "react";
import { createPostAction, updatePostAction } from "@/lib/actions/posts";

type Category = { id: number; name: string; slug: string };

type PostFormProps = {
  categories: Category[];
  post?: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    categoryId: number;
  };
};

const initialState = { error: "" };

export function PostForm({ categories, post }: PostFormProps) {
  const isEdit = !!post;
  const action = isEdit ? updatePostAction : createPostAction;

  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await action(formData);
      return result ?? initialState;
    },
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5">
      {isEdit && (
        <>
          <input type="hidden" name="postId" value={post.id} />
          <input type="hidden" name="currentSlug" value={post.slug} />
        </>
      )}

      {state?.error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-stone-700">
          عنوان
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={post?.title}
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="عنوان مقاله"
        />
      </div>

      <div>
        <label htmlFor="categoryId" className="mb-1.5 block text-sm font-medium text-stone-700">
          دسته‌بندی
        </label>
        <select
          id="categoryId"
          name="categoryId"
          required
          defaultValue={post?.categoryId ?? ""}
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">انتخاب کنید</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="excerpt" className="mb-1.5 block text-sm font-medium text-stone-700">
          خلاصه
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={3}
          defaultValue={post?.excerpt}
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="خلاصه‌ای کوتاه از مقاله"
        />
      </div>

      <div>
        <label htmlFor="content" className="mb-1.5 block text-sm font-medium text-stone-700">
          متن مقاله (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={14}
          defaultValue={post?.content}
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 font-mono text-sm text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="متن مقاله را بنویسید..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-emerald-600 px-6 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending
          ? isEdit
            ? "در حال ذخیره..."
            : "در حال انتشار..."
          : isEdit
            ? "ذخیره تغییرات"
            : "انتشار مقاله"}
      </button>
    </form>
  );
}

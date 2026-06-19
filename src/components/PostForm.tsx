"use client";

import { useActionState } from "react";
import { createPostAction } from "@/lib/actions/posts";

type Category = { id: number; name: string; slug: string };

const initialState = { error: "" };

export function PostForm({ categories }: { categories: Category[] }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await createPostAction(formData);
      return result ?? initialState;
    },
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5">
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
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 font-mono text-sm text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="متن مقاله را بنویسید..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-emerald-600 px-6 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending ? "در حال انتشار..." : "انتشار مقاله"}
      </button>
    </form>
  );
}

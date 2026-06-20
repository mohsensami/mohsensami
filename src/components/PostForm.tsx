"use client";

import { useActionState, useState } from "react";
import { createPostAction, updatePostAction } from "@/lib/actions/posts";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { ImageUploadField } from "@/components/ImageUploadField";

type Category = { id: number; name: string; slug: string };

type PostFormProps = {
  categories: Category[];
  post?: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage?: string | null;
    tags?: string[];
    categoryId: number;
  };
};

const initialState = { error: "" };

const inputClass =
  "w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-900";

const labelClass = "mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300";

export function PostForm({ categories, post }: PostFormProps) {
  const isEdit = !!post;
  const action = isEdit ? updatePostAction : createPostAction;
  const [content, setContent] = useState(post?.content ?? "");

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

      <input type="hidden" name="content" value={content} />

      {state?.error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="title" className={labelClass}>
          عنوان
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={post?.title}
          className={inputClass}
          placeholder="عنوان مقاله"
        />
      </div>

      <div>
        <label htmlFor="slug" className={labelClass}>
          اسلاگ (انگلیسی)
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          required={!isEdit}
          defaultValue={post?.slug}
          dir="ltr"
          className={`${inputClass} font-mono text-sm`}
          placeholder="my-awesome-post"
        />
        <p className="mt-1 text-xs text-stone-500">
          آدرس URL مقاله — فقط حروف انگلیسی کوچک، اعداد و خط تیره
        </p>
      </div>

      <div>
        <label htmlFor="categoryId" className={labelClass}>
          دسته‌بندی
        </label>
        <select
          id="categoryId"
          name="categoryId"
          required
          defaultValue={post?.categoryId ?? ""}
          className={inputClass}
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
        <label htmlFor="tags" className={labelClass}>
          تگ‌ها
        </label>
        <input
          id="tags"
          name="tags"
          type="text"
          defaultValue={post?.tags?.join(", ")}
          className={inputClass}
          placeholder="react, nextjs, typescript"
          dir="ltr"
        />
        <p className="mt-1 text-xs text-stone-500">با کاما جدا کنید</p>
      </div>

      <ImageUploadField name="coverImage" defaultValue={post?.coverImage} />

      <div>
        <label htmlFor="excerpt" className={labelClass}>
          خلاصه
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={3}
          defaultValue={post?.excerpt}
          className={inputClass}
          placeholder="خلاصه‌ای کوتاه از مقاله"
        />
      </div>

      <div>
        <label className={labelClass}>متن مقاله</label>
        <MarkdownEditor markdown={content} onChange={setContent} />
      </div>

      <button
        type="submit"
        disabled={pending || !content.trim()}
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

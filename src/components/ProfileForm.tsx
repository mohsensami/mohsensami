"use client";

import { useActionState } from "react";
import { updateProfileAction, updateProfileImageAction } from "@/lib/actions/profile";
import { ImageUploadField } from "@/components/ImageUploadField";

type ProfileFormProps = {
  user: {
    name: string | null;
    email: string;
    bio: string | null;
    image: string | null;
  };
};

const inputClass =
  "w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100";

const initialProfileState = { error: "", success: false };

export function ProfileForm({ user }: ProfileFormProps) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialProfileState, formData: FormData) => {
      const result = await updateProfileAction(formData);
      return {
        error: result?.error ?? "",
        success: !!result?.success,
      };
    },
    initialProfileState,
  );

  const [imageState, imageAction, imagePending] = useActionState(
    async (_prev: typeof initialProfileState, formData: FormData) => {
      const result = await updateProfileImageAction(formData);
      return {
        error: "",
        success: !!result?.success,
      };
    },
    initialProfileState,
  );

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <h2 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
          تصویر پروفایل
        </h2>
        <form action={imageAction} className="space-y-4">
          <ImageUploadField name="image" defaultValue={user.image} label="آواتار" />
          <button
            type="submit"
            disabled={imagePending}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {imagePending ? "در حال ذخیره..." : "ذخیره تصویر"}
          </button>
          {imageState?.success && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">تصویر ذخیره شد.</p>
          )}
        </form>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <h2 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
          اطلاعات حساب
        </h2>
        <form action={formAction} className="space-y-4">
          {state?.error && (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
              {state.error}
            </div>
          )}
          {state?.success && (
            <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              اطلاعات با موفقیت ذخیره شد.
            </div>
          )}

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
              نام
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              defaultValue={user.name ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
              ایمیل
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              dir="ltr"
              className={`${inputClass} cursor-not-allowed opacity-60`}
            />
          </div>

          <div>
            <label htmlFor="bio" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
              درباره من
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              defaultValue={user.bio ?? ""}
              className={inputClass}
              placeholder="چند خط درباره خودت بنویس..."
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {pending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </form>
      </section>
    </div>
  );
}

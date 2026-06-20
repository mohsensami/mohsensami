"use client";

import { useActionState, useState } from "react";
import { changePasswordAction, updateProfileAction } from "@/lib/actions/profile";
import { ImageUploadField } from "@/components/ImageUploadField";
import { UserAvatar } from "@/components/ui/UserAvatar";

type ProfileFormProps = {
  user: {
    name: string | null;
    email: string;
    bio: string | null;
    image: string | null;
    hasPassword: boolean;
  };
};

const inputClass =
  "w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100";

const initialState = { error: "", success: false };

export function ProfileForm({ user }: ProfileFormProps) {
  const [avatarUrl, setAvatarUrl] = useState(user.image ?? "");

  const [profileState, profileAction, profilePending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      formData.set("image", avatarUrl);
      const result = await updateProfileAction(formData);
      return { error: result?.error ?? "", success: !!result?.success };
    },
    initialState,
  );

  const [passwordState, passwordAction, passwordPending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await changePasswordAction(formData);
      return { error: result?.error ?? "", success: !!result?.success };
    },
    initialState,
  );

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <h2 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
          پروفایل
        </h2>

        <form action={profileAction} className="space-y-5">
          <div className="flex items-center gap-4">
            <UserAvatar
              user={{ name: user.name, email: user.email, image: avatarUrl || null }}
              size="lg"
            />
            <div className="text-sm text-stone-500 dark:text-stone-400">
              آواتار شما در هدر، مقالات و نظرات نمایش داده می‌شود.
            </div>
          </div>

          <ImageUploadField
            name="image"
            defaultValue={avatarUrl}
            label="آپلود آواتار"
            onChange={setAvatarUrl}
          />

          {profileState.error && (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
              {profileState.error}
            </div>
          )}
          {profileState.success && (
            <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              پروفایل ذخیره شد.
            </div>
          )}

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
              نام
            </label>
            <input id="name" name="name" type="text" required defaultValue={user.name ?? ""} className={inputClass} />
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
            disabled={profilePending}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {profilePending ? "در حال ذخیره..." : "ذخیره پروفایل"}
          </button>
        </form>
      </section>

      {user.hasPassword && (
        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <h2 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
            تغییر رمز عبور
          </h2>

          <form action={passwordAction} className="space-y-4">
            {passwordState.error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
                {passwordState.error}
              </div>
            )}
            {passwordState.success && (
              <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                رمز عبور با موفقیت تغییر کرد.
              </div>
            )}

            <div>
              <label htmlFor="currentPassword" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                رمز فعلی
              </label>
              <input id="currentPassword" name="currentPassword" type="password" required minLength={6} dir="ltr" className={inputClass} />
            </div>
            <div>
              <label htmlFor="newPassword" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                رمز جدید
              </label>
              <input id="newPassword" name="newPassword" type="password" required minLength={6} dir="ltr" className={inputClass} />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
                تکرار رمز جدید
              </label>
              <input id="confirmPassword" name="confirmPassword" type="password" required minLength={6} dir="ltr" className={inputClass} />
            </div>

            <button
              type="submit"
              disabled={passwordPending}
              className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white hover:bg-stone-900 disabled:opacity-60 dark:bg-stone-700"
            >
              {passwordPending ? "در حال ذخیره..." : "تغییر رمز عبور"}
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

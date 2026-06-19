"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth";

const initialState = { error: "" };

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await loginAction(formData);
      return result ?? initialState;
    },
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      {state?.error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
          ایمیل
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          dir="ltr"
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-stone-700">
          رمز عبور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          dir="ltr"
          className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="••••••"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-emerald-600 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}

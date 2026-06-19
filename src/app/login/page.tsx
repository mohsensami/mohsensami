import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";

export const metadata = {
  title: "ورود",
};

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900">ورود به دی‌بلاگ</h1>
        <p className="mt-2 text-sm text-stone-600">
          حساب نداری؟{" "}
          <Link href="/register" className="font-medium text-emerald-600 hover:text-emerald-800">
            ثبت‌نام کن
          </Link>
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <LoginForm />
        <p className="mt-6 rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-500">
          حساب دمو: ali@example.com / 123456
        </p>
      </section>
    </main>
  );
}

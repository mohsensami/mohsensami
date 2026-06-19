import Link from "next/link";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = {
  title: "ثبت‌نام",
};

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900">ثبت‌نام در دی‌بلاگ</h1>
        <p className="mt-2 text-sm text-stone-600">
          قبلاً ثبت‌نام کردی؟{" "}
          <Link href="/login" className="font-medium text-emerald-600 hover:text-emerald-800">
            وارد شو
          </Link>
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <RegisterForm />
      </section>
    </main>
  );
}

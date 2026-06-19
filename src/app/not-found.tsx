import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-stone-300">۴۰۴</h1>
      <h2 className="mt-4 text-xl font-bold text-stone-900">صفحه پیدا نشد</h2>
      <p className="mt-2 text-stone-600">مقاله یا صفحه‌ای که دنبالش بودی وجود نداره.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-emerald-600 px-6 py-2.5 font-medium text-white hover:bg-emerald-700"
      >
        بازگشت به خانه
      </Link>
    </main>
  );
}

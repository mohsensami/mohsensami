import { redirect } from "next/navigation";
import { PostForm } from "@/components/PostForm";
import { getSession } from "@/lib/auth";
import { getAllCategories } from "@/lib/posts";

export const metadata = {
  title: "نوشته جدید",
};

export default async function NewPostPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const categories = getAllCategories();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">نوشته جدید</h1>
        <p className="mt-2 text-stone-600">
          مقاله جدیدت رو بنویس و منتشر کن، {session.name}.
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <PostForm categories={categories} />
      </section>
    </main>
  );
}

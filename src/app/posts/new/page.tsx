import { redirect } from "next/navigation";
import Link from "next/link";
import { PostForm } from "@/components/PostForm";
import { auth } from "@/lib/auth";
import { getAllCategories } from "@/lib/posts";

export const metadata = {
  title: "نوشته جدید",
};

export default async function NewPostPage() {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/posts/new");

  const categories = await getAllCategories();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">نوشته جدید</h1>
        <p className="mt-2 text-stone-600">
          مقاله جدیدت رو بنویس و منتشر کن، {session.user.name}.
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <PostForm categories={categories} />
      </section>
    </main>
  );
}

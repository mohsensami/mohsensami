import Link from "next/link";
import { redirect } from "next/navigation";
import { DashboardPostList } from "@/components/DashboardPostList";
import { auth } from "@/lib/auth";
import { getPostsByAuthor } from "@/lib/posts";

export const metadata = {
  title: "داشبورد",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard");

  const posts = await getPostsByAuthor(session.user.id);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">داشبورد</h1>
          <p className="mt-2 text-stone-600">
            سلام {session.user.name}، نوشته‌های خودت رو اینجا مدیریت کن.
          </p>
        </div>
        <Link
          href="/posts/new"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          نوشته جدید
        </Link>
      </div>

      <DashboardPostList posts={posts} />
    </main>
  );
}

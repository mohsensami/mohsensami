import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Sidebar } from "@/components/Sidebar";
import { getPostBySlug, incrementPostViews } from "@/lib/posts";
import { formatPersianDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "مقاله یافت نشد" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  incrementPostViews(post.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <Link
              href={`/category/${post.category.slug}`}
              className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 hover:bg-emerald-100"
            >
              {post.category.name}
            </Link>
            <span>{formatPersianDate(post.createdAt)}</span>
            <span>·</span>
            <span>{post.author.name}</span>
            <span>·</span>
            <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-11 text-stone-900">
            {post.title}
          </h1>

          <p className="mb-8 border-r-4 border-emerald-500 pr-4 text-lg leading-8 text-stone-600">
            {post.excerpt}
          </p>

          <MarkdownContent content={post.content} />

          <div className="mt-10 border-t border-stone-100 pt-6">
            <Link
              href="/"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-800"
            >
              ← بازگشت به صفحه اصلی
            </Link>
          </div>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}

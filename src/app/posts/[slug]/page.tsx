import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent, TagList } from "@/components/article/ArticleContent";
import { Sidebar } from "@/components/Sidebar";
import { CommentSection } from "@/components/CommentSection";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { getCommentsByPostId } from "@/lib/comments";
import { auth } from "@/lib/auth";
import { getPostBySlug, incrementPostViews } from "@/lib/posts";
import { formatPersianDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "مقاله یافت نشد" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const [post, session] = await Promise.all([getPostBySlug(slug), auth()]);

  if (!post) notFound();

  await incrementPostViews(post.id);
  const comments = await getCommentsByPostId(post.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
          {post.coverImage && (
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
              {post.category && (
                <Link
                  href={`/category/${post.category.slug}`}
                  className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300"
                >
                  {post.category.name}
                </Link>
              )}
              <span>{formatPersianDate(post.createdAt)}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-2">
                <UserAvatar user={post.author} size="sm" />
                {post.author.name ?? "نویسنده"}
              </span>
              <span>·</span>
              <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-11 text-stone-900 dark:text-stone-50">
              {post.title}
            </h1>

            <TagList tags={post.tags} />

            {post.excerpt && (
              <p className="mb-8 border-r-4 border-emerald-500 pr-4 text-lg leading-8 text-stone-600 dark:text-stone-300">
                {post.excerpt}
              </p>
            )}

            <ArticleContent content={post.content} />

            <CommentSection
              postSlug={post.slug}
              comments={comments}
              isLoggedIn={!!session?.user}
            />

            <div className="mt-10 border-t border-stone-100 pt-6 dark:border-stone-800">
              <Link
                href="/"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
              >
                ← بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}

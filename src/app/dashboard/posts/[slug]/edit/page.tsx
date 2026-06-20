import { notFound, redirect } from "next/navigation";
import { PostForm } from "@/components/PostForm";
import { auth } from "@/lib/auth";
import { getAllCategories, getPostBySlugForAuthor } from "@/lib/posts";

export const metadata = {
  title: "ویرایش نوشته",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EditPostPage({ params }: Props) {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/posts");

  const { slug } = await params;
  const [post, categories] = await Promise.all([
    getPostBySlugForAuthor(slug, session.user.id),
    getAllCategories(),
  ]);

  if (!post) notFound();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">ویرایش نوشته</h1>
        <p className="mt-2 text-stone-600 dark:text-stone-400">{post.title}</p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
        <PostForm
          categories={categories}
          post={{
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            coverImage: post.coverImage,
            tags: post.tags,
            categoryId: post.category.id,
          }}
        />
      </section>
    </div>
  );
}

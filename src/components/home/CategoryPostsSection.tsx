import Link from "next/link";
import type { CategoryWithPosts } from "@/lib/posts";
import { HomeSectionTitle } from "./HomeSectionTitle";
import { NumberedPostList } from "./NumberedPostList";

type CategoryPostsSectionProps = {
  categories: CategoryWithPosts[];
};

export function CategoryPostsSection({ categories }: CategoryPostsSectionProps) {
  if (categories.length === 0) return null;

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <section
          key={category.id}
          className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
        >
          <HomeSectionTitle
            title={category.name}
            href={`/category/${category.slug}`}
            linkLabel="مشاهده همه"
          />
          <NumberedPostList posts={category.posts} />
        </section>
      ))}
    </div>
  );
}

export function CategoryPills({ categories }: CategoryPostsSectionProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/category/${cat.slug}`}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
        >
          {cat.name}
          <span className="mr-1.5 text-xs text-stone-400">({cat.posts.length})</span>
        </Link>
      ))}
    </div>
  );
}

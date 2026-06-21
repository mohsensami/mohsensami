"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PostWithRelations } from "@/lib/posts";
import { formatPersianDate } from "@/lib/format";
import { Button } from "@/components/ui/button";

type RelatedPostsCarouselProps = {
  posts: PostWithRelations[];
};

export function RelatedPostsCarousel({ posts }: RelatedPostsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (posts.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "right" ? -320 : 320;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mt-10 border-t border-stone-100 pt-8 dark:border-stone-800">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-stone-900 dark:text-stone-100">
          <span className="h-5 w-1 rounded-full bg-emerald-500" />
          مقالات مرتبط
        </h2>
        <div className="flex gap-1">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => scroll("left")}
            aria-label="اسکرول به چپ"
          >
            <ChevronRight className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => scroll("right")}
            aria-label="اسکرول به راست"
          >
            <ChevronLeft className="size-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {posts.map((post) => (
          <article
            key={post.id}
            className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:border-emerald-200 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-800"
          >
            <Link href={`/posts/${post.slug}`} className="block">
              <div className="relative aspect-[16/9] bg-stone-100 dark:bg-stone-800">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-950">
                    <span className="text-3xl font-bold text-emerald-600/40">P</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                {post.category && (
                  <span className="mb-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {post.category.name}
                  </span>
                )}
                <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-6 text-stone-900 transition group-hover:text-emerald-700 dark:text-stone-100 dark:group-hover:text-emerald-400">
                  {post.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {formatPersianDate(post.createdAt)}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

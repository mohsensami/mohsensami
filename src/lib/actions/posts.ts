"use server";

import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { createPost, slugExists } from "@/lib/posts";
import { slugify } from "@/lib/utils";
import { getDb } from "@/lib/db";
import { categories } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function createPostAction(formData: FormData) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const title = (formData.get("title") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();
  const categoryId = Number(formData.get("categoryId"));

  if (!title || !excerpt || !content || !categoryId) {
    return { error: "لطفاً همه فیلدها را پر کنید" };
  }

  let slug = slugify(title);
  if (!slug) slug = `post-${Date.now()}`;

  if (slugExists(slug)) {
    slug = `${slug}-${Date.now()}`;
  }

  const db = getDb();
  const category = db
    .select()
    .from(categories)
    .where(eq(categories.id, categoryId))
    .get();

  if (!category) {
    return { error: "دسته‌بندی نامعتبر است" };
  }

  const post = createPost({
    title,
    slug,
    excerpt,
    content,
    categoryId,
    authorId: session.id,
  });

  redirect(`/posts/${post.slug}`);
}

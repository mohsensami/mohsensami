"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import {
  createPost,
  deletePost,
  getPostBySlugForAuthor,
  slugExists,
  updatePost,
} from "@/lib/posts";
import { slugify } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

async function requireSession() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }
  return session;
}

function parseTags(raw: string): string[] {
  return raw
    .split(/[,،]/)
    .map((t) => t.trim().replace(/^#/, ""))
    .filter(Boolean)
    .slice(0, 10);
}

function parsePostForm(formData: FormData) {
  return {
    title: (formData.get("title") as string)?.trim(),
    slug: (formData.get("slug") as string)?.trim(),
    excerpt: (formData.get("excerpt") as string)?.trim(),
    content: (formData.get("content") as string)?.trim(),
    coverImage: (formData.get("coverImage") as string)?.trim() || null,
    tags: parseTags((formData.get("tags") as string) ?? ""),
    categoryId: Number(formData.get("categoryId")),
  };
}

async function validateCategory(categoryId: number) {
  return prisma.category.findUnique({ where: { id: categoryId } });
}

async function resolveSlug(
  manualSlug: string,
  title: string,
  excludeId?: number,
): Promise<{ slug?: string; error?: string }> {
  let slug = slugify(manualSlug || title);
  if (!slug) slug = `post-${Date.now()}`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { error: "اسلاگ فقط باید شامل حروف انگلیسی کوچک، اعداد و خط تیره باشد" };
  }

  if (await slugExists(slug, excludeId)) {
    return { error: "این اسلاگ قبلاً استفاده شده است" };
  }

  return { slug };
}

export async function createPostAction(formData: FormData) {
  const session = await requireSession();
  const parsed = parsePostForm(formData);

  if (!parsed.title || !parsed.excerpt || !parsed.content || !parsed.categoryId) {
    return { error: "لطفاً همه فیلدهای الزامی را پر کنید" };
  }

  const category = await validateCategory(parsed.categoryId);
  if (!category) {
    return { error: "دسته‌بندی نامعتبر است" };
  }

  const slugResult = await resolveSlug(parsed.slug, parsed.title);
  if (slugResult.error || !slugResult.slug) {
    return { error: slugResult.error ?? "اسلاگ نامعتبر است" };
  }

  const post = await createPost({
    title: parsed.title,
    slug: slugResult.slug,
    excerpt: parsed.excerpt,
    content: parsed.content,
    coverImage: parsed.coverImage,
    tags: parsed.tags,
    categoryId: parsed.categoryId,
    authorId: session.user.id,
  });

  redirect(`/posts/${post.slug}`);
}

export async function updatePostAction(formData: FormData) {
  const session = await requireSession();
  const postId = Number(formData.get("postId"));
  const currentSlug = (formData.get("currentSlug") as string)?.trim();
  const parsed = parsePostForm(formData);

  if (!postId || !currentSlug || !parsed.title || !parsed.excerpt || !parsed.content || !parsed.categoryId) {
    return { error: "لطفاً همه فیلدهای الزامی را پر کنید" };
  }

  const existing = await getPostBySlugForAuthor(currentSlug, session.user.id);
  if (!existing) {
    return { error: "دسترسی به این نوشته ندارید" };
  }

  const category = await validateCategory(parsed.categoryId);
  if (!category) {
    return { error: "دسته‌بندی نامعتبر است" };
  }

  const slugResult = await resolveSlug(parsed.slug, parsed.title, existing.id);
  if (slugResult.error || !slugResult.slug) {
    return { error: slugResult.error ?? "اسلاگ نامعتبر است" };
  }

  const post = await updatePost(existing.id, {
    title: parsed.title,
    slug: slugResult.slug,
    excerpt: parsed.excerpt,
    content: parsed.content,
    coverImage: parsed.coverImage,
    tags: parsed.tags,
    categoryId: parsed.categoryId,
  });

  revalidatePath("/dashboard/posts");
  revalidatePath(`/posts/${currentSlug}`);
  redirect(`/posts/${post.slug}`);
}

export async function deletePostAction(formData: FormData) {
  const session = await requireSession();
  const postId = Number(formData.get("postId"));

  if (!postId) {
    return { error: "نوشته نامعتبر است" };
  }

  const deleted = await deletePost(postId, session.user.id);
  if (!deleted) {
    return { error: "دسترسی به این نوشته ندارید" };
  }

  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

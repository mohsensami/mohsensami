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

function parsePostForm(formData: FormData) {
  return {
    title: (formData.get("title") as string)?.trim(),
    excerpt: (formData.get("excerpt") as string)?.trim(),
    content: (formData.get("content") as string)?.trim(),
    categoryId: Number(formData.get("categoryId")),
  };
}

async function validateCategory(categoryId: number) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });
  return category ?? null;
}

async function resolveUniqueSlug(title: string, excludeId?: number) {
  let slug = slugify(title);
  if (!slug) slug = `post-${Date.now()}`;

  if (await slugExists(slug, excludeId)) {
    slug = `${slug}-${Date.now()}`;
  }

  return slug;
}

export async function createPostAction(formData: FormData) {
  const session = await requireSession();
  const { title, excerpt, content, categoryId } = parsePostForm(formData);

  if (!title || !excerpt || !content || !categoryId) {
    return { error: "لطفاً همه فیلدها را پر کنید" };
  }

  const category = await validateCategory(categoryId);
  if (!category) {
    return { error: "دسته‌بندی نامعتبر است" };
  }

  const slug = await resolveUniqueSlug(title);

  const post = await createPost({
    title,
    slug,
    excerpt,
    content,
    categoryId,
    authorId: session.user.id,
  });

  redirect(`/posts/${post.slug}`);
}

export async function updatePostAction(formData: FormData) {
  const session = await requireSession();
  const postId = Number(formData.get("postId"));
  const currentSlug = (formData.get("currentSlug") as string)?.trim();
  const { title, excerpt, content, categoryId } = parsePostForm(formData);

  if (!postId || !currentSlug || !title || !excerpt || !content || !categoryId) {
    return { error: "لطفاً همه فیلدها را پر کنید" };
  }

  const existing = await getPostBySlugForAuthor(currentSlug, session.user.id);
  if (!existing) {
    return { error: "دسترسی به این نوشته ندارید" };
  }

  const category = await validateCategory(categoryId);
  if (!category) {
    return { error: "دسته‌بندی نامعتبر است" };
  }

  let slug = slugify(title);
  if (!slug) slug = existing.slug;
  if (slug !== existing.slug && (await slugExists(slug, existing.id))) {
    slug = `${slug}-${Date.now()}`;
  }

  const post = await updatePost(existing.id, {
    title,
    slug,
    excerpt,
    content,
    categoryId,
  });

  revalidatePath("/dashboard");
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

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

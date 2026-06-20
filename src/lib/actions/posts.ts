"use server";

import { PostStatus } from "@prisma/client";
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

type SaveIntent = "draft" | "publish";

async function requireSession() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
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
  const categoryIdRaw = formData.get("categoryId");
  const categoryId = categoryIdRaw ? Number(categoryIdRaw) : null;

  return {
    title: (formData.get("title") as string)?.trim(),
    slug: (formData.get("slug") as string)?.trim(),
    excerpt: (formData.get("excerpt") as string)?.trim(),
    content: (formData.get("content") as string)?.trim(),
    coverImage: (formData.get("coverImage") as string)?.trim() || null,
    tags: parseTags((formData.get("tags") as string) ?? ""),
    categoryId: categoryId && !Number.isNaN(categoryId) ? categoryId : null,
    intent: (formData.get("intent") as SaveIntent) ?? "publish",
  };
}

async function validateCategory(categoryId: number | null) {
  if (!categoryId) return null;
  return prisma.category.findUnique({ where: { id: categoryId } });
}

async function resolveSlug(
  manualSlug: string,
  title: string,
  authorId: string,
  excludeId?: number,
): Promise<{ slug?: string; error?: string }> {
  let slug = slugify(manualSlug || title);
  if (!slug) slug = `draft-${authorId.slice(0, 6)}-${Date.now()}`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { error: "اسلاگ فقط باید شامل حروف انگلیسی کوچک، اعداد و خط تیره باشد" };
  }

  if (await slugExists(slug, excludeId)) {
    return { error: "این اسلاگ قبلاً استفاده شده است" };
  }

  return { slug };
}

function validateForPublish(parsed: ReturnType<typeof parsePostForm>) {
  if (!parsed.title) return "عنوان الزامی است";
  if (!parsed.excerpt) return "خلاصه الزامی است";
  if (!parsed.content) return "متن مقاله الزامی است";
  if (!parsed.categoryId) return "دسته‌بندی الزامی است";
  if (!parsed.slug) return "اسلاگ الزامی است";
  return null;
}

async function savePost(formData: FormData, excludePostId?: number) {
  const session = await requireSession();
  const parsed = parsePostForm(formData);
  const isDraft = parsed.intent === "draft";

  if (!parsed.title) {
    return { error: "عنوان الزامی است" } as const;
  }

  if (!isDraft) {
    const publishError = validateForPublish(parsed);
    if (publishError) return { error: publishError } as const;
  }

  const category = await validateCategory(parsed.categoryId);
  if (parsed.categoryId && !category) {
    return { error: "دسته‌بندی نامعتبر است" } as const;
  }

  const slugResult = await resolveSlug(
    parsed.slug,
    parsed.title,
    session.user.id,
    excludePostId,
  );

  if (slugResult.error || !slugResult.slug) {
    return { error: slugResult.error ?? "اسلاگ نامعتبر است" } as const;
  }

  const status = isDraft ? PostStatus.DRAFT : PostStatus.PUBLISHED;
  const payload = {
    title: parsed.title,
    slug: slugResult.slug,
    excerpt: parsed.excerpt,
    content: parsed.content,
    coverImage: parsed.coverImage,
    tags: parsed.tags,
    status,
    categoryId: parsed.categoryId,
  };

  return { session, payload } as const;
}

export async function createPostAction(formData: FormData) {
  const result = await savePost(formData);
  if ("error" in result) return { error: result.error };

  const post = await createPost({
    ...result.payload,
    authorId: result.session.user.id,
  });

  revalidatePath("/dashboard/drafts");
  revalidatePath("/dashboard/posts");

  if (post.status === PostStatus.DRAFT) {
    redirect("/dashboard/drafts");
  }

  redirect(`/posts/${post.slug}`);
}

export async function updatePostAction(formData: FormData) {
  const session = await requireSession();
  const postId = Number(formData.get("postId"));
  const currentSlug = (formData.get("currentSlug") as string)?.trim();

  if (!postId || !currentSlug) {
    return { error: "شناسه نوشته نامعتبر است" };
  }

  const existing = await getPostBySlugForAuthor(currentSlug, session.user.id);
  if (!existing) {
    return { error: "دسترسی به این نوشته ندارید" };
  }

  const result = await savePost(formData, existing.id);
  if ("error" in result) return { error: result.error };

  const post = await updatePost(existing.id, result.payload);

  revalidatePath("/dashboard/drafts");
  revalidatePath("/dashboard/posts");
  revalidatePath(`/posts/${currentSlug}`);

  if (post.status === PostStatus.DRAFT) {
    redirect("/dashboard/drafts");
  }

  redirect(`/posts/${post.slug}`);
}

export async function deletePostAction(formData: FormData) {
  const session = await requireSession();
  const postId = Number(formData.get("postId"));

  if (!postId) return { error: "نوشته نامعتبر است" };

  const deleted = await deletePost(postId, session.user.id);
  if (!deleted) return { error: "دسترسی به این نوشته ندارید" };

  revalidatePath("/dashboard/posts");
  revalidatePath("/dashboard/drafts");
  redirect("/dashboard/posts");
}

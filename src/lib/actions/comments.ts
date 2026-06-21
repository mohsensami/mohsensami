"use server";

import { revalidatePath, updateTag } from "next/cache";
import { CACHE_TAGS } from "@/lib/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { createComment } from "@/lib/comments";
import { getPostBySlug } from "@/lib/posts";

export async function createCommentAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const content = (formData.get("content") as string)?.trim();
  const postSlug = (formData.get("postSlug") as string)?.trim();

  if (!content || !postSlug) {
    return { error: "لطفاً متن نظر را بنویسید" };
  }

  if (content.length < 2) {
    return { error: "نظر باید حداقل ۲ کاراکتر باشد" };
  }

  const post = await getPostBySlug(postSlug);
  if (!post) {
    return { error: "نوشته یافت نشد" };
  }

  await createComment({
    content,
    postId: post.id,
    authorId: session.user.id,
  });

  revalidatePath(`/posts/${postSlug}`);
  revalidatePath("/");
  updateTag(CACHE_TAGS.comments);
  return { success: true };
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { toggleFavorite } from "@/lib/favorites";

export async function toggleFavoriteAction(postId: number, postSlug: string) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect(`/login?callbackUrl=/posts/${postSlug}`);
  }

  const result = await toggleFavorite(session.user.id, postId);

  revalidatePath(`/posts/${postSlug}`);
  revalidatePath("/dashboard/favorites");

  return result;
}

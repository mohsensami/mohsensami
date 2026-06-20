"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function updateProfileAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/dashboard");

  const name = (formData.get("name") as string)?.trim();
  const bio = (formData.get("bio") as string)?.trim();

  if (!name) {
    return { error: "نام الزامی است" };
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { name, bio: bio || null },
  });

  revalidatePath("/dashboard");
  return { success: true as const };
}

export async function updateProfileImageAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/dashboard");

  const image = (formData.get("image") as string)?.trim();

  await prisma.user.update({
    where: { id: session.user.id },
    data: { image: image || null },
  });

  revalidatePath("/dashboard");
  return { success: true as const };
}

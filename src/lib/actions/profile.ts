"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function updateProfileAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/dashboard");

  const name = (formData.get("name") as string)?.trim();
  const bio = (formData.get("bio") as string)?.trim();
  const image = (formData.get("image") as string)?.trim();

  if (!name) return { error: "نام الزامی است" };

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name,
      bio: bio || null,
      image: image || null,
    },
  });

  revalidatePath("/dashboard");
  return { success: true as const };
}

export async function changePasswordAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/dashboard");

  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: "همه فیلدهای رمز عبور را پر کنید" };
  }

  if (newPassword.length < 6) {
    return { error: "رمز جدید باید حداقل ۶ کاراکتر باشد" };
  }

  if (newPassword !== confirmPassword) {
    return { error: "رمز جدید و تکرار آن یکسان نیستند" };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { passwordHash: true },
  });

  if (!user?.passwordHash) {
    return { error: "این حساب با شبکه اجتماعی ساخته شده و رمز عبور ندارد" };
  }

  if (!bcrypt.compareSync(currentPassword, user.passwordHash)) {
    return { error: "رمز فعلی اشتباه است" };
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { passwordHash: bcrypt.hashSync(newPassword, 10) },
  });

  return { success: true as const };
}

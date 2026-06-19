"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function registerAction(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { error: "لطفاً همه فیلدها را پر کنید" };
  }

  if (password.length < 6) {
    return { error: "رمز عبور باید حداقل ۶ کاراکتر باشد" };
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "این ایمیل قبلاً ثبت شده است" };
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  await prisma.user.create({
    data: { name, email, passwordHash },
  });

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "ثبت‌نام انجام شد اما ورود خودکار ناموفق بود" };
    }
    throw error;
  }

  redirect("/");
}

export async function loginAction(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/";

  if (!email || !password) {
    return { error: "لطفاً ایمیل و رمز عبور را وارد کنید" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "ایمیل یا رمز عبور اشتباه است" };
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}

export async function socialSignInAction(provider: "google" | "github") {
  await signIn(provider, { redirectTo: "/" });
}

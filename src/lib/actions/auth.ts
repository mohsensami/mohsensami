"use server";

import { redirect } from "next/navigation";
import { loginUser, logoutUser, registerUser } from "@/lib/auth";

export async function registerAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await registerUser(name, email, password);
  if (result.error) {
    return { error: result.error };
  }

  redirect("/");
}

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await loginUser(email, password);
  if (result.error) {
    return { error: result.error };
  }

  redirect("/");
}

export async function logoutAction() {
  await logoutUser();
  redirect("/");
}

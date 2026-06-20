import { notFound, redirect } from "next/navigation";
import { ProfileForm } from "@/components/ProfileForm";
import { auth } from "@/lib/auth";
import { getUserProfile } from "@/lib/posts";

export const metadata = {
  title: "پروفایل",
};

export default async function DashboardProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/dashboard");

  const user = await getUserProfile(session.user.id);
  if (!user) notFound();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">پروفایل</h1>
        <p className="mt-2 text-stone-600 dark:text-stone-400">
          {user._count.posts.toLocaleString("fa-IR")} مقاله ·{" "}
          {user._count.comments.toLocaleString("fa-IR")} نظر
        </p>
      </div>

      <ProfileForm
        user={{
          name: user.name,
          email: user.email,
          bio: user.bio,
          image: user.image,
          hasPassword: !!user.passwordHash,
        }}
      />
    </div>
  );
}

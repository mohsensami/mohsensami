import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard");

  async function logoutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <DashboardSidebar
          user={{
            name: session.user.name ?? null,
            email: session.user.email ?? "",
          }}
          logoutAction={logoutAction}
        />
        <div>{children}</div>
      </div>
    </main>
  );
}

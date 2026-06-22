import { redirect } from 'next/navigation';
import { auth, signOut } from '@/lib/auth';
import { getUserProfile } from '@/lib/posts';
import { DashboardSidebar } from '@/components/DashboardSidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user) redirect('/login?callbackUrl=/dashboard');

    const profile = await getUserProfile(session.user.id);

    async function logoutAction() {
        'use server';
        await signOut({ redirectTo: '/' });
    }

    return (
        <main className="container-fluid p-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                <DashboardSidebar
                    user={{
                        name: profile?.name ?? session.user.name ?? null,
                        email: profile?.email ?? session.user.email ?? '',
                        image: profile?.image ?? session.user.image ?? null,
                    }}
                    logoutAction={logoutAction}
                />
                <div>{children}</div>
            </div>
        </main>
    );
}

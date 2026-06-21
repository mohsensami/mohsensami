import Link from 'next/link';
import { redirect } from 'next/navigation';

import { PostCard } from '@/components/PostCard';
import { formatPersianDate } from '@/lib/format';
import { getFavoritePostsByUser, type FavoritePost } from '@/lib/favorites';
import { auth } from '@/lib/auth';

export const metadata = {
    title: 'مقالات مورد علاقه',
};

export default async function DashboardFavoritesPage() {
    const session = await auth();
    if (!session?.user?.id) redirect('/login?callbackUrl=/dashboard/favorites');

    const favorites = await getFavoritePostsByUser(session.user.id);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">مقالات مورد علاقه</h1>
                <p className="mt-2 text-stone-600 dark:text-stone-400">
                    {favorites.length.toLocaleString('fa-IR')} مقاله ذخیره شده
                </p>
            </div>

            {favorites.length === 0 ? (
                <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center dark:border-stone-800 dark:bg-stone-900">
                    <p className="text-stone-600 dark:text-stone-400">
                        هنوز مقاله‌ای به علاقه‌مندی‌ها اضافه نکرده‌اید.
                    </p>
                    <Link
                        href="/posts"
                        className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
                    >
                        مشاهده مقالات
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {favorites.map((post: FavoritePost) => (
                        <div key={post.id} className="space-y-2">
                            <PostCard post={post} />
                            <p className="text-xs text-stone-500 dark:text-stone-400">
                                افزوده شده در {formatPersianDate(post.favoritedAt)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

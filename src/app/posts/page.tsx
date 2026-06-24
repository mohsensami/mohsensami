import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import { getLatestPosts } from '@/lib/posts';

export const metadata = {
    title: 'جدیدترین نوشته‌ها',
};

export default async function PostsPage() {
    const posts = await getLatestPosts(50);

    return (
        <main className="container-fluid p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-50">جدیدترین نوشته‌ها</h1>
                <p className="mt-2 text-stone-600 dark:text-stone-400">همه مقالات منتشرشده در آقای برنامه نویس</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                <section>
                    {posts.length === 0 ? (
                        <div className="flex min-h-96 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900">
                            <p className="text-stone-500 dark:text-stone-400">هنوز مقاله‌ای منتشر نشده.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </section>
                <Sidebar />
            </div>
        </main>
    );
}

import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import { getLatestPosts } from '@/lib/posts';

export const metadata = {
    title: 'جدیدترین نوشته‌ها',
};

export default async function PostsPage() {
    const posts = await getLatestPosts(50);

    return (
        <main className="mx-auto max-w-6xl px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-stone-900">جدیدترین نوشته‌ها</h1>
                <p className="mt-2 text-stone-600">همه مقالات منتشرشده در آقای برنامه نویس</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                    <div className="space-y-6">
                        {posts.length === 0 ? (
                            <p className="text-stone-500">هنوز مقاله‌ای منتشر نشده.</p>
                        ) : (
                            posts.map((post) => <PostCard key={post.id} post={post} />)
                        )}
                    </div>
                </section>
                <Sidebar />
            </div>
        </main>
    );
}

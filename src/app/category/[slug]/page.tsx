import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import { getCategoryBySlug, getPostsByCategory } from '@/lib/posts';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) return { title: 'دسته‌بندی یافت نشد' };
    return { title: category.name };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) notFound();

    const posts = await getPostsByCategory(slug);

    return (
        <main className="container px-4 py-8">
            <div className="mb-8">
                <Link href="/" className="mb-4 inline-block text-sm text-emerald-600 hover:text-emerald-800">
                    ← صفحه اصلی
                </Link>
                <h1 className="text-3xl font-bold text-stone-900">{category.name}</h1>
                <p className="mt-2 text-stone-600">{posts.length.toLocaleString('fa-IR')} مقاله در این دسته</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                    <div className="space-y-6">
                        {posts.length === 0 ? (
                            <p className="text-stone-500">مقاله‌ای در این دسته وجود ندارد.</p>
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

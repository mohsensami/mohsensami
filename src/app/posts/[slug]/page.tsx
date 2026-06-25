import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleContent, TagList } from '@/components/article/ArticleContent';
import { FavoriteButton } from '@/components/FavoriteButton';
import { Sidebar } from '@/components/Sidebar';
import { CommentSection } from '@/components/CommentSection';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { getCommentsByPostId } from '@/lib/comments';
import { auth } from '@/lib/auth';
import { isPostFavorited } from '@/lib/favorites';
import { getPostBySlug, getRelatedPostsCached, incrementPostViews } from '@/lib/posts';
import { formatPersianDate } from '@/lib/format';
import { RelatedPostsCarousel } from '@/components/RelatedPostsCarousel';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'مقاله یافت نشد' };
    return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const [post, session] = await Promise.all([getPostBySlug(slug), auth()]);

    if (!post) notFound();

    await incrementPostViews(post.id);
    const [comments, relatedPosts] = await Promise.all([
        getCommentsByPostId(post.id),
        getRelatedPostsCached(post.id, post.category?.id ?? null, 8),
    ]);
    const favorited = session?.user?.id ? await isPostFavorited(session.user.id, post.id) : false;

    return (
        <main className="container-fluid p-4 ">
            <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-2 col-span-12 h-screen lg:sticky top-4">
                    <Sidebar />
                </div>
                <article className="lg:col-span-10 col-span-12 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900 article-content">
                    {post.coverImage && (
                        <div className="relative aspect-[21/9] w-full">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                    )}

                    <div className="p-6 md:p-8">
                        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                            {post.category && (
                                <Link
                                    href={`/category/${post.category.slug}`}
                                    className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300"
                                >
                                    {post.category.name}
                                </Link>
                            )}
                            <span>{formatPersianDate(post.createdAt)}</span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-2">
                                <UserAvatar user={post.author} size="sm" />
                                {post.author.name ?? 'نویسنده'}
                            </span>
                            <span>·</span>
                            <span>{post.views.toLocaleString('fa-IR')} بازدید</span>
                        </div>

                        <div className="mb-4 flex items-start justify-between gap-4">
                            <h1 className="flex-1 text-3xl font-bold leading-11 text-stone-900 dark:text-stone-50">
                                {post.title}
                            </h1>
                            {session?.user?.id === post.author.id && (
                                <Link
                                    href={`/posts/${post.slug}/edit`}
                                    className="mt-1 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition dark:bg-emerald-700 dark:hover:bg-emerald-600"
                                >
                                    ✏️ ویرایش مقاله
                                </Link>
                            )}
                        </div>

                        <TagList tags={post.tags} />

                        {session?.user && (
                            <div className="mb-6">
                                <FavoriteButton postId={post.id} postSlug={post.slug} initialFavorited={favorited} />
                            </div>
                        )}

                        {post.excerpt && (
                            <p className="mb-8 border-r-4 border-emerald-500 pr-4 text-lg leading-8 text-stone-600 dark:text-stone-300">
                                {post.excerpt}
                            </p>
                        )}

                        <ArticleContent content={post.content} />

                        <RelatedPostsCarousel posts={relatedPosts} />

                        <CommentSection postSlug={post.slug} comments={comments} isLoggedIn={!!session?.user} />

                        <div className="mt-10 border-t border-stone-100 pt-6 dark:border-stone-800">
                            <Link
                                href="/"
                                className="text-sm font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400"
                            >
                                ← بازگشت به صفحه اصلی
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

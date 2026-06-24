import Link from 'next/link';
import Image from 'next/image';
import type { PostWithRelations } from '@/lib/posts';
import { formatPersianDate } from '@/lib/format';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type PostCardProps = {
    post: PostWithRelations;
};

export function PostCard({ post }: PostCardProps) {
    return (
        <div className="group block transition-all hover:shadow-lg">
            <Card className="overflow-hidden border-stone-200 bg-white transition-all hover:border-emerald-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-700">
                {/* Cover Image */}
                {post.coverImage && (
                    <div className="relative aspect-[21/9] w-full overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            unoptimized
                        />
                    </div>
                )}

                {/* Content */}
                <CardHeader className="space-y-3">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-2">
                        {post.category && (
                            <Link
                                href={`/category/${post.category.slug}`}
                                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900"
                            >
                                {post.category.name}
                            </Link>
                        )}
                        <span className="text-xs text-stone-500 dark:text-stone-400">
                            {formatPersianDate(post.createdAt)}
                        </span>
                        <span className="text-xs text-stone-400 dark:text-stone-500">·</span>
                        <span className="text-xs text-stone-500 dark:text-stone-400">
                            {post.views.toLocaleString('fa-IR')} بازدید
                        </span>
                    </div>

                    {/* Title */}
                    <CardTitle className="line-clamp-2 text-xl transition group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                        <Link href={`/posts/${post.slug}`} className="block">
                            {post.title}
                        </Link>
                    </CardTitle>

                    {/* Excerpt */}
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>

                {/* Footer */}
                <CardContent className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <UserAvatar user={post.author} size="sm" />
                        <span className="text-sm text-stone-600 dark:text-stone-400">
                            {post.author.name ?? 'نویسنده'}
                        </span>
                    </div>
                    <span className="text-sm font-medium text-emerald-600 transition group-hover:text-emerald-700 dark:text-emerald-400 dark:group-hover:text-emerald-300">
                        ادامه مطلب ←
                    </span>
                </CardContent>
            </Card>
        </div>
    );
}

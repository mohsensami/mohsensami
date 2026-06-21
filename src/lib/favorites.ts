import { prisma } from "./prisma";
import { postInclude, type PostWithRelations } from "./posts";

function mapFavoritePost(
  favorite: {
    createdAt: Date;
    post: {
      id: number;
      title: string;
      slug: string;
      excerpt: string;
      content: string;
      coverImage: string | null;
      tags: string[];
      status: import("@prisma/client").PostStatus;
      views: number;
      createdAt: Date;
      category: { id: number; name: string; slug: string } | null;
      author: { id: string; name: string | null; image: string | null };
    };
  },
): PostWithRelations & { favoritedAt: Date } {
  const { post, createdAt } = favorite;
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.coverImage,
    tags: post.tags,
    status: post.status,
    views: post.views,
    createdAt: post.createdAt,
    category: post.category,
    author: post.author,
    favoritedAt: createdAt,
  };
}

export async function isPostFavorited(userId: string, postId: number) {
  const favorite = await prisma.favorite.findUnique({
    where: { userId_postId: { userId, postId } },
    select: { id: true },
  });
  return !!favorite;
}

export async function toggleFavorite(userId: string, postId: number) {
  const existing = await prisma.favorite.findUnique({
    where: { userId_postId: { userId, postId } },
  });

  if (existing) {
    await prisma.favorite.delete({ where: { id: existing.id } });
    return { favorited: false };
  }

  await prisma.favorite.create({ data: { userId, postId } });
  return { favorited: true };
}

export async function getFavoritePostsByUser(userId: string) {
  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: { post: { include: postInclude } },
    orderBy: { createdAt: "desc" },
  });

  return favorites.map(mapFavoritePost);
}

import { prisma } from "./prisma";

export type PostWithRelations = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  views: number;
  createdAt: Date;
  category: { id: number; name: string; slug: string };
  author: { id: string; name: string | null };
};

const postInclude = {
  category: true,
  author: { select: { id: true, name: true } },
} as const;

function mapPost(post: {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  views: number;
  createdAt: Date;
  category: { id: number; name: string; slug: string };
  author: { id: string; name: string | null };
}): PostWithRelations {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.coverImage,
    tags: post.tags,
    views: post.views,
    createdAt: post.createdAt,
    category: post.category,
    author: post.author,
  };
}

export async function getLatestPosts(limit = 10): Promise<PostWithRelations[]> {
  const posts = await prisma.post.findMany({
    include: postInclude,
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getPopularPosts(limit = 5): Promise<PostWithRelations[]> {
  const posts = await prisma.post.findMany({
    include: postInclude,
    orderBy: { views: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getPostBySlug(
  slug: string,
): Promise<PostWithRelations | null> {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: postInclude,
  });
  return post ? mapPost(post) : null;
}

export async function incrementPostViews(postId: number) {
  await prisma.post.update({
    where: { id: postId },
    data: { views: { increment: 1 } },
  });
}

export async function getPostsByCategory(
  categorySlug: string,
  limit = 20,
): Promise<PostWithRelations[]> {
  const posts = await prisma.post.findMany({
    where: { category: { slug: categorySlug } },
    include: postInclude,
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getAllCategories() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
    orderBy: { name: "asc" },
  });

  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    postCount: cat._count.posts,
  }));
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({ where: { slug } });
}

export async function getPostsByAuthor(authorId: string) {
  const posts = await prisma.post.findMany({
    where: { authorId },
    include: postInclude,
    orderBy: { createdAt: "desc" },
  });
  return posts.map(mapPost);
}

export async function getPostBySlugForAuthor(slug: string, authorId: string) {
  const post = await prisma.post.findFirst({
    where: { slug, authorId },
    include: postInclude,
  });
  return post ? mapPost(post) : null;
}

export async function slugExists(slug: string, excludeId?: number) {
  const existing = await prisma.post.findFirst({
    where: {
      slug,
      ...(excludeId ? { NOT: { id: excludeId } } : {}),
    },
    select: { id: true },
  });
  return !!existing;
}

export async function createPost(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  tags: string[];
  categoryId: number;
  authorId: string;
}) {
  return prisma.post.create({ data });
}

export async function updatePost(
  postId: number,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: string | null;
    tags: string[];
    categoryId: number;
  },
) {
  return prisma.post.update({
    where: { id: postId },
    data,
  });
}

export async function deletePost(postId: number, authorId: string) {
  const post = await prisma.post.findFirst({
    where: { id: postId, authorId },
  });
  if (!post) return false;

  await prisma.post.delete({ where: { id: postId } });
  return true;
}

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      bio: true,
      createdAt: true,
      _count: { select: { posts: true, comments: true } },
    },
  });
}

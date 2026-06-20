import { PostStatus, type Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type AuthorPreview = {
  id: string;
  name: string | null;
  image: string | null;
};

export type PostWithRelations = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  status: PostStatus;
  views: number;
  createdAt: Date;
  category: { id: number; name: string; slug: string } | null;
  author: AuthorPreview;
};

const authorSelect = { id: true, name: true, image: true } as const;

const postInclude = {
  category: true,
  author: { select: authorSelect },
} satisfies Prisma.PostInclude;

type RawPost = Prisma.PostGetPayload<{ include: typeof postInclude }>;

function mapPost(post: RawPost): PostWithRelations {
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
  };
}

const publishedFilter = { status: PostStatus.PUBLISHED } as const;

export async function getLatestPosts(limit = 10): Promise<PostWithRelations[]> {
  const posts = await prisma.post.findMany({
    where: publishedFilter,
    include: postInclude,
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getPopularPosts(limit = 5): Promise<PostWithRelations[]> {
  const posts = await prisma.post.findMany({
    where: publishedFilter,
    include: postInclude,
    orderBy: { views: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<PostWithRelations | null> {
  const post = await prisma.post.findFirst({
    where: { slug, ...publishedFilter },
    include: postInclude,
  });
  return post ? mapPost(post) : null;
}

export async function getPostBySlugIncludingDrafts(
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
    where: { ...publishedFilter, category: { slug: categorySlug } },
    include: postInclude,
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return posts.map(mapPost);
}

export async function getAllCategories() {
  const categories = await prisma.category.findMany({
    include: {
      posts: {
        where: publishedFilter,
        select: { id: true },
      },
    },
    orderBy: { name: "asc" },
  });

  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    postCount: cat.posts.length,
  }));
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({ where: { slug } });
}

export async function getPublishedPostsByAuthor(authorId: string) {
  const posts = await prisma.post.findMany({
    where: { authorId, ...publishedFilter },
    include: postInclude,
    orderBy: { createdAt: "desc" },
  });
  return posts.map(mapPost);
}

export async function getDraftPostsByAuthor(authorId: string) {
  const posts = await prisma.post.findMany({
    where: { authorId, status: PostStatus.DRAFT },
    include: postInclude,
    orderBy: { updatedAt: "desc" },
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
    where: { slug, ...(excludeId ? { NOT: { id: excludeId } } : {}) },
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
  status: PostStatus;
  categoryId?: number | null;
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
    status: PostStatus;
    categoryId?: number | null;
  },
) {
  return prisma.post.update({ where: { id: postId }, data });
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
      passwordHash: true,
      createdAt: true,
      _count: { select: { posts: true, comments: true } },
    },
  });
}

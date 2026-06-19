import { desc, eq, sql } from "drizzle-orm";
import { getDb } from "./db";
import { categories, posts, users } from "./db/schema";

export type PostWithRelations = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  views: number;
  createdAt: Date;
  category: { id: number; name: string; slug: string };
  author: { id: number; name: string };
};

function mapPost(row: {
  posts: typeof posts.$inferSelect;
  categories: typeof categories.$inferSelect;
  users: typeof users.$inferSelect;
}): PostWithRelations {
  return {
    id: row.posts.id,
    title: row.posts.title,
    slug: row.posts.slug,
    excerpt: row.posts.excerpt,
    content: row.posts.content,
    views: row.posts.views,
    createdAt: row.posts.createdAt,
    category: {
      id: row.categories.id,
      name: row.categories.name,
      slug: row.categories.slug,
    },
    author: { id: row.users.id, name: row.users.name },
  };
}

export function getLatestPosts(limit = 10): PostWithRelations[] {
  const db = getDb();
  const rows = db
    .select()
    .from(posts)
    .innerJoin(categories, eq(posts.categoryId, categories.id))
    .innerJoin(users, eq(posts.authorId, users.id))
    .orderBy(desc(posts.createdAt))
    .limit(limit)
    .all();

  return rows.map(mapPost);
}

export function getPopularPosts(limit = 5): PostWithRelations[] {
  const db = getDb();
  const rows = db
    .select()
    .from(posts)
    .innerJoin(categories, eq(posts.categoryId, categories.id))
    .innerJoin(users, eq(posts.authorId, users.id))
    .orderBy(desc(posts.views))
    .limit(limit)
    .all();

  return rows.map(mapPost);
}

export function getPostBySlug(slug: string): PostWithRelations | null {
  const db = getDb();
  const row = db
    .select()
    .from(posts)
    .innerJoin(categories, eq(posts.categoryId, categories.id))
    .innerJoin(users, eq(posts.authorId, users.id))
    .where(eq(posts.slug, slug))
    .get();

  if (!row) return null;
  return mapPost(row);
}

export function incrementPostViews(postId: number) {
  const db = getDb();
  db.update(posts)
    .set({ views: sql`${posts.views} + 1` })
    .where(eq(posts.id, postId))
    .run();
}

export function getPostsByCategory(
  categorySlug: string,
  limit = 20,
): PostWithRelations[] {
  const db = getDb();
  const rows = db
    .select()
    .from(posts)
    .innerJoin(categories, eq(posts.categoryId, categories.id))
    .innerJoin(users, eq(posts.authorId, users.id))
    .where(eq(categories.slug, categorySlug))
    .orderBy(desc(posts.createdAt))
    .limit(limit)
    .all();

  return rows.map(mapPost);
}

export function getAllCategories() {
  const db = getDb();
  return db
    .select({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      postCount: sql<number>`count(${posts.id})`.as("post_count"),
    })
    .from(categories)
    .leftJoin(posts, eq(posts.categoryId, categories.id))
    .groupBy(categories.id)
    .orderBy(categories.name)
    .all();
}

export function getCategoryBySlug(slug: string) {
  const db = getDb();
  return db
    .select()
    .from(categories)
    .where(eq(categories.slug, slug))
    .get();
}

export function createPost(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categoryId: number;
  authorId: number;
}) {
  const db = getDb();
  const [post] = db
    .insert(posts)
    .values({
      ...data,
      updatedAt: new Date(),
    })
    .returning()
    .all();

  return post;
}

export function slugExists(slug: string): boolean {
  const db = getDb();
  const existing = db
    .select({ id: posts.id })
    .from(posts)
    .where(eq(posts.slug, slug))
    .get();
  return !!existing;
}

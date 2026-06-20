import { prisma } from "./prisma";

export type CommentWithAuthor = {
  id: number;
  content: string;
  createdAt: Date;
  author: { id: string; name: string | null; image: string | null };
};

export type CommentWithPost = CommentWithAuthor & {
  post: { id: number; title: string; slug: string };
};

export async function getCommentsByPostId(
  postId: number,
): Promise<CommentWithAuthor[]> {
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: {
      author: { select: { id: true, name: true, image: true } },
    },
    orderBy: { createdAt: "asc" },
  });

  return comments.map((comment) => ({
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
    author: comment.author,
  }));
}

export async function getCommentsByAuthor(
  authorId: string,
): Promise<CommentWithPost[]> {
  const comments = await prisma.comment.findMany({
    where: { authorId },
    include: {
      author: { select: { id: true, name: true, image: true } },
      post: { select: { id: true, title: true, slug: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return comments.map((comment) => ({
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
    author: comment.author,
    post: comment.post,
  }));
}

export async function createComment(data: {
  content: string;
  postId: number;
  authorId: string;
}) {
  return prisma.comment.create({
    data,
    include: {
      author: { select: { id: true, name: true, image: true } },
    },
  });
}

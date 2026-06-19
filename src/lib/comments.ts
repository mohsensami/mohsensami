import { prisma } from "./prisma";

export type CommentWithAuthor = {
  id: number;
  content: string;
  createdAt: Date;
  author: { id: string; name: string | null; image: string | null };
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

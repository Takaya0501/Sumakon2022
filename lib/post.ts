import { prisma } from './prisma';

export const Post = async (Picture: string, Name: string, Sen: string, Kariloce: string) => {
  const createPost = await prisma.Post.create({
    data: {
      Picture,
      Name,
      Sen,
      Kariloce,
    },
  });
  return createPost;
};

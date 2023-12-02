import { Prisma } from '@prisma/client';
import prisma from '../../prisma/prisma-client';

const createUserPost = async (input: Prisma.PostUncheckedCreateInput) => {
  return await prisma.post.create({
    data: input,
  });
};

const findUserPost = async (where: Prisma.PostWhereUniqueInput) => {
  return await prisma.post.findUnique({
    where,
  });
};

const findUserAllPost = async (where: Prisma.PostWhereInput) => {
  return await prisma.post.findMany({
    where,
  });
};

const updateUserPost = async (
  where: Prisma.PostWhereUniqueInput,
  data: Prisma.PostUpdateInput,
) => {
  return await prisma.post.update({
    where,
    data,
  });
};

const deleteUserPost = async (where: Prisma.PostWhereUniqueInput) => {
  return await prisma.post.delete({
    where,
  });
};

export {
  createUserPost,
  findUserPost,
  findUserAllPost,
  updateUserPost,
  deleteUserPost,
};

import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createPost = async (input: Prisma.PostCreateInput) => {
  return (await prisma.post.create({
    data: input,
  }))
}

const findPost = async (
  where: Prisma.PostWhereUniqueInput
) => {
  return (await prisma.post.findUnique({
    where
  }))
}

const findAllPost = async (
  where: Prisma.PostWhereUniqueInput
) => {
  return (await prisma.post.findMany({
    where
  }))
}

const updatePost = async (
  where: Prisma.PostWhereUniqueInput,
  data: Prisma.PostUpdateInput
) => {
  return (await prisma.post.update({ 
    where, 
    data, 
  }));
};

const deletePost = async (
  where: Prisma.PostWhereUniqueInput
) => {
  return (await prisma.post.delete({ 
    where
  }));
};

export {
  createPost,
  findPost,
  findAllPost,
  updatePost,
  deletePost
};
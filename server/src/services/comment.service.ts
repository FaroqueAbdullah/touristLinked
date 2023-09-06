import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createComment = async (input: Prisma.CommentCreateInput) => {
  return (await prisma.comment.create({
    data: input,
  }))
}

const findComment = async (
  where: Prisma.CommentWhereUniqueInput
) => {
  return (await prisma.comment.findUnique({
    where
  }))
}

const findAllComment = async (
  where: Prisma.CommentWhereUniqueInput
) => {
  return (await prisma.comment.findMany({
    where
  }))
}

const updateComment = async (
  where: Prisma.CommentWhereUniqueInput,
  data: Prisma.CommentUpdateInput
) => {
  return (await prisma.comment.update({ 
    where, 
    data, 
  }));
};

const deleteComment = async (
  where: Prisma.CommentWhereUniqueInput
) => {
  return (await prisma.comment.delete({ 
    where
  }));
};

export {
  createComment,
  findComment,
  findAllComment,
  updateComment,
  deleteComment
};
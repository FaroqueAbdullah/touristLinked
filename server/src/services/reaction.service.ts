import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createReaction = async (input: Prisma.ReactionCreateInput) => {
  return (await prisma.reaction.create({
    data: input,
  }))
}

const findReaction = async (
  where: Prisma.ReactionWhereUniqueInput
) => {
  return (await prisma.reaction.findUnique({
    where
  }))
}

const findAllReaction = async (
  where: Prisma.ReactionWhereUniqueInput
) => {
  return (await prisma.reaction.findMany({
    where
  }))
}

const updateReaction = async (
  where: Prisma.ReactionWhereUniqueInput,
  data: Prisma.ReactionUpdateInput
) => {
  return (await prisma.reaction.update({ 
    where, 
    data, 
  }));
};

const deleteReaction = async (
  where: Prisma.ReactionWhereUniqueInput
) => {
  return (await prisma.reaction.delete({ 
    where
  }));
};

export {
  createReaction,
  findReaction,
  findAllReaction,
  updateReaction,
  deleteReaction
};
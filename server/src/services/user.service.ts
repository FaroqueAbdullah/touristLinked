import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createUser = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  }))
}

const findUser = async (
  where: Prisma.UserWhereUniqueInput
) => {
  return (await prisma.user.findUnique({
    where
  }))
}

const updateUser = async (
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput
) => {
  return (await prisma.user.update({ 
    where, 
    data, 
  }));
};

export {
  createUser,
  findUser,
  updateUser
};

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/prisma-client';

const createUserEvent = async (input: Prisma.EventUncheckedCreateInput) => {
  return await prisma.event.create({
    data: input,
  });
};

const findUserEvent = async (where: Prisma.EventWhereUniqueInput) => {
  return await prisma.event.findUnique({
    where,
  });
};

const findUserAllEvent = async (where: Prisma.EventWhereInput) => {
  return await prisma.event.findMany({
    where,
  });
};

const updateUserEvent = async (
  where: Prisma.EventWhereUniqueInput,
  data: Prisma.EventUpdateInput,
) => {
  return await prisma.event.update({
    where,
    data,
  });
};

const deleteUserEvent = async (where: Prisma.EventWhereUniqueInput) => {
  return await prisma.event.delete({
    where,
  });
};

export {
  createUserEvent,
  findUserEvent,
  findUserAllEvent,
  updateUserEvent,
  deleteUserEvent,
};

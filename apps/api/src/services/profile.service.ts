import { Prisma } from '@prisma/client';
import prisma from '../../prisma/prisma-client';

const createUserProfile = async (input: Prisma.ProfileUncheckedCreateInput) => {
  return await prisma.profile.create({
    data: input,
  });
};

const findUserProfile = async (where: Prisma.ProfileWhereUniqueInput) => {
  return await prisma.profile.findUnique({
    where,
  });
};

const updateUserProfile = async (
  where: Prisma.ProfileWhereUniqueInput,
  data: Prisma.ProfileUncheckedCreateInput,
) => {
  return await prisma.profile.update({
    where,
    data,
  });
};

const updateOrCreateUserProfile = async (
  where: Prisma.ProfileWhereUniqueInput,
  data: Prisma.ProfileUncheckedCreateInput,
) => {
  return await prisma.profile.upsert({
    where,
    update: {
      ...data,
    },
    create: {
      ...data,
    },
  });
};

const deleteUserProfile = async (where: Prisma.ProfileWhereUniqueInput) => {
  return await prisma.profile.delete({
    where,
  });
};

export {
  createUserProfile,
  findUserProfile,
  updateUserProfile,
  updateOrCreateUserProfile,
  deleteUserProfile,
};

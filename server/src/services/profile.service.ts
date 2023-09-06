import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createProfile = async (input: Prisma.ProfileCreateInput) => {
  return (await prisma.profile.create({
    data: input,
  }))
}

const findProfile = async (
  where: Prisma.ProfileWhereUniqueInput
) => {
  return (await prisma.profile.findUnique({
    where
  }))
}

const updateProfile = async (
  where: Prisma.ProfileWhereUniqueInput,
  data: Prisma.ProfileUpdateInput
) => {
  return (await prisma.profile.update({ 
    where, 
    data, 
  }));
};

const deleteProfile = async (
  where: Prisma.ProfileWhereUniqueInput
) => {
  return (await prisma.profile.delete({ 
    where
  }));
};

export {
  createProfile,
  findProfile,
  updateProfile,
  deleteProfile
};
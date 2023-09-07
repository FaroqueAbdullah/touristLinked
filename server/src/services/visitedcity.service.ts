import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createVisitedLocation = async (input: Prisma.VisitedLocationCreateInput) => {
  return (await prisma.visitedLocation.create({
    data: input,
  }))
}

const findVisitedLocation = async (
  where: Prisma.VisitedLocationWhereUniqueInput
) => {
  return (await prisma.visitedLocation.findUnique({
    where
  }))
}

const findAllVisitedLocation = async (
  where: Prisma.VisitedLocationWhereUniqueInput
) => {
  return (await prisma.visitedLocation.findMany({
    where
  }))
}

const updateVisitedLocation = async (
  where: Prisma.VisitedLocationWhereUniqueInput,
  data: Prisma.VisitedLocationUpdateInput
) => {
  return (await prisma.visitedLocation.update({ 
    where, 
    data, 
  }));
};

const deleteVisitedLocation = async (
  where: Prisma.VisitedLocationWhereUniqueInput
) => {
  return (await prisma.visitedLocation.delete({ 
    where
  }));
};

export {
  createVisitedLocation,
  findVisitedLocation,
  findAllVisitedLocation,
  updateVisitedLocation,
  deleteVisitedLocation
};
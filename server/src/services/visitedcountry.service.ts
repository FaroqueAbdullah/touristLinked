import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prisma-client";

const createVisitedCountry = async (input: Prisma.VisitedCountryCreateInput) => {
  return (await prisma.visitedCountry.create({
    data: input,
  }))
}

const findVisitedCountry = async (
  where: Prisma.VisitedCountryWhereUniqueInput
) => {
  return (await prisma.visitedCountry.findUnique({
    where
  }))
}

const findAllVisitedCountry = async (
  where: Prisma.VisitedCountryWhereUniqueInput
) => {
  return (await prisma.visitedCountry.findMany({
    where
  }))
}

const updateVisitedCountry = async (
  where: Prisma.VisitedCountryWhereUniqueInput,
  data: Prisma.VisitedCountryUpdateInput
) => {
  return (await prisma.visitedCountry.update({ 
    where, 
    data, 
  }));
};

const deleteVisitedCountry = async (
  where: Prisma.VisitedCountryWhereUniqueInput
) => {
  return (await prisma.visitedCountry.delete({ 
    where
  }));
};

export {
  createVisitedCountry,
  findVisitedCountry,
  findAllVisitedCountry,
  updateVisitedCountry,
  deleteVisitedCountry
};
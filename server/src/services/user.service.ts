import prisma from "../../prisma/prisma-client";
import { UserDataInputInterface } from "../interfaces/UserInterface";
import generateKey from '../utils/generateRandomCode';
import { matchPasswordHash, getPasswordHash } from "../utils/passwordHash";


const userByEmail = async ( email: string ) => {
  const queryData = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return queryData;
}

const userByName = async ( firstName: string ) => {
  const queryData = await prisma.user.findMany({
    where: {
      firstName
    }
  })

  return queryData;
}

const userById = async ( id: number ) => {
  const queryData = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return queryData;
}

const createUser = async (user: UserDataInputInterface) => {
  const passwordHash = await getPasswordHash(user.password);
  const accountActivationToken = generateKey().toString();

  const { password, confirmPassword, ...userData} = user

  const createdData = await prisma.user.create({
    data: { passwordHash, accountActivationToken, ...userData }
  })

  return createdData;
};

const updateUser = async (id: number, obj: object) => {

  const updatedData = await prisma.user.update({
    where: {
      id
    },
    data: obj
  })

  return updatedData;
};

const validateUser = async (email: string, password: string) => {
  console.log('email ', email)

  const user = await userByEmail( email )

  if (user) {
    const match = await matchPasswordHash(password, user.passwordHash);
    const { passwordHash, passwordResetToken, accountActivationToken, ...rest } = user;
    return match ? rest : undefined;
  }

  return undefined;
};

const changePassword = async (id: number, newPassword: string) => {
  const passwordHash = await getPasswordHash(newPassword);
  const passwordResetToken = null
  const user = await updateUser(id, { passwordHash, passwordResetToken })

  return user
};

export {
  userByEmail,
  userByName,
  userById,
  createUser,
  updateUser,
  validateUser,
  changePassword,
};

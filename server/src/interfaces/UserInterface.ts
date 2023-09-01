export interface UserDataInputInterface {
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber?: string,
  password: string,
  confirmPassword: string
}

export interface UserCreateInput {
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber?: string,
  passwordResetToken?: string,
  passwordHash: string,
  accountActivationToken?: string
}

export type ValidateFunction = (data: any) => any;
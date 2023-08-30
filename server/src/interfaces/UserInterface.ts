export interface UserInterface {
  _id?: string,
  firstName: string,
  lastName: string,
  username: string,
  country: string,
  address: string,
  phoneNumber: string,
  email: string,
  password: string,
  confirmPassword: string
}

export type ValidateFunction = (data: any) => any;
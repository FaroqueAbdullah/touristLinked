import { object, string, TypeOf, z } from 'zod';


export const registerUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required"
    }),
    firstName: string({
      required_error: "first name is required"
    }),
    lastName: string({
      required_error: "last name is required"
    }),
    phoneNumber: string({
      required_error: "phone number is required"
    }),
    password: string({
      required_error: "password is required"
    }),
    confirmPassword: string({
      required_error: "confirm password is required"
    })
  }).refine(( data ) => data.password === data.confirmPassword, {
    message: "Passwords don't match"
  })
})

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Invalid email or password'),
  }),
});

export type RegisterUserInputType = z.infer< typeof registerUserSchema >["body"]
export type LoginUserInputType = z.infer< typeof loginUserSchema >["body"]
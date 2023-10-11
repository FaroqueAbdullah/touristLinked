import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

import {
  sendAccountCreatedEmail,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail,
} from '../../email';
import { createUser, findUser, updateUser } from '../../services/user.service';
import generateKey from '../../utils/generateRandomCode';
import { getPasswordHash, matchPasswordHash } from '../../utils/passwordHash';
import {
  ForgotPasswordInputType,
  LoginUserInputType,
  RegisterUserInputType,
  ResetPasswordInputType,
  TokenVerifyUserInputType,
} from '../../schemas/user.schema';
import { BadRequest, NotFound } from '../../utils/appError';
import { createJwt, validateJwt } from '../../utils/jwtToken';
import { cookieSerialize } from '../../utils/cookies';

const registerUserHandler = async (
  req: Request<object, object, RegisterUserInputType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.body;
    const { email, firstName, lastName, phoneNumber } = user;

    const isUserExist = await findUser({ email });

    if (isUserExist) {
      return next(new BadRequest('User already have an account.'));
    }

    const passwordHash = await getPasswordHash(user.password);
    const accountActivationToken = generateKey().toString();

    const createdUser = await createUser({
      email,
      firstName,
      lastName,
      phoneNumber,
      passwordHash: passwordHash,
      accountActivationToken: accountActivationToken,
    });

    await sendAccountCreatedEmail(createdUser);

    const accessToken = createJwt({ email, id: createdUser.id });

    const accessTokenCookie = cookieSerialize('access_token', accessToken);

    res.setHeader('Set-Cookie', accessTokenCookie);

    return res.status(201).send({
      status: 'ok',
      message: 'User created successfully',
      data: { accessToken },
    });
  } catch (error) {
    return next(error);
  }
};

const activateAccountHandler = async (
  req: Request<object, object, TokenVerifyUserInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.body;
  const accessToken = req.headers.authorization as string;

  try {
    const decoded = validateJwt(accessToken);

    const user = await findUser({ email: decoded.email });

    if (!user) {
      return next(new NotFound('User Not Found.'));
    }

    const isTokenValid = token === user.accountActivationToken;

    if (!isTokenValid) {
      return next(new BadRequest('Token is not valid'));
    }

    user.accountActivationToken = null;
    user.isActive = true;

    const { accountActivationToken, isActive, id } = user;
    await updateUser({ id: id }, { isActive, accountActivationToken });

    return res.status(200).send({
      status: 'ok',
      message: 'Account is activated successfully',
    });
  } catch (error) {
    return next(error);
  }
};

const loginHandler = async (
  req: Request<object, object, LoginUserInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  try {
    const user = await findUser({ email });

    if (!user) {
      return next(new BadRequest('Invalid Credentials'));
    }

    if (!user.isActive) {
      return next(new BadRequest('User is not active'));
    }

    const match = await matchPasswordHash(password, user.passwordHash);

    if (!match) {
      return next(new BadRequest('Invalid Credentials'));
    }

    const accessToken = createJwt({ email, id: user.id });
    const refreshToken = createJwt({ email, id: user.id });

    const accessTokenCookie = cookieSerialize('access_token', accessToken);
    const refreshTokenCookie = cookieSerialize('refresh_token', refreshToken);

    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);

    res.status(200).send({
      status: 'ok',
      message: 'User logged in successfully',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};

const forgotPasswordHandler = async (
  req: Request<object, object, ForgotPasswordInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  try {
    const user = await findUser({ email });

    if (!user) {
      return next(new NotFound('User Not Found.'));
    }

    const accessToken = createJwt({ email, id: user.id });

    const accessTokenCookie = cookieSerialize('access_token', accessToken);
    res.setHeader('Set-Cookie', accessTokenCookie);

    user.passwordResetToken = generateKey().toString();

    const { id, passwordResetToken } = user;
    await updateUser({ id: id }, { passwordResetToken });

    await sendPasswordResetEmail(user);

    return res
      .status(200)
      .send({ status: 'ok', message: 'Email sent successfully' });
  } catch (error) {
    return next(error);
  }
};

const verifyTokenHandler = async (
  req: Request<object, object, TokenVerifyUserInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.body;
  const accessToken = req.headers.authorization as string;

  try {
    const decoded = validateJwt(accessToken);
    const user = await findUser({ email: decoded.email });

    if (!user) {
      return next(new NotFound('User Not Found.'));
    }

    const tokenValid = token === user.passwordResetToken;

    if (tokenValid) {
      return next(new BadRequest('Token is not valid'));
    }

    const jwtTokenWithPasswordResetToken = createJwt({
      id: user.id,
      email: user.email,
    });

    const accessTokenCookie = cookieSerialize(
      'access_token',
      jwtTokenWithPasswordResetToken,
    );
    res.setHeader('Set-Cookie', accessTokenCookie);

    return res.status(200).send({ status: 'ok', message: 'Token verified' });
  } catch (error) {
    return next(error);
  }
};

const resetPasswordHandler = async (
  req: Request<object, object, ResetPasswordInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;
  const accessToken = req.headers.authorization as string;

  try {
    const decoded = validateJwt(accessToken);
    const user = await findUser({ email: decoded.email });

    if (!user) {
      return next(new NotFound('User Not Found.'));
    }
    // const tokenValid = decoded.token === user.passwordResetToken;

    // if (tokenValid) {
    //   return next(new BadRequest("Token is not valid"))
    // }

    const passwordHash = await getPasswordHash(password);
    const passwordResetToken = null;

    await updateUser({ id: user.id }, { passwordHash, passwordResetToken });

    await sendPasswordResetSuccessEmail(user);

    return res
      .status(200)
      .send({ status: 'ok', message: 'Password changed successfully' });
  } catch (error) {
    return next(error);
  }
};

export {
  registerUserHandler,
  activateAccountHandler,
  loginHandler,
  forgotPasswordHandler,
  verifyTokenHandler,
  resetPasswordHandler,
};

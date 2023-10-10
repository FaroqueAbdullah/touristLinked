import jwt from "jsonwebtoken";
const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const validateJwt = (jwtToken: string): jwt.JwtPayload => {

  try {
    const decoded = jwt.verify(jwtToken, secretToken) as jwt.JwtPayload;
    return {...decoded, success: true}
  } catch(error) {
    return {success: false}
  }
}

const createJwt = (data: object): string => {
  const token = jwt.sign(
    data,
    secretToken,
    {
      expiresIn: "24h",
    }
  );

  return token
}

export {
  validateJwt,
  createJwt
}
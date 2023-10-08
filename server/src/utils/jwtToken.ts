import jwt from "jsonwebtoken";
const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const validateJwt = (jwtToken: string) => {
  const token = jwt.verify(jwtToken, secretToken) as jwt.JwtPayload;
}

const createJwt = (data: object) => {
  const token = jwt.sign(
    data,
    secretToken,
    {
      expiresIn: "2h",
    }
  );
}

export {
  validateJwt,
  createJwt
}
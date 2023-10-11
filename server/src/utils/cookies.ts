import { serialize, parse } from 'cookie';

const cookieSerialize = (cookieName: string, token: string) => {
  const serialized = serialize(cookieName, token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });

  return serialized;
};

const cookiePerse = (value: string) => {
  const cookies = parse(value);
  return cookies;
};

export { cookieSerialize, cookiePerse };

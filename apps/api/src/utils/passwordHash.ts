import bcrypt from 'bcryptjs';

export async function getPasswordHash(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function matchPasswordHash(
  password: string,
  passwordHash: string,
) {
  const match = await bcrypt.compare(password, passwordHash);

  return match;
}

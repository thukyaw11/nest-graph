import * as argon2 from 'argon2';
import * as crypto from 'node:crypto';

export const hashPassword = async (plainText: string): Promise<string> => {
  const salt = crypto.randomBytes(32);
  const hashedPassword = argon2.hash(plainText, { salt });
  return hashedPassword;
};

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = (password: string): string => {
  const hashValue = bcrypt.hashSync(password, 8);
  return hashValue;
};

export const comparePassword = (password: string, hash: string): boolean => {
  const correct = bcrypt.compareSync(password, hash);

  return correct;
};

export const getJWTToken = (account: {
  id: number;
  username: string;
}): string => {
  const userData = { userId: account.id, username: account.username };
  const accessToken = jwt.sign(userData, process.env.JWT_SECRET || "");
  return accessToken;
};

export const verifyJWT = (token: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT secret is not defined");
  }
  return jwt.verify(token, secret);
};

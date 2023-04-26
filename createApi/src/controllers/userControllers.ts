import { Request, Response } from "express";
import { getAccountByUsername, getUsers, registerUser } from "../data/db";
import { IUser } from "../models/users/IUser";
import { comparePassword, getJWTToken, hashPassword } from "../utils/utils";

export const getUsersController = (req: Request, res: Response) => {
  getUsers((err: Error | null, users: IUser[]) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
    } else {
      res.json(users);
    }
  });
};

export const createUserController = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = hashPassword(password);

  registerUser(username, hashedPassword, (error: Error | null) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res
        .status(201)
        .json({ message: `User ${username} successfully created` });
    }
  });
};

export const loginUserController = (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  getAccountByUsername(username, (error, account) => {
    if (error) {
      res.status(500).send(error);
    } else if (account) {
      const hashedPassword = account.password;
      if (!hashedPassword) {
        return res.sendStatus(500);
      }
      const correctPassword = comparePassword(password, hashedPassword);

      if (correctPassword) {
        const jwtToken = getJWTToken(account);
        const userObject = {
          id: account.id,
          username: account.username,
        };
        res.status(201).send({
          token: jwtToken,
          user: userObject,
        });
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
  });
};

import { Response, NextFunction } from "express";
import { verifyJWT } from "../utils/utils";
import { IUserPayload } from "../models/users/IUserPayLoad";

export const authenticateUser = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header not found" });
  }

  const token: string = authHeader.split(" ")[1];
  try {
    const decodedToken = verifyJWT(token) as IUserPayload;
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authorization token" });
  }
};

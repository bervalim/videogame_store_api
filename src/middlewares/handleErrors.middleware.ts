import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.error";

export const handleErrors = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  console.log(error);
  return res.status(500).json({ message: "Internal Server Error" });
};

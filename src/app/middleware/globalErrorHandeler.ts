/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandeler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
export default globalErrorHandeler;

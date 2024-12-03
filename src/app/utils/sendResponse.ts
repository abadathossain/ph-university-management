import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

const sendRequest = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    message: data.success,
    data: data.data,
  });
};
export default sendRequest;

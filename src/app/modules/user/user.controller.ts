import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendRequest from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    // console.log(result);
    //   res.status(200).json({
    //     success: true,
    //     message: 'Student is created succesfully',
    //     data: result,
    //   }
    // );
    sendRequest(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Created successully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'something went wrong',
    //   error: err,
    // });
    next(err);
  }
};
export const UserControllers = {
  createStudent,
};

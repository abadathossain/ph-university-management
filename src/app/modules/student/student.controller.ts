/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student is read successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
    next(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is read successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params; // Extract `studentId` from request parameters
    const updateData = req.body; // Extract update data from request body

    const result = await studentServices.updateStudentInDB(
      studentId,
      updateData,
    );

    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Student is updated successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
};

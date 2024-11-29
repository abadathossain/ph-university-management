import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const updateStudentInDB = async (id: string, updateData: Partial<TStudent>) => {
  const result = await StudentModel.findOneAndUpdate({ id }, updateData);
  return result;
};

export const studentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentInDB,
};

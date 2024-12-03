import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  // if (!password) {
  //   userData.password = config.default_password as string;
  // } else {
  //   userData.password = password;
  // }

  // shortly
  userData.password = password || (config.default_password as string);
  // set role
  userData.role = 'student';

  // manually generate id
  userData.id = '20301001';
  const result = await UserModel.create(userData);

  // student create

  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;
  }
  // return result;
  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};
export const UserServices = {
  createStudentIntoDB,
};

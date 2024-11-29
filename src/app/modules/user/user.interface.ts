export type TUser = {
  id: string;
  password: string;
  needPasswordChange?: string;
  role: 'admin' | 'faculty' | 'student';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

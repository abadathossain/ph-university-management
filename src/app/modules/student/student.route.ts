import express from 'express';
import { studentControllers } from './student.controller';
const router = express.Router();
router.get('/', studentControllers.getAllStudents);
router.get('/:studentId', studentControllers.getSingleStudent);
router.patch('/:studentId', studentControllers.updateSingleStudent);

export const studentRoutes = router;

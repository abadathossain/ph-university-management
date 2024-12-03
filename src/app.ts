/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandeler from './app/middleware/globalErrorHandeler';
import notFound from './app/middleware/notFound';
const app = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  // var a = 10;

  res.send('Hello World!');
});
// console.log(`helloooo ${process.cwd()}`);

app.use(globalErrorHandeler);
app.use(notFound);

export default app;

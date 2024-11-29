import { z } from 'zod';

const UserValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .max(20, { message: 'not more than 20 characters' })
    .optional(),
});
export const UserValidation = {
  UserValidationSchema,
};

import { object, string } from 'yup';

export const signinSchema = object({
    email: string().email().required(),
    password: string().min(4).max(10).required()
})


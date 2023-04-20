import { string, object } from 'yup'

export const signupSchema = object({
    userName: string().min(3).max(10).required('User Name is required'),
    email: string().email().required('Email is required'),
    password: string().min(4).max(10).required('Password is required'),
    confirmPassword: string()
    .required('Confirm Password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
    })
})
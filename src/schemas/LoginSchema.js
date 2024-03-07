import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string().required('Username required!'),
    password: yup.string().min(4, 'Password must be at least 4 characters!').required('Password required!')
})
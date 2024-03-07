import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    firstName: yup.string().required('Firstname required!'),
    lastName: yup.string().required('Lastname required!'),
    email: yup.string().required('Email required!').email('Invalid Email Address!'),
    username: yup.string().required('Username required!'),
    password: yup.string().min(4, 'Password must be at least 4 characters!').required('Password required!')
})
import React from 'react';
import Styles from './register.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    useToast
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { registerPost } from '../../services/AuthService';
import { registerSchema } from '../../schemas/RegisterSchema';

const Register = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
        },
        onSubmit: (values, actions) => {
            try {
                registerPost(values)

                toast({
                    title: "Account created!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true
                })
                actions.resetForm();
            }
            catch (error) {
                console.log(error);
            }
        },
        validationSchema: registerSchema
    })
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.main_section}>
                    <div><img src={logo} width={50} height={50} /></div>
                    <div className={Styles.main_section_content}>
                        <div className={Styles.main_section_content_welcome}>Welcome to Pinterest</div>
                        <div>Find new ideas to try</div>
                    </div>
                    <div className={Styles.form}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input
                                id='firstname'
                                placeholder='Enter Firstname'
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.firstName && formik.touched.firstName ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.firstName && formik.touched.firstName && <p className={Styles.error_msg}>{formik.errors.firstName}</p>}
                            <FormLabel>Last name</FormLabel>
                            <Input
                                id='lastname'
                                placeholder='Enter Lastname'
                                name='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.lastName && formik.touched.lastName ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.lastName && formik.touched.lastName && <p className={Styles.error_msg}>{formik.errors.lastName}</p>}
                            <FormLabel>Email</FormLabel>
                            <Input
                                id='email'
                                placeholder='Enter Email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.email && formik.touched.email ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.email && formik.touched.email && <p className={Styles.error_msg}>{formik.errors.email}</p>}
                            <FormLabel>Username</FormLabel>
                            <Input
                                id='username'
                                placeholder='Enter Username'
                                name='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.username && formik.touched.username ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.username && formik.touched.username && <p className={Styles.error_msg}>{formik.errors.username}</p>}
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    id='password'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.errors.password && formik.touched.password ? `${Styles.input_error}` : ``}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {formik.errors.password && formik.touched.password && <p className={Styles.error_msg}>{formik.errors.password}</p>}
                        </FormControl>
                        <button className={Styles.btn} onClick={formik.handleSubmit} type='submit'>
                            Create account
                        </button>
                        <div className={Styles.link}>Already have an account?<Link to="/login" style={{ color: 'red' }}>Login</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

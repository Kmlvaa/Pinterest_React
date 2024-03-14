import React from 'react';
import Styles from './login.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { loginPost } from '../../services/AuthService';
import { loginSchema } from '../../schemas/LoginSchema';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const {t} = useTranslation(); 
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values, actions) => {
            try {
                loginPost(values)
                actions.resetForm();
            }
            catch (error) {
                console.log(error);
            }
        },
        validationSchema: loginSchema
    })
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.main_section}>
                    <div><img src={logo} width={50} height={50} /></div>
                    <div className={Styles.main_section_content}>
                        <div className={Styles.main_section_content_welcome}>{t("login.header")}</div>
                    </div>
                    <div className={Styles.form}>
                        <FormControl>
                            <FormLabel>{t("login.username")}</FormLabel>
                            <Input
                                id='username'
                                placeholder={t("login.addUsername")}
                                name='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.username && formik.touched.username ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.username && formik.touched.username && <p className={Styles.error_msg}>{formik.errors.username}</p>}
                            <FormLabel>{t("login.password")}</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    id='password'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder={t("login.addPassword")}
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
                                {formik.errors.password && formik.touched.password && <div className={Styles.error_msg}>{formik.errors.password}</div>}
                        </FormControl>
                        <button className={Styles.btn} onClick={formik.handleSubmit} type='submit'>
                        {t("login.login")}
                        </button>
                        <div className={Styles.link}>{t("login.p")}<Link to="/register" style={{ color: 'red' }}>{t("login.signUp")}</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

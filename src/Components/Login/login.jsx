import React, { useState } from 'react';
import Styles from './login.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { Link, useNavigate } from "react-router-dom";
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
import Background from '../../Images/background.png'
import { useDispatch } from 'react-redux';
import { logInAction } from '../../redux/accountSlice';
import { useSelector } from 'react-redux'

const Login = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [err, setError] = useState(null)
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userId } = useSelector(x => x.account);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values, actions) => {
            try {
                const res = await loginPost(values);
                dispatch(logInAction(res.data));
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.id);
                setError(res.data);
                actions.resetForm();
                if (localStorage.getItem('id') == "5b539870-feb9-494a-bdd1-746832ebbea6") {
                    navigate('/admin');
                }
                else {
                    navigate('/profile/created');
                }
            }
            catch (error) {
                console.log(error.response.data);
                setError(error.response.data);
                navigate('/login');
            }
        },
        validationSchema: loginSchema
    })
    return (
        <>
            <div className={Styles.backgroundImage}>
                <img src={Background} />
            </div>
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
                        {err ? <div style={{ color: "red" }}>{err}</div> : <></>}
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

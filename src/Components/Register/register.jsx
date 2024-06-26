import React, { useState } from 'react';
import Styles from './register.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { Link, useNavigate } from "react-router-dom";
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
import { useTranslation } from 'react-i18next';
import Background2 from '../../Images/Background2.png'

const Register = () => {
    const {t} = useTranslation(); 
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [err, setErr] = useState(null);
    const toast = useToast();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
        },
        onSubmit: async (values, actions) => {
            try {
                let resp = await registerPost(values);
                console.log(resp.data)
                toast({
                    title: "Account created succesfully!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true
                })
                actions.resetForm();
                navigate("/login");
            }
            catch (error) {
                console.log(error.response.data);
                setErr(error.response.data);
            }
        },
        validationSchema: registerSchema
    })
    return (
        <>
            <div className={Styles.backgroundImage}>
                <img src={Background2}/>
            </div>
            <div className={Styles.main}>
                <div className={Styles.main_section}>
                    <div><img src={logo} width={50} height={50} /></div>
                    <div className={Styles.main_section_content}>
                        <div className={Styles.main_section_content_welcome}>{t("register.header")}</div>
                        <div>{t("register.p1")}</div>
                    </div>
                    <div className={Styles.form}>
                        <FormControl>
                            <FormLabel>{t("register.firstname")}</FormLabel>
                            <Input
                                id='firstname'
                                placeholder={t("register.addFirstname")}
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.firstName && formik.touched.firstName ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.firstName && formik.touched.firstName && <p className={Styles.error_msg}>{formik.errors.firstName}</p>}
                            <FormLabel>{t("register.lastname")}</FormLabel>
                            <Input
                                id='lastname'
                                placeholder={t("register.addLastname")}
                                name='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.lastName && formik.touched.lastName ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.lastName && formik.touched.lastName && <p className={Styles.error_msg}>{formik.errors.lastName}</p>}
                            <FormLabel>{t("register.email")}</FormLabel>
                            <Input
                                id='email'
                                placeholder={t("register.addEmail")}
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.email && formik.touched.email ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.email && formik.touched.email && <p className={Styles.error_msg}>{formik.errors.email}</p>}
                            <FormLabel>{t("register.username")}</FormLabel>
                            <Input
                                id='username'
                                placeholder={t("register.addUsername")}
                                name='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.errors.username && formik.touched.username ? `${Styles.input_error}` : ``}
                            />
                            {formik.errors.username && formik.touched.username && <p className={Styles.error_msg}>{formik.errors.username}</p>}
                            <FormLabel>{t("register.password")}</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    id='password'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder={t("register.addPassword")}
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
                        {err ? <div style={{color: "red"}}>{err}</div> : <></>}
                        <button className={Styles.btn} onClick={formik.handleSubmit} type='submit'>
                        {t("register.create")}
                        </button>
                        <div style={{
                            fontSize: "14px",
                            color: "red",
                        }}></div>
                        <div className={Styles.link}>{t("register.p2")}<Link to="/login" style={{ color: 'red' }}>{t("register.login")}</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

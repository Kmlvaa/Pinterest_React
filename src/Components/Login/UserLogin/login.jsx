import React from 'react';
import Styles from './login.module.scss'
import logo from '../../../Images/Pinterest-logo.png'
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

const Login = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.main_section}>
                    <div><img src={logo} width={50} height={50} /></div>
                    <div className={Styles.main_section_content}>
                        <div className={Styles.main_section_content_welcome}>Welcome to Pinterest</div>
                    </div>
                    <div className={Styles.form}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' />
                        </FormControl>
                        <button className={Styles.btn}>
                            Login
                        </button>
                        <div className={Styles.link}>Not on Pinterest yet?<Link to="/register" style={{color:'red'}}>Sign up</Link></div>
                        <div>Are you a business? <Link to='/business/login'>Get started here!</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

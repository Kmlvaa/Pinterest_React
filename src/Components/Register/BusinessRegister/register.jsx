import React from 'react';
import Styles from './register.module.scss'
import logo from '../../../Images/Pinterest-logo.png'
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

const Register = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.main_section}>
                    <div><img src={logo} width={50} height={50} /></div>
                    <div className={Styles.main_section_content}>
                        <div className={Styles.main_section_content_welcome}>Grow your business</div>
                        <div>Get in front of 400 million people looking to buy, make, and do.</div>
                    </div>
                    <div className={Styles.form}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' />
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Username' />
                        </FormControl>
                        <button className={Styles.btn}>
                            Create account
                        </button>
                        <div className={Styles.link}>Already have an account?<Link to="/business/login" style={{color:'red'}}>Login</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

import React from 'react';
import Styles from './register.module.scss'
import logo from '../../../Images/Pinterest-logo.png'
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button
  } from '@chakra-ui/react'

const Register = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
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
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Enter Email'/>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Enter Username' />
                        </FormControl>
                        <button className={Styles.btn}>
                            Create account
                        </button>
                        <div className={Styles.link}>Already have an account?<Link to="/login" style={{color:'red'}}>Login</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

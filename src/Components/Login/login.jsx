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

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
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
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Enter Username'/>
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
                        </FormControl>
                        <button className={Styles.btn}>
                            Login
                        </button>
                        <div className={Styles.link}>Not on Pinterest yet?<Link to="/register" style={{ color: 'red' }}>Sign up</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

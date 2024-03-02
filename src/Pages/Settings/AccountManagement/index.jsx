import React from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import {
    FormControl,
    FormLabel,
    Select,
    Button,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

const Index = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>Account Management</h1>
                <p>Make changes to your personal information or account type.</p>
            </div>
            <div>
                <FormControl className={Styles.formControl}>
                    <div className={Styles.form_name}>
                        <h1>Your account</h1>
                        <FormLabel>Email - private</FormLabel>
                        <Input type='text' />
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
                    </div>
                    <FormLabel>Birthdate</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                    />
                    <FormLabel>Country/Region</FormLabel>
                    <Select>
                        <option value='option1'>Amerika</option>
                        <option value='option2'>Azerbaijan</option>
                        <option value='option2'>Turkey</option>
                        <option value='option2'>Germany</option>
                    </Select><FormLabel>Language</FormLabel>
                    <Select>
                        <option value='option1'>Azerbaijani</option>
                        <option value='option2'>English</option>
                    </Select>
                </FormControl>
                <Button className={Styles.saveBtn}>Save</Button>
            </div>
        </div>
    );
}

export default Index;


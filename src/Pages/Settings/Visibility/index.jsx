import React from 'react';
import Styles from './index.module.scss'
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'

const Index = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>Profile visibility</h1>
                <p>Manage how your profile can be viewed on and off of Pinterest.</p>
            </div>
            <div className={Styles.form}>
                <h1>Private profile</h1>
                <div>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0' style={{fontWeight: 400}}>
                            When your profile is private only the people you approve can see your profile, Pins, boards, followers and following lists.
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                </div>

            </div>
        </div>
    );
}

export default Index;

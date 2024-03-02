import React from 'react';
import Styles from './index.module.scss';
import { Checkbox } from '@chakra-ui/react'

const Index = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>Privacy and Data</h1>
                <p>Manage the data Pinterest shares with advertisers and uses to improve the ads and recommendations we show you.</p>
            </div>
            <div className={Styles.form}>
                <h1>Ads personalization</h1>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>Use info from sites you visit: Allow Pinterest to use data 
                from sites you visit to improve ads on Pinterest.</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>Use of partner info: Allow Pinterest to use information 
                from our partners to improve ads you see on Pinterest.</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>Ads about Pinterest: Allow Pinterest to use your activity 
                to improve the ads about Pinterest you’re shown on other sites or apps.</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>Activity for ads reporting: Allow Pinterest to share your activity
                 for ads performance reporting.</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>Sharing info with partners: Allow Pinterest to share your information 
                and Pinterest activity with partners to improve the third-party ads you’re shown on Pinterest.</Checkbox>
            </div>
        </div>
    );
}

export default Index;

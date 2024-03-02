import React from 'react';
import Styles from './index.module.scss'
import Globus from '../../../Images/1200px-Globe_icon.svg.png'

const Index = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>Claimed accounts</h1>
                <p>When you claim an account, you can monitor analytics and ensure
                     your name or brand name appears on every Pin created from your sites.</p>
            </div>
            <div className={Styles.section}>
                <img src={Globus} width={25} height={25}/>
                <div>
                    <h1>Websites</h1>
                    <p>Get attribution for all Pins linking to your website on Pinterest.</p>
                </div>
            </div>
        </div>
    );
}

export default Index;
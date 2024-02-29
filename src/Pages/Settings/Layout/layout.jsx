import React from 'react';
import Styles from './layout.module.scss'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.menu}>
                    <ul>
                        <li><Link to='editProfile'>Edit profile</Link></li>
                        <li><Link to='accountManagement'>Account management</Link></li>
                        <li>Profile visibility</li>
                        <li>Privacy and data</li>
                        <li>See terms of service</li>
                        <li>See privacy policy</li>
                        <li>Security</li>
                        <li>Get help</li>
                    </ul>
                </div>
                <div className={Styles.page}><Outlet /></div>
            </div>
        </>
    );
}

export default Layout;

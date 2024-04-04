import React from 'react';
import Styles from './layout.module.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../Components/AdminSideBar/sidebar';
import User from '../../../Images/user.png'
import styled from '@emotion/styled';

const Layout = () => {
    return (
        <>
            <div className={Styles.main_container}>
                <div className={Styles.sidebar}><Sidebar /></div>
                <div className={Styles.mainSection}>
                    <div className={Styles.header}>
                        <div className={Styles.left}>
                            <input placeholder='type something'/>
                        </div>
                        <div className={Styles.right}>
                            <div>modes</div>
                            <img src={User} width={40} height={40}/>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;

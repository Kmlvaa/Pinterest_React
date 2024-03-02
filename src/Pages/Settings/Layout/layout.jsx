import React, { useEffect } from 'react';
import Styles from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    const menuItem = [
        {
            id: 1,
            path: '/settings/editProfile',
            name: 'Edit Profile'
        },
        {
            id: 2,
            path: '/settings/accountManagement',
            name: 'Account Management'
        },
        {
            id: 3,
            path: '/settings/editProfile',
            name: 'Profile visibility'
        },
        {
            id: 4,
            path: '/settings/privacy',
            name: 'Privacy and data'
        },
        {
            id: 5,
            path: '/settings/claimedAccounts',
            name: 'Claimed accounts'
        },
        {
            id: 6,
            path: '/settings/editProfile',
            name: 'See privacy policy'
        },
        {
            id: 7,
            path: '/settings/editProfile',
            name: 'Security'
        },
        {
            id: 8,
            path: '/settings/editProfile',
            name: 'Get help'
        },
    ]
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.menu}>
                    <ul>
                        {
                            menuItem.map((item) => (
                                <li>
                                    <NavLink to={item.path} key={item.id} className={({isActive}) =>{
                                    return(
                                        (isActive
                                            ? Styles.active
                                            : '')
                                    )
                                }}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={Styles.page}><Outlet /></div>
            </div>
        </>
    );
}

export default Layout;

import React from 'react';
import Styles from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    const menuItem = [
        {
            path: '/settings/editProfile',
            name: 'Edit Profile'
        },
        {
            path: '/settings/accountManagement',
            name: 'Account Management'
        },
        {
            path: '/settings/visibility',
            name: 'Profile visibility'
        },
        {
            path: '/settings/privacy',
            name: 'Privacy and data'
        },
        {
            path: '/settings/claimedAccounts',
            name: 'Claimed accounts'
        },
        {
            path: '/privacy/privacy',
            name: 'See privacy policy',
        },
        {
            path: '/privacy/help',
            name: 'Get help',
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
                                    <NavLink to={item.path} className={({isActive}) =>{
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

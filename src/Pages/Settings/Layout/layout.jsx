import React from 'react';
import Styles from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = () => {
    const { t } = useTranslation();
    const menuItem = [
        {
            id: 0,
            path: '/settings/editProfile',
            name: `${t("settings.layout.edit")}`
        },
        {
            id: 1,
            path: '/settings/accountManagement',
            name: `${t("settings.layout.manage")}`
        },
        {
            id: 2,
            path: '/settings/privacy',
            name: `${t("settings.layout.privacy")}`
        },
        {
            id: 3,
            path: '/settings/claimedAccounts',
            name: `${t("settings.layout.claimed")}`
        },
        {
            id: 4,
            path: '/privacy/privacy',
            name: `${t("settings.layout.policy")}`
        },
        {
            id: 5,
            path: '/privacy/help',
            name: `${t("settings.layout.help")}`
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

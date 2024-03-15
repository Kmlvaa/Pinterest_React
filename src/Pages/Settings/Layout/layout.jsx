import React from 'react';
import Styles from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = () => {
    const { t } = useTranslation();
    const menuItem = [
        {
            path: '/settings/editProfile',
            name: `${t("settings.layout.edit")}`
        },
        {
            path: '/settings/accountManagement',
            name: `${t("settings.layout.manage")}`
        },
        {
            path: '/settings/privacy',
            name: `${t("settings.layout.privacy")}`
        },
        {
            path: '/settings/claimedAccounts',
            name: `${t("settings.layout.claimed")}`
        },
        {
            path: '/privacy/privacy',
            name: `${t("settings.layout.policy")}`
        },
        {
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

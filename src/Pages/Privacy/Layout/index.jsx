import React, { useState } from 'react';
import Styles from './index.module.scss'
import logo from '../../../Images/Pinterest-logo.png'
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation(); 
    const menuItem = [
        {
            path: "/privacy/terms",
            name: `${t("policy.layout.header.terms")}`
        },
        {
            path: '/privacy/privacy',
            name: `${t("policy.layout.header.privacy")}`
        },
        {
            path: '/privacy/community',
            name: `${t("policy.layout.header.community")}`
        },
        {
            path: '/privacy/advertising',
            name: `${t("policy.layout.header.advertising")}`
        },
        {
            path: '/privacy/developers',
            name: `${t("policy.layout.header.developers")}`
        },
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.logo}>
                    <img src={logo} width={30} height={30} />
                    <p>{t("policy.layout.header.privacy")}</p>
                </div>
                <div className={Styles.hamburger} onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                </div>
                <nav id={Styles.nav} className={isOpen ? Styles.nav_open : ""}>
                    <ul>
                    {
                        menuItem.map((item, index) => (
                            <li>
                                <NavLink to={item.path} key={index} className={({ isActive }) => {
                                    return (
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
            </nav>
        </div >
            <div><Outlet /></div>
            <div className={Styles.footer}>
                <div><h1>𝓟𝓲𝓷𝓼𝓽𝓪</h1></div>
                <div className={Styles.section}>
                    <div>
                        <h3>{t("policy.layout.footer.ul1.h3")}</h3>
                        <ul>
                            <li>{t("policy.layout.footer.ul1.li1")}</li>
                            <li>{t("policy.layout.footer.ul1.li2")}</li>
                            <li>{t("policy.layout.footer.ul1.li3")}</li>
                            <li>{t("policy.layout.footer.ul1.li4")}</li>
                            <li>{t("policy.layout.footer.ul1.li5")}</li>
                            <li>{t("policy.layout.footer.ul1.li6")}</li>
                            <li>{t("policy.layout.footer.ul1.li7")}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>{t("policy.layout.footer.ul2.h3")}</h3>
                        <ul>
                            <li>{t("policy.layout.footer.ul2.li1")}</li>
                            <li>{t("policy.layout.footer.ul2.li2")}</li>
                            <li>{t("policy.layout.footer.ul2.li3")}</li>
                            <li>{t("policy.layout.footer.ul2.li4")}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>{t("policy.layout.footer.ul3.h3")}</h3>
                        <ul>
                            <li>{t("policy.layout.footer.ul3.li1")}</li>
                            <li>{t("policy.layout.footer.ul3.li2")}</li>
                            <li>{t("policy.layout.footer.ul3.li3")}</li>
                            <li>{t("policy.layout.footer.ul3.li4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

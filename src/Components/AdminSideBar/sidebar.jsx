import React, { useState } from 'react';
import Styles from './sidebar.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LoginImage from '../../Images/login.png'
import RegisterImage from '../../Images/registerImage.png'
import LogOutImage from '../../Images/logoutt.png'
import Users from '../../Images/users.png'
import Posts from '../../Images/postIcon.png'

const Sidebar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log(localStorage.getItem('id'));
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        navigate('/login')
        window.location.reload();
    }
    return (
        <>
            <div className={Styles.dropdown_menu}>
                <p>{t("sideModal.yourAccounts")}</p>
                <ul>
                    <li className={Styles.dropdownItem}>
                        <Link to={'/login'}>
                            <img src={LoginImage} width={25} height={25} />
                            <span>{t("admin.sidebar.login")}</span>
                        </Link>
                    </li>
                    <li className={Styles.dropdownItem}>
                        <Link to={'/register'}>
                            <img src={RegisterImage} width={25} height={25} />
                            <span>{t("admin.sidebar.register")}</span>
                        </Link>
                    </li>
                    <li className={Styles.dropdownItem}>
                        <Link onClick={handleLogOut}>
                            <img src={LogOutImage} width={25} height={25} />
                            <span>{t("admin.sidebar.logout")}</span>
                        </Link>
                    </li>
                </ul>
                <p>{t("sideModal.moreOptions")}</p>
                <ul>
                    <li id={Styles.users} className={Styles.dropdownItem}>
                        <Link to={'/admin'}>
                            <img src={Users} width={25} height={25} />
                            <span>{t("admin.sidebar.users")}</span>
                        </Link>
                    </li>
                    <li id='posts' className={Styles.dropdownItem}>
                        <Link>
                            <img src={Posts} width={25} height={25} />
                            <span>{t("admin.sidebar.posts")}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;

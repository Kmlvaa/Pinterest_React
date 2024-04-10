import React, { useEffect, useState } from 'react';
import Styles from './sidebar.module.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LoginImage from '../../Images/login.png'
import RegisterImage from '../../Images/registerImage.png'
import LogOutImage from '../../Images/logoutt.png'
import Users from '../../Images/users.png'
import Posts from '../../Images/postIcon.png'
import { UserDetailsGet } from '../../services/UserService';

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
                        <NavLink to={'/admin/users'} className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }}>
                            <img src={Users} width={25} height={25} />
                            <span>{t("admin.sidebar.users")}</span>
                        </NavLink>
                    </li>
                    <li id='posts' className={Styles.dropdownItem}>
                        <NavLink to={'/admin/posts'} className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }}>
                            <img src={Posts} width={25} height={25} />
                            <span>{t("admin.sidebar.posts")}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;

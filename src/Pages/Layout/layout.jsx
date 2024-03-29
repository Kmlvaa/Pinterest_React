import { React, useState, useRef, useEffect } from 'react';
import Styles from './layout.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { SearchIcon } from '@chakra-ui/icons'
import { Link, NavLink, Outlet } from 'react-router-dom';
import DropDown from '../../Components/SideModal/sideModal'
import user from '../../Images/user.png'
import { Message } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(`${t("layout.home")}`);

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (menuRef.current != null) {
                if (!menuRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
        }
        document.addEventListener('mousedown', handler);
    }, [open])

    return (
        <>
            <div className={Styles.header}>
                <div className={`${open ? Styles.activePage : Styles.inactivePage}`} ref={menuRef}>
                    <div className={Styles.menu}>
                        <button className={Styles.resp_btn} onClick={() => { setPage(`${t("layout.home")}`)}}>
                            <NavLink to='/'>{t("layout.home")}</NavLink>
                        </button>
                        <button className={Styles.resp_btn} onClick={() => { setPage(`${t("layout.create")}`) }}>
                            <NavLink to='/create'>{t("layout.create")}</NavLink>
                        </button>
                    </div>
                </div>
                <div className={Styles.header_left}>
                    <div className={Styles.logo}><Link to='/'><img src={logo} width={30} height={30} /></Link></div>
                    <div className={Styles.left_links}>
                        <button className={Styles.header_btn} onClick={() => { setOpen(!open) }}>
                            {page}
                        </button>
                        <button className={Styles.header_btn}><NavLink className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }} to='/'>{t("layout.home")}</NavLink></button>
                        <button className={Styles.header_btn}><NavLink className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }} to='/create'>{t("layout.create")}</NavLink></button>
                    </div>
                </div>
                <div className={Styles.input_field}>
                    <span className={Styles.search_icon}><SearchIcon /></span>
                    <input placeholder={t("layout.search")} className={Styles.input} />
                </div>
                <div className={Styles.right_icons}>
                    <div className={Styles.icon}><Message /></div>
                    <div className={Styles.icon}><NavLink to='/profile/created'><img src={user} width={25} height={25} /></NavLink></div>
                    <div className={Styles.dropdown}><DropDown/></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

import { React, useState, useRef, useEffect } from 'react';
import Styles from './layout.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { SearchIcon } from '@chakra-ui/icons'
import { Link, NavLink, Outlet } from 'react-router-dom';
import DropDown from '../../Components/SideModal/sideModal'
import user from '../../Images/user.png'
import { Message } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { GetUsers, SearchResult, UserDetailsGet } from '../../services/UserService';

const Home = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(`${t("layout.home")}`);
    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState([]);
    const [image, setImage] = useState(null);

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

    const getProfileDetails = async () => {
        try {
            let detail = await UserDetailsGet();
            setDetails(detail.data);
            setImage(detail.data.profileUrl)
        }
        catch (error) {
            console.log(error.response.data);
            setDetails([]);
        }
    }
    useEffect(() => {
        getProfileDetails();
    }, [])

    let cachedSearchValue;

    async function renderSearchResult(searchValue) {
        try {
            let result = await SearchResult(searchValue);
            setUsers(result.data);
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <div className={Styles.header}>
                <div className={`${open ? Styles.activePage : Styles.inactivePage}`} ref={menuRef}>
                    <div className={Styles.menu}>
                        <button className={Styles.resp_btn} onClick={() => { setPage(`${t("layout.home")}`) }}>
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
                <div className={Styles.input_container}>
                    <div className={Styles.input_field}>
                        <span className={Styles.search_icon}><SearchIcon /></span>
                        <input placeholder={t("layout.search")} className={Styles.search_input} id='search_input'
                            onKeyUp={(e) => {
                                const value = e.target.value.trim();
                                if (value.length < 3) {
                                    cachedSearchValue = null
                                    return
                                }
                                if (value == cachedSearchValue) return
                                cachedSearchValue = value
                                renderSearchResult(value)
                            }} />
                    </div>
                    <div className={Styles.search_result} id='search_result'>
                        <ul>
                            {users?.map((data) => {
                                <li key={data.id}>{data.username}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className={Styles.right_icons}>
                    <div className={Styles.icon}><Message /></div>
                    <div className={Styles.icon}>
                        <NavLink to='/profile/created'>
                            {image != "user.jpg" ? <img src={"http://localhost:5174/Images/" + details?.profileUrl} />
                                : <img src={user} width={120} height={120} />}
                        </NavLink></div>
                    <div className={Styles.dropdown}><DropDown /></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

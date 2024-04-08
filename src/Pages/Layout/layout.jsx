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
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(`${t("layout.home")}`);
    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState([]);
    const [search, setSearch] = useState('');
    const adminId = "5b539870-feb9-494a-bdd1-746832ebbea6";
    const userId = localStorage.getItem("id");

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
        }
        catch (error) {
            console.log(error.response.data);
            setDetails([]);
        }
    }
    useEffect(() => {
        getProfileDetails();
    }, [])

    const renderSearchResult = async (input) => {
        try {
            if (!input) {
                console.error('Input is empty');
                return;
            }

            let result = await SearchResult(input);
            console.log(result.data)
            setUsers(result.data);
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    const clickHandler = async (lang) => {
        await i18n.changeLanguage(lang);
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
                            onChange={(e) => {
                                const searchValue = e.target.value.trim();
                                console.log("Search value:", searchValue);
                                if (searchValue !== "") {
                                    renderSearchResult(searchValue);
                                    // document.getElementById('search_result').style.display = "flex";
                                } else {
                                    console.log("value is null");
                                }
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
                    <div className={Styles.lang}>
                        <button onClick={() => clickHandler('az')}>Az</button>
                        <span> / </span>
                        <button onClick={() => clickHandler('en')}>En</button>
                    </div>
                    <div className={Styles.icon}>
                        <NavLink to='/profile/created'>
                            {userId != adminId ? <img src={"http://localhost:5174/Images/" + details?.profileUrl} />
                                : <img src={user} />}
                        </NavLink></div>
                    <div className={Styles.dropdown}><DropDown /></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

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
import { setIn } from 'formik';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(`${t("layout.home")}`);
    const [users, setUsers] = useState(null);
    const [details, setDetails] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

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

    let searchRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if(searchRef.current != null) {
                if(!searchRef.current.contains(e.target)) {
                    document.getElementById('search_result').style.display = "none";
                }
            }
        }
        document.addEventListener('mousedown', handler);
    },[])

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

    const clickHandler = async (lang) => {
        await i18n.changeLanguage(lang);
    }

    const renderSearchResult = async (input) => {
        try {
            if (!input) {
                console.log('Input is empty');
                return;
            }
            let result = await SearchResult(input);
            console.log(result.data)
            setUsers(result.data);
            setError(null)
        }
        catch (err) {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    const handleChange = (value) => {
        setInput(value);
        renderSearchResult(value);
        console.log("Search value:", value);
    }

    return (
        <>
            <div className={Styles.header}>
                <div className={`${open ? Styles.activePage : Styles.inactivePage}`}>
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
                    <div className={Styles.left_links} ref={menuRef}>
                        <button className={Styles.header_btn} onClick={() => { setOpen(!open); }}>
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
                <div className={Styles.input_container} ref={searchRef}>
                    <div className={Styles.input_field}>
                        <span className={Styles.search_icon}><SearchIcon /></span>
                        <input placeholder={t("layout.search")} className={Styles.search_input} id='search_input'
                            value={input}
                            onChange={(e) => {
                                handleChange(e.target.value.trim());
                                document.getElementById('search_result').style.display = "flex";
                            }} />
                    </div>
                    <div className={Styles.search_result} id='search_result'>
                        <ul>
                            {error ? <li>{error}</li>
                                : <>
                                    {users?.map((data) => {
                                        return (
                                            <li key={data.Id}>
                                                <div className={Styles.img_cover}>
                                                    <img src={"http://localhost:5174/Images/" + data?.image} width={30} height={30} />
                                                </div>
                                                <p><NavLink to={`/userProfile/${data.id}/created`} 
                                                >{data.username}</NavLink></p>
                                            </li>
                                        )
                                    })}
                                </>}
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
                            <img src={"http://localhost:5174/Images/" + details?.profileUrl} />
                        </NavLink></div>
                    <div className={Styles.dropdown}><DropDown /></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

import React, { useEffect, useRef, useState } from 'react';
import Styles from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../../../Components/AdminSideBar/sidebar';
import User from '../../../Images/user.png'
import { GetAdminDetails, SearchResult } from '../../../services/UserService';
import { useTranslation } from 'react-i18next';

const Layout = () => {
    const [details, setDetails] = useState([]);
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState(null);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);
    const { t } = useTranslation();
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

    const getDetails = async () => {
        try {
            let resp = await GetAdminDetails();
            setDetails(resp.data);
            console.log(resp.data)
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    useEffect(() => {
        getDetails();
    }, [])

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

    return (
        <>
            <div className={Styles.main_container}>
                <div className={Styles.sidebar}><Sidebar /></div>
                <div className={Styles.mainSection}>
                    <div className={Styles.cover}>
                        <div className={Styles.header}>
                            <div className={Styles.left} ref={searchRef}>
                                <input placeholder={t("admin.sidebar.placeholder")} 
                                value={input}
                                onChange={(e) => {
                                    handleChange(e.target.value.trim());
                                    document.getElementById('search_result').style.display = "flex";
                                }}/>
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
                            <div className={Styles.right} ref={menuRef}>
                                <h2>{details?.username}</h2>
                                <div className={Styles.imageCover} onClick={() => { setOpen(!open); console.log(open) }}>
                                    <img src={"http://localhost:5174/Images/" + details?.photo} />
                                </div>
                                {open ? <div className={Styles.subMenu}>
                                    <p>{details?.firstname} {details?.lastname}</p>
                                    <p>{details?.email}</p>
                                </div> : <></>}
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;

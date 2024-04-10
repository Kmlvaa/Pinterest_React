import React, { useEffect, useRef, useState } from 'react';
import Styles from './layout.module.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../Components/AdminSideBar/sidebar';
import User from '../../../Images/user.png'
import { GetAdminDetails } from '../../../services/UserService';
import { useTranslation } from 'react-i18next';

const Layout = () => {
    const [details, setDetails] = useState([]);
    const [open, setOpen] = useState(false);
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

    return (
        <>
            <div className={Styles.main_container}>
                <div className={Styles.sidebar}><Sidebar /></div>
                <div className={Styles.mainSection}>
                    <div className={Styles.cover}>
                        <div className={Styles.header}>
                            <div className={Styles.left}>
                                <input placeholder={t("admin.sidebar.placeholder")} />
                            </div>
                            <div className={Styles.right} ref={menuRef}>
                                <h2>{details?.username}</h2>
                                <div className={Styles.imageCover} onClick={()=> {setOpen(!open); console.log(open)}}>
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

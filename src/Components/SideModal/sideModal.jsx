import React from 'react';
import Styles from './sideModal.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../Images/user.png'
import { useState, useEffect, useRef } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { UserDetailsGet } from '../../services/UserService';
import { accountDetailsGet } from '../../services/AccountService';

const SideModal = () => {
    const [open, setOpen] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [accountDetails, setAccountDetails] = useState(null);
    const { t } = useTranslation();
    const navigate = useNavigate();

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

    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        window.location.reload();
        navigate('/login');
        setOpen(false);
    }

    const getDetails = async () => {
        try {
            let resp = await UserDetailsGet();
            setUserDetails(resp.data);
            console.log(resp.data);

            let account = await accountDetailsGet();
            setAccountDetails(account.data);
            console.log(account.data);
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
            <div className='menu_container' ref={menuRef}>
                <div className="menu_trigger" onClick={() => { setOpen(!open); }}>
                    <div><ArrowDropDown /></div>
                </div>
                <div className={`${open ? Styles.active : Styles.inactive}`}>
                    <div className={Styles.dropdown_menu}>
                        <p>{t("sideModal.currentProfile")}</p>
                        <Link to='/profile/created'>
                            <div className={Styles.profile}>
                                <div className={Styles.imageCover}>
                                    <img src={"http://localhost:5174/Images/" + userDetails?.profileUrl} width={50} height={50} />
                                </div>
                                <h3>{userDetails?.username} <br /><span style={{fontSize: "14px"}}>{accountDetails?.email}</span></h3>
                            </div>
                        </Link>
                        <p>{t("sideModal.yourAccounts")}</p>
                        <ul>
                            <DropdownItem text={t("sideModal.links.addAccount")} link={'/addAccount'}></DropdownItem>
                        </ul>
                        <p>{t("sideModal.moreOptions")}</p>
                        <ul>
                            <li className={Styles.dropdownItem}>
                                <Link to='/settings/editProfile'>{t("sideModal.links.settings")}</Link>
                            </li><li className={Styles.dropdownItem}>
                                <Link to='/privacy/terms'>{t("sideModal.links.seeTerms")}</Link>
                            </li><li className={Styles.dropdownItem}>
                                <Link to='privacy/privacy'>{t("sideModal.links.privacy")}</Link>
                            </li><li className={Styles.dropdownItem}>
                                <Link to='privacy/community'>{t("sideModal.links.community")}</Link>
                            </li><li className={Styles.dropdownItem}>
                                <Link to='privacy/advertising'>{t("sideModal.links.advertising")}</Link>
                            </li><li className={Styles.dropdownItem}>
                                <Link onClick={handleLogOut}>{t("sideModal.links.logOut")}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

function DropdownItem(props) {
    return (
        <li className={Styles.dropdownItem}>
            <Link to={props.link}>{props.text}</Link>
        </li>
    );
}

export default SideModal;

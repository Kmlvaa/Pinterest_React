import React from 'react';
import Styles from './sideModal.module.scss'
import { Link } from 'react-router-dom'
import user from '../../Images/user.png'
import { useState, useEffect, useRef } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const SideModal = () => {
    const [open, setOpen] = useState(false);
    const {t, i18n} = useTranslation(); 

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            console.log(menuRef)
            if(menuRef.current != null){
                if (!menuRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
        }
        document.addEventListener('mousedown', handler);
    },[open])

    return (
        <>
            <div className='menu_container' ref={menuRef}>
                <div className="menu_trigger" onClick={() => { setOpen(!open) }}>
                    <div><ArrowDropDown /></div>
                </div>
                <div className={`${open ? Styles.active : Styles.inactive}`}>
                    <div className={Styles.dropdown_menu}>
                        <p>{t("sideModal.currentProfile")}</p>
                        <Link to='/profile/created'>
                            <div className={Styles.profile}>
                                <img src={user} width={50} height={50} />
                                <h3>My Profile <br /><span>Samiraak</span></h3>
                            </div>
                        </Link>
                        <p>{t("sideModal.yourAccounts")}</p>
                        <ul>
                            <DropdownItem text={t("sideModal.links.addAccount")} link={'/addAccount'}></DropdownItem>
                        </ul>
                        <p>{t("sideModal.moreOptions")}</p>
                        <ul>
                            <DropdownItem text={t("sideModal.links.settings")} link={'/settings/editProfile'}/>
                            <DropdownItem text={t("sideModal.links.seeTerms")} link={'/privacy/terms'} />
                            <DropdownItem text={t("sideModal.links.privacy")} link={'privacy/privacy'}/>
                            <DropdownItem text={t("sideModal.links.community")} link={'privacy/community'}/>
                            <DropdownItem text={t("sideModal.links.advertising")} link={'privacy/advertising'}/>
                            <DropdownItem text={t("sideModal.links.logOut")} />
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

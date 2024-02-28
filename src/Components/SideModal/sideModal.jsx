import React from 'react';
import Styles from './sideModal.module.scss'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import logo from '../../Images/Pinterest-logo.png'
import { useState, useEffect, useRef } from 'react';

const SideModal = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
    })

    return (
        <>
            <div className='menu_container' ref={menuRef}>
                <div className="menu_trigger" onClick={() => {setOpen(!open)}}>
                    <div><HamburgerIcon /></div>
                </div>
                <div className={`${open ? Styles.active : Styles.inactive}`}>
                <div className={Styles.dropdown_menu}>
                    <p>Currently in</p>
                    <div className={Styles.profile}>
                        <img src={logo} width={50} height={50} />
                        <h3>My Profile <br /><span>Samiraak</span></h3>
                    </div>
                    <p>Your accounts</p>
                    <ul>
                        <DropdownItem link={'Add account'} />
                    </ul>
                    <p>More options</p>
                    <ul>
                        <DropdownItem link={'Settings'} />
                        <DropdownItem link={'Your privacy rights'} />
                        <DropdownItem link={'Get help'} />
                        <DropdownItem link={'See terms of services'} />
                        <DropdownItem link={'See privacy policy'} />
                        <DropdownItem link={'Log out'} />
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
            <Link>{props.link}</Link>
        </li>
    );
}

export default SideModal;

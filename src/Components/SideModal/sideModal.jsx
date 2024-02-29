import React from 'react';
import Styles from './sideModal.module.scss'
import { Link } from 'react-router-dom'
import user from '../../Images/user.png'
import hamburger from '../../Images/menu.png'
import { useState, useEffect, useRef } from 'react';

const SideModal = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
    },[open])

    return (
        <>
            <div className='menu_container' ref={menuRef}>
                <div className="menu_trigger" onClick={() => { setOpen(!open) }}>
                    <div><img src={hamburger} width={20} height={20}/></div>
                </div>
                <div className={`${open ? Styles.active : Styles.inactive}`}>
                    <div className={Styles.dropdown_menu}>
                        <p>Currently in</p>
                        <Link to='/profile'>
                            <div className={Styles.profile}>
                                <img src={user} width={50} height={50} />
                                <h3>My Profile <br /><span>Samiraak</span></h3>
                            </div>
                        </Link>
                        <p>Your accounts</p>
                        <ul>
                            <DropdownItem text={'Add account'} link={'/addAccount'}></DropdownItem>
                        </ul>
                        <p>More options</p>
                        <ul>
                            <DropdownItem text={'Settings'} link={'/settings/editProfile'}/>
                            <DropdownItem text={'Get help'} />
                            <DropdownItem text={'Log out'} />
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

import React from 'react';
import Styles from './layout.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import message from '../../Images/message.png'
import notification from '../../Images/notification.png'
import { SearchIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, Outlet } from 'react-router-dom';
import DropDown from '../../Components/SideModal/sideModal'

const Home = () => {
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.header_left}>
                    <div style={{ cursor: 'pointer' }}><Link to='/explore'><img src={logo} width={30} height={30} /></Link></div>
                    <button className={Styles.header_btn}><Link to='/'>Home</Link></button>
                    <button className={Styles.header_btn}><Link to='/create'>Create</Link></button>
                </div>
                <div className={Styles.input_field}>
                    <span className={Styles.search_icon}><SearchIcon /></span>
                    <input placeholder='Search' className={Styles.input} />
                </div>
                <div className={Styles.right_icons}>
                    <div className={Styles.icon}><img src={notification} width={17} height={17} /></div>
                    <div className={Styles.icon}><img src={message} width={20} height={20} /></div>
                    <div className={Styles.profile}><Link to='/profile'><img src={logo} width={25} height={25} /></Link></div>
                    <div className={Styles.dropdown}><DropDown /></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

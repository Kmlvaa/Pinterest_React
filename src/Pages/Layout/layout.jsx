import React from 'react';
import Styles from './layout.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { SearchIcon, ChatIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.header_left}>
                    <div><img src={logo} width={30} height={30} /></div>
                    <button className={Styles.header_btn}><Link to='/'>Home</Link></button>
                    <button className={Styles.header_btn}><Link to='/create'>Create</Link></button>
                </div>
                <div className={Styles.input_field}>
                    <span className={Styles.search_icon}><SearchIcon /></span>
                    <input placeholder='Search' className={Styles.input} />
                </div>
                <div><FontAwesomeIcon icon={faBell} /></div>
                <div><ChatIcon /></div>
                <div><Link to='/profile'><FontAwesomeIcon icon={faUser} /></Link></div>
                <div><HamburgerIcon /></div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

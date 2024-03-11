import React from 'react';
import Styles from './layout.module.scss'
import logo from '../../Images/Pinterest-logo.png'
import { SearchIcon } from '@chakra-ui/icons'
import { Link, NavLink, Outlet } from 'react-router-dom';
import DropDown from '../../Components/SideModal/sideModal'
import user from '../../Images/user.png'
import { Message, Notifications } from '@mui/icons-material';

const Home = () => {
    return (
        <>
            <div className={Styles.header}>
                    <div className={Styles.menu}>
                        <button className={Styles.resp_btn}>Home</button>
                        <button className={Styles.resp_btn}>Create</button>
                    </div>
                <div className={Styles.header_left}>
                    <div className={Styles.logo}><Link to='/explore'><img src={logo} width={30} height={30} /></Link></div>
                    <div className={Styles.left_links}>
                    <button className={`${Styles.header_btn} ${Styles.active}`}><NavLink to='/'>Home</NavLink></button>
                    <button className={Styles.header_btn}><NavLink to='/create'>Create</NavLink></button>
                    </div>
                </div>
                <div className={Styles.input_field}>
                    <span className={Styles.search_icon}><SearchIcon /></span>
                    <input placeholder='Search' className={Styles.input} />
                </div>
                <div className={Styles.right_icons}>
                    <div className={Styles.icon}><Notifications /></div>
                    <div className={Styles.icon}><Message /></div>
                    <div className={Styles.icon}><NavLink to='/profile/created'><img src={user} width={25} height={25} /></NavLink></div>
                    <div className={Styles.dropdown}><DropDown /></div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Home;

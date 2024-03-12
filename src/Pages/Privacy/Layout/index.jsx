import React, { useState } from 'react';
import Styles from './index.module.scss'
import logo from '../../../Images/Pinterest-logo.png'
import { Outlet, NavLink } from 'react-router-dom';

const Index = () => {
    const menuItem = [
        {
            path: "/privacy/terms",
            name: "Terms"
        },
        {
            path: '/privacy/privacy',
            name: 'Privacy'
        },
        {
            path: '/privacy/community',
            name: 'Community'
        },
        {
            path: '/privacy/advertising',
            name: 'Advertising'
        },
        {
            path: '/privacy/developers',
            name: 'Developers'
        },
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.logo}>
                    <img src={logo} width={30} height={30} />
                    <p>Policy</p>
                </div>
                <div className={Styles.hamburger} onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                </div>
                <nav className={isOpen ? "nav_open" : ""}>
                    <ul>
                    {
                        menuItem.map((item) => (
                            <li>
                                <NavLink to={item.path} className={({ isActive }) => {
                                    return (
                                        (isActive
                                            ? Styles.active
                                            : '')
                                    )
                                }}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div >
            <div><Outlet /></div>
            <div className={Styles.footer}>
                <div><h1>𝓟𝓲𝓷𝓽𝓮𝓻𝓮𝓼𝓽</h1></div>
                <div className={Styles.section}>
                    <div>
                        <h3>About us</h3>
                        <ul>
                            <li>What's Pinterest</li>
                            <li>Our Pinterest page</li>
                            <li>Engineering blog</li>
                            <li>Brand guidelines</li>
                            <li>Careers</li>
                            <li>Help Center</li>
                            <li>Pinterest labs</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Our policies</h3>
                        <ul>
                            <li>Terms of service</li>
                            <li>Advertising</li>
                            <li>Privacy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3>More info</h3>
                        <ul>
                            <li>For businesses</li>
                            <li>For developers</li>
                            <li>For press</li>
                            <li>For investors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

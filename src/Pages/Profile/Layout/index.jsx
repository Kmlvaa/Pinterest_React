import React from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, Outlet } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <div className={Styles.profile_pic}><img src={user} width={120} height={120} /></div>
                    <div className={Styles.PersonalInfo}>
                        <h1>Name Surname</h1>
                        <div className={Styles.info}>
                            <img src={logo} width={17} height={17} />
                            <p>Username <span>.</span> Gender</p>
                        </div>
                    </div>
                    <div>About</div>
                    <div>0 following</div>
                    <div className={Styles.btn}>
                        <GreyButton text={'Share'}></GreyButton>
                        <GreyButton text={'Edit profile'}></GreyButton>
                    </div>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <button><Link to='/profile/created'>Created</Link></button>
                        <button><Link to='/profile/saved'>Saved</Link></button>
                    </div>
                </div>
                <div style={{marginTop: 50}}><Outlet /></div>
            </div>
        </>
    );
}
function GreyButton(props) {
    return (
        <button className={Styles.greyBtnComponent}>
            {props.text}
        </button>
    );
}

export default Index;

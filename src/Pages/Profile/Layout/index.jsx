import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsGet } from '../../../services/UserService'
import { GetYourFollowers } from '../../../services/FollowerService';
import { Nav } from 'react-bootstrap';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState([]);
    const [image, setImage] = useState(`http://localhost:5174/Images/${details?.profileUrl}`);

    const getProfileDetails = async () => {
        try {
            let details = await UserDetailsGet();
            setDetails(details.data);
            setImage(details.data.profileUrl)
            console.log(details.data)

            let followers = await GetYourFollowers();
            setFollower(followers.data);
        }
        catch (error) {
            console.log(error);
            setDetails([]);
        }
    }
    useEffect(() => {
        getProfileDetails();
    }, [])

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <div className={Styles.profile_pic}>
                        {image != "user.jpg" ?
                            <img src={"http://localhost:5174/Images/" + details?.profileUrl}/>
                            : <img src={user}
                            width={120} height={120} />}
                    </div>
                    <div className={Styles.PersonalInfo}>
                        <h1>{details.firstname} {details.lastname}</h1>
                        <div className={Styles.info}>
                            <img src={logo} width={17} height={17} />
                            <p>{details.username} <span>.</span> {details.gender}</p>
                        </div>
                    </div>
                    <div>{details.about}</div>
                    <div>{follower} {t("profile.following")}</div>
                    <div className={Styles.btn}>
                        <GreyButton text={t("profile.edit")} link="/settings/editProfile"></GreyButton>
                        <GreyButton text={t("profile.update")} link='/updatePosts'></GreyButton>
                    </div>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <button><NavLink to='/profile/created' className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }}>{t("profile.created")}</NavLink></button>
                        <button><NavLink to='/profile/saved' className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }}>{t("profile.saved")}</NavLink></button>
                    </div>
                </div>
                <div style={{ marginTop: 50 }}><Outlet /></div>
            </div>
        </>
    );
}
function GreyButton(props) {
    return (
        <button className={Styles.greyBtnComponent}>
            <Link to={props.link}>{props.text}</Link>
        </button>
    );
}
export default Index;

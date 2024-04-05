import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsGet } from '../../../services/UserService'
import { getFollowers } from '../../../services/FollowerService';
import { Nav } from 'react-bootstrap';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState([]);
    const adminId = "5b539870-feb9-494a-bdd1-746832ebbea6";
    const userId = localStorage.getItem("id");

    const getProfileDetails = async () => {
        try {
            let details = await UserDetailsGet();
            setDetails(details.data);

            const userId = localStorage.getItem("id");
            let followers = await getFollowers(userId);
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
                        {userId == adminId ? <img src={user} />
                            : <img src={"http://localhost:5174/Images/" + details?.profileUrl} />}
                    </div>
                    {userId != adminId ?
                        <>
                            <div className={Styles.PersonalInfo}>
                                <div className={Styles.info}>
                                    <img src={logo} width={25} height={25} />
                                    <h1>{details.username}</h1>
                                </div>
                                <p>{details.firstname} {details.lastname} / {details?.gender != 'Gender' ? details?.gender : <></>}</p>
                                <div>{details?.about != 'About' ?
                                    details?.about : <></>}</div>
                            </div>
                            <div>{follower} {t("profile.following")}</div>
                            <div className={Styles.btn}>
                                <GreyButton text={t("profile.edit")} link="/settings/editProfile"></GreyButton>
                            </div></> : <div>ADMIN</div>}
                </div>
                {userId != adminId ?
                    <>
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
                        <div style={{ marginTop: 50 }}><Outlet /></div></>
                    : <></>}
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

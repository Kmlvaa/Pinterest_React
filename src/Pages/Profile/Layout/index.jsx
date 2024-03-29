import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsGet } from '../../../services/UserService'
import { getFollowers } from '../../../services/FollowerService';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState([]);

    const getProfileDetails = async () => {
        try {
            let details = await UserDetailsGet();
            setDetails(details.data);
            console.log(details.data)

            // let token = localStorage.getItem("token");
            // let followers = await getFollowers(token);
            // setFollower(followers.data);
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
                    <div className={Styles.profile_pic}><img src={user} width={120} height={120} /></div>
                    <div className={Styles.PersonalInfo}>
                        <h1>{details.firstname} {details.lastname}</h1>
                        <div className={Styles.info}>
                            <img src={logo} width={17} height={17} />
                            <p>{details.username} <span>.</span> {details.gender}</p>
                        </div>
                    </div>
                    <div>{details.about}</div>
                    <div>0{follower} {t("profile.following")}</div>
                    <div className={Styles.btn}>
                        <GreyButton text={t("profile.edit")}></GreyButton>
                    </div>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <button><Link to='/profile/created'>{t("profile.created")}</Link></button>
                        <button><Link to='/profile/saved'>{t("profile.saved")}</Link></button>
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
            <Link to={'/settings/editProfile'}>{props.text}</Link>
        </button>
    );
}
export default Index;

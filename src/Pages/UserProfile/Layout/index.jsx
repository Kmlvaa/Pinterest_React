import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { OtherUserDetailsGet } from '../../../services/UserService'
import { addFollower, getFollowers } from '../../../services/FollowerService';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState([]);
    const { id } = useParams();

    const getProfileDetails = async () => {
        try {
            let detail = await OtherUserDetailsGet(id);
            setDetails(detail.data);

            let followers = getFollowers(id);
            setFollower(followers);
        }
        catch (error) {
            console.log(error);
            setDetails([]);
        }
    }
    useEffect(() => {
        getProfileDetails();
    }, [])

    const addFollow = () => {
        addFollower(id);
        getProfileDetails();
    }

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
                    <div>{follower.length} {t("profile.following")}</div>
                    <div className={Styles.btn}>
                        <button className={Styles.greyBtnComponent}>
                            <Link onClick={addFollow}>Follow</Link>
                        </button>
                    </div>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <button><Link to={`/userProfile/${id}/created`}>{t("profile.created")}</Link></button>
                        <button><Link to={`/userProfile/${id}/saved`}>{t("profile.saved")}</Link></button>
                    </div>
                </div>
                <div style={{ marginTop: 50 }}><Outlet /></div>
            </div>
        </>
    );
}
export default Index;

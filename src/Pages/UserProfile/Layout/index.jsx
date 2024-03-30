import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/logo-pinterest-gris.png'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { OtherUserDetailsGet } from '../../../services/UserService'
import { addFollower, getFollowers, unFollow } from '../../../services/FollowerService';
import { Nav } from 'react-bootstrap';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const { id } = useParams();

    const getProfileDetails = async () => {
        try {
            let detail = await OtherUserDetailsGet(id);
            setDetails(detail.data);

            let followers = await getFollowers(id);
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

    const addFollow = () => {
        addFollower(id);
        getProfileDetails();
        setIsFollowed(true);
    }
    const UnFollowUser = () => {
        unFollow(id);
        getProfileDetails();
        setIsFollowed(false);
    }
    function handleFollowed(){

        if(isFollowed){
            document.getElementById('Followed').style.display = "none"
            document.getElementById('UnFollowed').style.display = "block"
        }
        else{
            document.getElementById('UnFollowed').style.display = "none"
            document.getElementById('Followed').style.display = "block"
        }
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
                    <div>{follower} {t("profile.following")}</div>
                    <div className={Styles.btn}>
                        <button className={Styles.greyBtnComponent} id='Followed'>
                            <Link onClick={() => {
                                addFollow();
                                handleFollowed();
                            }}>Follow</Link>
                        </button>
                        <button className={Styles.greyBtnComponent} id='UnFollowed' style={{display: "none"}}>
                            <Link onClick={() => {
                                UnFollowUser();
                                handleFollowed();
                            }}>UnFollow</Link>
                        </button>
                    </div>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <button><NavLink to={`/userProfile/${id}/created`} className={({ isActive }) => {
                            return (
                                (isActive
                                    ? Styles.active
                                    : '')
                            )
                        }}>{t("profile.created")}</NavLink></button>
                        <button><NavLink to={`/userProfile/${id}/saved`} className={({ isActive }) => {
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
export default Index;

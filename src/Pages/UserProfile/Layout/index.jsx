import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import logo from '../../../Images/black_logo.png'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { OtherUserDetailsGet } from '../../../services/UserService'
import { addFollower, getFollowers, isUserFollowed, unFollow } from '../../../services/FollowerService';
import { Nav } from 'react-bootstrap';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [follower, setFollower] = useState(null);
    const [image, setImage] = useState(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const userID = localStorage.getItem("id");
    const { id } = useParams();
    const navigator = useNavigate();

    const getProfileDetails = async () => {
        try {
            let detail = await OtherUserDetailsGet(id);
            setDetails(detail.data);
            setImage(detail.data.profileUrl)

            let followed = await isUserFollowed(id);
            setIsFollowed(followed.data);

            let followers = await getFollowers(id);
            setFollower(followers.data);
        }
        catch (error) {
            console.log(error.response.data);
            setDetails([]);
        }
    }
    useEffect(() => {
        getProfileDetails();
    }, [])

    const addFollow = async () => {
        try {
            let follow = await addFollower(id);
            console.log(follow.data)
            getProfileDetails();
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    const UnFollowUser = () => {
        try {
            unFollow(id);
            getProfileDetails();
            setIsFollowed(false)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <div className={Styles.profile_pic}>
                        <img src={"http://localhost:5174/Images/" + details?.profileUrl} />
                    </div>
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
                        {details?.userId != userID ? <>{isFollowed ? <button className={Styles.greyBtnComponent} id='UnFollowed' style={{ width: "100px" }}>
                            <Link onClick={() => {
                                UnFollowUser();
                            }}>UnFollow</Link>
                        </button> : <button className={Styles.greyBtnComponent} id='Followed'>
                            <Link onClick={() => {
                                addFollow();
                            }}>Follow</Link>
                        </button>}</> : <></>}
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

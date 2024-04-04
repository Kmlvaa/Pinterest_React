import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import { DeleteUsers, GetUsers } from '../../../../services/UserService';
import User from '../../../../Images/user.png'
import { getFollowers } from '../../../../services/FollowerService';
import { NavLink } from 'react-router-dom';

const Index = () => {
    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        let resp = await GetUsers();
        setDetails(resp.data)
        console.log(resp.data)
    }
    useEffect(() => {
        getDetails()
    }, [])

    const handleUserDelete = async (id) => {
        try {
            DeleteUsers(id);
            getDetails();
        }
        catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <div className={Styles.container}>
            {details?.map((data) => {
                return (
                    <div className={Styles.userCard}>
                        <div className={Styles.userDetails}>
                            <div className={Styles.profile_pic}>
                                {data.image != "user.jpg" ?
                                    <img src={"http://localhost:5174/Images/" + data.image} />
                                    : <img src={User}
                                        width={120} height={120} />}
                            </div>
                            <div className={Styles.PersonalInfo}>
                                <h1>{data.firstname} {data.lastname}</h1>
                                <div className={Styles.info}>
                                    <p>{data.userName} <span>.</span> {data.gender}</p>
                                </div>
                            </div>
                            <div>{data.followerCount} following</div>
                        </div>
                        <div className={Styles.updateBtn}>
                            <button className={Styles.profileDetails}>
                                <NavLink to={`/userProfile/${data.userId}/created`}>Profile details</NavLink>
                            </button>
                            <button className={Styles.deleteUser}
                                onClick={() => {
                                    handleUserDelete(data.userId)
                                }}
                            >Delete user</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Index;

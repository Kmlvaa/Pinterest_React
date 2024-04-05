import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import { DeleteUsers, GetUsers } from '../../../../services/UserService';
import User from '../../../../Images/user.png'
import { getFollowers } from '../../../../services/FollowerService';
import { NavLink } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const [details, setDetails] = useState([]);
    const toast = useToast();
    const { t } = useTranslation();

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
            const resp = await DeleteUsers(id);
            console.log(resp.data);
            getDetails();
            toast({
                title: "User deleted",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
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
                                        width={40} height={40} />}
                            </div>
                            <div className={Styles.PersonalInfo}>
                                <h1>{data.userName}</h1>
                                <div className={Styles.info}>
                                    <p>{data.firstname} {data.lastname}
                                        <div>{data.followerCount} {t("profile.following")}</div>
                                    </p>
                                </div>
                            </div>
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

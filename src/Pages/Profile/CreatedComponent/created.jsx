import React, { useEffect, useState } from 'react';
import Styles from './created.module.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pin from '../../../Components/Pin/Pin';
import image from '../../../Images/Kaonashi4.jpg'
import { useFormik } from 'formik';
import { getPosts } from '../../../services/PostService';

const Created = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState(null);

    const getUserPosts = async () => {
        try {
            let res = await getPosts();
            setPosts(res.data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
            setPosts(null);
        }
    }
    useEffect(() => {
        getUserPosts();
    }, [])
    return (
        <>
            {posts ? <div className={Styles.main}>
                {posts?.map((x) => {
                    return(
                        <Pin url={x.image} pinSize={x.id}
                            key={x.id}
                            id={x.id}
                            userId={x.userId}
                        />
                    )
                })}
            </div>
                : <>
                    <div className={Styles.context}>{t("profile.p1")}</div>
                    <div className={Styles.btn}>
                        <button><Link to='/create'>{t("profile.createPin")}</Link></button>
                    </div>
                </>}
        </>
    );
}

export default Created;

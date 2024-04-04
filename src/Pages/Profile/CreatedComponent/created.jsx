import React, { useEffect, useState } from 'react';
import Styles from './created.module.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pin from '../../../Components/Pin/Pin';
import { useFormik } from 'formik';
import { getUserPosts } from '../../../services/PostService';

const Created = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        try {
            const userId = localStorage.getItem("id");
            let res = await getUserPosts(userId);
            setPosts(res.data);
        }
        catch (err) {
            console.log(err);
            setPosts(null);
        }
    }
    useEffect(() => {
        getPosts();
    }, [])
    return (
        <>
            {posts ? <div className={Styles.main}>
                {posts?.map((x) => {
                    return(
                        <Pin url={"http://localhost:5174/Images/" + x.url} pinSize={x.id}
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

import React, { useEffect, useState } from 'react';
import Styles from './home.module.scss'
import Pin from '../../Components/Pin/Pin';
import { getAllPosts } from '../../services/PostService';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        try {
            let res = await getAllPosts();
            setPosts(res.data);
        }
        catch (err) {
            console.log(err);
            setPosts([]);
        }
    }
    useEffect(() => {
        getPosts();
    }, [])
    return (
        <>
            <div className={Styles.main}>
                {posts?.map((data) => {
                    return (
                        <div className={Styles.card} key={data.id}>
                            <Pin pinSize={data.id} url={"http://localhost:5174/Images/" + data.url} key={data.id} id={data.id} username={data.user} />
                            <div className={Styles.user}>
                                <div className={Styles.img_cover}>
                                    <img src={"http://localhost:5174/Images/" + data.userPhoto} />
                                </div>
                                <p><NavLink to={`/userProfile/${data?.userId}/created`}>{data.user}</NavLink></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Home;

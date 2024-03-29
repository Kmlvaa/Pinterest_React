import React, { useEffect, useState } from 'react';
import Styles from './home.module.scss'
import Pin from '../../Components/Pin/Pin';
import kaonashi8 from '../../Images/Kaonashi8.jpg'
import kaonashi4 from '../../Images/Kaonashi4.jpg'
import pic from '../../Images/Screenshot 2024-01-31 011531.png'
import { getAllPosts } from '../../services/PostService';

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
                    return(
                        <Pin pinSize={"small"} url={data.url} key={data.id} id={data.id}/>
                    )
               })}
            </div>
        </>
    );
}

export default Home;

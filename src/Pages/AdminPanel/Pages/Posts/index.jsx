import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import { getAllPosts } from '../../../../services/PostService';
import Pin from '../../../../Components/Pin/Pin';

const Index = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            let res = await getAllPosts();
            setPosts(res.data);
            console.log(res.data)
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
                        <Pin pinSize={data.id} url={"http://localhost:5174/Images/" + data.url} key={data.id} id={data.id} username={data.user}/>
                    )
               })}
            </div>
        </>
    );
}

export default Index;

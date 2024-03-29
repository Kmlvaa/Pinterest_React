import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { deletePost, getPosts } from '../../services/PostService';
import Pin from '../../Components/Pin/Pin';
import { NavLink, useParams } from 'react-router-dom';

const Index = () => {
    const [posts, setPosts] = useState({});
    const {id} = useParams();
    const handlePosts = async () => {
        try {
            let receivedPosts = await getPosts();
            setPosts(receivedPosts.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        handlePosts();
    }, [])

    const handleDelete = () => {
        //create new file and add modal
        deletePost(id);
    }

    return (
        <div className={styles.container}>
            {posts?.map((data) => {
                <div className={styles.post}>
                    <Pin id={data.id} pinSize={data.id} url={data.image} />
                    <div className={styles.buttons}>
                        <button onClick={handleDelete}>Delete</button>
                        <button><NavLink to={`/editPost/${id}`}>Update</NavLink></button>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Index;

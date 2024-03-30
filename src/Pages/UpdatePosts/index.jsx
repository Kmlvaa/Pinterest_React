import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { deletePost, getPosts } from '../../services/PostService';
import Pin from '../../Components/Pin/Pin';
import { NavLink, useParams } from 'react-router-dom';

const Index = () => {
    const {id} = useParams();
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

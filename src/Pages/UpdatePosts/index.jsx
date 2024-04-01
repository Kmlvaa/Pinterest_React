import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { deletePost, getPosts } from '../../services/PostService';
import Pin from '../../Components/Pin/Pin';
import DeletePost from '../../Components/DeletePostModal/deletePost';
import UpdatePost from '../../Components/UpdatePostModal/updatePost';
import { useDisclosure } from '@chakra-ui/react';

const Index = () => {
    const [posts, setPosts] = useState(null);
    const {
        isOpen: isEditOpen,
        onOpen: onEditOpen,
        onClose: onEditClose,
    } = useDisclosure();
    const {
        isOpen: isDeleteOpen,
        onOpen: onDeleteOpen,
        onClose: onDeleteClose,
    } = useDisclosure();

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
        <div className={styles.container}>
            {posts?.map((data) => {
                return (
                    <div className={styles.post}>
                        <Pin id={data.id} pinSize={data.id} url={data.url} />
                        <div className={styles.buttons}>
                            {isEditOpen && (
                                <UpdatePost
                                    id={data.id}
                                    getPosts={getUserPosts}
                                    isOpen={isEditOpen}
                                    onClose={onEditClose}
                                />
                            )}
                            {isDeleteOpen && (
                                <DeletePost
                                    id={data.id} 
                                    getPosts={getUserPosts}
                                    isOpen={isDeleteOpen}
                                    onClose={onDeleteClose}
                                />
                            )}
                            <button onClick={onEditOpen}>Update</button>
                            <button onClick={onDeleteOpen}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Index;
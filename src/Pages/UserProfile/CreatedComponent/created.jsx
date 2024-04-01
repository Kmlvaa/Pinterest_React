import { useEffect, useState } from 'react';
import Styles from './created.module.scss'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pin from '../../../Components/Pin/Pin';
import { getUserPosts } from '../../../services/PostService';

const Created = () => {
    const [posts, setPosts] = useState(null);
    const { id } = useParams();

    const UserPosts = async () => {
        try {
            let res = await getUserPosts(id);
            setPosts(res.data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
            setPosts(null);
        }
    }
    useEffect(() => {
        UserPosts();
    }, [])
    return (
        <>
            <div className={Styles.main}>
                {posts?.map((x) => {
                    return (
                        <Pin url={"http://localhost:5174/Images/" + x.url} pinSize={x.id}
                            key={x.id}
                            id={x.id}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Created;

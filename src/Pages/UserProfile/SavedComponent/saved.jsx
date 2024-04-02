import React, { useEffect, useState } from 'react';
import Styles from './saved.module.scss'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pin from '../../../Components/Pin/Pin';
import user from '../../../Images/user.png'
import { getSaveds } from '../../../services/SavedPosts';

const Saved = () => {
    const [saved, setSaved] = useState(null);
    const { id } = useParams();

    const getSavedPosts = async () => {
        try {
            let resp = await getSaveds(id);
            console.log(resp.data);
            setSaved(resp.data);
        }
        catch (error) {
            console.log(error.response.data);
            setSaved(null)
        }
    }
    useEffect(() => {
        getSavedPosts();
    }, [])

    return (
        <>
            <div className={Styles.main}>
                {saved?.map((data) => {
                    return (
                        <Pin id={data.id} pinSize={data.id} url={"http://localhost:5174/Images/" + data.url} />
                    )
                })}
            </div>
        </>
    );
}

export default Saved;

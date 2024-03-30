import React, { useEffect, useState } from 'react';
import Styles from './saved.module.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pin from '../../../Components/Pin/Pin';
import user from '../../../Images/user.png'
import { getSaveds } from '../../../services/SavedPosts';

const Saved = () => {
    const { t } = useTranslation();
    const [saved, setSaved] = useState(null);

    const getSavedPosts = async () => {
        try {
            let resp = await getSaveds();
            console.log(resp.data);
            setSaved(resp.data);
        }
        catch (error) {
            console.log(error);
            setSaved(null)
        }
    }
    useEffect(() => {
        getSavedPosts();
    }, [])

    return (
        <>
            {saved ?
                <div className={Styles.main}>
                    {saved?.map((data) => {
                        return(
                            <Pin id={data.id} pinSize={data.id} url={user}/>
                        )
                    })}
                </div>
                : <>
                    <div className={Styles.context}>
                        {t("profile.p2")}
                    </div>
                    <div className={Styles.btn}>
                        <button><Link to='/explore'>{t("profile.explore")}</Link></button>
                    </div>
                </>}
        </>
    );
}

export default Saved;

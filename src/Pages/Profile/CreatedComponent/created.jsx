import React from 'react';
import Styles from './created.module.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Created = () => {
    const {t, i18n} = useTranslation(); 
    return (
        <>
            <div className={Styles.context}>{t("profile.p1")}</div>
            <div className={Styles.btn}>
                <button><Link to='/create'>{t("profile.createPin")}</Link></button>
            </div>
        </>
    );
}

export default Created;

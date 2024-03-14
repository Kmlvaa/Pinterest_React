import React from 'react';
import Styles from './saved.module.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Saved = () => {
    const {t, i18n} = useTranslation(); 
    return (
        <>
            <div className={Styles.context}>
                {t("profile.p2")}
            </div>
            <div className={Styles.btn}>
                <button><Link to='/explore'>{t("profile.explore")}</Link></button>
            </div>
        </>
    );
}

export default Saved;

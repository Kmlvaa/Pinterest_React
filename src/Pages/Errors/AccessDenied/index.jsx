import React from 'react';
import Styles from './index.module.scss'
import err from '../../../Images/acess.png'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.container}>
            <img src={err} width={100} height={100} />
            <div className={Styles.error_msg}>
                <h1>{t("error.accessDenied.header")}</h1>
                <p style={{fontWeight: "bold"}}>{t("error.accessDenied.p1")}</p>
                <p>{t("error.accessDenied.p2")}</p>
                <div className={Styles.btns}>
                    <button className={Styles.login}>
                        <NavLink to={'/login'}>{t("error.accessDenied.login")}</NavLink>
                    </button>
                    <button className={Styles.home}>
                        <NavLink to={'/'}>{t("error.accessDenied.home")}</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;

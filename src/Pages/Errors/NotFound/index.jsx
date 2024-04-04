import React from 'react';
import Styles from './index.module.scss'
import notFound from '../../../Images/errorNot.png'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.container}>
            <img src={notFound} width={200} height={200}/>
            <div className={Styles.error_msg}>
                <h1>{t("error.notFound.header")}</h1>
                <button>
                    <NavLink to={'/'}>{t("error.notFound.home")}</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Index;

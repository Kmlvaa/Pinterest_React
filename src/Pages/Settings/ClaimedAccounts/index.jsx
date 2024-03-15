import React from 'react';
import Styles from './index.module.scss'
import Globus from '../../../Images/1200px-Globe_icon.svg.png'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>{t("settings.claimed.header")}</h1>
                <p>{t("settings.claimed.p1")}</p>
            </div>
            <div className={Styles.section}>
                <img src={Globus} width={25} height={25}/>
                <div>
                    <h1>{t("settings.claimed.web")}</h1>
                    <p>{t("settings.claimed.p2")}</p>
                </div>
            </div>
        </div>
    );
}

export default Index;
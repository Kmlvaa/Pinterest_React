import React from 'react';
import Styles from './index.module.scss';
import { Checkbox } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>{t("settings.privacy.header")}</h1>
                <p>{t("settings.privacy.header_p")}</p>
            </div>
            <div className={Styles.form}>
                <h1>{t("settings.privacy.ads")}</h1>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>{t("settings.privacy.check1")}</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>{t("settings.privacy.check2")}</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>{t("settings.privacy.check3")}</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>{t("settings.privacy.check4")}</Checkbox>
                <Checkbox className={Styles.checkbox} size='md' defaultChecked>{t("settings.privacy.check5")}</Checkbox>
            </div>
        </div>
    );
}

export default Index;

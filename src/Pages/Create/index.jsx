import React from 'react';
import Styles from './index.module.scss'
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
} from '@chakra-ui/react'
import Uploader from '../../Components/Uploader/uploader';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t, i18n} = useTranslation(); 

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <p>{t("create.create")}</p>
                    <button>{t("create.post")}</button>
                </div>
                <div className={Styles.second_section}>
                    <Uploader />
                    <div className={Styles.form_control}>
                        <FormControl>
                            <FormLabel>{t("create.title")}</FormLabel>
                            <Input type='text' placeholder={t("create.addtitle")}/><br /><br />
                            <FormLabel>{t("create.desc")}</FormLabel>
                            <Textarea placeholder={t("create.addDesc")} /><br /><br />
                            <FormLabel>{t("create.link")}</FormLabel>
                            <Input type='text' placeholder={t("create.addLink")}/>
                        </FormControl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

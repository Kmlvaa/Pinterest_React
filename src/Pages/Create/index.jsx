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
import { useFormik } from 'formik';
import { addPost } from '../../services/PostService';

const Index = () => {
    const { t } = useTranslation(); 

    const formik = useFormik({
        initialValues: {
            image: "",
            title: "",
            desc: "",
            link: ""
        },
        onSubmit: (values) => {
            try{
                addPost(values);
            }
            catch(error){
                console.log(error);
            }
        }
    })

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
                            <Input type='text' 
                                placeholder={t("create.addtitle")}
                                value={formik.values.title}
                                name='title'
                                id='title'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            /><br /><br />
                            <FormLabel>{t("create.desc")}</FormLabel>
                            <Textarea 
                                placeholder={t("create.addDesc")} 
                                value={formik.values.desc}
                                name='desc'
                                id='desc'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            /><br /><br />
                            <FormLabel>{t("create.link")}</FormLabel>
                            <Input type='text' 
                                placeholder={t("create.addLink")}
                                value={formik.values.link}
                                name='link'
                                id='link'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

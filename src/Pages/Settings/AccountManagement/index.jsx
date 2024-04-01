import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import {
    FormControl,
    FormLabel,
    Select,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { accountDetailsGet, accountDetailsPut } from '../../../services/AccountService'

const Index = () => {
    const [show, setShow] = React.useState(false)
    const toast = useToast();
    const [details, setDetails] = useState(null);
    const handleClick = () => setShow(!show)

    const { t, i18n } = useTranslation();
    const clickHandler = async (lang) => {
        await i18n.changeLanguage(lang);
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            birthdate: '',
            country: '',
        },
        onSubmit: (values) => {
            try {
                if(values.email == ''){
                    values.email = details?.email
                }
                if(values.username == ''){
                    values.username = details?.username
                }
                if(values.birthdate== ''){
                    values.birthdate = details?.birthdate
                }
                if(values.country == ''){
                    values.country = details?.country
                }
                accountDetailsPut(values);
                getDetails();
                toast({
                    title: "Account updated.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            catch (err) {
                console.log(err.response.data);
            }
        }
    })
    const getDetails = async () => {
        let resp = await  accountDetailsGet();
        let datas = await resp.data;
        setDetails(datas);
        console.log(datas);
    }
    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>{t("settings.management.header")}</h1>
                <p>{t("settings.management.p")}</p>
            </div>
            <div>
                <FormControl className={Styles.formControl}>
                    <div className={Styles.form_name}>
                        <h1>{t("settings.management.account")}</h1>
                        <FormLabel>{t("settings.management.email")}</FormLabel>
                        <Input type='text' id='email'
                            placeholder='Enter email'
                            name='email'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            defaultValue={details?.email}
                        />
                        <FormLabel>{t("settings.management.username")}</FormLabel>
                        <Input type='text' id='username'
                            placeholder='Enter username'
                            name='username'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            defaultValue={details?.username}
                        />
                    </div>
                    <FormLabel>{t("settings.management.birthdate")}</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        id='birthdate'
                        name='birthdate'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        defaultValue={details?.birthdate}
                    />
                    <FormLabel>{t("settings.management.country")}</FormLabel>
                    <Select
                        value={details?.country}
                        name='country'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}>
                        <option value="Amerika">{t("settings.management.amerika")}</option>
                        <option value="Azerbaijan">{t("settings.management.azerb")}</option>
                        <option value="Turkey">{t("settings.management.turkey")}</option>
                        <option value="Germany">{t("settings.management.germany")}</option>
                    </Select>
                </FormControl>
                <Button className={Styles.saveBtn} onClick={formik.handleSubmit}>{t("settings.management.save")}</Button>
            </div>
            <div className={Styles.lang_sec}>
                <h1>{t("settings.management.lang")}</h1>
                <div className={Styles.lang}>
                    <button onClick={() => clickHandler('az')}>Az</button>
                    <span> / </span>
                    <button onClick={() => clickHandler('en')}>En</button>
                </div>
            </div>
        </div>
    );
}

export default Index;


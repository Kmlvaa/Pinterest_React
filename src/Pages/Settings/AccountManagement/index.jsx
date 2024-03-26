import React from 'react';
import Styles from './index.module.scss'
import {
    FormControl,
    FormLabel,
    Select,
    Button,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { accountDetailsPut } from '../../../services/AccountService'

const Index = () => {
    const [show, setShow] = React.useState(false)
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
                accountDetailsPut(values)
            }
            catch (err) {
                console.log(err.response.data);
            }
        }
    })

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
                            value={formik.values.email}
                            name='email'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <FormLabel>{t("settings.management.password")}</FormLabel>
                        <Input type='text' id='username'
                            placeholder='Enter username'
                            value={formik.values.username}
                            name='username'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {/* <InputGroup size='md'>
                            <Input
                                id='password'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup> */}
                    </div>
                    <FormLabel>{t("settings.management.birthdate")}</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        id='birthdate'
                        value={formik.values.birthdate}
                        name='birthdate'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <FormLabel>{t("settings.management.country")}</FormLabel>
                    <Select
                        value={formik.values.country}
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


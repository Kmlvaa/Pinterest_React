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

const Index = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const { t, i18n } = useTranslation();
    const clickHandler = async (lang) => {
        await i18n.changeLanguage(lang);
    }

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
                        <Input type='text' id='email'/>
                        <FormLabel>{t("settings.management.password")}</FormLabel>
                        <InputGroup size='md'>
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
                        </InputGroup>
                    </div>
                    <FormLabel>{t("settings.management.birthdate")}</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        id='birthdate'
                    />
                    <FormLabel>{t("settings.management.country")}</FormLabel>
                    <Select>
                        <option value='option1'>{t("settings.management.amerika")}</option>
                        <option value='option2'>{t("settings.management.azerb")}</option>
                        <option value='option2'>{t("settings.management.turkey")}</option>
                        <option value='option2'>{t("settings.management.germany")}</option>
                    </Select>
                </FormControl>
                <Button className={Styles.saveBtn}>{t("settings.management.save")}</Button>
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


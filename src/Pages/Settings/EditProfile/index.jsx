import React from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Textarea,
    Select
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsPut } from '../../../services/Profile';

const Index = () => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            gender: '',
            about: '',
            image: ''
        },
        onSubmit: (values) => {
            try {
                let token = localStorage.getItem("token");
                // UserDetailsPut(token, values);
            }
            catch (err) {
                console.log(err);
            }
        }
    })
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>{t("settings.editProfile.header")}</h1>
                <p>{t("settings.editProfile.heading_p")}</p>
            </div>
            <div className={Styles.photo}>
                <p>{t("settings.editProfile.photo")}</p>
                <div>
                    <img src={user} width={70} height={70} />
                    <Button onClick={onOpen}>{t("settings.editProfile.change")}</Button>
                </div>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{t("settings.editProfile.modal.p")}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            <div className={Styles.modal_input} onClick={() => { document.querySelector('.input_field').click() }}>
                                <Input type='file' className='input_field' hidden
                                    name='image'
                                    value={formik.image}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <p>{t("settings.editProfile.modal.upload")}</p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button className={Styles.modalFooterbtn}>{t("settings.editProfile.modal.save")}</Button>
                            <Button onClick={onClose}>{t("settings.editProfile.modal.close")}</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            <div>
                <FormControl className={Styles.formControl}>
                    <div className={Styles.form_name}>
                        <div>
                            <FormLabel>{t("settings.editProfile.firstname")}</FormLabel>
                            <Input type='text'
                                name='firstname'
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        <div>
                            <FormLabel>{t("settings.editProfile.lastname")}</FormLabel>
                            <Input type='text'
                                name='lastname'
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                    </div>
                    <FormLabel>{t("settings.editProfile.about")}</FormLabel>
                    <Textarea placeholder={t("settings.editProfile.addAbout")}
                        name='about'
                        value={formik.values.about}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormLabel>{t("settings.editProfile.gender")}</FormLabel>
                    <Select placeholder='Add your pronouns'
                        onChange={formik.handleChange}
                        name="gender"
                        value={formik.values.gender}
                    >
                        <option value='male'>{t("settings.editProfile.male")}</option>
                        <option value='female'>{t("settings.editProfile.female")}</option>
                    </Select>
                    <p>{t("settings.editProfile.genderDesc")}</p>
                    <FormLabel>{t("settings.editProfile.username")}</FormLabel>
                    <Input type='text'
                        name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </FormControl>
                <Button className={Styles.saveBtn}>{t("settings.editProfile.save")}</Button>
            </div>
        </div>
    );
}

export default Index;

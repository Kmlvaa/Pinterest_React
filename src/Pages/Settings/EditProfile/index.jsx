import { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import {
    Button,
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    Select,
    useToast
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsPut, UserDetailsGet } from '../../../services/UserService';

const Index = () => {
    const { t } = useTranslation();
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const toast = useToast();

    const getDetails = async () => {
        try {
            const resp = await UserDetailsGet();
            setDetail(resp.data);
            console.log(resp.data)
        }
        catch (error) {
            console.log(error);
            setDetail([]);
        }
    };
    useEffect(() => {
        getDetails();
    }, [])

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            gender: '',
            about: '',
            profileUrl: null
        },
        onSubmit: (values) => {
            try {
                if (values.firstname == '') {
                    values.firstname = detail?.firstname
                }
                if (values.lastname == '') {
                    values.lastname = detail?.lastname
                }
                if (values.username == '') {
                    values.username = detail?.username
                }
                if (values.about == '') {
                    values.about = detail?.about
                }
                if (values.gender == '') {
                    values.gender = detail?.gender
                }
                if (values.profileUrl === null) {
                    values.profileUrl = detail?.profileUrl
                }
                console.log(values)
                var formdata = new FormData();
                formdata.append("firstname", values.firstname);
                formdata.append("lastname", values.lastname);
                formdata.append("username", values.username);
                formdata.append("gender", values.gender);
                formdata.append("about", values.about);
                formdata.append("profileUrl", values.profileUrl);
                console.log(formdata)

                UserDetailsPut(formdata);
                setImage(values.profileUrl);

                toast({
                    title: "Profile updated.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
            }
            catch (err) {
                console.log(err.message);
                setError(err.response.data);
            }
        },
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
                    <div>
                        <img src={image ? image : "http://localhost:5174/Images/" + detail?.profileUrl} width={70} height={70} />
                    </div>
                    <Button className={Styles.modal_input} onClick={() => { document.querySelector('.input_field').click() }}>
                        <Input type='file' className='input_field' hidden
                            defaultValue={detail?.profileUrl}
                            name='profileUrl'
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                formik.setFieldValue('profileUrl', e.target.files[0]);
                                if (e.target.files) {
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                }
                            }}
                        />
                        <p>{t("settings.editProfile.change")}</p>
                    </Button>
                </div>
            </div>
            <div>
                <FormControl className={Styles.formControl}>
                    <div className={Styles.form_name}>
                        <div>
                            <FormLabel>{t("settings.editProfile.firstname")}</FormLabel>
                            <Input type='text'
                                defaultValue={detail?.firstname}
                                name='firstname'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        <div>
                            <FormLabel>{t("settings.editProfile.lastname")}</FormLabel>
                            <Input type='text'
                                defaultValue={detail?.lastname}
                                name='lastname'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                    </div>
                    <FormLabel>{t("settings.editProfile.about")}</FormLabel>
                    <Textarea placeholder={t("settings.editProfile.addAbout")}
                        defaultValue={detail?.about}
                        name='about'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormLabel>{t("settings.editProfile.gender")}</FormLabel>
                    <Select placeholder='Add your pronouns'
                        onChange={formik.handleChange}
                        name="gender"
                    >
                        <option value='male'>{t("settings.editProfile.male")}</option>
                        <option value='female'>{t("settings.editProfile.female")}</option>
                    </Select>
                    <p>{t("settings.editProfile.genderDesc")}</p>
                    <FormLabel>{t("settings.editProfile.username")}</FormLabel>
                    <Input type='text'
                        name='username'
                        defaultValue={detail?.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </FormControl>
                {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
                <Button className={Styles.saveBtn} onClick={formik.handleSubmit}>{t("settings.editProfile.save")}</Button>
            </div>
        </div>
    );
}

export default Index;

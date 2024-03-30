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
    Select
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { UserDetailsPut, UserDetailsGet } from '../../../services/UserService';

const Index = () => {
    const { t } = useTranslation();
    const [detail, setDetail] = useState([]);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");

    const getDetails = async () => {
        try {
            let resp = await UserDetailsGet();
            setDetail(resp.data);
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
            image: ''
        },
        onSubmit: (values) => {
            try {
                var formdata = new FormData();
                formdata.append("firstname", values.firstname);
                formdata.append("lastname", values.lastname);
                formdata.append("username", values.username);
                formdata.append("gender", values.gender);
                formdata.append("about", values.about);
                formdata.append("image", values.image);
                UserDetailsPut(formdata);
                console.log(values)
            }
            catch (err) {
                console.log(err.response.data);
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
                        {image ? <img src={image} width={70} height={70} /> : <img src={user} width={70} height={70} />}
                    </div>
                    <Button className={Styles.modal_input} onClick={() => { document.querySelector('.input_field').click() }}>
                        <Input type='file' className='input_field' hidden
                            defaultValue={detail?.profileUrl}
                            name='image'
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                formik.setFieldValue('image', e.target.files[0])
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
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        <div>
                            <FormLabel>{t("settings.editProfile.lastname")}</FormLabel>
                            <Input type='text'
                                defaultValue={detail?.lastname}
                                name='lastname'
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                    </div>
                    <FormLabel>{t("settings.editProfile.about")}</FormLabel>
                    <Textarea placeholder={t("settings.editProfile.addAbout")}
                        defaultValue={detail?.about}
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
                        defaultValue={detail.gender}
                    >
                        <option value='male'>{t("settings.editProfile.male")}</option>
                        <option value='female'>{t("settings.editProfile.female")}</option>
                    </Select>
                    <p>{t("settings.editProfile.genderDesc")}</p>
                    <FormLabel>{t("settings.editProfile.username")}</FormLabel>
                    <Input type='text'
                        name='username'
                        defaultValue={detail?.username}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </FormControl>
                <Button className={Styles.saveBtn} onClick={formik.handleSubmit}>{t("settings.editProfile.save")}</Button>
            </div>
        </div>
    );
}

export default Index;

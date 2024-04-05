import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss';
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    useToast,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { addPost } from '../../services/PostService';
import { MdCloudUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { t } = useTranslation();
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const toast = useToast();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            url: null,
            title: "",
            description: "",
        },
        onSubmit: async (values) => {
            try {
                const formdata = new FormData()
                formdata.append('url', values.url)
                formdata.append('title', values.title)
                formdata.append('description', values.description)
                console.log(values)

                let add = await addPost(formdata);
                setTimeout(() => {
                    navigate('/profile/created');
                },1000)

                console.log(add.data)
                toast({
                    title: "Post created.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <p>{t("create.create")}</p>
                    <button onClick={formik.handleSubmit}>{t("create.post")}</button>
                </div>
                <div className={Styles.second_section}>
                    <div className={Styles.upload_main}>
                        <form onClick={() => { document.querySelector('.input-field').click() }}>
                            <input type='file' className='input-field' hidden
                                name='url'
                                id='image'
                                onChange={(e) => {
                                    formik.setFieldValue('url', e.target.files[0])
                                    e.target.files[0] && setFileName(e.target.files[0].name)
                                    if (e.target.files) {
                                        setImage(URL.createObjectURL(e.target.files[0]))
                                    }
                                }} />
                            {image ? <img src={image} alt={fileName} />
                                : <>
                                    <MdCloudUpload color='#1475cf' size={60} />
                                    <p>{t("create.upload")}</p>
                                </>}
                        </form>
                        {image ?
                            <button className={Styles.delete_btn}
                                onClick={() => {
                                    setImage(null);
                                    setFileName("No selected file");
                                }}>{t("create.delete")}</button>
                            : <></>}
                    </div>
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
                                value={formik.values.description}
                                name='description'
                                id='description'
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

export default Create;

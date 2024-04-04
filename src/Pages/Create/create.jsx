import React, { useState } from 'react';
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

const Create = () => {
    const { t } = useTranslation();
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            image: null,
            title: "",
            description: "",
        },
        onSubmit: async (values) => {
            try {
                const formdata = new FormData()
                formdata.append('image', values.image)
                formdata.append('title', values.title)
                formdata.append('description', values.description)

                let add = await addPost(formdata);

                console.log(add.data)
                toast({
                    title: "Post created.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
            }
            catch (error) {
                console.log(error.response);
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
                                name='image'
                                id='image'
                                onChange={(e) => {
                                    formik.setFieldValue('image', e.target.files[0])
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

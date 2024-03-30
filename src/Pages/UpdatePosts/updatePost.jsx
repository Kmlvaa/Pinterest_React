import { useState } from 'react';
import Styles from './update.module.css'
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { editPost } from '../../services/PostService';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
    const { t } = useTranslation();
    const {id} = useParams();
    const [title, setTitle] = useState('heyeyeyey');
    const [desc, setDesc] = useState();

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
        },
        onSubmit: (values) => {
            try {
                editPost(id, values);
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
                    <p>{t("create.editPost")}</p>
                    <button onClick={formik.handleSubmit}>{t("create.edit")}</button>
                </div>
                <div className={Styles.second_section}>
                    <div className={Styles.form_control}>
                        <FormControl>
                            <FormLabel>{t("create.title")}</FormLabel>
                            <Input type='text'
                                defaultValue={title}
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
                            />
                        </FormControl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatePost;

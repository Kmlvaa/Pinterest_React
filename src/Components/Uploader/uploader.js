import React, { useState } from 'react';
import './uploader.css'
import { MdCloudUpload } from 'react-icons/md'
import { useTranslation } from 'react-i18next';

const Uploader = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const {t, i18n} = useTranslation(); 
    return (
        <>
        <div className='main'>
            <form onClick={() => { document.querySelector('.input-field').click() }}>
                <input type='file' className='input-field' hidden
                onChange={({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }}/>
                {image ? <img src={image}  alt={fileName}/>
                : <>
                    <MdCloudUpload color='#1475cf' size={60}/>
                    <p>{t("create.upload")}</p>
                </>}
            </form>
                {image ?
                    <button className='delete-btn'
                    onClick={() => {
                        setImage(null);
                        setFileName("No selected file");
                    }}>{t("create.delete")}</button>
                 : <></>}
        </div>
        </>
    );
}

export default Uploader;

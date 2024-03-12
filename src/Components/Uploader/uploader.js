import React, { useState } from 'react';
import './uploader.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const Uploader = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    return (
        <>
        <div className='main'>
            <form onClick={() => { document.querySelector('.input-field').click() }}>
                <input type='file' accept='image/*' className='input-field' hidden
                onChange={({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }}/>
                {image ? <img src={image}  alt={fileName}/>
                : <>
                    <MdCloudUpload color='#1475cf' size={60}/>
                    <p>Choose a file to upload</p>
                </>}
            </form>
                {image ?
                    <button className='delete-btn'
                    onClick={() => {
                        setImage(null);
                        setFileName("No selected file");
                    }}>Delete</button>
                 : <></>}
        </div>
        </>
    );
}

export default Uploader;

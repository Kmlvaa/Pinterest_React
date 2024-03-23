import React from 'react';
import Styles from './index.module.scss'
import User from '../../Images/user.png';
import Heart from '../../Images/heart.png'
import Like from '../../Images/like.png'
import Kaonashi from '../../Images/Kaonashi8.jpg'
import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation(); 
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img_section}><img src={Kaonashi}/></div>
                <div className={Styles.content_section}>
                    <div className={Styles.section1}>
                        <div><ExternalLinkIcon style={{cursor: 'pointer'}}/></div>
                        <button>{t("pin.save")}</button>
                    </div>
                    <div className={Styles.section2}>
                        <h1>Title</h1>
                        <p>Description</p>
                    </div>
                    <div className={Styles.section3}>
                        <div className={Styles.profile}>
                            <img src={User} width={50} height={50}/>
                            <div>
                                <h3>Username</h3>
                                <p>32 followers</p>
                            </div>
                        </div>
                        <div><button>{t("pin.follow")}</button></div>
                    </div>
                    <div className={Styles.section4}>
                        <p>{t("pin.comment")}  <span><TriangleDownIcon /></span></p>
                        <div className={Styles.commentSec}>
                            <div><img src={User} width={30} height={30}/></div>
                            <div>
                                <div className={Styles.comment_about}>
                                    <p>Username</p>
                                    <p>Comment</p>
                                </div>
                                <div>datetime</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.section5}>
                        <div className={Styles.likes_sec}>
                            <h1>0 Comments</h1>
                            <div className={Styles.likes_scale}>
                                <p><span><img src={Heart} width={20} height={20}/></span> 1</p>
                                <img src={Like} width={25} height={25}/>
                            </div>
                        </div>
                        <div className={Styles.input}>
                            <img src={User} width={50} height={50}/>
                            <input placeholder={t("pin.addComment")}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

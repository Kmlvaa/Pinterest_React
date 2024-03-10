import React from 'react';
import Styles from './index.module.scss'
import User from '../../Images/user.png';
import Heart from '../../Images/heart.png'
import Like from '../../Images/like.png'
import Kaonashi from '../../Images/Kaonashi4.jpg'
import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'

const Index = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img_section}><img src={Kaonashi}/></div>
                <div className={Styles.content_section}>
                    <div className={Styles.section1}>
                        <div><ExternalLinkIcon style={{cursor: 'pointer'}}/></div>
                        <button>Save</button>
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
                        <div><button>Follow</button></div>
                    </div>
                    <div className={Styles.section4}>
                        <p>Comments  <span><TriangleDownIcon /></span></p>
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
                            <input placeholder='Add comment'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

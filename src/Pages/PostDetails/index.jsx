import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import User from '../../Images/user.png';
import Heart from '../../Images/heart.png'
import Like from '../../Images/like.png'
import Kaonashi from '../../Images/Kaonashi8.jpg'
import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
import { getPostDetails } from '../../services/PostService';
import { NavLink, useParams } from 'react-router-dom';
import { addComment, getComments } from '../../services/CommentService';
import { useFormik } from 'formik';
import { getLikes } from '../../services/LikeService';
import { getFollowers } from '../../services/FollowerService';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [like, setLike] = useState(0);
    const [follower, setFollower] = useState(null);
    const { id } = useParams();

    const postDetails = async () => {
        try {
            let resp = await getPostDetails(id);
            setDetails(resp.data);

            let comments = await getComments(id);
            setComments(comments.data);
            setCommentCount(comments.data.length);

            let likes = await getLikes(id);
            setLike(likes.data.length);

            //user id required
            let followers = await getFollowers(id);
            setFollower(followers.data);

        }
        catch (err) {
            console.log(err);
            setDetails([]);
            setComments([]);
        }
    }
    useEffect(() => {
        postDetails();
    }, [])

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        onSubmit: async (values, actions) => {
            try{
                let newComment = await addComment(id, values);
                actions.resetForm();
                postDetails();
                console.log(newComment.data);
            }
            catch(error){
                console.log(error.response.data);
            }
        }
    })

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img_section}><img src={Kaonashi} /></div>
                <div className={Styles.content_section}>
                    <div className={Styles.section1}>
                        <div><ExternalLinkIcon style={{ cursor: 'pointer' }} /></div>
                        <button>{t("pin.save")}</button>
                    </div>
                    <div className={Styles.section2}>
                        <h1>{details.title}</h1>
                        <div className={Styles.date}>
                            <p>{details.description}</p>
                            <p className={Styles.dateTime}>{details.createdAt}</p>
                        </div>
                    </div>
                    <div className={Styles.section3}>
                        <div className={Styles.profile}>
                            <img src={User} width={50} height={50} />
                            <div>
                                <h3><NavLink to='/user'>{details.user}</NavLink></h3>
                                <p>{follower} followers</p>
                            </div>
                        </div>
                        <div><button type='text' key='follow'>{t("pin.follow")}</button></div>
                    </div>
                    <div className={Styles.section4}>
                        <p>{t("pin.comment")}  <span><TriangleDownIcon /></span></p>
                        {comments?.map((comment) => {
                            return (
                                <div className={Styles.commentSec}>
                                    <div><img src={User} width={30} height={30} /></div>
                                    <div>
                                        <div className={Styles.comment_about}>
                                            <p>{comment.username}</p>
                                            <p>{comment.comment}</p>
                                        </div>
                                        <div className={Styles.commentDate}>{comment.createdAt}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={Styles.section5}>
                        <div className={Styles.likes_sec}>
                            <h1>{commentCount} Comments</h1>
                            <div className={Styles.likes_scale}>
                                <p><span><img src={Heart} width={20} height={20} /></span> {like}</p>
                                <img src={Like} width={25} height={25} />
                            </div>
                        </div>
                        <div className={Styles.input}>
                            <img src={User} width={50} height={50} />
                            <input placeholder={t("pin.addComment")} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='description'
                                id='comment'
                                value={formik.values.description}/>
                            <button onClick={formik.handleSubmit}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

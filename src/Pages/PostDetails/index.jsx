import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import User from '../../Images/user.png';
import Heart from '../../Images/heart.png'
import Like from '../../Images/like.png'
import Liked from '../../Images/heart.png'
import Kaonashi from '../../Images/Kaonashi8.jpg'
import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
import { getPostDetails } from '../../services/PostService';
import { Link, NavLink, useParams } from 'react-router-dom';
import { addComment, getComments } from '../../services/CommentService';
import { useFormik } from 'formik';
import { addLike, getLikes, isPostLiked, unLike } from '../../services/LikeService';
import { addFollower, getFollowers, isUserFollowed, unFollow } from '../../services/FollowerService';
import { addSaved } from '../../services/SavedPosts';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [like, setLike] = useState(0);
    const [follower, setFollower] = useState(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();

    const postDetails = async () => {
        try {
            let resp = await getPostDetails(id);
            setDetails(resp.data);
            console.log(resp.data)

            let comments = await getComments(id);
            setComments(comments.data);
            setCommentCount(comments.data.length);

            let likes = await getLikes(id);
            setLike(likes.data.length);

            let followers = await getFollowers(id);
            setFollower(followers.data);

            let followed = await isUserFollowed(id);
            setIsFollowed(followed.data);

            let liked = await isPostLiked(id);
            setIsLiked(liked.data);
        }
        catch (err) {
            console.log(err);
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
            try {
                let newComment = await addComment(id, values);
                actions.resetForm();
                postDetails();
                console.log(newComment.data);
            }
            catch (error) {
                console.log(error.response.data);
            }
        }
    })
    const addLikes = async () => {
        try {
            let newLike = await addLike(id);
            postDetails();
            console.log(newLike.data);
        }
        catch (err) {
            console.log("Can not like" + err);
        }
    }
    const addSaveds = async () => {
        try {
            let saveds = await addSaved(id);
            console.log(saveds.data);
        }
        catch (err) {
            console.log("Can not save" + err);
        }
    }
    const addFollow = async () => {
        try {
            let follow = await addFollower(id);
            console.log(follow.data)
            postDetails();
            window.location.reload();
        }
        catch (err) {
            console.log("Can not follow" + err);
        }
    }
    const UnFollowUser = () => {
        try {
            unFollow(id);
            postDetails();
            window.location.reload();
        }
        catch (err) {
            console.log("Can not unFollow this user" + err)
        }
    }
    const unLikePost = () => {
        try {
            unLike(id);
            postDetails();
            window.location.reload();
        }
        catch (err) {
            console.log("Can not unLike this post" + err);
        }
    }
    function changeImage() {
        console.log(isLiked)
        if (isLiked) {
            document.getElementById("unLikeImage").style.display = "none";
        } else {
            document.getElementById("likeImage").style.display = "none";
        }
    }
    function handleFollowed() {
        if (isFollowed) {
            document.getElementById('Followed').style.display = "none"
            document.getElementById('UnFollowed').style.display = "block"
        }
        else {
            document.getElementById('UnFollowed').style.display = "none"
            document.getElementById('Followed').style.display = "block"
        }
    }
    useEffect(() => {
        handleFollowed();
        // changeImage();
    }, [])


    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img_section}><img src={"http://localhost:5174/Images/" + details?.url} /></div>
                <div className={Styles.content_section}>
                    <div className={Styles.section1}>
                        <div><ExternalLinkIcon style={{ cursor: 'pointer' }} /></div>
                        <button onClick={addSaveds}>{t("pin.save")}</button>
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
                                <h3><NavLink to={`/userProfile/${id}/created`}>{details.user}</NavLink></h3>
                                <p>{follower} followers</p>
                            </div>
                        </div>
                        <div>
                            <button className={Styles.greyBtnComponent} id='Followed'>
                                <Link onClick={() => {
                                    addFollow();
                                }}>Follow</Link>
                            </button>
                            <button className={Styles.greyBtnComponent} id='UnFollowed' style={{ display: "none" }}>
                                <Link onClick={() => {
                                    UnFollowUser();
                                }}>UnFollow</Link>
                            </button>
                        </div>

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
                                <p><span><img src={Heart} width={15} height={15} /></span> {like}</p>
                                <NavLink onClick={() => { addLikes() }}>
                                    <img src={Like} width={25} height={25} id='likeImage' />
                                </NavLink>
                                {/* <NavLink onClick={() => { unLikePost() }}>
                                    <img src={Liked} width={25} height={25} id='unLikeImage' />
                                </NavLink> */}
                            </div>
                        </div>
                        <div className={Styles.input}>
                            <img src={User} width={50} height={50} />
                            <input placeholder={t("pin.addComment")}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='description'
                                id='comment'
                                value={formik.values.description} />
                            <button onClick={formik.handleSubmit}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

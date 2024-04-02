import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss'
import User from '../../Images/user.png';
import Heart from '../../Images/heart.png'
import Like from '../../Images/like.png'
import Liked from '../../Images/heart.png'
import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
import { getPostDetails } from '../../services/PostService';
import { Link, NavLink, useParams } from 'react-router-dom';
import { addComment, getComments } from '../../services/CommentService';
import { useFormik } from 'formik';
import { addLike, getLikes, isPostLiked, unLike } from '../../services/LikeService';
import { addFollower, getFollowers, isUserFollowed, unFollow } from '../../services/FollowerService';
import { addSaved, deleteSaved, isPostSaved } from '../../services/SavedPosts';
import { OtherUserDetailsGet, UserDetailsGet } from '../../services/UserService';
import { useToast } from '@chakra-ui/react';

const Index = () => {
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [follower, setFollower] = useState(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [myDetails, setMyDetails] = useState([]);
    const [userImage, setUserImage] = useState(null);
    const [myImage, setMyImage] = useState(null);
    const [isSaved, setIsSaved] = useState(null);
    const toast = useToast();
    const { id } = useParams();

    const postDetails = async () => {
        try {
            let resp = await getPostDetails(id);
            setDetails(resp.data);

            let details = await UserDetailsGet();
            setMyDetails(details.data);
            setMyImage(details.data.profileUrl);

            let other = await OtherUserDetailsGet(id);
            setUserDetails(other.data);
            setUserImage(other.data.profileUrl);

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

            let saved = await isPostSaved(id);
            setIsSaved(saved.data);
        }
        catch (err) {
            console.log(err.response.data);
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
            console.log(err.response.data);
        }
    }
    const addSaveds = async () => {
        try {
            let saveds = await addSaved(id);
            postDetails();
            console.log(saveds.data);
            toast({
                title: "Post saved",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    const UnSave = () => {
        try {
            deleteSaved(id);
            postDetails();
            setIsSaved(false)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }
    const addFollow = async () => {
        try {
            let follow = await addFollower(id);
            console.log(follow.data)
            postDetails();
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    const UnFollowUser = () => {
        try {
            unFollow(id);
            postDetails();
            setIsFollowed(false)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }
    const unLikePost = () => {
        try {
            unLike(id);
            postDetails();
            setIsLiked(false)
        }
        catch (err) {
            console.log(err.response.data);
        }
    }


    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img_section}><img src={"http://localhost:5174/Images/" + details?.url} /></div>
                <div className={Styles.content_section}>
                    <div className={Styles.section1}>
                        <div><ExternalLinkIcon style={{ cursor: 'pointer' }} /></div>
                        {isSaved ? <button onClick={() => {UnSave()}} >{t("pin.unsave")}</button>
                        : <button onClick={() => {addSaveds()}}>{t("pin.save")}</button>}
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
                            <div className={Styles.input_img}><img src={"http://localhost:5174/Images/" + userDetails?.profileUrl}/></div>
                            <div>
                                <h3><NavLink to={`/userProfile/${id}/created`}>{details.user}</NavLink></h3>
                                <p>{follower} followers</p>
                            </div>
                        </div>
                        <div>
                            {isFollowed ? <button className={Styles.greyBtnComponent} id='UnFollowed' style={{ width: "100px" }}>
                                <Link onClick={() => {
                                    UnFollowUser();
                                }}>UnFollow</Link>
                            </button> : <button className={Styles.greyBtnComponent} id='Followed'>
                                <Link onClick={() => {
                                    addFollow();
                                }}>Follow</Link>
                            </button>}
                        </div>

                    </div>
                    <div className={Styles.section4}>
                        <p>{t("pin.comment")}  <span><TriangleDownIcon /></span></p>
                        {comments?.map((comment) => {
                            return (
                                <div className={Styles.commentSec}>
                                    <div className={Styles.input_img} style={{width: "35px", height: "35px"}}>
                                        {userImage != "user.jpg" || myImage != "user.jpg" ? <img src={"http://localhost:5174/Images/" + comment.url} />
                                        : <img src={User}/>}
                                    </div>
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
                                {isLiked ? <NavLink onClick={() => { unLikePost() }}>
                                    <img src={Liked} width={25} height={25} id='unLikeImage' />
                                </NavLink> : <NavLink onClick={() => { addLikes() }}>
                                    <img src={Like} width={25} height={25} id='likeImage' />
                                </NavLink>}
                            </div>
                        </div>
                        <div className={Styles.input}>
                            <div className={Styles.input_img}>
                                {myImage != "user.jpg" ? <img src={"http://localhost:5174/Images/" + myDetails?.profileUrl}/>
                                : <img src={User}/>}
                            </div>
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

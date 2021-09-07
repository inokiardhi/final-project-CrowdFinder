import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import useOnClickOutside from "./useOnClickOutside";
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap'
import "./LargeCardMyEvent.css";
// import image from '../../img/largeCardDummy.jpeg'
import { deleteComment, getComment, postComment } from "../../redux/action/comment";
import { putLike } from "../../redux/action/like";
import { deletePost, getPost } from "../../redux/action/post";
import ReactTimeAgo from 'react-time-ago'
import { useParams } from "react-router";


function LargeCardMyEvent(props) {
    const {
        contentCard,
        image,
        time,
        interest,
        location,
        like,
        comment,
        userName,
        idPost,
        idComment,
        idUserPost,
    } = props;

    // const {id} = useParams(idPost)
    // console.log("ini id",id)

    const [state, setState] = useState({
        contentCard: contentCard,
        image: image,
        time: time,
        interest: interest,
        location: location,
        like: like,
        comment: comment,
        userName: userName,
        idPost: idPost,
    })

    const dispatch = useDispatch();
    const { listComment, loading } = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getComment(idPost));
    }, [dispatch]);

    //get current user and user id====================================
    const { user } = useSelector((state) => state.userData);
    const idUser = user.id;

    //post comment========================================
    const [body, setBody] = useState({
        content: "",
    });

    const changeComment = (e) => {
        setBody({ ...body, content: e.target.value });

    };

    const handlePostComment = async (e) => {
        e.preventDefault();
        dispatch(postComment(idPost, body));
    };

    //delete comment======================================
    const handleDeleteComment = async (idCommentDel) => {
        await dispatch(deleteComment(idCommentDel));
        await dispatch(getPost())
    }


    //like post===========================================
    const likes = useSelector((state) => state.likes.like);
    const handleLikes = async (e) => {
        await dispatch(putLike(idPost))
        await dispatch(getPost())
    };

    //delete post=========================================
    const loadingDelete = useSelector((state) => state.posts.listPost.loading)
    const handleDelete = async () => {
        await dispatch(deletePost(idPost))
        await dispatch(postComment(idPost, body));
        await dispatch(getPost())
    }

    // console.log('ini id post',idPost)

    // hide and show ellipsis menu========================
    const [show, setShow] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));

    //hide and show comment================================
    const [showComment, setShowComment] = useState(false);
    const commentRef = useRef();
    const toggleComment = () => {
        setShowComment(!showComment);
    };
    const toggleDropDown = () => {
        setShow(!show);
    };

    // console.log('likes', likes)
    // console.log('body gaes', body)
    // console.log('listcomment', listComment)

    return (
        <>
            <div className="divider  my-3 mb-5"></div>
            <div className="headContainer">

                <div className="d-flex">
                    <div className="imageAvatar mb-4 me-2">
                        <img src={`https://ui-avatars.com/api/?name=${userName}&background=random&length=1&rounded=true&size=35`} alt="" />
                    </div>
                    <div className="headText container-fluid d-block mb-2">

                        <div ref={ref} className="d-flex justify-content-end m-0 positionRelative">
                            {idUser === idUserPost && <i className="fa fa-ellipsis-h"
                                onClick={() => toggleDropDown()}
                                tabIndex="0"></i>
                            }
                            {show && (
                                <div className="card position-absolute text-center stylingHover" style={{ width: '7rem' }}>
                                    <Link to={`/update-announcement/${idPost}`}>Edit</Link>
                                    <label onClick={() => handleDelete()}>Delete</label>
                                </div>
                            )}
                        </div>

                        <div className="headTextMain d-flex align-content-center">
                            <label
                                className="my-auto"
                                style={{ fontSize: "20px", fontWeight: "400" }}
                            >
                                {userName}
                            </label>
                            <label className="headTextBadge rounded-pill ms-3 me-auto">
                                {interest}
                            </label>
                            <label
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#828282",
                                }}
                            >
                                <i className="fa fa-map-marker ms-auto me-0 fa-xs"></i> {location}
                            </label>
                        </div>
                        <label
                            style={{ fontSize: "16px", fontWeight: "400", color: "#4F4F4F" }}
                        >
                            <ReactTimeAgo date={time} locale="en-US" />
                        </label>
                    </div>
                </div>

                <div>
                    <Card>
                        <div className="w-75 ms-3 mt-3 mb-4">
                            <p className="font-size">
                                {contentCard}
                            </p>
                            <img className="imageSize" src={image} alt="" />
                        </div>

                        <div className="btnGroup d-inline-flex">
                            <button className="button-card flex-grow-1" onClick={() => handleLikes()}>
                                <i className="fa fa-thumbs-o-up" ></i>Like({like})
                            </button>
                            <button className="button-card flex-grow-1" onClick={() => toggleComment()}>
                                <i className="fa fa-commenting-o"></i>Comment({comment})
                            </button>
                            <button className="button-card flex-grow-1">
                                <i className="fa fa-share-alt"></i>Share
                            </button>
                        </div>
                    </Card>

                    <div className="hideComment" ref={commentRef} style={showComment ? { height: commentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
                        <div className="commentCard py-3">
                            <InputGroup className="fontWeightSize-formEvent" onSubmit={() => handlePostComment()}>
                                <FormControl
                                    className="mx-3 rounded-pill sizeText"
                                    placeholder="Type your comment"
                                    rows={1}
                                    name="content"
                                    onChange={(e) => changeComment(e)}
                                />
                            </InputGroup>
                            <div className="position-relative toTheLeft">
                                <Button className="rounded-circle btnStyle-largeCard" variant="secondary" onClick={handlePostComment}><i className="fa fa-paper-plane"></i></Button>
                            </div>
                        </div>

                        {/* <div className="commentCard py-3 text-center" style={{ fontWeight: '400', fontSize: '16px' }}>
                            <Link className="text-decoration-none text-secondary">Load more comment</Link>
                        </div> */}

                        {listComment.length > 0 && listComment?.filter((item) => item.post_id === idPost).map((item, idx) => (
                            <div key={idx} className="commentCard py-3 px-3">
                                <div className="d-flex mb-2 fontCircular" style={{ fontWeight: '450', fontSize: '18px' }}>
                                    <div className="flex-grow-1" >{item.user_id.fullname}</div>
                                    <div style={{ color: '#828282' }}>3h ago</div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1" style={{ fontWeight: '400', fontSize: '16px' }}>{item.content}</div>
                                    {idUser === item.user_id.id &&
                                        <label onClick={() => handleDeleteComment(item.id)}>
                                            <i className="fa fa-trash fa-2x"></i>
                                        </label>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default LargeCardMyEvent;

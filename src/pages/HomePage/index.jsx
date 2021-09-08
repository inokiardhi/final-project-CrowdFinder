import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import TopicMe from '../../components/TopicMe'
import CreatePost from '../../components/CreatePost'
import SmallCardMyEvent from '../../components/SmallCardMyEvent'
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent.jsx'
import MyPagination from '../../components/MyPagination/MyPagination'
import { getPost } from '../../redux/action/post'
import { getPostById } from '../../redux/action/postById'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';


function HomePage() {
    const [posts, setPosts] = useState();
    const dispatch = useDispatch()
    const { listPost, loading } = useSelector((state) => state.posts);
    const { search } = useSelector((state) => state.searchData)

    const user = useSelector((state) => state.userData.user)

    useEffect(() => {
        dispatch(getPost())
        dispatch(getPostById(1, user.id))
    }, [dispatch]);

    useEffect(() => {
        setPosts(listPost)
        setTimeout(2000)
    }, [listPost])



    // console.log('comment',listComment)
    // console.log('data', listPost)
    // console.log("ini data", listPost)

    // console.log("searchdata", search?.data?.length)
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex mt-3">
                    <TopicMe />
                    <div className="w-100 ms-4">
                        <CreatePost />

                        <div>
                            <div className="d-flex mt-4 mb-3">
                                <h5 className="flex-grow-1 my-auto" style={{ fontSize: '22px', fontWeight: '700' }}>Your Events</h5>
                                <p className="my-auto text-secondary" style={{ fontSize: '18px', fontWeight: '400' }}>See All Events</p>
                            </div>
                            <div className="wrapper mx-auto mb-5">
                                {search?.data?.length > 0 ? search?.data?.reverse?.().filter(post => post?.type === 'event').filter((post, idx) => idx < 10).map((post, id) => (
                                    <Link style={{ textDecoration: "none" }} to={`/comunity-profile/${post?.user_id?.id}`}> <SmallCardMyEvent key={id} title={post?.title} /></Link>
                                )) : listPost?.length > 0 && posts?.reverse?.().filter(post => post?.type === 'event').filter((post, idx) => idx < 10).map((post, id) => (
                                    <Link style={{ textDecoration: "none" }} to={`/comunity-profile/${post?.user_id?.id}`}><SmallCardMyEvent key={id} title={post?.title} /></Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            {search?.data?.length > 0 ? search?.data?.reverse?.().filter(post => post?.type === 'announcement').map((post, id) => (
                                <LargeCardMyEvent key={id} contentCard={post?.content} image={post?.image} time={post?.createdAt} interest={post?.interest} location={post?.user_id?.location} like={post?.like?.length} userName={post?.user_id?.fullname} idPost={post?.id} comment={post?.comment?.length} />
                            )) : listPost?.length > 0 && posts?.reverse?.().filter(post => post?.type === 'announcement').map((post, id) => (
                                <LargeCardMyEvent key={id} contentCard={post?.content} image={post?.image} time={post?.createdAt} interest={post?.interest} location={post?.user_id?.location} like={post?.like?.length} userName={post?.user_id?.fullname} idPost={post?.id} comment={post?.comment?.length} idUserPost={post?.user_id.id} />
                            ))}
                            <div className="text-center my-5">
                                <MyPagination />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default HomePage

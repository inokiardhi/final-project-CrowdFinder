import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';
import { getPost } from "../../redux/action/post";


function Activities(props) {
    const [posts, setPosts] = useState();
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const [show, setShow] = useState(true)
    const [detailcard, setDetailCard] = useState({ title: "", content: "" })
    const [data, setData] = useState({ name: "", id: "" })
    const { listPost } = useSelector((state) => state.posts);
    const dispatch = useDispatch()


    useEffect(() => {
        setPosts(postbyid)
        dispatch(getPostById(1, user.id))
    }, [postbyid])
    // console.log('ini type', postbyid[0].id)

    return (
        <div>
            {show ?
                [
                    postbyid?.length > 0 && posts?.reverse().filter(post => post.type === 'event').filter((post, idx) => idx < 10).map((post, idx) =>
                    (<LargeCrowdFinderCard key={idx} userName={post.user_id.username} title={post.title} content={post.content} time={post.createdAt}
                        action={() => {
                            setShow(false)
                            setDetailCard({
                                title: post.title,
                                content: post.content
                            })
                        }
                        } idPost={post.id} />)),
                    postbyid?.length > 0 && posts?.reverse().filter(post => post.type === 'announcement').map((post, idx) => (
                        <LargeCardMyEvent
                            key={idx}
                            contentCard={post.content}
                            image={post.image}
                            time={post.createdAt}
                            interest={post.interest}
                            location={post.user_id.location}
                            like={post.like.length}
                            userName={post.user_id.fullname}
                            idPost={post.id}
                            comment={post.comment.length}
                            idUserPost={post?.user_id.id} />
                    )),
                    <div className="pagination justify-content-center mt-5">
                        <MyPagination />
                    </div>

                ]
                : <EventDetailCard title={detailcard.title} content={detailcard.content} />}



        </div>


    );
}

export default Activities;
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';

function Post(props) {
    const [posts, setPosts] = useState();
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const [show, setShow] = useState(true)
    const [detailcard, setDetailCard] = useState({ title: "", content: "" })
    const [data, setData] = useState({ name: "", id: "" })
    const { listPost } = useSelector((state) => state.posts);
    const { userbyid } = useSelector((state) => state.getUserById)

    useEffect(() => {
        setPosts(postbyid)
    }, [postbyid])

    return (
        <div>
            {show ?
                [
                    postbyid.length > 0 && posts?.reverse().filter(post => post.type === 'announcement').map((post, idx) => (
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
                            photo={userbyid.image}
                        />
                    )),
                    <div className="pagination justify-content-center mt-5">
                        <MyPagination />
                    </div>

                ]
                : <EventDetailCard title={detailcard.title} content={detailcard.content} />}



        </div>
    );
}

export default Post;
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';
import ActivitiesPagination from '../../components/MyPagination/ActivitiesPagination';

function Post(props) {
    const [posts, setPosts] = useState();
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const [show, setShow] = useState(true)
    const [detailcard, setDetailCard] = useState({ title: "", content: "" })
    const [data, setData] = useState({ name: "", id: "" })
    const { listPost } = useSelector((state) => state.posts);
    const { userbyid } = useSelector((state) => state.getUserById)

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

     //get current post
     const indexOfLastPost = currentPage * postPerPage;
     const indexOfFirsPost = indexOfLastPost - postPerPage;
     const currentPosts = listPost?.length > 0 && posts?.filter(post => post.type === 'announcement').slice(indexOfFirsPost, indexOfLastPost);

    //change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

     //next and prev page
     const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }


    useEffect(() => {
        setPosts(postbyid)
    }, [postbyid])

    return (
        <div>
            {show ?
                [
                    postbyid.length > 0 && currentPosts?.reverse().filter(post => post.type === 'announcement').map((post, idx) => (
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
                        <ActivitiesPagination
                        postPerPage={postPerPage}
                        totalPost={posts?.filter(post => post.type === 'announcement').length}
                        paginate={paginate}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                         />
                    </div>

                ]
                : <EventDetailCard title={detailcard.title} content={detailcard.content} />}



        </div>
    );
}

export default Post;
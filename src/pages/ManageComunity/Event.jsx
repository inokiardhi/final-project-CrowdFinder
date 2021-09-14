import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import ActivitiesPagination from '../../components/MyPagination/ActivitiesPagination';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';


function Event(props) {
    const [posts, setPosts] = useState();
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const [show, setShow] = useState(true)
    const [detailcard, setDetailCard] = useState({ title: "", content: "", post_id: "" })
    const [data, setData] = useState({ name: "", id: "" })
    const { listPost } = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

     //get current post
     const indexOfLastPost = currentPage * postPerPage;
     const indexOfFirsPost = indexOfLastPost - postPerPage;
     const currentPosts = listPost?.length > 0 && posts?.filter(post => post.type === 'event').slice(indexOfFirsPost, indexOfLastPost);

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

    console.log("postid event", postbyid)
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
                    <div className="pagination justify-content-center mt-5">
                        <ActivitiesPagination
                        postPerPage={postPerPage}
                        totalPost={posts?.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                         />
                    </div>

                ]
                : <EventDetailCard title={detailcard.title} content={detailcard.content} postid={detailcard.post_id} />}
        </div>
    );
}

export default Event;
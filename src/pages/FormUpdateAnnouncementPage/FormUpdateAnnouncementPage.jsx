import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateAnnouncement from '../../components/FormUpdateAnnouncement/FormUpdateAnnouncement'
import { useParams } from 'react-router'
import { getCurrentUser } from '../../redux/action/user'
import { getPostById } from '../../redux/action/postById'

function FormUpdateAnnouncementPage() {
    let { idPost } = useParams()
    const dispatch = useDispatch();
    // const { listPost, loading } = useSelector((state) => state.posts);
    // const idPostUPdate = listPost?.filter(post => post?.id === idPost)

    // useEffect(() => {
    //     dispatch(getCurrentUser());
    //     dispatch(getPostById(1, idPost));
    // }, [dispatch]);

    console.log("data dari halaman update", idPost)

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                    {/* <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5> */}
                    <FormUpdateAnnouncement/>
                </div>
            </div>
        </>
    )
}

export default FormUpdateAnnouncementPage

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateAnnouncement from '../../components/FormUpdateAnnouncement/FormUpdateAnnouncement'
import { updateAnnouncement } from '../../redux/action/announcement'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getPost } from '../../redux/action/post'

function FormUpdateAnnouncementPage() {
    const dispatch = useDispatch()
    const { listPost, loading } = useSelector((state) => state.posts);
    let { idPost } = useParams()

    const idPostUPdate = listPost?.filter(post => post?.id === idPost)
    const dataupdate = listPost


    console.log("data dari halaman update", idPostUPdate)
    const [state, setState] = useState({
        content: "",
        interest: "",
        image: ""
    });

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])


    const handleUpdateAnnouncement = (e) => {
        e.preventDefault();
        const data = state;
        dispatch(updateAnnouncement(data, idPost));
    }

    console.log(state)

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                    {/* <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5> */}
                    <FormUpdateAnnouncement
                        title={(e) => setState({ ...state, title: e.target.value })}
                        content={(e) => setState({ ...state, content: e.target.value })}
                        interest={(e) => setState({ ...state, interest: e.target.value })}
                        image={(e) => setState({ ...state, image: e.target.value })}
                        onClick={(e) => handleUpdateAnnouncement(e)} />
                </div>
            </div>
        </>
    )
}

export default FormUpdateAnnouncementPage

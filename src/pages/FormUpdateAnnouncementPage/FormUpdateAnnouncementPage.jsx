import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateAnnouncement from '../../components/FormUpdateAnnouncement/FormUpdateAnnouncement'
import { useParams } from 'react-router'
import { getPost } from '../../redux/action/post'
import { updateAnnouncement } from '../../redux/action/announcement'

function FormUpdateAnnouncementPage() {
    let { idPost } = useParams();

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                    {/* <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5> */}
                    <FormUpdateAnnouncement />
                </div>
            </div>
        </>
    )
}

export default FormUpdateAnnouncementPage

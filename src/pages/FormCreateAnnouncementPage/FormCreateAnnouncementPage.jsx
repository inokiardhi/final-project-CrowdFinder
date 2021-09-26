import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormCreateAnnouncement from '../../components/FormCreatePost'
import { postAnnouncement } from '../../redux/action/announcement'


function FormCreateAnnouncementPage() {

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                    {/* <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5> */}
                    <FormCreateAnnouncement
                    />
                </div>
            </div>
        </>
    )
}

export default FormCreateAnnouncementPage

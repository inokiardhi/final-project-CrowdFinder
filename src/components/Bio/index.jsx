import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Bio(props) {




    return (

        <div className='bio pb-2'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Bio</h5>

                <div className="my-auto d-flex position-relative">
                    <i className="button-edit fa fa-edit"
                    ></i>

                </div>
            </div>
            <div className="body mt-2">
                <p>{props.bio}</p>
            </div>
        </div >
    )
}


export default Bio

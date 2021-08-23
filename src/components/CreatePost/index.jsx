import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './index.css'
import profilDummy from '../../img/profilDummy.jpeg'
import { useState } from 'react'

function CreatePost() {
    const [show, setShow] = useState(false);
    
    const toggleDropDownClose = () => {
        setShow(false);
    }

    const toggleDropDown =() => {
        setShow(!show);
    }
    return (
        <>
            <Card className="">
                <div className="d-flex">
                    <div className="d-flex createContainer flex-grow-1">
                        <img src={profilDummy} style={{width: '74px' }} className="image ms-3" alt="" />
                        <h5 className="ms-3">Create Post or Events</h5>
                    </div>
                    <div className="my-auto d-flex position-relative">
                        <i className="fas fa-plus-circle me-4 fa-3x" 
                            onBlur={() => toggleDropDownClose()}
                            onClick={() => toggleDropDown()}
                            tabIndex="0"></i>
                        {show && (
                            <div className="card position-absolute text-center positionAbsolute" style={{width: '7rem'}}>
                                <div >Post</div>
                                <div>Event</div>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CreatePost
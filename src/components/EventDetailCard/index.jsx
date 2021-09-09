import React from "react"
import { Card, Col, Button, Row } from "react-bootstrap"
import user from '../../image/user.png'

import post from '../../image/postexamp.jpeg'
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { RiGroupFill } from 'react-icons/ri'
import { TiLocation } from 'react-icons/ti'
import { attendEvent } from "../../redux/action/attend";
import './index.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPostById } from "../../redux/action/postById";

function EventDetailCard(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);

    const idAttend = postbyid?.filter((item) => item.id === props.postid).map((item) => item.attender)

    console.log("ini id attend", idAttend)

    const handleAttendEvent = async (e) => {
        e.preventDefault();
        await dispatch(attendEvent(props.postid))
        await dispatch(getPostById(1, props.idUser))
    };

    return (
        <>
            <div onClick={props.action} className="head-container">
                <div>
                    <Card>
                        <div className="me-3 ms-3 mt-3 mb-4">
                            <div className="image-hero" style={{ backgroundImage: `url(${post})` }}>
                            </div>
                            <h5 className='title-event my-4'>{props.title}</h5>
                            <Row className="time-event my-3 d-flex ">
                                <Col xs={4}>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillCalendar style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>22/09/2021</h5>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="time d-flex align-items-center ">
                                        <h4> <TiLocation style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>Jl.smpm 29 no.123 </h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="time-event my-3 d-flex ">
                                <Col xs={4}>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillClockCircle style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>09:00 AM</h5>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="time d-flex align-items-center ">
                                        <h4> <RiGroupFill className='me-4' style={{ color: '#BDBDBD' }} /></h4> <h5>129 people attend this</h5>
                                    </div>
                                </Col>
                            </Row>
                            <h5 className='mb-4' style={{ color: '#BDBDBD', fontSize: '18px', fontWeight: '600' }}> No Enterence Fee </h5>

                            <h5 className='title-event my-4'>Description</h5>

                            <p className="content-text mb-3">{props.content}</p>

                            {idAttend?.includes(user.id) ? <Button onClick={handleAttendEvent} className='my-4' style={{ width: '100%' }} variant="secondary" size="lg">
                                I have join this Event
                            </Button>
                                : <Button onClick={handleAttendEvent} className='my-4' style={{ width: '100%' }} variant="secondary" size="lg">
                                    Join This Event
                                </Button>}


                        </div>
                    </Card>

                </div>
            </div>
        </>

    )
}


export default EventDetailCard

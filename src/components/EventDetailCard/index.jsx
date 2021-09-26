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
import moment from 'moment'

function EventDetailCard(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);

    const idAttend = postbyid?.find((item) => item.id === props.postid).attender

    // console.log("ini id user", props.idUser)

    const handleAttendEvent = async (e) => {
        e.preventDefault();
        await dispatch(attendEvent(props.postid))
        await dispatch(getPostById(1, props.idUser))
    };

    const background = `https://crowdfinder.gabatch13.my.id/api${props.imageBkg}`

    return (
        <>
            <div onClick={props.action} className="head-container">
                <div>
                    <Card>
                        <div className="me-3 ms-3 mt-3 mb-4">
                            <div className="image-hero" style={{ backgroundImage: `url(${background})` }}>

                            </div>
                            <h5 className='title-event my-4'>{props.title}</h5>
                            <Row className="time-event my-3 d-flex ">
                                <Col xs={4}>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillCalendar style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>{moment(props.date).calendar("")}</h5>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="time d-flex align-items-center ">
                                        <h4> <TiLocation style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5>{props.address} </h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="time-event my-3 d-flex ">
                                <Col xs={4}>
                                    <div className="calender d-flex align-items-center">
                                        <h4> <AiFillClockCircle style={{ color: '#BDBDBD' }} className='me-4' /></h4> <h5> {moment(props.date).format("LT")}</h5>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="time d-flex align-items-center ">
                                        <h4> <RiGroupFill className='me-4' style={{ color: '#BDBDBD' }} /></h4> <h5>{props.attend} people attend this</h5>
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

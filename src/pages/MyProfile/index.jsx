import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import ModalUpdate from '../../components/ModalUpdate';
import { getPostById } from '../../redux/action/postById';
import { getUser } from '../../redux/action/user';


import About from './about';
import Activities from './activities';


import './index.scss'

function MyProfile(props) {
    const user = useSelector((state) => state.userData.user)
    const [isAbout, setIsAbout] = useState(true)
    const dispatch = useDispatch()
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow() {
        setFullscreen('sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down');
        setShow(true);
    }
    useEffect(() => {
        dispatch(getPostById(1, user.id))
    }, [dispatch])

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarCard action={handleShow} username={user.fullname} location={user.location} photo={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`} />
                    </Col>
                    <Col xl={1}></Col>
                    <Col>
                        <div className="button-menu d-flex">

                            <h5 className={`${isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(true)} >About</h5>
                            <h5 className={`${!isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(false)} >Activities</h5>
                        </div>
                        {isAbout ? <About /> : <Activities />}
                    </Col>
                </Row>
                <ModalUpdate show={show} hide={() => setShow(false)} fullscreen={fullscreen} cancel={() => setShow(false)} />
            </div>


        </Container>
    );
}

export default MyProfile;
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import UserProfileCard from '../../components/UserProfileCard';
import About from './about';
import Activities from './activities';


import './index.scss'

function UserProfile() {

    const [isAbout, setIsAbout] = useState(true)

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <UserProfileCard  />
                    </Col>
                    <Col>
                        <div className="button-menu d-flex">

                            <h5 className={`${isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(true)} >About</h5>
                            <h5 className={`${!isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(false)} >Activities</h5>
                        </div>
                        {isAbout ? <About /> : <Activities />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default UserProfile;
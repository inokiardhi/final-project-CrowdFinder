import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import Comunity from './comunity';


import './index.scss'
import People from './people';

function MyCrowd(props) {
    const user = useSelector((state) => state.userData.user)
    const [isAbout, setIsAbout] = useState(true)

    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarCard username={user.username} location={user.location} photo={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`} />
                    </Col>
                    <Col xl={1}></Col>
                    <Col>
                        <div className="button-menu d-flex">

                            <h5 className={`${isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(true)} >Comunity</h5>
                            <h5 className={`${!isAbout ? "is-active" : "not-active"} `} onClick={() => setIsAbout(false)} >People</h5>
                        </div>
                        {isAbout ? <Comunity /> : <People />}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default MyCrowd;
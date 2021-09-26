import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarComunity from '../../components/AvatarComunity';
import EventDetailCard from '../../components/EventDetailCard';
import Hero from '../../components/Hero';

import './index.scss'


function EventDetail(props) {



    return (
        <Container>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarComunity />
                    </Col>
                    <Col>
                        <EventDetailCard />
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default EventDetail
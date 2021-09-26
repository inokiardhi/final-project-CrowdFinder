import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarCard from '../../components/AvatarCard';
import AvatarComunity from '../../components/AvatarComunity';
import { useSelector } from 'react-redux';
import Hero from '../../components/Hero';
import About from './about';
import Event from './Event';
import './index.scss'
import Post from './Post';
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { getPostById } from '../../redux/action/postById';
import { getUserById } from '../../redux/action/userById';

function ComunityProfile(props) {
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const { userbyid } = useSelector((state) => state.getUserById)
    const [isAbout, setIsAbout] = useState(1)
    let { userId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostById(1, userId))
        dispatch(getUserById(userId))
    }, [dispatch])

    const toggle = (index) => {
        setIsAbout(index);
    }

    // console.log(userId)

    return (
        <Container style={{ minHeight: "100vH", paddingBottom: "500px" }}>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        <AvatarComunity idUser={userbyid.id} location={userbyid.location} comunityname={userbyid.fullname} photo={userbyid.image} />
                    </Col>
                    <Col xl={1}></Col>
                    <Col>
                        <div className="button-menu d-flex">
                            <h5 className={`${isAbout === 2 ? "is-active" : "not-active"}`} onClick={() => toggle(2)} >About</h5>
                            <h5 className={`${isAbout === 1 ? "is-active" : "not-active"}`} onClick={() => toggle(1)} >Events</h5>
                            <h5 className={`${isAbout === 3 ? "is-active" : "not-active"}`} onClick={() => toggle(3)} >Post</h5>
                        </div>
                        {isAbout === 2 ? <About /> : ''}
                        {isAbout === 1 ? <Event /> : ''}
                        {isAbout === 3 ? <Post /> : ''}
                    </Col>
                </Row>
            </div>


        </Container>
    );
}

export default ComunityProfile;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import AvatarCard from '../../components/AvatarCard';
import Hero from '../../components/Hero';
import { getUserById } from '../../redux/action/userById';
import Comunity from './comunity';


import './index.scss'
import People from './people';
import AvatarComunity from '../../components/AvatarComunity';
function MyCrowd(props) {
    const user = useSelector((state) => state.userData.user)
    const { userbyid } = useSelector((state) => state.getUserById)
    const [isAbout, setIsAbout] = useState(true)
    const dispatch = useDispatch()
    let { userId } = useParams()

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [dispatch])

    console.log("ini my crowd", userbyid)

    return (
        <Container style={{ minHeight: "100vH", paddingBottom: "500px" }}>
            <div className="Profile-page">
                <Hero />
                <Row>
                    <Col xl={4}>
                        {userbyid.id === user.id ? (<AvatarCard username={userbyid.username} location={userbyid.location} photo={`https://ui-avatars.com/api/?name=${userbyid?.fullname}&background=random&length=1&rounded=true&size=35`} />
                        ) : (<AvatarComunity idUser={userbyid.id} location={userbyid.location} comunityname={userbyid.fullname} photo={userbyid.image} />
                        )}
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
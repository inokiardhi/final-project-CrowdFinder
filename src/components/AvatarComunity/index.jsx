import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button, Badge } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';

function AvatarComunity() {
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={user} />
            </div>
            <Card.Body className='title'>
                <h4>Comunity Name</h4>
                <div className="comunity-badge my-2">
                    <h5>Comunity</h5>
                </div>
                <h5><TiLocation />Jakarta</h5>
            </Card.Body>

            <Card.Body className='cardbody d-flex align-items-center flex-column justify-content-lg-end'>
                <Button className='my-4' style={{ width: '100%' }} variant="primary" size="lg">
                    Follow
                </Button>

            </Card.Body>
        </Card>

    )
}


export default AvatarComunity

import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button } from "react-bootstrap"
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';
import '../AvatarCard/index.scss'
import '../AvatarCard/responsive.scss'

function UserProfileCard() {
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={user} />
            </div>
            <Card.Body className='title'>
                <h4>Username</h4>
                <h5><TiLocation />Jakarta</h5>
            </Card.Body>

            <Card.Body className='cardbody d-flex align-items-center flex-column justify-content-end'>
                <Button className='my-4' style={{ width: '70%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Follow
                </Button>
            </Card.Body>
        </Card>

    )
}


export default UserProfileCard

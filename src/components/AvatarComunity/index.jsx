import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Button, Badge } from "react-bootstrap"
import '../AvatarCard/index.scss'
import '../AvatarCard/responsive.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { followUser } from "../../redux/action/followUser"
import { getCurrentUser } from "../../redux/action/user"

function AvatarComunity(props) {
    const dispatch = useDispatch()
    const { userbyid } = useSelector((state) => state.getUserById)
    const handleFollowUser = async (e) => {
        e.preventDefault();
        await dispatch(followUser(props.idUser))
        await dispatch(getCurrentUser())
    }

    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={props.photo} />
            </div>
            <Card.Body className='title'>
                <h4>{props.comunityname}</h4>
                {userbyid.role === "community" && <div className="comunity-badge my-2">
                    <h5>Comunity</h5>
                </div>
                }

                <h5><TiLocation />{props.location}</h5>
            </Card.Body>

            <Card.Body className='cardbody d-flex align-items-center flex-column justify-content-lg-end'>
                <Button onClick={handleFollowUser} className='my-4' style={{ width: '90%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Follow
                </Button>

            </Card.Body>
        </Card>

    )
}


export default AvatarComunity

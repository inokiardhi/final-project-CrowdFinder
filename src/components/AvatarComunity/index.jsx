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
import { useParams } from 'react-router'
import { getUserById } from "../../redux/action/userById"

function AvatarComunity(props) {
    const dispatch = useDispatch()
    const { userbyid } = useSelector((state) => state.getUserById)
    const user = useSelector((state) => state.userData.user)

    const handleFollowUser = async (e) => {
        e.preventDefault();
        await dispatch(followUser(props.idUser))
        await dispatch(getUserById(props.idUser))

    }
    const idFollow = userbyid?.followers?.map((item) => item.id)
    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                {userbyid?.image === "" ? (<img src={`https://ui-avatars.com/api/?name=${userbyid.fullname}&background=random&length=1&rounded=true&size=35`} />) : (<img src={`https://crowdfinder.gabatch13.my.id/api${props.photo}`} />)}
            </div>
            <Card.Body className='title'>
                <h4>{props.comunityname}</h4>
                {userbyid?.role === "community" && <div className="comunity-badge my-2">
                    <h5>Comunity</h5>
                </div>
                }

                <h5><TiLocation />{props.location}</h5>
            </Card.Body>

            <Card.Body className='cardbody d-flex align-items-center flex-column justify-content-lg-end'>
                {idFollow?.includes(user.id) ? <Button onClick={handleFollowUser} className='my-4' style={{ width: '90%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Unfollow
                </Button>
                    : <Button onClick={handleFollowUser} className='my-4' style={{ width: '90%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                        Follow
                    </Button>}


            </Card.Body>
        </Card>

    )
}


export default AvatarComunity

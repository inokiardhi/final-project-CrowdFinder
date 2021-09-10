import React, { useEffect } from "react"
import { Card, Image, Button, Container } from "react-bootstrap"
import user from '../../image/user.png'
import './index.scss'
import { followUser } from "../../redux/action/followUser"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getUserById } from "../../redux/action/userById"
function ListCardPeople(props) {
    const { userbyid } = useSelector((state) => state.getUserById)
    const user = useSelector((state) => state.userData.user)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getUserById(props.idUser))
    // }, [dispatch])

    const handleFollowUser = async (e) => {
        e.preventDefault();
        await dispatch(followUser(props.idUser))
    }

    return (
        <div className='pb-3'>
            <Card className='ListCard' style={{ borderRadius: '10px' }}>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div className="user-detail d-flex ms-1 ">
                        <div className="image">
                            {props.idUser.following?.filter((item) => item.role === "user").map((item) => item.image === null) ?
                                (<img src={`https://ui-avatars.com/api/?name=${props.fullname}&background=random&length=1&rounded=true&size=35`} />) : (<img src={`https://crowdfinder.gabatch13.my.id/api${props.photo}`} />)}</div>
                        <div className="user-title ms-4">
                            <h5>{props.fullname}</h5>
                            <p>{props.role}</p>
                        </div>
                    </div>
                    <div>
                        <Button style={{ fontSize: '14px', fontWeight: '700' }} size='lg' variant="secondary">Unfollow</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}


export default ListCardPeople

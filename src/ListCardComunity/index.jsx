import React from "react"
import { Card, Image, Button, Container } from "react-bootstrap"
import user from '../image/user.png'
import './index.scss'
import { useSelector } from "react-redux"
function ListCardComunity(props) {
    const { userbyid } = useSelector((state) => state.getUserById)
    const dummy = (e) => {
        e.target.src = `https://ui-avatars.com/api/?name=${props.comunityname}&background=random&length=1&rounded=true&size=35`;
    }
    return (
        <div className='pb-3'>
            <Card className='ListCard' style={{ borderRadius: '10px' }}>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div className="user-detail d-flex ms-1 ">
                        <div className="image">
                            {userbyid.following?.filter((item) => item.role === "community").map((item) => item.image === null) ?
                                null : (<img src={`https://crowdfinder.gabatch13.my.id/api${props.photo}`} onError={dummy} />)}
                        </div>
                        <div className="user-title ms-4">
                            <h5>{props.comunityname}</h5>
                            <p>Comunity</p>
                        </div>
                    </div>
                    <div>
                        <Button style={{ fontSize: '14px', fontWeight: '700' }} size='lg' variant="secondary">Manage</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}


export default ListCardComunity

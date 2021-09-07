import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Form, Button, Modal } from "react-bootstrap"
import './index.scss'
import user from '../../image/user.png'
import { TiLocation } from 'react-icons/ti';
import { useDispatch } from "react-redux"
import { logout } from "../../redux/action/user"
import './responsive.scss'
import Swal from "sweetalert2"

function AvatarCard(props) {
    const dispatch = useDispatch();



    const Logout = (e) => {
        e.preventDefault();
        dispatch(logout());
        window.location.replace("/")
    }

    return (

        <Card className='AvatarCard'>
            <div className="image-avatar">
                <img src={props.photo} />
            </div>
            <Card.Body className='title'>
                <h4>{props.username}</h4>
                <h5><TiLocation />{props.location}</h5>
            </Card.Body>

            <Card.Body className='show-example-btn cardbody d-flex align-items-center flex-column'>
                <Button onClick={props.action} className='my-4' style={{ width: '70%', fontSize: '16px', fontWeight: '700' }} variant="secondary" size="lg">
                    Profile Setting
                </Button>


                <h5 style={{ color: '#D82671', fontWeight: '700', textDecoration: 'none', fontSize: '16px', cursor: 'pointer' }} onClick={Logout}>  Logout</h5>
            </Card.Body>
        </Card >

    )
}


export default AvatarCard

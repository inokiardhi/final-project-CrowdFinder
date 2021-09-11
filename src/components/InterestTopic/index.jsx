import React, { useRef, useEffect, useState } from 'react'
import { Container, Badge, Row, Col } from "react-bootstrap"
import './index.scss'
import { HiPencilAlt } from 'react-icons/hi';
import { Form, Button } from 'react-bootstrap';

function InterstTopic(props) {
    const [show, setShow] = useState(false);

    return (
        <div className='Topic py-3 w-100'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Interest Topic</h5>
                <div className="my-auto d-flex position-relative">
                    <i className="button-edit fa fa-edit"
                        onClick={props.action}
                    ></i>

                </div>
            </div>
            <div className="body mt-2 d-flex flex-wrap">
                {props.userInterest?.map((interest) => (<Badge className='topicuser' pill >
                    {interest}
                </Badge>))}
            </div>
        </div>
    )
}


export default InterstTopic

import React, { useRef, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './index.css'
import profilDummy from '../../img/profilDummy.jpeg'
import { Link } from 'react-router-dom'


function CreatePost() {
    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));
    const [show, setShow] = useState(false);

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },

            [ref, handler]
        );
    }

    const toggleDropDown = () => {
        setShow(!show);
    }
    return (
        <>
            <Card className="fontWeight-create">
                <div className="d-flex">
                    <div className="d-flex .createContainer flex-grow-1 ms-4">
                        <h5 className="ms-3">Create Announcement or Events</h5>
                    </div>
                    <div ref={ref} className="my-auto d-flex position-relative">
                        <i className="fa fa-plus-circle me-4 fa-3x"
                            onClick={() => toggleDropDown()}
                            tabIndex="0"></i>
                        {show && (
                            <div className="card position-absolute text-center positionAbsolute" style={{ width: '9rem' }}>
                                <Link to="/create-announcement">Announcement</Link>
                                <Link to="/create-event">Event</Link>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CreatePost


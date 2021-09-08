import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import { getCurrentUser } from '../../redux/action/user';
import "./responsive.css"



function TopicMe(props) {
    const dispatch = useDispatch();
    const userInterest = useSelector((state) => state.userData.user.interest);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);
    return (
        <>
            <Card className="fontWeight-topic">
                <ListGroup variant="flush">
                    <ListGroup.Item className="part-1 mt-2">
                        <h6>What topic would you like to see now?</h6>
                        <p>You will only see topics you selected. Go to Account menu to add more topics.</p>
                        <div>
                            {userInterest?.map((interest, index) => (
                                <div key={index} className="d-flex mb-1">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    <label className="form-check-label">{interest}</label>
                                </div>
                            ))}
                            {/* <div className="d-flex mb-1">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                <label className="form-check-label">Business</label>
                            </div>
                            <div className="d-flex mb-1">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                <label className="form-check-label">Politics</label>
                            </div>
                            <div className="d-flex mb-1">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                <label className="form-check-label">Art</label>
                            </div> */}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="part-2  mb-3">
                        <h6>Which events would you like to see?</h6>
                        <div>
                            <div className="d-flex mb-1">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                <label className="form-check-label">Events near me</label>
                            </div>
                            <div className="d-flex mb-5">
                                <input className="form-check-input me-1 secondary" type="checkbox" value="" />
                                <label className="form-check-label">Events from community I’ve followed</label>
                            </div>
                        </div>

                        <Button className="d-block mx-auto w-100" variant="secondary">Update</Button>
                    </ListGroup.Item>
                </ListGroup>

            </Card>
        </>
    )
}

export default TopicMe

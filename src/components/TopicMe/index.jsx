import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'


function TopicMe() {
    return (
        <>
            <Card style={{ height: '35rem', minWidth: '16rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item className="part-1 mt-2">
                        <h6>What topic would you like to see now?</h6>
                        <p>You will only see topics you selected. Go to Account menu to add more topics.</p>
                        <div>
                            <div className="d-flex mb-1">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                <label class="form-check-label">Social</label>
                            </div>
                            <div className="d-flex mb-1">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                <label class="form-check-label">Business</label>
                            </div>
                            <div className="d-flex mb-1">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                <label class="form-check-label">Politics</label>
                            </div>
                            <div className="d-flex mb-1">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                <label class="form-check-label">Art</label>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="part-2  mb-3">
                        <h6>Which events would you like to see?</h6>
                        <div>
                            <div className="d-flex mb-1">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                <label class="form-check-label">Events near me</label>
                            </div>
                            <div className="d-flex mb-5">
                                <input class="form-check-input me-1 secondary" type="checkbox" value=""/>
                                <label class="form-check-label">Events from community I’ve followed</label>
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
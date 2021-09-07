import React from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"

function ModalUpdate(props) {
    const user = useSelector((state) => state.userData.user)
    return (
        <div>
            <Modal show={props.show} fullscreen={props.fullscreen} onHide={props.hide} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>FullName</Form.Label>
                        <Form.Control type="text" placeholder={user.fullname} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder={user.location} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image Profile</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Background Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Interest Topic Edit</Form.Label>
                        {/* {Coll 1} */}
                        <div className="p-3 rounded border d-flex justify-content-between ">
                            <div>
                                <div className="Cekbox">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="sports"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            sports
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="finance"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            finance
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="automotive"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            automotivee
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="politics"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            politics
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="design"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            design
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* {Col 2} */}

                            <div>
                                <div className="Cekbox">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="cook"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            cook
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="tech"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            tech
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="religion"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            religion
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="art"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            art
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="music"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            music
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* {Coll 3} */}

                            <div>
                                <div className="Cekbox">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="business"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            business
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="psychology"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            psychology
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="tourism"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            tourism
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="bike"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            bike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="science"
                                        />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            science
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.action}> Save</Button>
                    <Button variant='secondary' onClick={props.cancel}> Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ModalUpdate

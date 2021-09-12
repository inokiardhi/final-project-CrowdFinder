import React, { useState } from "react"
import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getCurrentUser, updateUser } from "../../redux/action/user"

function ModalUpdate(props) {
    const user = useSelector((state) => state.userData.user)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        fullname: user.fullname,
        location: user.location,
        image: null,
        background_image: null,
        interest: [],
        bio: user.bio
    });

    const changeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const changeInterest = (e) => {
        if (form.interest.length <= 5) {
            setForm({
                ...form,
                interest: form.interest.find((item) => item === e.target.value)
                    ? form.interest.filter((item) => item !== e.target.value)
                    : [...form.interest, e.target.value],
            });
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = form
        let formdata = new FormData()

        formdata.append('fullname', data.fullname);
        formdata.append('location', data.location);
        formdata.append('image', data.image);
        formdata.append('background_image', data.background_image);
        formdata.append('interest', data.interest);
        formdata.append('bio', data.bio);
        await dispatch(updateUser(
            formdata
        ));
        // form.fullname,
        //     form.location,
        //     form.image,
        //     form.background_image,
        //     form.interest,
        //     form.bio

        await dispatch(getCurrentUser())
    };

    const imageFile = (e) => {
        console.log(e.target.files[0]);
        setForm({ ...form, image: e.target.files[0] });

    }

    const backgroundFile = (e) => {
        console.log(e.target.files[0]);
        setForm({ ...form, background_image: e.target.files[0] });

    }

    console.log("form", form);


    return (
        <div>
            <Modal size="lg" show={props.show} fullscreen={props.fullscreen} onHide={props.hide} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={user.fullname}
                                value={form.fullname}
                                name="fullname"
                                onChange={(e) => changeForm(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={user.location}
                                value={form.location}
                                name="location"
                                onChange={(e) => changeForm(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image Profile</Form.Label>
                            <Form.Control type="file"
                                accept="image/*"
                                onChange={imageFile} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Background Image</Form.Label>
                            <Form.Control type="file"
                                accept="image/*"
                                onChange={backgroundFile}
                            />
                        </Form.Group>
                        <Form.Label>Interest Topic Edit</Form.Label>
                        <Form.Group className="my-2 border p-2" controlId="exampleForm.ControlTextarea1">

                            <Row>
                                {/* {Coll 1} */}
                                <Col>
                                    {[
                                        "sports",
                                        "finance",
                                        "automotive",
                                        "politics",
                                        "design",
                                    ].map((type) => (
                                        <div
                                            key={`default-${type}`}
                                            className="mb-2"
                                            style={{ fontSize: "18px" }}
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                placeholder="enter your interest"
                                                id={`default-${type}`}
                                                label={` ${type}`}
                                                value={`${type}`}
                                                onChange={(e) => changeInterest(e)}
                                                disabled={
                                                    form.interest.length < 5
                                                        ? false
                                                        : form.interest.filter(
                                                            (item) => item !== `${type}`
                                                        ).length === 5
                                                            ? true
                                                            : false
                                                }
                                            />
                                        </div>
                                    ))}
                                </Col>

                                <Col>
                                    {["cook", "tech", "religion", "art", "music"].map(
                                        (type) => (
                                            <div
                                                key={`default-${type}`}
                                                className="mb-2"
                                                style={{ fontSize: "18px" }}
                                            >
                                                <Form.Check
                                                    type="checkbox"
                                                    placeholder="enter your interest"
                                                    id={`default-${type}`}
                                                    label={` ${type}`}
                                                    value={`${type}`}
                                                    onChange={(e) => changeInterest(e)}
                                                    disabled={
                                                        form.interest.length < 5
                                                            ? false
                                                            : form.interest.filter(
                                                                (item) => item !== `${type}`
                                                            ).length === 5
                                                                ? true
                                                                : false
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </Col>

                                <Col>
                                    {[
                                        "business",
                                        "psychology",
                                        "tourism",
                                        "bike",
                                        "science",
                                    ].map((type) => (
                                        <div
                                            key={`default-${type}`}
                                            className="mb-2"
                                            style={{ fontSize: "18px" }}
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                placeholder="enter your interest"
                                                id={`default-${type}`}
                                                label={` ${type}`}
                                                value={`${type}`}
                                                onChange={(e) => changeInterest(e)}
                                                disabled={
                                                    form.interest.length < 5
                                                        ? false
                                                        : form.interest.filter(
                                                            (item) => item !== `${type}`
                                                        ).length === 5
                                                            ? true
                                                            : false
                                                }
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={form.bio}
                                name="bio"
                                onChange={(e) => changeForm(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdate}> Save</Button>
                    <Button variant='secondary' onClick={props.cancel}> Cancel</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}


export default ModalUpdate

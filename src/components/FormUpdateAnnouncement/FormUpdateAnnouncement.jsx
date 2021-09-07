import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import './index.css'
import { InputGroup, FormControl, Button, Form, Card } from 'react-bootstrap'
import { getCurrentUser } from '../../redux/action/user';

function FormUpdateAnnouncement(props) {
    const { title, interest, content, image, onClick } = props;
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);

    const imageHandler = (e) => {
        const selected = e.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && allowedTypes.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };

    //getUserData=============================================
    const dispatch = useDispatch();
    const userInterest = useSelector((state) => state.userData.user.interest);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    return (
        <>
            <div className="head-container">

                <div className="d-flex">
                    <div className="headText container-fluid" style={{ padding: '0 0' }}>
                        <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Update your announcement</h5>
                        <div className="headText-main d-flex mb-3">
                            <p className="m-0 flex-grow-1" style={{ fontSize: '18px', fontWeight: '400' }}>What would you like to change?</p>
                            {/* <div className="headText-badge rounded-pill ms-3">Design</div> */}
                            <select className="MyBadge flex-end" onChange={interest}>
                                <option></option>
                                {userInterest?.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <FormControl
                                as="textarea"
                                placeholder="Type something..."
                                rows={3}
                                onChange={content}
                            />
                        </InputGroup>

                        <Card className="imgContainer">
                            {img ? <img src={img} alt="" /> : <div></div>}
                            <input
                                type="file"
                                name="image-upload"
                                id="input"
                                accept="image/*"
                                onChange={imageHandler}
                            />

                            {img ? (
                                <button
                                    className="rounded-pill btnStyle-announcement btnCenter"
                                    onClick={() => setImg(null)}
                                >
                                    <i className="far fa-image me-2"></i>remove image
                                </button>
                            ) : (
                                <label className="rounded-pill btnStyle-announcement btnCenter" htmlFor="input">
                                    <i className="fa fa-picture-o me-2"></i>Add Image
                                </label>
                            )}
                        </Card>
                        <div className="d-flex justify-content-end">
                            <Button className="px-5" variant="secondary" onClick={onClick}>Update</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FormUpdateAnnouncement

import React, { useEffect, useState } from 'react'
import './index.css'
import ReactLoading from 'react-loading';
import { InputGroup, FormControl, Button, Form, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/action/user';
import { postAnnouncement } from '../../redux/action/announcement';
import { getPost } from '../../redux/action/post';

function FormCreateAnnouncement(props) {
    const { title, interest, content, image, onClick } = props;
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const { loading } = useSelector((state) => state.announcements)

    const [state, setState] = useState({
        content: "",
        interest: "",
        image: {
            display: null,
            upload: null,
        },
    });

    const imageFile = (e) => {
        const selected = e.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

        if (selected && allowedTypes.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    image: {
                        display: reader.result,
                        upload: selected,
                    }
                });
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    }

    const handlePostAnnouncement = async (e) => {
        e.preventDefault();
        const data = state;
        let formData = new FormData();

        dispatch(postAnnouncement(formData))
        // dispatch(getPost())
        if (data.image.upload) {
            formData.append('image', data.image.upload, data.image.upload.name);
        }
        formData.append('content', data.content);
        formData.append('interest', data.interest);
    };

    // console.log(state.image.upload)
    // console.log(state)

    //getUserData=============================================
    const userInterest = useSelector((state) => state.userData.user.interest);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    return (
        <>
            <div className="head-container">

                <div className="d-flex">
                    <div className="headText container-fluid" style={{ padding: '0 0' }}>
                        <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create a announcement</h5>
                        <div className="headText-main d-flex mb-3">
                            <p className="m-0 flex-grow-1" style={{ fontSize: '18px', fontWeight: '400' }}>What would you like to share today?</p>
                            {/* <div className="headText-badge rounded-pill ms-3">Design</div> */}
                            <select className="MyBadge flex-end" onChange={(e) => setState({ ...state, interest: e.target.value })}>
                                <option></option>
                                {userInterest?.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        {loading && <ReactLoading className='mx-auto' type={'cylon'} color={'#20BDE0'} height={'20%'} width={'20%'} />}
                        {!loading && (
                            <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <FormControl
                                    as="textarea"
                                    placeholder="Type something..."
                                    rows={3}
                                    onChange={(e) => setState({ ...state, content: e.target.value })}
                                />
                            </InputGroup>
                        )}

                        {!loading && (
                            <Card className="imgContainer">
                                {state.image.display && <img src={state.image.display} alt="" />}
                                <input
                                    type="file"
                                    name="image-upload"
                                    id="input"
                                    accept="image/*"
                                    onChange={imageFile}
                                />

                                {state.image.display ? (
                                    <button
                                        className="rounded-pill btnStyle-announcement btnCenter"
                                        onClick={() => setState({ ...state, image: { display: null, upload: null } })}
                                    >
                                        <i className="fa fa-picture-o  me-2"></i>remove image
                                    </button>
                                ) : (
                                    <label className="rounded-pill btnStyle-announcement btnCenter" htmlFor="input">
                                        <i className="fa fa-picture-o me-2"></i>Add Image
                                    </label>
                                )}
                            </Card>
                        )}

                        {!loading && (
<<<<<<< HEAD
                        <div className="d-flex justify-content-end mt-4">
                            <Button className="px-5" variant="secondary" onClick={(e) => handlePostAnnouncement(e)} >Post</Button>
                        </div>
=======
                            <div className="d-flex justify-content-end">
                                <Button className="px-5" variant="secondary" onClick={(e) => handlePostAnnouncement(e)} >Post</Button>
                            </div>
>>>>>>> b856efbf8eb64033d8c70b70b0b23fea12ef57ad
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default FormCreateAnnouncement

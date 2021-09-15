import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import './index.css'
import { InputGroup, FormControl, Button, Form, Card } from 'react-bootstrap'
import { getCurrentUser } from '../../redux/action/user';
import { useParams } from 'react-router';
import { getPostByIdPost } from '../../redux/action/postByIdPost';
import { updateAnnouncement } from '../../redux/action/announcement';
import ReactLoading from 'react-loading';

function FormUpdateAnnouncement(props) {
    const { title, interest, content, image, onClick } = props;
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    let { idPost } = useParams()
    const { loading } = useSelector((state) => state.announcements)



    //getPost by ID ==================================
    const {ByIdPost} = useSelector((state) => state.postByIdPost)
    // useEffect(() => {

    // }, [dispatch])

    const [state, setState] = useState({
        interest: null,
        content: null,
        image: {
            display: null,
            upload: null,
        },
    })

    useEffect(() => {
        setState({
            interest : ByIdPost.interest,
            content : ByIdPost.content,
            image : {
                display: ByIdPost.image,
                upload: null,
            }
        })
    },[ByIdPost])

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getPostByIdPost(1, idPost));
    }, [dispatch]);

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

    const handleUpdateAnnouncement = (e) => {
        e.preventDefault();
        const data = state;
        const formData = new FormData();
        dispatch(updateAnnouncement(formData, idPost));
        if (state.image.upload) {
            formData.append('image', data.image.upload, data.image.upload.name);
        }
        formData.append('content', data.content);
        formData.append('interest', data.interest);
    }


    //imageHandler ============================================
    // const imageHandler = (e) => {
    //     const selected = e.target.files[0];
    //     const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    //     if (selected && allowedTypes.includes(selected.type)) {
    //         let reader = new FileReader();
    //         reader.onloadend = () => {
    //             setImg(reader.result);
    //         };
    //         reader.readAsDataURL(selected);
    //     } else {
    //         setError(true);
    //     }
    // };

    //getUserData=============================================
    const userInterest = useSelector((state) => state.userData.user.interest);


    return (
        <>
            <div className="head-container">
                <div className="d-flex">
                    <div className="headText container-fluid" style={{ padding: '0 0' }}>
                        <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Update your announcement</h5>
                        <div className="headText-main d-flex mb-3">
                            <p className="m-0 flex-grow-1" style={{ fontSize: '18px', fontWeight: '400' }}>What would you like to change?</p>
                            {/* <div className="headText-badge rounded-pill ms-3">Design</div> */}
                            <select className="MyBadge flex-end" value={state.interest} onChange={(e) => setState({ ...state, interest: e.target.value })}>
                                <option></option>
                                {userInterest?.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        {loading && <ReactLoading className='mx-auto' type={'cylon'} color={'#20BDE0'} height={'20%'} width={'20%'} />}
                        {!loading && (
                            <div>
                                <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <FormControl
                                        as="textarea"
                                        placeholder="Type something..."
                                        rows={3}
                                        onChange={(e) => setState({ ...state, content: e.target.value })}
                                        value={state.content}
                                    />
                                </InputGroup>

                                <Card className="imgContainer">
                                    {state.image.display ? <img src={!state.image.upload ? `https://crowdfinder.gabatch13.my.id/api${state.image.display}` : state.image.display} alt="" /> : <div></div>}
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
                                            <i className="fa fa-picture-o me-2"></i>remove image
                                        </button>
                                    ) : (
                                        <label className="rounded-pill btnStyle-announcement btnCenter" htmlFor="input">
                                            <i className="fa fa-picture-o me-2"></i>Add Image
                                        </label>
                                    )}
                                </Card>
                                <div className="d-flex justify-content-end">
                                    <Button className="px-5" variant="secondary" onClick={handleUpdateAnnouncement}>Update</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FormUpdateAnnouncement

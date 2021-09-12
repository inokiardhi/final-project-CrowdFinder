import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormCreateEvent from '../../components/FormCreateEvent'
import { postEvent } from '../../redux/action/event'


function FormCreateEventPage() {
    const dispatch = useDispatch()
    const event = useSelector((state) => state.events.posts);
    const [error, setError] = useState(false);

    const [state, setState] = useState({
        title: "",
        image: {
            display: null,
            upload: null,
        },
        location: "",
        interest: "",
        content: "",
        address: "",
        date: "",
    })
    
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


    const handlePostEvent = (e) => {
        e.preventDefault();
        const data = state;
        let formData = new FormData();
        dispatch(postEvent(formData));

        if (data.image.upload) {
            formData.append('image', data.image.upload, data.image.upload.name);
        }
        formData.append('title', data.title);
        formData.append('location', data.location);
        formData.append('interest', data.interest);
        formData.append('content', data.content);
        formData.append('address', data.address);
        formData.append('date', data.date);
    }

  console.log('create event', state)

    return (
        <>
            <div className="container">
                <div className="mt-4 mb-5">
                   <FormCreateEvent 
                   title={(e) => setState({...state, title: e.target.value})}
                   location={(e) => setState({...state, location: e.target.value})}
                   interest={(e) => setState({...state, interest: e.target.value})}
                   content={(e) => setState({...state, content: e.target.value})}
                   address={(e) => setState({...state, address: e.target.value})}
                   date={(date) => setState({...state, date: date})}
                   showDate={state.date}
                   onChangeImage={imageFile}
                   displayImage={state.image.display}
                   uploadImage={state.image.upload}
                   removeImage={() => setState({ ...state, image:{ display: null, upload: null  }})}
                   onClick={(e) => handlePostEvent(e)}/>
                </div>
            </div>
        </>
    )
}

export default FormCreateEventPage

import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormCreateEvent from '../../components/FormCreateEvent'
import { postEvent } from '../../redux/action/event'


function FormCreateEventPage() {
    const dispatch = useDispatch()
    const event = useSelector((state) => state.events.posts);

    const [state, setState] = useState({
        title: "",
        image: null,
        location: "",
        interest: "",
        content: "",
        address: "",
        date: "",
    })
    

  const handlePostEvent = (e) => {
      e.preventDefault();
      const data = state;
      let formData = new FormData();
      dispatch(postEvent(formData));
      formData.append('title', data.title);
      formData.append('image', data.image);
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
                   image={(e) => setState({...state, image: e.target.files[0]})}
                   onClick={(e) => handlePostEvent(e)}/>
                </div>
            </div>
        </>
    )
}

export default FormCreateEventPage

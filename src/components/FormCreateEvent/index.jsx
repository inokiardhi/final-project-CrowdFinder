import React, { useState } from 'react'
import './index.css'
import { InputGroup, FormControl, Card, Button, FormSelect, FloatingLabel } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function FormCreateEvent(props) {
    const { 
        title, 
        onChangeImage,
        displayImage,
        removeImage,
        location, 
        interest, 
        content, 
        date, 
        showDate, 
        address, 
        onClick 
    } = props;

    const filterDateTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };


    return (
        <>
            <div className="container-fluid" style={{ padding: '0 0' }}>
                <h5 style={{ fontSize: '22px', fontWeight: '700' }}>Create an event</h5>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>Put your awesome photo to get more people!</p>

                <Card className="cardSize mb-3">
                    {displayImage && <img src={displayImage} alt="" />}
                    <input
                        type="file"
                        name="image-upload"
                        id="input"
                        accept="image/*"
                        onChange={onChangeImage}
                    />

                    {displayImage ? (
                        <button
                            className="rounded-pill btnStyle centeringBtn"
                            onClick={removeImage}
                        >
                            <i className="fa fa-picture-o  me-2"></i>remove image
                        </button>
                    ) : (
                        <label className="rounded-pill btnStyle centeringBtn" htmlFor="input">
                            <i className="fa fa-picture-o  me-2"></i>Add Image
                        </label>
                    )}
                </Card>

                <InputGroup className="mb-3 fontWeightSize-formEvent">
                    <FormControl
                        placeholder="How do you call this event?"
                        aria-label="How do you call this event?"
                        aria-describedby="basic-addon1"
                        onChange={title}
                    />
                </InputGroup>


                <DatePicker
                    className="mb-3"
                    selected={showDate}
                    onChange={date}
                    timeFormat="HH:mm"
                    timeInputLabel="Time:"
                    showTimeInput
                    dateFormat="d MMMM yyyy HH:mm"
                    placeholderText=" Date & Time"
                    filterTime={filterDateTime}
                    filterDate={filterDateTime}
                />

                <InputGroup className="mb-3">
                    <FormControl
                        style={{ fontFamily: 'Mulish, FontAwesome, sans-serif' }}
                        placeholder="&#xf041; Where?"
                        aria-label="Where?"
                        aria-describedby="basic-addon4"
                        onChange={location}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Address?"
                        aria-label="Address?"
                        aria-describedby="basic-addon3"
                        onChange={address}
                    />
                </InputGroup>

                <FloatingLabel className="mb-3" controlId="floatingSelect" label="What Category This Event Is?" onChange={interest}>
                    <FormSelect aria-label="Floating label select example">
                        <option></option>
                        <option value="sports">sport</option>
                        <option value="art">art</option>
                        <option value="bike">bike</option>
                    </FormSelect>
                </FloatingLabel>


                <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FormControl
                        as="textarea"
                        placeholder="Tell people more about this event"
                        rows={3}
                        onChange={content}
                    />
                </InputGroup>

                <div className="d-flex justify-content-end">
                    <Button className="px-5" variant="secondary" onClick={onClick}>Post event</Button>
                </div>

            </div>
        </>
    )
}

export default FormCreateEvent

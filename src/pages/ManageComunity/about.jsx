import React, { useState } from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import { Link } from "react-router-dom"
import MyPagination from '../../components/MyPagination/MyPagination';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function About(props) {
    const { user } = useSelector((state) => state.userData)
    const [show, setShow] = useState(false);


    return (
        <div>
            <Bio bio={user.bio} />

            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Comunity Member (205)</h5>
                <div className="button-add-member d-flex justify-content-center align-items-center">
                    <h5 style={{ color: '#D82671', fontWeight: '400', textDecoration: 'none', fontSize: '16px', marginTop: '10px' }} >  Add New Member</h5>
                    <i className="fa fa-plus-circle ms-3 fa-2x" onClick={() => setShow(true)}
                    ></i>
                </div>

            </div>
            {show ? <InputGroup className="my-5">
                <Button variant="outline-primary">Add</Button>
                <Button variant="outline-secondary" onClick={() => setShow(false)}>Cancel</Button>
                <FormControl aria-label="Example text with two button addons" />
            </InputGroup> : null}

            {user.followers?.map((item) => (<ListCardPeople fullname={item.fullname} />))}



            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div >
    );
}

export default About;
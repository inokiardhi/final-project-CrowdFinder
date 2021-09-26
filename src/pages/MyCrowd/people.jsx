import React from 'react';
import ListCardPeople from '../../components/ListCardPeople';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function People(props) {
    const { userbyid } = useSelector((state) => state.getUserById)


    return (
        <div>
            {userbyid.following?.filter((item) => item.role === "user").map((item) =>
                (<ListCardPeople fullname={item.fullname} role={item.role} idUser={item.id} photo={item.image} />))}
        </div>
    );
}

export default People;
import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardComunity from '../../ListCardComunity';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Comunity(props) {
    const { userbyid } = useSelector((state) => state.getUserById)

    return (
        <div>
            {userbyid.following?.filter((item) => item.role === "community").map((item) => (<ListCardComunity comunityname={item.fullname} photo={item.photo} />))}
        </div>
    );
}

export default Comunity;
import React from 'react';
import Bio from '../../components/Bio';
import BioNoEdit from '../../components/Bio/bioNoedit';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import MyPagination from '../../components/MyPagination/MyPagination';
import { useDispatch, useSelector } from 'react-redux';


function About(props) {
    const { userbyid } = useSelector((state) => state.getUserById)

    return (
        <div>
            <BioNoEdit bio={userbyid.bio} />

            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Comunity Member (205)</h5>

            </div>
            <ListCardPeople />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default About;
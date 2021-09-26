import React from 'react';

import ListCardPeople from '../../components/ListCardPeople';
import { Link } from "react-router-dom"
import BioNoEdit from '../../components/Bio/bioNoedit';
import './index.scss'
import InterstTopicNoEdit from '../../components/InterestTopic/InterestTopicnoEdit';
import MyPagination from '../../components/MyPagination/MyPagination';



function About(props) {
    return (
        <div>
            <BioNoEdit bio='pp' />
            <hr />
            <InterstTopicNoEdit list='sport' />
            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Community</h5>

            </div>
            <ListCardPeople />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>
        </div>
    );
}

export default About;


import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import { Link } from "react-router-dom"
import './index.scss'
import { useSelector } from 'react-redux';
import ListCardComunity from '../../ListCardComunity';

function About(props) {
    const user = useSelector((state) => state.userData.user)
    console.log(user.id)
    return (
        <div>
            <Bio bio={user.bio} />
            <hr />
            <div className="d-flex">
                <InterstTopic userInterest={user.interest} />
            </div>
            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>My Crowd</h5>

                <h5>  <Link style={{ color: '#D82671', fontWeight: '400', textDecoration: 'none', fontSize: '16px' }} to={`/mycrowd/${user.id}`}>See All</Link></h5>


            </div>

            {user.following?.filter((item) => item.role === "community").map((item) => (<ListCardComunity comunityname={item.fullname} photo={item.photo} />))}

        </div>
    );
}

export default About;


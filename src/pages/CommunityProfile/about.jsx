import React from 'react';
import Bio from '../../components/Bio';
import BioNoEdit from '../../components/Bio/bioNoedit';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import MyPagination from '../../components/MyPagination/MyPagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListCardComunity from '../../ListCardComunity';
import InterstTopicNoEdit from '../../components/InterestTopic/InterestTopicnoEdit';

function About(props) {
    const { userbyid } = useSelector((state) => state.getUserById)

    return (
        <div>
            <BioNoEdit bio={userbyid.bio} />
            <hr />
            {userbyid?.role === "community" ? (<><div className="myCrowd d-flex justify-content-between py-3">
                <h5>Comunity Member (205)</h5>
            </div>
                <ListCardPeople />
            </>) : (<>

                <div className="d-flex mb-3">
                    <InterstTopicNoEdit list={userbyid.interest} />

                </div>
                <div className="myCrowd d-flex flex-wrap justify-content-between py-3">
                    <h5>Comunity</h5>

                    <h5><Link style={{ color: '#D82671', fontWeight: '400', textDecoration: 'none', fontSize: '16px' }}
                        to={`/mycrowd/${userbyid.id}`}>See All</Link></h5>
                </div>

                {userbyid.following?.filter((item) => item.role === "community").map((item) => (<ListCardComunity comunityname={item.fullname} />))}
            </>)

            }

            {/* <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div> */}

        </div>
    );
}

export default About;
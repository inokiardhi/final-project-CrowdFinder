import React from 'react';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';

function Activities(props) {
    return (
        <div>
            <LargeCrowdFinderCard />
            <LargeCardMyEvent />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>


    );
}

export default Activities;
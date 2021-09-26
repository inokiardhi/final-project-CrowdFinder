import React from 'react'
import './index.scss'


function BioNoEdit(props) {
    return (
        <div className='bio pb-2'>
            <div className="title d-flex justify-content-between align-items-center">
                <h5>Bio</h5>
            </div>
            <div className="body mt-2">
                <p>{props.bio}</p>
            </div>
        </div >
    )
}


export default BioNoEdit

import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePagination(props) {
    const {postPerPage, totalPost, paginate} = props;
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} to="!#" className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            
        </>
    )
}

export default HomePagination

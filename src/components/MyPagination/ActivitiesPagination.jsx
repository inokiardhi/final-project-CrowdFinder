import React from 'react'


function ActivitiesPagination(props) {
    const {postPerPage, totalPost, paginate, currentPage, handleNextPage, handlePrevPage} = props;
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <>
            <ul className="pagination">
                <li className="page-item">
                    { currentPage === 1 ?
                    <button onClick={handlePrevPage} className="page-link text-secondary" disabled>Prev</button> :
                    <button onClick={handlePrevPage} className="page-link text-secondary">Prev</button>
                    }
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} to="!#" className={currentPage === number ? "btn btn-secondary" : "page-link text-secondary"}>
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    { currentPage === Math.ceil(totalPost / postPerPage) ?
                    <button onClick={handleNextPage} className="page-link text-secondary"  disabled>next</button> :
                    <button onClick={handleNextPage} className="page-link text-secondary"  >next</button>
                    }
                </li>
            </ul>
            
        </>
    )
}

export default ActivitiesPagination

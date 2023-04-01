import React from 'react'
import ReactPaginate from 'react-paginate'


const Paginate = ({ setPageNumber, pageNumber, info }) => {
    console.log(info)
    return (
        <ReactPaginate className='pagination  justify-content-center gap-4 my-4'     
            pageLinkClassName="page-link"
            pageClassName="page-item"
            previousLabel="Anterior"
            nextLabel="Siguiente"
            previousClassName="btn btn-primary text-dark"
            nextClassName="btn btn-primary"
            activeClassName="active"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            onPageChange={(data) => setPageNumber(data.selected) }
            pageCount={info} />
            
  )
}

export default Paginate;
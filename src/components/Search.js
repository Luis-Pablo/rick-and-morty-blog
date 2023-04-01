import React from 'react'

const Search = ({ setSearch }) => {

  return (
      <form className='d-flex justify-content-center gap-4 my-5'>
          <input
              onChange={(e) => {
                  setSearch(e.target.value)
              }}
              className='input' type="text" placeholder='Buscar personaje' />
          <button className='btn btn-primary fs-5'>Buscar</button>
      </form>
  )
}

export default Search
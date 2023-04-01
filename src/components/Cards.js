import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/context'


const Cards = ({ results, page }) => {    
    const {actions} = useContext(Context)    
    
    let display;
    if (results) {
        display = results.map(character => {
            
            let { id, name, image, location, status } = character
            const handleClick = (e) => {
                e.preventDefault();
                actions.addFavorites(name)
            }
            console.log(name)
            return (
                <Link to={`${page}${id}`}  key={id} className='text-link col-lg-3 col-md-6 justify-content-center position-relative mb-4'>
                    <div className='cards d-flex flex-column'>
                        <img src={image} alt="" className='img img-fluid' />
                        <div className='content'>
                            <div className='fs-4 fw-bold mb-4 text-dark'>{name }</div>
                            <div className=''>
                                <div className='fs-6 text-dark'>Last location</div>
                                <div className='fs-5 text-dark'>{location.name}</div>
                                <div className='m-3'>
                                    <button
                                        className='btn btn-info'
                                        onClick={handleClick}
                                        > Add favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                        {status === 'Dead' ?
                            <div className='badge text-bg-danger position-absolute'>{status}</div>:
                            (status === 'Alive')?
                                <div className='badge text-bg-success position-absolute'>{status}</div>:
                                    <div className='badge text-bg-secondary position-absolute'>{status}</div>
                        }
                    </div>
                    

                </Link>)
        })
        
    } else {
        display = "No characters"
    }
  return (
      <div className='row '>{display}</div>
  )
}

export default Cards
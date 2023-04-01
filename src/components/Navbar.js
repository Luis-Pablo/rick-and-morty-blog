import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/context'

const Navbar = () => {

    const { store, actions } = useContext(Context);

  return (
      <nav className="navbar navbar-expand-lg bg-light pb-2">
          <div className="container">
              <Link to="/" className='text-center ubuntu my-3 navbar-brand'>Rick & Morty</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/episode"className="nav-link" >Episodes</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/location" className="nav-link" >location</NavLink>
                      </li>
                      
                      <div className="dropdown">
                          <button className={`btn ${store.favorites.length > 0 ? "btn-success" : "btn-secondary"} dropdown-toggle btn-lg`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Favorites
                          </button>
                          <ul className="dropdown-menu justify-content-center">
                              {store.favorites.length > 0 ? (
                                  store.favorites.map((favorite, i) => (
                                      
                                      <li key={i} className="dropdown-item-text fw-bolder" >{favorite}
                                          
                                          
                                          
                                              <button type="button" className="btn btn-outline-danger" onClick={() => actions.rFavorite(favorite)}>remove<i className="bi bi-trash"></i></button>

                                      </li>

                                          

                                      
                                  ))
                              )
         
                                  : (
                                      <li className="dropdown-item" disabled > No favorites </li>

                                  )}

                              

                          </ul>
                      </div>
                      


                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar

import React from 'react'
import Cards from '../components/Cards';
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import Paginate from '../components/Paginate';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const { info, results } = data;
  
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))

    },[url])
    return (
        <div className="App">
            
           
            <div className='container'>
                <Search setSearch={setSearch} />
                <div className='row justify-content-center'>
                   
                    <div className='col-lg-11 col-12'>
                        <div className='row justify-content-center'>
                            <Cards page="/" results={results } />
                         

                        </div>

                    </div>
                </div>
            </div>
                <Paginate  info={42} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    )
}

export default Home
import './App.css';
import React from 'react'
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Episodes from './views/Episodes';
import Location from './views/Location';
import CardDetails from './views/CardDetails';
import injectContext from './store/context';
function App() {
  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<CardDetails />}></Route>
          
          <Route path="/episode" element={<Episodes />}></Route>
          <Route path="/episode/:id" element={<CardDetails />}></Route>

          <Route path="/location" element={<Location />}></Route>
          <Route path="/location/:id" element={<CardDetails />}></Route>
        </Routes>
      
      </BrowserRouter>
    
    
    </>
    
  );
}

export default injectContext(App);

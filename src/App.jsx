// import React, { useEffect, useState } from 'react';
// import Lista from './components/contenedor/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main id=''>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home/>}
          />
          <Route
            path='producto/:id'
            element={<Detail/>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
  
export default App;

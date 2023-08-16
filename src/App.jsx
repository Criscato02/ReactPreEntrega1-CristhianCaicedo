import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Detail from './Pages/Detail';
import About from './Pages/About';
// import About from './Pages/carrito';

import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main id='contenedorPrincipal'>
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
          <Route
            path='about'
            element={<About/>}
          />
          {/* <Route
            path='carrito'
            element={<carrito/>}
          /> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}
  
export default App;

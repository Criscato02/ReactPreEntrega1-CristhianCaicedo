import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CartProvider from './components/context/Cart/Provider';

import Home from './Pages/Home';
import Detail from './Pages/Detail';
import About from './Pages/About';

import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main className='contenedorPrincipal'>
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
    </CartProvider>
  )
}
  
export default App;

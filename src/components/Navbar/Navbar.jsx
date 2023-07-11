import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// import App from '../../App.jsx';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Nosotros</a></li>
        <li><a href="/acerca">Nuestros Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li id="carrito"><a href=""><FaShoppingCart /></a></li>
      </ul>
    </div>
  );
}
export default Navbar;
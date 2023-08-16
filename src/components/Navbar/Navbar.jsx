import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="link">Home</span>
      </Link>
      <Link to="/Detail">
        <span className="link">Detalle del producto</span>
      </Link>
      
      <Link to="/About">
        <span className="link">About</span>
      </Link>
      <Link to="/Men">
        <span className="link">Men´s Clothing</span>
      </Link>
      <Link to="/carrito">
        <span className="link">
          <FaShoppingCart />
        </span>
      </Link>
    </div>
  );
}

export default Navbar;

import { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { cartContext } from "../context/Cart/Provider";

function Item (props) {
  const { addItem } = useContext(cartContext);

  return (
    <div className="contenedorProducto">
      <h1>{props.item.title}</h1>
      <h2>{props.item.category}</h2>
      <img src={props.item.image} alt={props.item.name} width={100} height={100}/>
      <Link to={`/producto/${props.item.id}`}>
        <div className="linkDetalle">Ver producto</div>
      </Link>
      <button className="agregarCarrito" onClick={()=> addItem(props.item)}> Agregar al carrito </button>
    </div>
  )
}

export default Item;

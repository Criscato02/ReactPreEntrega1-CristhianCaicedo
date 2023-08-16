import { useState } from "react";
import {Link} from 'react-router-dom'

function Item (props) {

  return (
    <div className="contenedorProducto">
      <h1>{props.item.title}</h1>
      <h2>{props.item.category}</h2>
      <img src={props.item.image} alt={props.item.name} width={100} height={100}/>
      <Link to={`/producto/${props.item.id}`}>
        <div className="linkDetalle">Ver producto</div>
      </Link>
    </div>
  )
}

export default Item;

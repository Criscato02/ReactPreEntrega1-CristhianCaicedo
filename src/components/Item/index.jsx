import { useState } from "react";
import {Link} from 'react-router-dom'

function Item (props) {

  return (
    <div className="">
      <h1>{props.item.name}</h1>
      <h2>{props.item.species}</h2>
      <img src={props.item.image} alt={props.item.name} width={100} height={100}/>
      <Link to={`/producto/${props.item.id}`}>
        <div>Ver productos</div>
      </Link>
    </div>
  )
}

export default Item;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail () {
  const {id} = useParams();
  const [producto, setProducto] = useState(null);
  console.log('id:', id)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProducto(res)
      })
  }, [id])  

  return (
    <>
      <h1>{producto?.title}</h1>
      <img src={producto?.image} alt={producto?.title} width={200} height={200}/>
      <div>{producto?.description}</div>
      <div>$
      <span>{producto?.price}</span>
      </div>

    </>
  )
}

export default Detail;
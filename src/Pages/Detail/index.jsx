import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail () {
  const {id} = useParams();
  const [producto, setProducto] = useState(null);
  console.log('id:', id)

  useEffect(() => {
    fetch(`'https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProducto(res)
      })
  }, [id])  

  return (
    <>
      <h1>{producto?.name}</h1>
      <img src={producto?.image} alt={producto?.name} width={400} height={400}/>
      
    </>
  )
}

export default Detail;
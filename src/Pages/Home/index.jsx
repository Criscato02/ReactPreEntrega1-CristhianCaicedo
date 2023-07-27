import { useEffect, useState } from 'react';
import ListItem from '../../components/contenedor/ItemListContainer';

function Home () {    
    const [productos, setProducto] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => {
            setProducto(data)
          })
    }, []);

    return (
        <>
        <main className="">
          <ListItem items={productos} /> 
        </main>
      </>
    )
}    

export default Home;





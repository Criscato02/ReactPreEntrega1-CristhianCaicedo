import { useContext, useEffect, useState } from 'react';
import ListItem from '../../components/contenedor/ItemListContainer';
import { cartContext } from '../../components/context/Cart/Provider';

function Home () {    
    const [productos, setProducto] = useState([]);
    const fullContext = useContext(cartContext);


    useEffect(() => {
        console.log('Contexto: ', fullContext);
        fetch('https://fakestoreapi.com/products/')
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





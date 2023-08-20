import { useContext, useEffect, useState } from 'react';
import ListItem from '../../components/contenedor/ItemListContainer';
import { cartContext } from '../../components/context/Cart/Provider';
// import { getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyAtmM_2EwG1Bz8AwqdNF6PD4_Ueq55hS7w",
//   authDomain: "react-basededatos.firebaseapp.com",
//   projectId: "react-basededatos",
//   storageBucket: "react-basededatos.appspot.com",
//   messagingSenderId: "292495556495",
//   appId: "1:292495556495:web:20191b224f3a0f1f4595fa"
// };

// initializeApp(firebaseConfig);

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


//En desarrollo    
    // useEffect(() => {
    //   const db = getFirestore();
    //   const productCollection = collection(db, 'products');
      
    //   getDocs(productCollection)
    //   .then((snapshot) => {
    //     const productsData = snapshot.docs.map((doc) => doc.data());
    //     setProducto(productsData); 
    //   })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }, []);


    return (
        <>
        <main className="">
          <ListItem items={productos} /> 
        </main>
      </>
    )
}    

export default Home;





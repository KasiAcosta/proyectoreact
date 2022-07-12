import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState (true);
 const {itemId} = useParams ();
 
 useEffect(() =>{
  
   const getDetail = async () =>{
   try {const response = await fetch(`https://fakestoreapi.com/products/${itemId}`)
     const data = await response.json();
     setProductos(data);}
     catch(err) {
       console.log(err);
       setError(true);
     }
     finally{
       setLoading(false);
     }
   }
   getDetail();
 },[itemId]);

    return(
        <>
        {
        loading ? <p>Loading...</p> : error ? <p>Error...</p> : 'Todo bien'}
        {
        productos.map(producto => <ItemDetail producto={producto}/>)
       }
        
        </>
        
    )
}


export default ItemDetailContainer
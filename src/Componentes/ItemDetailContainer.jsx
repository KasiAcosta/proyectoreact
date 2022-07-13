import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState (true);
  const { Id } = useParams ();
 
 useEffect(() =>{
  
    const URL = Id ? `https://fakestoreapi.com/products/${Id}`
    : "https://fakestoreapi.com/products/"
   const getDetail = async () =>{
   try {const response = await fetch(URL)
     const data = await response.json();
     setProductos(data);}
     catch(err) {
       console.log(err);
       setError(true);
     }
     finally{
       setLoading(false);
     }
   };
   getDetail();
 },[Id]);

    return(
        <>
         {loading ? <p>cargando...</p> :<ItemDetail item={productos}></ItemDetail>}
        
        
        </>
        
    )
}


export default ItemDetailContainer
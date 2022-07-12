import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
 const [detail, setDetail] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState (true);
 const {itemId} = useParams ();
 
 useEffect(() =>{

  const rutaId = itemId ? 
      `https://fakestoreapi.com/products/${itemId}`
    : 'https://fakestoreapi.com/products';
   const getDetail = async () =>{
   try {const response = await fetch(rutaId);
     const data = await response.json();
     setDetail(data);}
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
        <>{loading ? <p>Loading...</p> : error ? <p>Error...</p> : 'Todo bien'}
        {
        detail.map(detail => <ItemDetail key={detail.id} detail={detail}/>)
       }
        
        </>
        
    )
}


export default ItemDetailContainer
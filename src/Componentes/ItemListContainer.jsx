import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import Itemlist from "./ItemList";

const ItemListContainer =  (prop) => {
    const { name } = prop;
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState (true);
    
    useEffect(() =>{
      const getProducts = async () =>{
      try {const response = await fetch('https://fakestoreapi.com/products');
           const data = await response.json();
           setProductos(data);
          }
        catch(err) {
          console.log(err);
          setError(true);
        }
        finally{
          setLoading(false);
        }
        
      }
      getProducts();
    },[]);

   
    return (
        <>
        <h2 className="z-depth-2" style={styles.subTitulo}>
          En {name} vas a encontrar todo lo que buscas
        </h2>
        {loading ? <p>cargando...</p> : error ? <p>Error....</p> : <p></p>}
        <Itemlist productos={productos}/>
        <ItemCount stock = {8} initial = {1}/>
        </>
    )
}

export default ItemListContainer

const styles = {

    subTitulo:{
        textAlign: 'center',
        fontFamily: 'Koulen', 
        backgroundColor: '#ec407a',
        color: '#ffebee',
    },
   
    }
    
import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer =  (prop) => {

  const {categoriaSelec} = useParams();
  

    const { name } = prop;
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState (true);
    
    
    useEffect(() =>{
      const ruta = categoriaSelec ? 
      `https://fakestoreapi.com/products/category/${categoriaSelec}`
    : 'https://fakestoreapi.com/products';
      const getProducts = async () =>{
      try {const response = await fetch(ruta);
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
    },[categoriaSelec]);

   
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
    
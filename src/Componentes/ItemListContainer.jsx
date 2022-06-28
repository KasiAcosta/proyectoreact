import React from "react";
import ItemCount from './ItemCount.jsx';


const ItemListContainer =  (prop) => {
    const { name } = prop;
    return (
        <>
        <h2 style={styles.subTitulo}>
          En {name} vas a encontrar todo lo que buscas
        </h2>
        <ItemCount stock = {8} initial = {1}/>
        </>
    )
}

export default ItemListContainer

const styles = {

    subTitulo:{
        textAlign: 'center',
        fontFamily: 'Koulen', 
        backgroundColor: 'black',
        color: '#f185d1 ',
    },
   
    }
    
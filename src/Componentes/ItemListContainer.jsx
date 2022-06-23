import React from "react";


const ItemListContainer =  (prop) => {
    const { name } = prop;
    return (
        <h2 style={styles.subTitulo}>
          En {name} vas a encontrar todo lo que buscas
        </h2>
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
    
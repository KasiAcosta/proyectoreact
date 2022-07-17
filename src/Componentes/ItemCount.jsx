import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState (initial);

    useEffect ( () => {
        console.log('useEffect')
    });

    const sumar = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && alert("No hay stock")
    };

    const restar = () => {
        contador > initial && setContador(contador - 1)
        contador < initial && setContador (1)
    };

    const reset = () => {
        setContador(0);
    };
    const agregar = () =>{
        onAdd(contador);
    }

    return (
        <>

       <h2>{contador}</h2>
      
        <a className="waves-effect waves-light btn pink" onClick= {sumar}>+</a>
        <a className="waves-effect waves-light btn pink" onClick= {restar}>-</a>
        
        <a className="waves-effect waves-light btn pink" onClick= {reset}>Reset</a>
        {contador >= initial? <a className="waves-effect waves-light btn pink" onClick= {agregar}>Agregar al Carrito</a>
        : <a className="waves-effect waves-light btn pink" >Aun no agregaste productos</a>}
    
        </>
        )
}


export default ItemCount


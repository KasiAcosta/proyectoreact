import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState (1);

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

    const onAdd = () => {
        contador >= initial && alert(`Felicitaciones, adquiriste ${contador} productos`)
        contador < initial && alert(`Por favor agrega productos al carrito para realizar tu compra`)
    };

    return (
        <>
        <div className="valign-wrapper .center-align"> {ItemCount} 
        <div className=""> {contador} 
       <div className=""> 
        <a className="waves-effect waves-light btn pink" onClick= {sumar}>+</a>
        <a className="waves-effect waves-light btn pink" onClick= {restar}>-</a>
        </div>
        <div className="">
        <a className="waves-effect waves-light btn pink" onClick= {reset}>Reset</a>
        <a className="waves-effect waves-light btn pink" onClick= {onAdd}>Comprar</a>
        </div>
        </div>
        </div>
        </>
        )
}


export default ItemCount


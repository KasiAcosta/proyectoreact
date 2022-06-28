import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState (1);

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
        <div> {ItemCount} </div>
        <div> {contador} </div>
        <button onClick= {sumar} > + </button>
        <button onClick= {restar} > - </button>
        <button onClick= {reset} > Reset </button>
        <button onClick= {onAdd} >Comprar</button>
        </>
        )
}


export default ItemCount


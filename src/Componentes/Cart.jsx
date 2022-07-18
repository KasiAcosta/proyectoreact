import React, { useContext } from "react";
import { context } from '../context/CartContext';

const Cart = () => {
    const { compra } = useContext(context);

    return(
        <>{compra.length === 0 ? <h1> Aun no añadiste productos al Carrito </h1>
        : <>{compra.map(item => <h1 key={item.id}>{item.title}</h1>)}</>}</>
    )
}

export default Cart; 
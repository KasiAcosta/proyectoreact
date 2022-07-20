import React, { useContext } from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { compra, removeItem, clear } = useContext(context);

    return(
        <>
        {compra.length === 0 ? <div><h1> Aun no añadiste productos al Carrito </h1> <Link className="waves-effect waves-light btn pink" to="/">Ir a productos</Link>
        </div>
        : <>{compra.map(item => <h1 key={item.id}>{item.title}</h1>)}</>}
        <button onClick={removeItem}> eliminar</button>
        <button onClick={clear}> limpiar</button>
        </>
    )
}

export default Cart; 
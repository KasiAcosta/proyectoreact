import React, { useContext, useState } from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";
import { db } from '../firebase/firebase';
import { addDoc, collection, doc, serverTimestamp} from 'firebase/firestore';

const Cart = () => {
    const { removeItem, clear, totalCompra, productosCarrito} = useContext(context);


    return(
        <>
        {productosCarrito.length === 0 ? <div><h1> Aun no añadiste productos al Carrito </h1> <Link className="waves-effect waves-light btn pink" to="/">Ir a productos</Link>
        </div>
        : <>{productosCarrito.map(item =>
            <div>
         <h2 key={item.id}> {item.title}  <button onClick={()=>removeItem(item.id)}>X</button> </h2>
         <p>x {item.quantity}</p>
         <p>${item.price*item.quantity}</p>
         
         </div>
            )}
            <div className='totalCompra'>Total Compra: $ {totalCompra()}</div>
            <button onClick={clear}> limpiar</button>
            <button> <Link to={'/form'}>Finalizar compra</Link></button>
            </>}
        
        
        </>
    )
}

export default Cart; 
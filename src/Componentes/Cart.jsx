import React, { useContext, useState } from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";
import { db } from '../firebase/firebase';
import { addDoc, collection, doc, serverTimestamp} from 'firebase/firestore';

const Cart = () => {
    const { compra, removeItem, clear, totalCompra} = useContext(context);
    const [ idVenta, setIdventa ] = useState("")
    const datosComprador = {
        nombre: 'Juan',
        celular: 3425478251,
        mail: 'kasiacosta@gmail.com'
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
         datosComprador,
         items:[{nombre:"uno", id:"1"}, {nombre:"dos", id:"2"}],
         date: serverTimestamp(),
         total: 500,
        })
        .then((result) => {
            setIdventa(result.id);
        })
    }

    return(
        <>
        {compra.length === 0 ? <div><h1> Aun no añadiste productos al Carrito </h1> <Link className="waves-effect waves-light btn pink" to="/">Ir a productos</Link>
        </div>
        : <>{compra.map(item =>
            <div>
         <h2 key={item.id}> {item.title}  <button onClick={()=>removeItem(item.id)}>X</button> </h2>
         <p>x {item.quantity}</p>
         <p>${item.price*item.quantity}</p>
         
         </div>
            )}
            <div className='totalCompra'>Total Compra: $ {totalCompra()}</div>
            <button onClick={clear}> limpiar</button>
            <button onClick={finalizarCompra}> FIN</button>
            </>}
        
        
        </>
    )
}

export default Cart; 
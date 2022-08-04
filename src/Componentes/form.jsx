import React, { useState, useContext } from "react";
import { context } from '../context/CartContext';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
export const Form = () => {
    const { productosCarrito, clear, totalCompra } = useContext(context)
    const [idOrden, setIdOrden] = useState()
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: ''
    })
    const { Nombre, Email } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ventas')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()

        } catch (error) {
            console.log(error)
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = serverTimestamp()
        const items = productosCarrito.map(e => { return { id: e.id, Titulo: e.title, Precio: e.price } })
        const total = totalCompra()
        const data = { buyer, dia, items, total }
        generarPedido(data)
    }

    return (
        <>
            {loading ? <p>cargando</p>
                : (!idOrden && <div>
                    <form onSubmit={enviar}>
                        <div>
                            <h2> Datos Comprador</h2>
                        </div>
                        <div>
                            <p>
                                <input type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre" required />
                            </p>
                            <p>
                                <input type="email" name="Email" onChange={Input} placeholder="Mail" value={Email} required />
                            </p>
                            <p>
                                <button>Enviar</button>
                            </p>
                        </div>
                    </form>
                </div>)}
            <div>
                {
                    idOrden && (
                        <div>
                            <h3>¡Gracias por su Compra!</h3>
                            <p>{`Su codigo de operacion es: ${idOrden}`}</p>
                            <p>{`Le enviarenos a ${Email} la factura electronica de su compra`}</p>
                            <div ><Link to={'/'} >Realizar otra compra </Link></div>
                        </div>
                    )
                }
            </div>
        </>
    )

}

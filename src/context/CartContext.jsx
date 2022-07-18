import React, { useState, createContext, useEffect } from "react";

export const context = createContext();
const { Provider } = context;

const CartContext = ( {children} ) => {

    
    const [compra, setCompra] = useState([]);
    const [qtyCompra, setQtyCompra] = useState(0);

    const getQtyItem = () => {
        let quantity = 0;
        compra.forEach(item =>{
            quantity += item.quantity
        })
        setQtyCompra(quantity);
    }
    useEffect(() => {
        getQtyItem();
    },[compra])

    const addItem = (item) => {
        if(isInCart(item.id)){
            const found = compra.find(p => p.id === item.id);
            const index = compra.indexOf(found);
            const auxCompra = [...compra];
            auxCompra[index].quantity += item.quantity;
            setCompra(auxCompra);
        }else{
            setCompra([...compra, item])
        };
    }

    const removeItem = (id) => {
        setCompra(compra.filter(item => item.id !== id));
    }

    const clear = () => {
        setCompra([]);
        setQtyCompra(0);
    }

    const isInCart = (id) => {
        return compra.some(compra => compra.id === id);
    }

    return(
        <Provider value={{compra, addItem, removeItem, clear, qtyCompra }}>
            {children}
        </Provider>
    );

}

export default CartContext; 
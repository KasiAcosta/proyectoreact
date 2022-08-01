import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { context } from "../../context/CartContext";

const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (
        <>
        <ShoppingCartIcon /> 
         { qtyCompra >= 1 ? <span class="new badge">{qtyCompra}</span> : null }
        </>
    )

}

export default CartWidget 
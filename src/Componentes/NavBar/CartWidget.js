import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { context } from "../../context/CartContext";

const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (

        <>
        <ShoppingCartIcon /> 
         <span class="new badge">{qtyCompra}</span>
        
        </>
    )

}

export default CartWidget 
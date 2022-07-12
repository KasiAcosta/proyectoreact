import React from "react";


const ItemDetail = ({producto}) => {

    return(
        <div key={producto.id} class="card small sticky-action">
     <h2>{producto.title}</h2>
 
     <div class="card-action">
        <p>${producto.price}</p>
        <p>{producto.description}</p>
        <img src={producto.image} alt="" />
     </div>
 
     <div class="card-reveal"></div>
     </div>
    )
}


export default ItemDetail
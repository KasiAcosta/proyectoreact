import React from "react";

const ItemDetail = ({detail}) => {


    return(
        <div key={detail.id} class="card small sticky-action">
     <h2>{detail.title}</h2>
 
     <div class="card-action">
        <p>${detail.price}</p>
        <p>{detail.description}</p>
     </div>
 
     <div class="card-reveal"></div>
     </div>
    )
}


export default ItemDetail
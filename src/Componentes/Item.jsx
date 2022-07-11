import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

const Item = ({producto}) => {

    return (

     <div key={producto.id} class="card small sticky-action">
     <h2>{producto.title}</h2>
 
     <div class="card-action">
        <p>${producto.price}</p>
       
     </div>
 
     <div class="card-reveal"></div>
   </div>

)
}

export default Item
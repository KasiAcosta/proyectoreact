import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

const Item = ({producto}) => {

    return (

     <div key={producto.id} className="card small sticky-action">
     <h2>{producto.title}</h2>
 
     <div className="card-action">
        <p>${producto.price}</p>
       
     </div>
 
     <div className="card-reveal"></div>
   </div>

)
}

export default Item
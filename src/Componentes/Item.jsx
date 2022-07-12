import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
      <div  class="row">
      <div class="col s12 m6">
        <div class="card small">
          <div class="card-image">
            <img src={producto.image} />
            <span class="card-title">{producto.title}</span>
            <Link to={producto.id} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">Ver Más</i></Link>
          </div>
          <div class="card-content">
            <p>${producto.price}</p>
          </div>
        </div>
      </div>
    </div>

)
}

export default Item
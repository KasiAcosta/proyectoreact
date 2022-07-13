import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

    return(
      <>
        <div key={item.id}  class="row">
        <div class="col s12 m6">
          <div class="card small">
            <div class="card-image">
            <img src={item.image} />
              <span class="card-title">{item.title}</span>
            </div>
            <div class="card-content">
            <p>{item.description}</p>
              <p>${item.price}</p>

            </div>
          </div>
        </div>
      </div>
      <ItemCount stock = {8} initial = {1}/>
      </>
    )
}


export default ItemDetail
import React, {useState, useContext} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { context } from '../context/CartContext'


const ItemDetail = ({item}) => {
const {addItem} = useContext(context);

  const [ comprar, SetComprar ]= useState(false);

  const onAdd = (contador) => {
    SetComprar(true)
    addItem({...item, quantity:contador});
  }

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

      {comprar ? 
      <div>
      <Link className="waves-effect waves-light btn pink" to="/cart">
      Finalizar Compra </Link>
      <Link className="waves-effect waves-light btn pink" to="/">Seguir comprando</Link>
      </div>
      :
      <ItemCount stock = {8} initial = {0} onAdd={onAdd}/>}
      
      </>
    )
}

export default ItemDetail